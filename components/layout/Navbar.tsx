"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { navigation, primaryCta, siteConfig } from "@/config/site";
import LeadModal from "./LeadModal";
import useLeadModal from "./useLeadModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modal = useLeadModal();

  useEffect(() => {
    if (!isMenuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isMenuOpen]);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-[#151915] text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      <div className="mx-auto flex h-18 w-full max-w-(--container-width) items-center gap-3 px-5 sm:h-20 sm:gap-5 sm:px-7 lg:px-10">
        <Link
          href="/"
          aria-label="Precision Land Clearing home"
          className="relative h-13 w-44 shrink-0 overflow-hidden bg-[#f5f4ee] sm:h-15 sm:w-52 lg:w-55"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/precision-logo-cropped.png"
            alt="Precision Land Clearing"
            fill
            className="object-contain px-1.5 py-1"
            sizes="(max-width: 640px) 176px, 220px"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navigation.map((item) =>
            "href" in item ? (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-sm font-bold uppercase tracking-[0.06em] text-white/82 transition hover:text-[#79ad65]"
              >
                {item.label}
              </Link>
            ) : null,
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-5 md:flex xl:ml-3">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden text-right font-heading lg:block"
          >
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/55">Call Elias</span>
            <span className="text-base font-bold">{siteConfig.contact.phone}</span>
          </a>
          <Button onClick={() => modal.openModal(primaryCta.modal)}>
            Get a Free Estimate
          </Button>
        </div>

        <a
          href={siteConfig.contact.phoneHref}
          className="ml-auto flex size-11 items-center justify-center border border-white/35 text-sm font-bold uppercase md:hidden"
          aria-label={`Call Precision Land Clearing at ${siteConfig.contact.phone}`}
        >
          Call
        </a>
        <button
          type="button"
          className="flex size-11 items-center justify-center border border-white/35 xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-5 bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" className="border-t border-white/12 bg-[#1b201b] px-5 py-4 xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-(--container-width) sm:grid-cols-2">
            {navigation.map((item) =>
              "href" in item ? (
                <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="border-b border-white/10 py-3 font-heading font-bold uppercase tracking-[0.06em] text-white/85">
                  {item.label}
                </Link>
              ) : null,
            )}
            <a href={siteConfig.contact.smsHref} className="border-b border-white/10 py-3 font-heading font-bold uppercase tracking-[0.06em] text-[#8fc37a]">Text Elias</a>
            <button type="button" onClick={() => { setIsMenuOpen(false); modal.openModal(primaryCta.modal); }} className="mt-4 min-h-12 bg-(--accent) px-5 py-3 text-left font-heading font-bold uppercase tracking-[0.06em] text-white sm:col-span-2">
              Get a Free Estimate
            </button>
          </div>
        </nav>
      )}

      {modal.activeModal && <LeadModal activeModal={modal.activeModal} hasSubmitted={modal.hasSubmitted} isSubmitting={modal.isSubmitting} onClose={modal.closeModal} onSubmit={modal.handleFormSubmit} submitError={modal.submitError} />}
    </header>
  );
};

export default Navbar;
