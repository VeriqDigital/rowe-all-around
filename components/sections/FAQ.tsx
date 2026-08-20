"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">Questions before you call</p>
        <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">Land clearing, plainly answered.</h2>
        <p className="mt-6 max-w-md leading-7 text-(--muted)">The best answer depends on the property. These are useful starting points before you talk with Elias.</p>
      </div>
      <div className="border-t border-(--border)">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="border-b border-(--border)">
              <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex min-h-18 w-full items-center justify-between gap-5 py-5 text-left" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
                <span className="font-heading text-lg font-bold uppercase sm:text-xl">{item.question}</span>
                <span className="flex size-8 shrink-0 items-center justify-center border border-[#999a91] text-xl" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p id={`faq-answer-${index}`} className="max-w-2xl pb-6 pr-8 leading-7 text-(--muted)">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
