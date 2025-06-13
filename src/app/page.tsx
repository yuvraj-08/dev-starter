import { CtaBanner } from "@/components/homepage/cta-banner";
import { Features } from "@/components/homepage/features";
import { Hero } from "@/components/homepage/hero";
import { TechStack } from "@/components/homepage/tech-stack";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <TechStack />
      <CtaBanner />
      <Footer />
    </>
  );
}
