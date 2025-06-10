// src/constants/nav-links.ts
import {
  LayoutDashboard,
  Settings,
  Users,
  Folder,
  FileText,
  PieChart,
  Layers,
} from 'lucide-react'

export const sidebarLinks = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
  {
    label: 'Users',
    href: '/dashboard/users',
    icon: Users,
  },
  {
    label: 'Projects',
    href: '/dashboard/projects',
    icon: Folder,
  },
  {
    label: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
  },
]

export const accordionLinks = [
  {
    label: 'Analytics',
    icon: PieChart,
    links: [
      {
        label: 'Overview',
        href: '/dashboard/analytics/overview',
      },
      {
        label: 'Traffic',
        href: '/dashboard/analytics/traffic',
      },
    ],
  },
  {
    label: 'Components',
    icon: Layers,
    links: [
      {
        label: 'UI Elements',
        href: '/dashboard/components/ui',
      },
      {
        label: 'Charts',
        href: '/dashboard/components/charts',
      },
      {
        label: 'Tables',
        href: '/dashboard/components/tables',
      },
    ],
  },
]
