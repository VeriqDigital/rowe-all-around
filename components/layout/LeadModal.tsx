"use client";

import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";

export type ModalType = "service" | "contact";

const modalContent = {
  service: {
    eyebrow: "Project inquiry",
    title: "Tell us about your property",
    submitLabel: "Review estimate request",
  },
  contact: {
    eyebrow: "Contact Precision",
    title: "Start a conversation",
    submitLabel: "Review message",
  },
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
  const isEstimate = activeModal === "service";

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/78 px-3 py-4 sm:px-5 sm:py-8" role="presentation" onMouseDown={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby={`${activeModal}-form-title`} className="max-h-[calc(100svh-2rem)] w-full max-w-3xl overflow-y-auto border-t-4 border-(--accent) bg-[#f8f7f2] p-5 text-[#1a1d1a] shadow-[0_30px_90px_rgba(0,0,0,.38)] sm:p-8" onMouseDown={(event) => event.stopPropagation()}>
        <div className="mb-6 flex items-start justify-between gap-5 border-b border-(--border) pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-(--accent)">{content.eyebrow}</p>
            <h2 id={`${activeModal}-form-title`} className="mt-2 font-heading text-3xl font-bold uppercase leading-none sm:text-5xl">{content.title}</h2>
          </div>
          <button type="button" onClick={onClose} autoFocus className="flex size-11 shrink-0 items-center justify-center border border-[#9b9b91] text-2xl" aria-label="Close form">×</button>
        </div>

        {hasSubmitted ? (
          <div className="border-l-4 border-(--accent) bg-[#e8eadf] p-5">
            <h3 className="font-heading text-2xl font-bold uppercase">Your details are ready</h3>
            <p className="mt-2 leading-7 text-(--muted)">This concept form does not send submissions yet. Contact Elias directly to start the estimate conversation.</p>
            <div className="mt-5 flex flex-col gap-3 font-bold sm:flex-row sm:flex-wrap">
              <a href={siteConfig.contact.phoneHref} className="underline underline-offset-4">Call {siteConfig.contact.phone}</a>
              <a href={siteConfig.contact.smsHref} className="underline underline-offset-4">Text Elias</a>
              <a href={siteConfig.contact.emailHref} className="break-all underline underline-offset-4">Email Precision</a>
            </div>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit}>
            <p className="border-l-4 border-[#77786f] bg-[#eeece4] px-4 py-3 text-sm leading-6 text-[#5c5d56]">
              Website concept: this form is currently a preview and does not send submissions. Call or text Precision directly to request an estimate.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">Name<input required name="name" className={fieldClass} placeholder="Your name" /></label>
              <label className="text-sm font-bold">Phone<input required={isEstimate} name="phone" type="tel" className={fieldClass} placeholder="Best number to reach you" /></label>
              <label className="text-sm font-bold">Email<input required={!isEstimate} name="email" type="email" className={fieldClass} placeholder="Email address" /></label>
              {isEstimate ? (
                <label className="text-sm font-bold">Property / project location<input required name="project-location" className={fieldClass} placeholder="Property location" /></label>
              ) : (
                <label className="text-sm font-bold">Topic<select name="topic" defaultValue="" className={fieldClass}><option value="" disabled>Choose a topic</option><option value="estimate">Estimate question</option><option value="project">Project details</option><option value="other">Other</option></select></label>
              )}
            </div>
            {isEstimate && (
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold">Preferred contact method<select required name="preferred-contact" defaultValue="" className={fieldClass}><option value="" disabled>Choose one</option><option value="call">Call</option><option value="text">Text</option><option value="email">Email</option></select></label>
                <label className="text-sm font-bold">Project size (optional)<input name="project-size" className={fieldClass} placeholder="Approximate area, if known" /></label>
              </div>
            )}
            <label className="block text-sm font-bold">{isEstimate ? "What needs to be cleared?" : "Message"}<textarea required name="message" rows={5} className={`${fieldClass} resize-y`} placeholder={isEstimate ? "Describe the current conditions, access, and what you want the property ready for." : "How can Elias help?"} /></label>
            <p className="text-xs leading-5 text-[#72736b]">You can text property photos directly to Elias at {siteConfig.contact.phone}.</p>
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
