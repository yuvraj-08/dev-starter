"use client";

import { motion } from "framer-motion";

const features = [
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
];

export function Features() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/50" id="features">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Features that make DevStarter powerful
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Everything you need to build and scale your SaaS faster.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc }, index) => (
            <motion.div
              key={title}
              className="p-6 bg-background border rounded-xl shadow-sm text-left hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
