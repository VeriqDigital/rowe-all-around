"use client";

import Image from "next/image";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { primaryCta, siteConfig } from "@/config/site";

const Hero = () => {
  const modal = useLeadModal();

  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#182018] text-white sm:min-h-[690px] lg:min-h-[calc(100svh-5.5rem)]">
      <Image
        src="/613795429_122206342154565330_2548263850512502953_n.jpg"
        alt="Land clearing equipment working on a wooded property"
        fill
        className="-z-20 object-cover object-[66%_72%] lg:object-[center_68%]"
        sizes="100vw"
        preload
        quality={100}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,16,12,.93)_0%,rgba(12,16,12,.76)_44%,rgba(12,16,12,.18)_78%),linear-gradient(0deg,rgba(12,16,12,.7)_0%,transparent_45%)]" />
      <Container className="flex min-h-[650px] items-center py-16 sm:min-h-[690px] lg:min-h-[calc(100svh-5.5rem)] lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#a6ce96] sm:text-sm">
            <span className="h-px w-10 bg-[#72aa5c]" />
            Land Clearing &amp; Property Preparation
          </div>
          <h1 className="font-heading text-[clamp(3.4rem,10vw,7.4rem)] font-bold uppercase leading-[0.83] tracking-[-0.04em]">
            Clear the land.
            <span className="mt-2 block text-[#a7d395]">
              Build what&apos;s next.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">
            Precision Land Clearing helps property owners clear overgrowth and
            prepare land for its next use with direct communication from Elias
            throughout the project.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => modal.openModal(primaryCta.modal)}>
              {primaryCta.label}
            </Button>
            <Button href={siteConfig.contact.phoneHref} variant="secondary">
              Call {siteConfig.contact.phone}
            </Button>
          </div>
          <a
            href={siteConfig.contact.smsHref}
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-white/78 underline decoration-[#77a965] underline-offset-5 transition hover:text-white"
          >
            Prefer to text? Message Elias
          </a>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 border-t border-white/18 bg-black/28 backdrop-blur-[2px]">
        <Container className="grid grid-cols-3 divide-x divide-white/16 py-4 text-center font-heading text-xs font-bold uppercase tracking-[0.1em] text-white/78">
          <span>Owner-led service</span>
          <span>Direct communication</span>
          <span>Real project updates</span>
        </Container>
      </div>
      {modal.activeModal && (
        <LeadModal
          activeModal={modal.activeModal}
          hasSubmitted={modal.hasSubmitted}
          isSubmitting={modal.isSubmitting}
          onClose={modal.closeModal}
          onSubmit={modal.handleFormSubmit}
          submitError={modal.submitError}
        />
      )}
    </section>
  );
};

export default Hero;
