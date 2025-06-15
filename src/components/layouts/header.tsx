"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import AvatarDropdownMenu from "@/common/AvatarDropdownMenu";
import { useCurrentUser } from "@/providers/auth-provider";
import { DialogTitle } from "@radix-ui/react-dialog";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const {user} = useCurrentUser();

  const isHomePage = pathname === "/";

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-50 bg-background">
      <Link href="/" className="text-xl font-bold">
        DevStarter
      </Link>

      {/* Mobile Section */}
      <div className="flex items-center gap-2 md:hidden">
        {/* Avatar (only if logged in) outside the Sheet */}
        {user && <AvatarDropdownMenu />}
        {/* Hamburger is always shown */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 px-4 pt-6">
            <div className="flex justify-between items-center mb-6">
              <DialogTitle className="text-lg font-semibold">Menu</DialogTitle>
            </div>
            <nav className="flex flex-col gap-4">
              {isHomePage &&
                navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="text-sm font-medium hover:underline"
              >
                Pricing
              </Link>
              {!user && (
                <Button asChild className="mt-4 w-full">
                  <Link href="/login">Login</Link>
                </Button>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Section */}
      <div className="hidden md:flex items-center gap-4">
        {isHomePage &&
          navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:underline"
            >
              {link.label}
            </Link>
          ))}
        <Link href="/pricing" className="text-sm font-medium hover:underline">
          Pricing
        </Link>
        {!user ? (
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        ) : (
          <AvatarDropdownMenu />
        )}
      </div>
    </header>
  );
}
