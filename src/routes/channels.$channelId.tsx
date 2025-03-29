import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/channels/$channelId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { channelId } = Route.useParams();

  console.log({ channelId });

  return <div>Hello "/$channelId"!</div>;
}
