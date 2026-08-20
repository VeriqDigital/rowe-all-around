import type { Metadata } from "next";
import LocationSection from "@/components/sections/LocationSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact Elias",
  description: "Call, text, or email Elias Rosales at Precision Land Clearing to discuss a property-clearing project.",
};

export default function ContactPage() {
  return <main><section className="bg-[#1a1e1a] py-14 text-white md:py-20"><Container><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9fd18c]">Call, text, or email</p><h1 className="mt-4 max-w-4xl font-heading text-6xl font-bold uppercase leading-[0.86] sm:text-8xl">Tell Elias about the land.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">Share the property location, current conditions, photos if available, and what you want the area ready for.</p></Container></section><Section><LocationSection /></Section></main>;
}
