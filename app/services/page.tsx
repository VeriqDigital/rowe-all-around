import type { Metadata } from "next";
import AdditionalServicesGrid from "@/components/sections/AdditionalServicesGrid";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Outdoor & Property Services",
  description: "Explore lawn and landscape care, tree services, cleanup, hauling, and property services from Rowe All Around in Port Charlotte, Florida.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#111811] py-14 text-white md:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a9e466]">Rowe All Around LLC</p>
          <h1 className="mt-4 max-w-5xl font-heading text-6xl font-bold uppercase leading-[0.86] sm:text-8xl">Outdoor services built around the property.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">From lawn and landscape care to tree work, cleanup, hauling, and other property services, start by telling Rowe what the property needs.</p>
        </Container>
      </section>
      <Section><ServicesSection showAll /></Section>
      <Section className="bg-[#eef0e6]">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">Additional services</p>
            <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">More ways Rowe can help.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-(--muted) lg:justify-self-end">Rowe also offers these confirmed services. Get in touch to discuss what your property or project needs.</p>
        </div>
        <AdditionalServicesGrid />
      </Section>
      <Section className="py-12 md:py-16">
        <div className="grid gap-7 border-l-4 border-(--accent) bg-white p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">Don&apos;t see what you need?</p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-(--muted)">Rowe All Around handles a wide range of lawn, tree, cleanup, hauling, and property-related work. Get in touch and tell us what you need.</p>
          </div>
          <Button href="/contact" variant="secondary">Ask About Your Project</Button>
        </div>
      </Section>
      <section className="bg-[#f8f7f2]"><Container className="py-12"><ContactCtaSection /></Container></section>
    </main>
  );
}
