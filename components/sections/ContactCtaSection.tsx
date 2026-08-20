"use client";

import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import Button from "@/components/ui/Button";
import { primaryCta, siteConfig } from "@/config/site";

const ContactCtaSection = () => {
  const modal = useLeadModal();
  return (
    <div className="grid gap-9 bg-(--accent) px-6 py-12 text-white sm:px-10 md:grid-cols-[1fr_auto] md:items-center lg:px-14 lg:py-16">
      <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">Let&apos;s get your property handled</p><h2 className="mt-3 font-heading text-5xl font-bold uppercase leading-[0.88] sm:text-7xl">Ready to get started?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">Tell Rowe All Around what your property needs and request an estimate today.</p></div>
      <div className="flex min-w-58 flex-col gap-3"><Button onClick={() => modal.openModal(primaryCta.modal)} variant="light">Request an Estimate</Button><Button href={siteConfig.contact.phoneHref} variant="secondary">Call {siteConfig.contact.phone}</Button><a href={siteConfig.contact.emailHref} className="flex min-h-11 items-center justify-center py-2 text-center text-sm font-bold uppercase tracking-[0.08em] underline underline-offset-5">Email Rowe</a></div>
      {modal.activeModal && <LeadModal activeModal={modal.activeModal} hasSubmitted={modal.hasSubmitted} isSubmitting={modal.isSubmitting} onClose={modal.closeModal} onSubmit={modal.handleFormSubmit} submitError={modal.submitError} />}
    </div>
  );
};

export default ContactCtaSection;
