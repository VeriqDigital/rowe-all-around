"use client";

import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export type ModalType = "service" | "contact";

const modalContent = {
  service: { eyebrow: "Free estimate request", title: "What does your property need?", submitLabel: "Review estimate request" },
  contact: { eyebrow: "Contact Rowe", title: "Start a conversation", submitLabel: "Review message" },
};

type LeadModalProps = {
  activeModal: ModalType;
  hasSubmitted: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitError: string;
};

const fieldClass = "mt-2 min-h-12 w-full border border-[#aaa99f] bg-white px-3 py-2.5 text-[#1b1e1b] outline-none transition placeholder:text-[#85857c] focus:border-(--accent)";

const LeadModal = ({ activeModal, hasSubmitted, isSubmitting, onClose, onSubmit, submitError }: LeadModalProps) => {
  const content = modalContent[activeModal];

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/78 px-3 py-4 sm:px-5 sm:py-8" role="presentation" onMouseDown={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby={`${activeModal}-form-title`} className="max-h-[calc(100svh-2rem)] w-full max-w-3xl overflow-y-auto border-t-4 border-(--accent) bg-[#f8f7f2] p-5 text-[#1a1d1a] shadow-[0_30px_90px_rgba(0,0,0,.38)] sm:p-8" onMouseDown={(event) => event.stopPropagation()}>
        <div className="mb-6 flex items-start justify-between gap-5 border-b border-(--border) pb-5">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-(--accent)">{content.eyebrow}</p><h2 id={`${activeModal}-form-title`} className="mt-2 font-heading text-3xl font-bold uppercase leading-none sm:text-5xl">{content.title}</h2></div>
          <button type="button" onClick={onClose} autoFocus className="flex size-11 shrink-0 items-center justify-center border border-[#9b9b91] text-2xl" aria-label="Close form">×</button>
        </div>
        {hasSubmitted ? (
          <div className="border-l-4 border-(--accent) bg-[#e8eadf] p-5">
            <h3 className="font-heading text-2xl font-bold uppercase">Your details are ready</h3>
            <p className="mt-2 leading-7 text-(--muted)">This preview form does not send yet. Please call or email Rowe All Around to request your estimate.</p>
            <div className="mt-5 flex flex-col gap-3 font-bold sm:flex-row sm:flex-wrap">
              <a href={siteConfig.contact.phoneHref} className="underline underline-offset-4">Call {siteConfig.contact.phone}</a>
              <a href={siteConfig.contact.emailHref} className="break-all underline underline-offset-4">Email Rowe</a>
            </div>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit}>
            <p className="border-l-4 border-[#77786f] bg-[#eeece4] px-4 py-3 text-sm leading-6 text-[#5c5d56]">This preview form does not send submissions yet. For service now, call or email Rowe All Around directly.</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">Name<input required name="name" autoComplete="name" className={fieldClass} placeholder="Your name" /></label>
              <label className="text-sm font-bold">Phone<input required name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Best number to reach you" /></label>
              <label className="text-sm font-bold">Email<input name="email" type="email" autoComplete="email" className={fieldClass} placeholder="Email address" /></label>
              <label className="text-sm font-bold">Service needed<select required name="service" defaultValue="" className={fieldClass}><option value="" disabled>Choose a service</option>{services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}</select></label>
            </div>
            <label className="block text-sm font-bold">Project details<textarea required name="message" rows={5} className={`${fieldClass} resize-y`} placeholder="Tell us what your property needs and anything helpful about the current condition." /></label>
            <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:justify-end">
              <button type="button" onClick={onClose} disabled={isSubmitting} className="min-h-12 border border-[#99998f] px-5 py-3 font-bold uppercase tracking-[0.06em]">Cancel</button>
              <button type="submit" disabled={isSubmitting} className="min-h-12 bg-(--accent) px-6 py-3 font-bold uppercase tracking-[0.06em] text-white transition hover:bg-(--accent-hover)">{isSubmitting ? "Reviewing" : content.submitLabel}</button>
            </div>
            {submitError && <p className="text-sm font-bold text-red-700" aria-live="polite">{submitError}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
