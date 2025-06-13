// components/homepage/tech-stack.tsx
'use client'

export function TechStack() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background border-t">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Built using modern tools</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          DevStarter combines the best dev tools and practices.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-foreground text-lg font-medium">
          {["Next.js", "Supabase", "Tailwind CSS", "Shadcn UI", "TypeScript", "Framer Motion"].map((tech) => (
            <span key={tech} className="px-4 py-2 border rounded-lg bg-muted/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
