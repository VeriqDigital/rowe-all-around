const trustItems = [
  ["01", "Owner-led service", "Talk directly with Elias about the land and the result you are after."],
  ["02", "Clear project updates", "Customer feedback repeatedly highlights communication throughout the work."],
  ["03", "Straightforward process", "Start with the property, the scope, access, and what comes next."],
  ["04", "Work customers recommend", "Reviews praise Precision for fair pricing, professionalism, and results."],
] as const;

const TrustStrip = () => (
  <section aria-label="Why property owners choose Precision" className="border-b border-(--border) bg-[#e9e6dc]">
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
