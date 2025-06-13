// components/homepage/cta-banner.tsx
'use client'

import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Ready to build your SaaS?</h2>
        <p className="max-w-xl text-muted text-lg">
          Save weeks of setup and focus on what matters — shipping your product.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" variant="secondary">
            Get DevStarter
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
