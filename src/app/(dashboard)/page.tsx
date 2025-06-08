// app/(dashboard)/page.tsx
'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/useToast'

export default function DashboardPage() {
  const { success } = useToast()

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
      <Button onClick={() => success('Dashboard loaded successfully!')}>
        Show Toast
      </Button>
    </div>
  )
}
