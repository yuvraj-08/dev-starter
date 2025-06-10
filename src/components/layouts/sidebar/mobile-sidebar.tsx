// components/mobile-sidebar.tsx
'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { accordionLinks, sidebarLinks } from '@/lib/nav'

export function MobileSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [openAccordions, setOpenAccordions] = useState<string[]>([])

  const toggleAccordion = (label: string) => {
    setOpenAccordions((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    )
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        {/* Brand/Header */}
        <div className="p-4 border-b text-xl font-bold flex items-center gap-2">
          <Menu className="h-6 w-6" />
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
                  'flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition',
                  pathname === item.href && 'bg-muted text-primary font-medium'
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
              const isOpen = openAccordions.includes(section.label)
              return (
                <div key={section.label}>
                  <button
                    onClick={() => toggleAccordion(section.label)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted transition"
                  >
                    <span className="flex items-center gap-3">
                      <section.icon className="h-5 w-5" />
                      {section.label}
                    </span>
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform', {
                        'rotate-180': isOpen,
                      })}
                    />
                  </button>
                  {isOpen && (
                    <div className="ml-8 mt-1 flex flex-col gap-1">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'text-sm px-2 py-1 rounded-md hover:bg-muted transition',
                            pathname === link.href && 'bg-muted text-primary font-medium'
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
