import { additionalServices } from "@/data/services";

const AdditionalServicesGrid = () => (
  <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {additionalServices.map((service) => (
      <li key={service.title}>
        <article className="h-full border border-(--border) bg-white p-5 transition-[border-color,transform] duration-200 motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-0.5 hover:border-(--accent)">
          <span aria-hidden="true" className="block h-0.5 w-8 bg-(--accent)" />
          <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-(--muted)">
            {service.description}
          </p>
        </article>
      </li>
    ))}
  </ul>
);

export default AdditionalServicesGrid;
