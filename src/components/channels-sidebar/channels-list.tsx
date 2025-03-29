import { Link, useParams } from "@tanstack/react-router";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import { useQuery } from "@tanstack/react-query";
import { fetchChannels } from "@/api/channels";
import { Skeleton } from "../ui/skeleton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

export function ChannelsList() {
  const { channelId } = useParams({ strict: false });

  const { data: channels, isLoading } = useQuery({
    queryKey: ["channels", { status: "active" }],
    queryFn: () => fetchChannels({ status: "active" }),
  });

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  Active cases
                  <SidebarMenuBadge>{channels?.length}</SidebarMenuBadge>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
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
                            <Link
                              to="/channels/$channelId"
                              params={{ channelId: channel.id.toString() }}
                            >
                              <span>{channel.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </>
                  )}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
