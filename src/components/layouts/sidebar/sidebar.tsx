// components/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, ChevronDown, Lock, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { accordionLinks, sidebarLinks } from "@/lib/nav";
import { AnimatePresence, motion } from "framer-motion";

interface SidebarProps {
  onCollapseChange?: (isCollapsed: boolean) => void;
}

export function Sidebar({ onCollapseChange }: SidebarProps) {
  const pathname = usePathname();
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  const toggleAccordion = (label: string) => {
    setOpenAccordions((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const sidebarWidth = isCollapsed ? "w-16" : "w-60";

  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(isCollapsed);
    }
  }, [isCollapsed, onCollapseChange]);

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col border-r bg-background max-h-screen h-screen transition-all duration-300 overflow-hidden",
        sidebarWidth
      )}
      onMouseEnter={() => !isLocked && setIsCollapsed(false)}
      onMouseLeave={() => !isLocked && setIsCollapsed(true)}
    >
      {/* Brand/Header */}
      <div className="p-4 border-b text-xl font-bold flex items-center gap-2 shrink-0 h-[57px]">
        <div className="min-w-[24px] flex justify-center">
          <Home className="h-6 w-6" />
        </div>
        <motion.span
          initial={false}
          animate={{
            opacity: isCollapsed ? 0 : 1,
            // width: isCollapsed ? 0 : "auto",
          }}
          className={cn("overflow-hidden transition-all duration-300")}
        >
          DevStarter
        </motion.span>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-4 space-y-4">
        <nav className="flex flex-col gap-1">
          {sidebarLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition w-full min-h-10",
                pathname === item.href && "bg-muted text-primary font-medium"
              )}
            >
              <div className="min-w-[24px] flex justify-center">
                <item.icon className="h-5 w-5" />
              </div>
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Accordion Nav */}
        <div className="flex flex-col gap-2">
          {accordionLinks.map((section) => {
            const isOpen = openAccordions.includes(section.label);
            return (
              <div key={section.label}>
                <button
                  onClick={() => toggleAccordion(section.label)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted transition min-h-10"
                >
                  <span className="flex items-center gap-3">
                    <div className="min-w-[24px] flex justify-center">
                      <section.icon className="h-5 w-5" />
                    </div>
                    {!isCollapsed && section.label}
                  </span>
                  {!isCollapsed && (
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", {
                        "rotate-180": isOpen,
                      })}
                    />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {!isCollapsed && isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1 flex flex-col gap-1 overflow-hidden"
                    >
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "flex items-center gap-2 text-sm px-3 py-2 rounded-md hover:bg-muted transition w-full",
                            pathname === link.href &&
                              "bg-muted text-primary font-medium"
                          )}
                        >
                          <div className="min-w-[24px] flex justify-center">
                            <Circle className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <span>{link.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fixed Lock Sidebar Button */}
      <div className="mt-auto border-t p-4 shrink-0">
        <button
          onClick={() => setIsLocked((prev) => !prev)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full min-w-max overflow-hidden transition-all duration-300 min-h-6"
        >
          <div className="min-w-[24px] flex justify-center">
            <Lock className="h-4 w-4" />
          </div>
          {!isCollapsed && (isLocked ? "Unlock Sidebar" : "Lock Sidebar")}
        </button>
      </div>
    </aside>
  );
}
