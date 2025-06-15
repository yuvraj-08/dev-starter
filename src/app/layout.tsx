import type { Metadata } from "next";
import './globals.css'
import { Toaster } from "sonner";
import { Providers } from "@/providers";
import { FloatingThemeToggle } from "@/components/shared/floating-theme-toggle";

export const metadata : Metadata = {
  title: 'DevStarter',
  description: 'Launch your next SaaS 10x faster.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased bg-background text-foreground" cz-shortcut-listen="true">
        <Providers>
          {children}
          <FloatingThemeToggle />
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
