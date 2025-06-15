"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export function FloatingThemeToggle() {
  const pathname = usePathname();

  // Define routes where you don't want to show the toggle (optional)
  const hiddenRoutes = ["/login", "/signup"];
  const isHidden = hiddenRoutes.includes(pathname);

  if (isHidden) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <ThemeToggle />
    </div>
  );
}
