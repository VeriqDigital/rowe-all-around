import type { Metadata } from "next";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Land Clearing Services",
  description: "Explore broad land clearing, brush clearing, lot clearing, property cleanup, site preparation, and vegetation removal project categories.",
};

export default function ServicesPage() {
  return <main><section className="bg-[#1a1e1a] py-14 text-white md:py-20"><Container><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9fd18c]">Precision Land Clearing</p><h1 className="mt-4 max-w-5xl font-heading text-6xl font-bold uppercase leading-[0.86] sm:text-8xl">Clearing services built around the property.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">Start with the land as it is today and the result you need next. Elias can help determine whether the project fits Precision&apos;s current scope.</p></Container></section><Section><ServicesSection showAll /></Section><section className="bg-[#f8f7f2]"><Container className="py-12"><ContactCtaSection /></Container></section></main>;
}
