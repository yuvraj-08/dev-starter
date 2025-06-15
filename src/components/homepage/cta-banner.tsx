"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-background to-muted/40 border-t">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Ready to build your SaaS?
        </h2>
        <p className="max-w-xl text-muted-foreground text-lg">
          Save weeks of setup and focus on what matters — shipping your product.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">Get DevStarter</Button>
          <Button
            size="lg"
            variant="outline"
            className="text-foreground border-foreground hover:bg-muted/30"
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
