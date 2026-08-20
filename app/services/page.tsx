import type { Metadata } from "next";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Lawn Care & Property Maintenance Services",
  description: "Explore lawn maintenance, landscaping, tree trimming, hurricane cleanup, and property cleanup services from Rowe All Around in Port Charlotte, Florida.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#111811] py-14 text-white md:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a9e466]">Rowe All Around LLC</p>
          <h1 className="mt-4 max-w-5xl font-heading text-6xl font-bold uppercase leading-[0.86] sm:text-8xl">Outdoor services built around the property.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">From recurring lawn care to trimming, landscaping, and cleanup work, start by telling Rowe what the property needs.</p>
        </Container>
      </section>
      <Section><ServicesSection showAll /></Section>
      <section className="bg-[#f8f7f2]"><Container className="py-12"><ContactCtaSection /></Container></section>
    </main>
  );
}
