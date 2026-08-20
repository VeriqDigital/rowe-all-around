const values = [
  {
    number: "01",
    title: "Clear communication",
    description: "A straightforward conversation about the property, the work, and the next step.",
  },
  {
    number: "02",
    title: "Practical scheduling",
    description: "Discuss timing and scope based on what your property actually needs.",
  },
  {
    number: "03",
    title: "Multiple services",
    description: "Handle routine maintenance, landscaping, trimming, and cleanup with one company.",
  },
  {
    number: "04",
    title: "Straightforward estimates",
    description: "Start with a clear description of the work and an easy estimate request.",
  },
] as const;

const ValuesSection = () => (
  <div>
    <div className="grid gap-5 border-b-2 border-[#b9b7ae] pb-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-(--accent)">Property care, made simpler</p>
        <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">Dependable property care without the runaround.</h2>
      </div>
      <p className="max-w-lg leading-7 text-(--muted) lg:justify-self-end">One local company for the outdoor work that keeps your property clean, maintained, and manageable.</p>
    </div>
    <div className="grid border-l border-(--border) md:grid-cols-2 xl:grid-cols-4">
      {values.map((value) => (
        <article key={value.title} className="flex min-h-64 flex-col border-b border-r border-(--border) bg-white p-6">
          <span className="font-heading text-sm font-bold text-(--accent)">{value.number}</span>
          <h3 className="mt-8 font-heading text-2xl font-bold uppercase leading-tight text-[#222622]">{value.title}</h3>
          <p className="mt-auto pt-6 leading-7 text-(--muted)">{value.description}</p>
        </article>
      ))}
    </div>
  </div>
);

export default ValuesSection;
