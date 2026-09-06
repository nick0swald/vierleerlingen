import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

const KINDS = [
  { id: "studiedag", label: "Studiedag" },
  { id: "workshop", label: "Workshop" },
  { id: "lezing", label: "Lezing" },
  { id: "leiding", label: "Schoolleiding" },
  { id: "exemplaar", label: "Exemplaar" },
  { id: "anders", label: "Anders" },
] as const;

const schema = z.object({
  name: z.string().min(2, "Vul je naam in."),
  school: z.string().min(2, "Vul school of organisatie in."),
  role: z.string().min(2, "Vul je functie in."),
  email: z.string().email("Vul een geldig e-mailadres in."),
  phone: z.string().optional(),
  kind: z.enum(["studiedag", "workshop", "lezing", "leiding", "exemplaar", "anders"]),
  when: z.string().optional(),
  size: z.string().optional(),
  message: z.string().min(12, "Vertel kort wat je zoekt (minstens een zin)."),
});

type FormValues = z.infer<typeof schema>;

const STORAGE_KEY = "vierleerlingen-aanvraag";

function mailtoHref(values?: Partial<FormValues>) {
  const subject = "Aanvraag — Ik heb maar vier leerlingen";
  const body = values
    ? [
        `Naam: ${values.name ?? ""}`,
        `Functie: ${values.role ?? ""}`,
        `School: ${values.school ?? ""}`,
        `E-mail: ${values.email ?? ""}`,
        values.phone ? `Telefoon: ${values.phone}` : null,
        `Vorm: ${values.kind ?? ""}`,
        values.when ? `Periode: ${values.when}` : null,
        values.size ? `Groepsgrootte: ${values.size}` : null,
        "",
        values.message ?? "",
      ]
        .filter((line) => line !== null)
        .join("\n")
    : "";
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({ defaultKind }: { defaultKind?: FormValues["kind"] }) {
  const [sent, setSent] = useState<FormValues | null>(null);
  const [submitError, setSubmitError] = useState(false);
  const [sending, setSending] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      school: "",
      role: "",
      email: "",
      phone: "",
      kind: defaultKind ?? "studiedag",
      when: "",
      size: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setSubmitError(false);
    setSending(true);
    try {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ ...values, at: new Date().toISOString() }),
        );
      } catch {
        /* ignore quota */
      }
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          school: values.school,
          functie: values.role,
          telefoon: values.phone ?? "",
          vorm: values.kind,
          periode: values.when ?? "",
          groepsgrootte: values.size ?? "",
          toelichting: values.message,
          _subject: `Aanvraag ${values.kind} — ${values.school}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send");
      const data = (await res.json()) as { success?: boolean | string };
      if (data.success === false || data.success === "false") {
        throw new Error("send");
      }
      setSent(values);
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-forest p-6 text-cream sm:p-8">
        <div className="flex size-11 items-center justify-center rounded-full bg-cream text-forest">
          <Check className="size-5" />
        </div>
        <h3 className="mt-5 font-display text-3xl">Bedankt</h3>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-cream/90">
          Bedankt. Je aanvraag staat. Benjamin neemt contact op via het
          opgegeven adres.
        </p>
        <Button
          type="button"
          variant="cream"
          className="mt-8"
          onClick={() => {
            setSent(null);
            form.reset();
          }}
        >
          Nog een aanvraag
        </Button>
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const kind = watch("kind");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <fieldset>
        <legend className="text-sm font-medium text-ink">Vorm</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {KINDS.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setValue("kind", k.id, { shouldValidate: true })}
              className={cn(
                "min-h-11 rounded-md border px-3 py-2 text-sm transition-colors duration-150",
                kind === k.id
                  ? "border-forest bg-forest text-cream"
                  : "border-border bg-paper text-ink hover:border-forest/40",
              )}
            >
              {k.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Naam" htmlFor="name" error={errors.name?.message}>
          <Input id="name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Functie" htmlFor="role" error={errors.role?.message}>
          <Input id="role" {...register("role")} />
        </Field>
      </div>

      <Field label="School / organisatie" htmlFor="school" error={errors.school?.message}>
        <Input id="school" {...register("school")} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="E-mail" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
        </Field>
        <Field label="Telefoon (niet verplicht)" htmlFor="phone">
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Voorkeursperiode" htmlFor="when">
          <Input id="when" {...register("when")} />
        </Field>
        <Field label="Geschatte groepsgrootte" htmlFor="size">
          <Input id="size" {...register("size")} />
        </Field>
      </div>

      <Field label="Korte toelichting" htmlFor="message" error={errors.message?.message}>
        <Textarea id="message" {...register("message")} />
      </Field>

      {submitError ? (
        <div
          role="alert"
          className="rounded-lg border border-destructive/40 bg-cream px-4 py-3 text-sm leading-relaxed text-ink"
        >
          Versturen is niet gelukt. Mail Benjamin rechtstreeks via{" "}
          <a
            href={mailtoHref(watch())}
            className="text-forest underline decoration-forest/30 underline-offset-4"
          >
            {SITE.email}
          </a>
          .
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={sending}>
        {sending ? "Versturen…" : "Aanvraag versturen"}
      </Button>

      <div className="space-y-2 text-sm leading-relaxed text-muted">
        <p>Reactietijd: Meestal binnen 3 werkdagen.</p>
        <p>
          Privacy: Je gegevens gebruik ik alleen om op deze aanvraag te
          reageren. Geen nieuwsbrief, geen doorverkoop.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}