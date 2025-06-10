// components/layouts/dashboard-layout.tsx
import { ReactNode } from "react";
import { MobileSidebar } from "@/components/layouts/sidebar/mobile-sidebar";
import { Sidebar } from "@/components/layouts/sidebar/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Mobile header with toggle */}
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <MobileSidebar />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* Desktop layout with sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
        <Sidebar />

        {/* Main content area with top navbar */}
        <div className="flex flex-col">
          {/* Top navbar */}
          <div className="hidden md:flex items-center justify-end px-4 py-2 border-b sticky top-0 bg-background z-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>YS</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile">View Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">Account Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log("Logging out...")}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Page content */}
          <main className="p-4">{children}</main>
        </div>
      </div>
    </div>
  );
}
