import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import LocationSection from "@/components/sections/LocationSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import TrustStrip from "@/components/sections/TrustStrip";
import WhyPrecisionSection from "@/components/sections/WhyPrecisionSection";
import WorkSection from "@/components/sections/WorkSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Section className="py-14 md:py-18"><ReviewsSection /></Section>
      <Section id="services"><ServicesSection /></Section>
      <section id="work" className="scroll-mt-28 border-t border-black bg-[#171b18] py-16 md:py-24"><Container><WorkSection /></Container></section>
      <Section id="why-precision"><WhyPrecisionSection /></Section>
      <Section><ProcessSection /></Section>
      <Section id="contact"><LocationSection /></Section>
      <Section id="faq"><FAQ /></Section>
      <section className="border-t border-(--border) bg-[#f8f7f2]"><Container className="py-10 md:py-14"><ContactCtaSection /></Container></section>
    </main>
  );
}
