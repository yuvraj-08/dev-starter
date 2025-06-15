import { CtaBanner } from "@/components/homepage/cta-banner";
import { FAQ } from "@/components/homepage/faqs";
import { Features } from "@/components/homepage/features";
import { Hero } from "@/components/homepage/hero";
import { TechStack } from "@/components/homepage/tech-stack";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { ScrollToHash } from "@/utils/scroll-to-hash";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Hero />
      <Features />
      <TechStack />
      <FAQ />
      <CtaBanner />
      <Footer />
    </>
  );
}
