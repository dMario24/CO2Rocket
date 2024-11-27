import SideNav from '@/app/ui/dashboard/sidenav';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    //   <div className="w-full flex-none md:w-64">
    //     <SideNav />
    //   </div>
    //   <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
    //     {children}
    //   </div>
    // </div>
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </main>
    </SidebarProvider>
  );
}