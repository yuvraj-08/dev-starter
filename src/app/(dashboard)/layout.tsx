// app/(dashboard)/layout.tsx
"use client";

import DashboardLayout from "@/components/layouts/dashboard-layout";
import { ReactNode } from "react";

export default function DashboardGroupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
