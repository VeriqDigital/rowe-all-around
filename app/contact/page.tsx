import type { Metadata } from "next";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import LocationSection from "@/components/sections/LocationSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call or email Rowe All Around LLC to request an estimate for lawn care or property maintenance in Port Charlotte, Florida.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#111811] py-14 text-white md:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a9e466]">Call or email</p>
          <h1 className="mt-4 max-w-4xl font-heading text-6xl font-bold uppercase leading-[0.86] sm:text-8xl">Tell Rowe what your property needs.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">Share the service you need and a few details about the property to start the estimate conversation.</p>
        </Container>
      </section>
      <Section><LocationSection /></Section>
      <section className="bg-[#f8f7f2]"><Container className="pb-12"><ContactCtaSection /></Container></section>
    </main>
  );
}
