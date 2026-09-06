import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/het-model")({
  beforeLoad: () => {
    throw redirect({ to: "/model", replace: true, statusCode: 301 });
  },
  component: () => null,
});
