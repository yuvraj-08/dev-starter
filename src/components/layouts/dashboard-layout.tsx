// components/layouts/dashboard-layout.tsx
import { ReactNode, useState } from "react";
import { MobileSidebar } from "@/components/layouts/sidebar/mobile-sidebar";
import { Sidebar } from "@/components/layouts/sidebar/sidebar";
import AvatarDropdownMenu from "@/common/AvatarDropdownMenu";


export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Mobile header with toggle */}
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <MobileSidebar />
        {/* <h1 className="text-lg font-semibold">Dashboard</h1> */}
        <AvatarDropdownMenu/>
      </div>

      {/* Desktop layout with sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
        <Sidebar onCollapseChange={(state) => setIsCollapsed(state)} />

        {/* Main content area with top navbar */}
        <div
          className={
            isCollapsed
              ? "md:ml-0 transition-all duration-300"
              : "md:ml-0 transition-all duration-300"
          }
        >
          {/* Top navbar */}
          <div className="hidden md:flex items-center justify-end px-4 py-3 border-b sticky top-0 bg-background z-10">
          <AvatarDropdownMenu/>
          </div>

          {/* Page content */}
          <main className="p-4">{children}</main>
        </div>
      </div>
    </div>
  );
}
