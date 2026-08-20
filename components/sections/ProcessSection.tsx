const steps = [
  ["01", "Tell us what you need", "Call or request an estimate and explain the lawn, tree, cleanup, hauling, or property work you need done."],
  ["02", "Get a clear plan", "Rowe reviews the property and service needs, then discusses the scope with you."],
  ["03", "Get it taken care of", "Schedule the work and let Rowe handle the property."],
] as const;

const ProcessSection = () => (
  <div>
    <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">A simple way forward</p><h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">From overgrown to handled.</h2></div>
    <ol className="mt-12 grid border-l border-t border-(--border) lg:grid-cols-3">
      {steps.map(([number, title, description]) => <li key={number} className="border-b border-r border-(--border) bg-[#efede5] p-7 sm:p-9"><span className="font-heading text-5xl font-bold text-(--accent)">{number}</span><h3 className="mt-10 max-w-xs font-heading text-2xl font-bold uppercase">{title}</h3><p className="mt-4 leading-7 text-(--muted)">{description}</p></li>)}
    </ol>
  </div>
);

export default ProcessSection;
