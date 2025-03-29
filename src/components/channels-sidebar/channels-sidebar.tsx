import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";
import { ColorModeToggle } from "../color-mode-toggle";
import { MainNavigation } from "../main-navigation";
import { ChannelsList } from "./channels-list";

export function ChannelsSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <MainNavigation />
      </SidebarHeader>
      <SidebarContent>
        <ChannelsList />
      </SidebarContent>
      <SidebarFooter>
        <ColorModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
