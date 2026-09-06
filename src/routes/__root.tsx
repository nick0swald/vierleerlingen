import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import appCss from "../styles.css?url";

const APP_NAME = "Ik heb maar vier leerlingen — Benjamin van der Speck";
const APP_DESC =
  "Hulp als hij het niet kan. Grenzen als hij het niet wil. Het boek van Benjamin van der Speck — en studiedagen voor teams.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "application-name", content: "Ik heb maar vier leerlingen" },
      { name: "description", content: APP_DESC },
      { name: "theme-color", content: "#1F4E3D" },
      { name: "author", content: "Benjamin van der Speck" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  component: () => (
    <html lang="nl" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-cream font-sans text-ink">
        <PreviewHostBridge />
        <StripComingSoon title={APP_NAME} />
        <AuthProvider>
          <SiteHeader />
          <Outlet />
          <SiteFooter />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});

function StripComingSoon({ title }: { title: string }) {
  useEffect(() => {
    const apply = () => {
      if (/coming soon/i.test(document.title)) document.title = title;
    };
    apply();
    const el = document.querySelector("title");
    if (!el) return;
    const obs = new MutationObserver(apply);
    obs.observe(el, { childList: true, characterData: true, subtree: true });
    return () => obs.disconnect();
  }, [title]);
  return null;
}
