import type { Channel } from "@/api/channels";
import { SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";

interface Props {
  isLoading: boolean;
  channels: Channel[];
  channelId: string | undefined;
}

export function ChannelItemsList({ isLoading, channels, channelId }: Props) {
  return (
    <SidebarMenuSub>
      {isLoading ? (
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
        </div>
      ) : (
        <>
          {channels?.map((channel) => (
            <SidebarMenuSubItem key={channel.id}>
              <SidebarMenuButton asChild isActive={channelId === channel.id.toString()}>
                <Link to="/channels/$channelId" params={{ channelId: channel.id.toString() }}>
                  <span>{channel.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuSubItem>
          ))}
        </>
      )}
    </SidebarMenuSub>
  );
}
