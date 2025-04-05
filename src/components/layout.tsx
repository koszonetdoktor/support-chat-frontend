import { ChannelsSidebar } from "./channels-sidebar/channels-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Toaster } from "./ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ChannelsSidebar />
      <main className="w-full">
        <div className="flex justify-between items-center p-4 w-max">
          <SidebarTrigger />
        </div>
        {children}
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
