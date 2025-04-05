import { claimChannel, fetchChannel, type Channel } from "@/api/channels";
import { Button } from "@/components/ui/button";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/channels/$channelId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { channelId } = Route.useParams();

  const queryClient = useQueryClient();

  const { data: channel, isLoading } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: () => fetchChannel(Number(channelId)),
  });

  const { mutate: claim } = useMutation({
    mutationFn: (id: number) => claimChannel(id),
    onSuccess: () => {
      queryClient.setQueryData(["channel", channelId], (old: Channel) => ({
        ...old,
        status: "active",
      }));
      queryClient.setQueryData(["channels"], (old: Channel[]) =>
        old.map((channel) =>
          channel.id === Number(channelId) ? { ...channel, status: "active" } : channel
        )
      );
    },
  });

  const isClaimed = channel?.status !== "unclaimed";

  return (
    <div className="h-full w-full">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>
          {isLoading ? <div>Loading...</div> : <>{JSON.stringify(channel)}</>}
        </ResizablePanel>
        <ResizableHandle className="w-2" />
        <ResizablePanel defaultSize={20} minSize={25}>
          {isClaimed ? (
            <Textarea
              placeholder="Enter your message..."
              className="h-full border-0 border-r-0 rounded-none"
            />
          ) : (
            <Button onClick={() => claim(Number(channelId))}>Claim</Button>
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
