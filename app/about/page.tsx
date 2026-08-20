import type { Metadata } from "next";
import Image from "next/image";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyPrecisionSection from "@/components/sections/WhyPrecisionSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Precision",
  description: "Learn about Precision Land Clearing's owner-led approach and direct project communication.",
};

export default function AboutPage() {
  return <main><section className="grid bg-[#1a1e1a] text-white lg:grid-cols-2"><Container className="flex items-center py-14 lg:py-20"><div className="max-w-2xl lg:ml-auto lg:pr-12"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9fd18c]">Owner-led service</p><h1 className="mt-4 font-heading text-6xl font-bold uppercase leading-[0.86] sm:text-8xl">Your property. A direct conversation.</h1><p className="mt-7 text-lg leading-8 text-white/68">Precision Land Clearing is led by {siteConfig.owner}. Talk directly with Elias about the property, the clearing scope, and the result you want so the conversation stays focused on the work in front of you.</p></div></Container><div className="relative min-h-[450px] lg:min-h-[720px]"><Image src="/678380041_122222319836565330_9204077539104563223_n.jpg" alt="Precision Land Clearing truck and equipment at a project property" fill className="object-cover object-[center_60%]" sizes="(max-width: 1024px) 100vw, 50vw" /></div></section><Section><WhyPrecisionSection /></Section><Section><ProcessSection /></Section><section className="bg-[#f8f7f2]"><Container className="py-12"><ContactCtaSection /></Container></section></main>;
}
