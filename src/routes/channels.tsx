import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/channels")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/channels"!</div>;
}
