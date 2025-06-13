"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-4">
            Kickstart your next SaaS with{" "}
            <span className="text-primary">DevStarter</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            A Next.js 14 starter template powered by Supabase, Tailwind, Shadcn
            UI, and Framer Motion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full"
        >
          <Image
            src="/images/dev_starter_demo.png"
            width={800}
            height={600}
            alt="DevStarter preview"
            className="w-full h-auto rounded-xl shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
