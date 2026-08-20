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
        src="/774895344_122111181963368675_6034236934525468951_n.jpg"
        alt="Maintained lawn and landscaping beside a Port Charlotte lake"
        fill
        className="-z-20 object-cover object-[58%_54%] sm:object-[60%_55%] lg:object-[62%_56%]"
        sizes="100vw"
        preload
        quality={100}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,14,8,.94)_0%,rgba(7,14,8,.69)_45%,rgba(7,14,8,.1)_80%),linear-gradient(0deg,rgba(7,14,8,.58)_0%,transparent_46%)]" />
      <Container className="flex min-h-[650px] items-center py-16 sm:min-h-[690px] lg:min-h-[calc(100svh-5.5rem)] lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#a6ce96] sm:text-sm">
            <span className="h-px w-10 bg-[#72aa5c]" />
            Port Charlotte Lawn Care &amp; Property Maintenance
          </div>
          <h1 className="font-heading text-[clamp(3.4rem,10vw,7.4rem)] font-bold uppercase leading-[0.83] tracking-[-0.04em]">
            Your property.
            <span className="mt-2 block text-[#a9e466]">Done right.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">
            Lawn and landscape care, tree services, storm cleanup, hauling, and
            other property services throughout Port Charlotte and surrounding
            areas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => modal.openModal(primaryCta.modal)}>
              {primaryCta.label}
            </Button>
            <Button href={siteConfig.contact.phoneHref} variant="secondary">
              Call {siteConfig.contact.phone}
            </Button>
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-white/72">
            Licensed &amp; insured · Local service
          </p>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 border-t border-white/18 bg-black/28 backdrop-blur-[2px]">
        <Container className="grid grid-cols-3 divide-x divide-white/16 py-4 text-center font-heading text-xs font-bold uppercase tracking-[0.1em] text-white/78">
          <span>One company</span>
          <span>Multiple services</span>
          <span>Port Charlotte, FL</span>
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
