import { ChannelsSidebar } from "./channels-sidebar/channels-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ChannelsSidebar />
      <main>
        <div className="flex justify-between items-center p-4 w-max">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
