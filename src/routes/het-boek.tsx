import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/het-boek")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "boek", replace: true, statusCode: 301 });
  },
  component: () => null,
});
