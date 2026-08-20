const steps = [
  ["01", "Tell us about your property", "Call, text, or send an estimate request with the location, photos, and what you need cleared."],
  ["02", "Discuss the project", "Review the property, scope, access, desired outcome, and practical next steps with Elias."],
  ["03", "Get the land ready", "Once the work is agreed upon, Precision clears the area so it is ready for what comes next."],
] as const;

const ProcessSection = () => (
  <div>
    <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">A simple way forward</p><h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">From overgrown to open.</h2></div>
    <ol className="mt-12 grid border-l border-t border-(--border) lg:grid-cols-3">
      {steps.map(([number, title, description]) => <li key={number} className="border-b border-r border-(--border) bg-[#efede5] p-7 sm:p-9"><span className="font-heading text-5xl font-bold text-(--accent)">{number}</span><h3 className="mt-10 max-w-xs font-heading text-2xl font-bold uppercase">{title}</h3><p className="mt-4 leading-7 text-(--muted)">{description}</p></li>)}
    </ol>
  </div>
);

export default ProcessSection;
