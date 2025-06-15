"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this template production-ready?",
    answer:
      "Yes! DevStarter comes with everything you need to launch your SaaS faster and scale confidently.",
  },
  {
    question: "Can I use this for client projects?",
    answer:
      "Absolutely. You can use it for personal, commercial, or client projects with the appropriate license.",
  },
  {
    question: "Does it include authentication?",
    answer:
      "Yes. It includes Supabase Auth with email and OAuth support pre-configured.",
  },
  {
    question: "Will I receive updates?",
    answer:
      "You'll receive free updates including improvements, bug fixes, and new sections.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/50 border-t" id="faq">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Got questions? We’ve got answers. Here are the most common ones.
        </p>

        <Accordion type="single" collapsible className="text-left">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
