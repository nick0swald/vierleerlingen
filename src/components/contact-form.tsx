import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const KINDS = [
  { id: "studiedag", label: "Studiedag" },
  { id: "workshop", label: "Workshop" },
  { id: "lezing", label: "Lezing" },
  { id: "leiding", label: "Schoolleiding" },
  { id: "anders", label: "Anders" },
] as const;

const schema = z.object({
  name: z.string().min(2, "Vul je naam in."),
  school: z.string().min(2, "Vul school of organisatie in."),
  role: z.string().min(2, "Vul je functie in."),
  email: z.string().email("Vul een geldig e-mailadres in."),
  phone: z.string().optional(),
  kind: z.enum(["studiedag", "workshop", "lezing", "leiding", "anders"]),
  when: z.string().optional(),
  size: z.string().optional(),
  message: z.string().min(12, "Vertel kort wat je zoekt (minstens een zin)."),
});

type FormValues = z.infer<typeof schema>;

const STORAGE_KEY = "vierleerlingen-aanvraag";

export function ContactForm({ defaultKind }: { defaultKind?: FormValues["kind"] }) {
  const [sent, setSent] = useState<FormValues | null>(null);

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

  function onSubmit(values: FormValues) {
    const payload = { ...values, at: new Date().toISOString() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* ignore quota */
    }
    setSent(values);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-forest p-6 text-cream sm:p-8">
        <div className="flex size-11 items-center justify-center rounded-full bg-cream text-forest">
          <Check className="size-5" />
        </div>
        <h3 className="mt-5 font-display text-3xl">Bedankt</h3>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-cream/85">
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

      <Button type="submit" size="lg">
        Aanvraag versturen
      </Button>
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
