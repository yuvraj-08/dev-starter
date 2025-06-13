// components/homepage/features.tsx
"use client";

export function Features() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Features that make DevStarter powerful
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Everything you need to build and scale your SaaS faster.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Next.js 14 App Router",
              desc: "Optimized routing with server components and layouts.",
            },
            {
              title: "Supabase Auth",
              desc: "Out-of-the-box email & OAuth sign in.",
            },
            {
              title: "Tailwind + Shadcn UI",
              desc: "Beautiful components & utilities ready to use.",
            },
            {
              title: "Dark Mode",
              desc: "Fully responsive with light/dark mode support.",
            },
            {
              title: "Framer Motion",
              desc: "Smooth animations and transitions for a premium feel.",
            },
            {
              title: "Clean Folder Structure",
              desc: "Maintainable, scalable, production-ready setup.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 bg-background border rounded-xl shadow-sm text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
