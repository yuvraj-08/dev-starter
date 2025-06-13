"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { accordionLinks, sidebarLinks } from "@/lib/nav";
import { motion, AnimatePresence } from "framer-motion";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { DialogTitle } from "@radix-ui/react-dialog";

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (label: string) => {
    setOpenAccordions((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Mobile Sidebar Menu</DialogTitle>
        </VisuallyHidden>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="h-full flex flex-col"
        >
          {/* Brand/Header */}
          <div className="p-4 border-b text-xl font-bold flex items-center gap-2">
            <span>DevStarter</span>
          </div>

          <div className="px-4 py-4 space-y-4 overflow-y-auto h-[calc(100vh-64px)]">
            {/* Main Links */}
            <nav className="flex flex-col gap-1">
              {sidebarLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors",
                    pathname === item.href &&
                      "bg-muted text-primary font-medium"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Accordion Links */}
            <div className="flex flex-col gap-2">
              {accordionLinks.map((section) => {
                const isOpen = openAccordions.includes(section.label);
                return (
                  <div key={section.label}>
                    <button
                      onClick={() => toggleAccordion(section.label)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <section.icon className="h-5 w-5" />
                        {section.label}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="ml-8 mt-1 flex flex-col gap-1 overflow-hidden"
                        >
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "text-sm px-2 py-1 rounded-md hover:bg-muted transition-colors",
                                pathname === link.href &&
                                  "bg-muted text-primary font-medium"
                              )}
                            >
                              {link.label}
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
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
