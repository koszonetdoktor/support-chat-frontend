import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ColorModeToggle } from "./color-mode-toggle";
import { MainNavigation } from "./main-navigation";
import { fetchChannels } from "@/api/channels";
import { useQuery } from "@tanstack/react-query";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { data: channels } = useQuery({
    queryKey: ["channels"],
    queryFn: fetchChannels,
  });

  return (
    <Sidebar>
      <SidebarHeader>
        <MainNavigation />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Active cases</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {channels?.map((channel) => (
                <SidebarMenuItem key={channel.id}>
                  <SidebarMenuButton asChild>
                    <a href={`/channels/${channel.id}`}>
                      <span>{channel.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ColorModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
