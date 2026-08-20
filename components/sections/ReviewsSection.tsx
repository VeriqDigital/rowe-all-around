const reviews = [
  {
    name: "Belle Âme",
    quote: "Very smooth process great work and great price!",
  },
  {
    name: "Angel Francisco Rosales",
    quote:
      "They do great work and communicate very well for any project that you may need reach out to them if you’re needing any land cleared up for your property.",
  },
  {
    name: "Barbara Birchmier",
    quote:
      "My experience was excellent. They communicated with me, on time of the project, informed me of the steps of the project, and completion time. I was very pleased with the job and price. Thank you Elias for a job well done.",
  },
  {
    name: "Gredmarie Ramirez",
    quote:
      "Precision land clearing did a great job clearing my land. Fair price and professional service!",
  },
] as const;

const ReviewsSection = () => (
  <div>
    <div className="grid gap-5 border-b-2 border-[#b9b7ae] pb-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
      <div>
        <div className="flex items-center gap-3">
          <span
            className="flex size-7 items-center justify-center bg-[#1877f2] text-xs font-bold text-white"
            aria-hidden="true"
          >
            f
          </span>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-(--accent)">
            Facebook recommendations
          </p>
        </div>
        <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">
          What customers are saying.
        </h2>
      </div>
      <p className="max-w-lg leading-7 text-(--muted) lg:justify-self-end">
        Customers consistently mention communication, fair pricing,
        professionalism, and work done well.
      </p>
    </div>

    <div className="grid border-l border-(--border) md:grid-cols-2 xl:grid-cols-4">
      {reviews.map((review, index) => (
        <figure
          key={review.name}
          className="flex min-h-64 flex-col border-b border-r border-(--border) bg-white p-6"
        >
          <span className="font-heading text-sm font-bold text-(--accent)">
            {String(index + 1).padStart(2, "0")}
          </span>
          <blockquote className="mt-5 font-heading text-xl font-medium leading-snug text-[#222622] sm:text-2xl">
            “{review.quote}”
          </blockquote>
          <figcaption className="mt-auto pt-6 text-sm font-bold uppercase tracking-[0.06em] text-[#4d504a]">
            {review.name}
          </figcaption>
        </figure>
      ))}
    </div>
  </div>
);

export default ReviewsSection;
