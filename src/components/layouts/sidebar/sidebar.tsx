// components/sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Home,
  ChevronDown,
  Lock,
} from 'lucide-react'
import { useState } from 'react'
import { accordionLinks, sidebarLinks } from '@/lib/nav'

export function Sidebar() {
  const pathname = usePathname()
  const [openAccordions, setOpenAccordions] = useState<string[]>([])

  const toggleAccordion = (label: string) => {
    setOpenAccordions((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    )
  }

  return (
    <aside className="hidden md:flex flex-col w-60 border-r bg-background max-h-screen h-screen">
      {/* Brand/Header */}
      <div className="p-4 border-b text-xl font-bold flex items-center gap-2 shrink-0">
        <Home className="h-6 w-6" />
        <span>DevStarter</span>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-4">
        <nav className="flex flex-col gap-1">
          {sidebarLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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

        {/* Accordion Nav */}
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

      {/* Fixed Lock Sidebar Button */}
      <div className="mt-auto border-t p-4 shrink-0">
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <Lock className="h-4 w-4" />
          Lock Sidebar
        </button>
      </div>
    </aside>
  )
}
