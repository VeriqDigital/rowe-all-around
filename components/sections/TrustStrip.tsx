const trustItems = [
  ["01", "Licensed & insured", "Professional outdoor and property services shaped around the work you need."],
  ["02", "Property-wide service", "Lawn, tree, cleanup, hauling, and more from one company."],
  ["03", "Free estimates", "Tell Rowe what your property needs and get the conversation started."],
  ["04", "Local service", "Serving property owners in Port Charlotte and surrounding areas."],
] as const;

const TrustStrip = () => (
  <section aria-label="Why property owners choose Rowe All Around" className="border-b border-(--border) bg-[#e9e6dc]">
    <div className="mx-auto grid max-w-(--container-width) md:grid-cols-2 xl:grid-cols-4">
      {trustItems.map(([number, title, description]) => (
        <div key={title} className="grid grid-cols-[auto_1fr] gap-4 border-b border-r border-(--border) px-5 py-7 sm:px-7 xl:border-b-0 xl:px-8">
          <span className="font-heading text-sm font-bold text-(--accent)">{number}</span>
          <div>
            <p className="font-heading text-lg font-bold uppercase tracking-[-0.01em]">{title}</p>
            <p className="mt-2 text-sm leading-6 text-(--muted)">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
