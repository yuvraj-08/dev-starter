"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Box,
  Server,
  Paintbrush,
  Sparkles,
  Component,
} from "lucide-react";

const techs = [
  { name: "Next.js", icon: <Server className="w-5 h-5" /> },
  { name: "Supabase", icon: <Box className="w-5 h-5" /> },
  { name: "Tailwind CSS", icon: <Paintbrush className="w-5 h-5" /> },
  { name: "Shadcn UI", icon: <Component className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Braces className="w-5 h-5" /> },
  { name: "Framer Motion", icon: <Sparkles className="w-5 h-5" /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TechStack() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background border-t" id="tech">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Built using modern tools
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          DevStarter combines the best dev tools and practices.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-foreground text-sm font-medium"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {techs.map(({ name, icon }) => (
            <motion.span
              key={name}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-muted/20 hover:bg-muted transition-colors"
              variants={itemVariants}
            >
              {icon}
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
