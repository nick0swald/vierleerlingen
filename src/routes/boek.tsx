import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/boek")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "boek", replace: true, statusCode: 301 });
  },
  component: () => null,
});
