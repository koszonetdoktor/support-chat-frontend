import { Link, useParams } from "@tanstack/react-router";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { useQuery } from "@tanstack/react-query";
import { fetchChannels } from "@/api/channels";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../ui/collapsible";
import { ChannelItemsList } from "./channel-items-list";

export function ChannelsList() {
  const { channelId } = useParams({ strict: false });

  const { data: activeChannels, isLoading: isActiveChannelsLoading } = useQuery({
    queryKey: ["channels", { status: "active" }],
    queryFn: () => fetchChannels({ status: "active" }),
  });

  const { data: unclaimedChannels, isLoading: isUnclaimedChannelsLoading } = useQuery({
    queryKey: ["channels", { status: "unclaimed" }],
    queryFn: () => fetchChannels({ status: "unclaimed" }),
  });

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  Unclaimed cases
                  <SidebarMenuBadge>{unclaimedChannels?.length}</SidebarMenuBadge>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ChannelItemsList
                  isLoading={isUnclaimedChannelsLoading}
                  channels={unclaimedChannels ?? []}
                  channelId={channelId}
                />
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  Active cases
                  <SidebarMenuBadge>{activeChannels?.length}</SidebarMenuBadge>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ChannelItemsList
                  isLoading={isActiveChannelsLoading}
                  channels={activeChannels ?? []}
                  channelId={channelId}
                />
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
