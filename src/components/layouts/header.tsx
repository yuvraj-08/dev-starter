// components/layout/header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../shared/theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        DevStarter
      </Link>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
