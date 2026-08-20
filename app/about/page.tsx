import type { Metadata } from "next";
import Image from "next/image";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyRoweSection from "@/components/sections/WhyRoweSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Rowe All Around brings lawn care, landscaping, trimming, and cleanup together for Port Charlotte property owners.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="grid bg-[#111811] text-white lg:grid-cols-2">
        <Container className="flex items-center py-14 lg:py-20">
          <div className="max-w-2xl lg:ml-auto lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a9e466]">One company for the whole property</p>
            <h1 className="mt-4 font-heading text-6xl font-bold uppercase leading-[0.86] sm:text-8xl">Property care that covers more ground.</h1>
            <p className="mt-7 text-lg leading-8 text-white/68">Rowe All Around brings recurring lawn maintenance, landscaping, tree trimming, hurricane cleanup, and property cleanup together for homes and properties in the Port Charlotte area.</p>
          </div>
        </Container>
        <div className="relative min-h-[450px] lg:min-h-[720px]"><Image src="/774651316_122111181951368675_4272367211822068736_n.jpg" alt="Rowe All Around team member working in a landscaped planting bed" fill className="object-cover object-[62%_38%] sm:object-[60%_40%] lg:object-[58%_43%]" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
      </section>
      <Section><WhyRoweSection /></Section>
      <Section><ProcessSection /></Section>
      <section className="bg-[#f8f7f2]"><Container className="py-12"><ContactCtaSection /></Container></section>
    </main>
  );
}
