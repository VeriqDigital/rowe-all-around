import Image from "next/image";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

type ServicesSectionProps = { showAll?: boolean };

const ServicesSection = ({ showAll = false }: ServicesSectionProps) => (
  <div>
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">
          What we clear
        </p>
        <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
          Make the land usable again.
        </h2>
      </div>
      <p className="max-w-2xl text-lg leading-8 text-(--muted) lg:justify-self-end">
        Every property starts with a different challenge. Precision focuses the
        conversation on what is there now, what needs to be cleared, and what
        you want the space ready for next.
      </p>
    </div>

    <div className="mt-12 grid border-l border-t border-(--border) md:grid-cols-2 xl:grid-cols-12">
      {services.map((service, index) => {
        const isFeatured = index < 2;
        const gridClass =
          index === 0
            ? "xl:col-span-7"
            : index === 1
              ? "xl:col-span-5"
              : "xl:col-span-3";

        return (
          <article
            key={service.title}
            className={`${gridClass} group grid border-b border-r border-(--border) bg-white ${
              isFeatured
                ? "grid-rows-[18rem_1fr] sm:grid-rows-[22rem_1fr]"
                : "grid-rows-[14rem_1fr]"
            }`}
          >
            <div className="relative overflow-hidden bg-[#d9d8cf]">
              <Image
                src={service.image}
                alt={`${service.title} project by Precision Land Clearing`}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
                style={{ objectPosition: service.position }}
                sizes={
                  isFeatured
                    ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 58vw"
                    : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                }
              />
            </div>
            <div className={`grid grid-cols-[auto_1fr] gap-4 ${isFeatured ? "p-7 sm:p-8" : "p-6"}`}>
              <span className="font-heading text-sm font-bold text-(--accent)">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={`font-heading font-bold uppercase ${isFeatured ? "text-3xl" : "text-2xl"}`}>
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl leading-7 text-(--muted)">
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>

    {!showAll && (
      <div className="mt-9">
        <Button href="/services" variant="secondary">
          Explore Services
        </Button>
      </div>
    )}
  </div>
);

export default ServicesSection;
