import type { Metadata } from "next";
import './globals.css'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Toaster } from "sonner";

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
        <ThemeProvider>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
