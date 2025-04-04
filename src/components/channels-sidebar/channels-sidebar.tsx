import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";
import { ColorModeToggle } from "../color-mode-toggle";
import { MainNavigation } from "../main-navigation";
import { ChannelsList } from "./channels-list/channels-list";
import { NewChannel } from "./new-channel";

export function ChannelsSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <MainNavigation />
      </SidebarHeader>
      <SidebarContent>
        <NewChannel />
        <ChannelsList />
      </SidebarContent>
      <SidebarFooter>
        <ColorModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
