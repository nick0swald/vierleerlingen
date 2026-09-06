import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/het-boek")({
  beforeLoad: () => {
    throw redirect({ to: "/boek", replace: true, statusCode: 301 });
  },
  component: () => null,
});
