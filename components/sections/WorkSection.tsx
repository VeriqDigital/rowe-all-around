import Image from "next/image";

const gallery = [
  {
    src: "/774502962_122111181939368675_4305344196960460336_n.jpg",
    alt: "Rowe All Around team member working in a fresh mulch bed",
    label: "Landscaping",
    className: "md:col-span-8 md:row-span-2",
    fitClass: "object-cover",
    frameClass: "bg-[#243024]",
    positionClass: "object-[center_27%] md:object-[center_28%]",
    sizes: "(max-width: 768px) 100vw, 66vw",
  },
  {
    src: "/761653616_122109579117368675_4877324292286820021_n.jpg",
    alt: "Before and after view of a palm tree trimmed by Rowe All Around",
    label: "Tree Trimming",
    className: "md:col-span-4",
    fitClass: "object-contain",
    frameClass: "bg-[#182018]",
    positionClass: "object-center",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/763805544_122109577683368675_6001752363088677010_n.jpg",
    alt: "Before and after view of shaped trees and hedges",
    label: "Tree & Vegetation Cleanup",
    className: "md:col-span-4",
    fitClass: "object-contain",
    frameClass: "bg-[#182018]",
    positionClass: "object-center",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    src: "/774895344_122111181963368675_6034236934525468951_n.jpg",
    alt: "Maintained lawn and new palm landscaping beside a lake",
    label: "Lawn Maintenance",
    className: "md:col-span-5",
    fitClass: "object-cover",
    frameClass: "bg-[#243024]",
    positionClass: "object-[center_54%] md:object-[center_57%]",
    sizes: "(max-width: 768px) 100vw, 42vw",
  },
  {
    src: "/768951844_122110456299368675_3766914832586926871_n.jpg",
    alt: "Lawn and property maintenance equipment at a work site",
    label: "Property Cleanup",
    className: "md:col-span-7",
    fitClass: "object-cover",
    frameClass: "bg-[#243024]",
    positionClass: "object-[60%_42%] md:object-[62%_43%]",
    sizes: "(max-width: 768px) 100vw, 58vw",
  },
] as const;

const WorkSection = () => (
  <div>
    <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a9e466]">Around the property</p>
        <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.88] tracking-[-0.03em] text-white sm:text-7xl">The work speaks for itself.</h2>
      </div>
      <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">Real Rowe All Around work—from lawn and landscape care to tree trimming and outdoor property cleanup.</p>
    </div>
    <div className="mt-12 grid auto-rows-[18rem] gap-3 sm:auto-rows-[22rem] md:grid-cols-12">
      {gallery.map((item) => (
        <figure key={item.src} className={`group relative overflow-hidden ${item.frameClass} ${item.className}`}>
          <Image src={item.src} alt={item.alt} fill className={`${item.fitClass} ${item.positionClass} transition duration-700 group-hover:scale-[1.02]`} sizes={item.sizes} />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-5 pt-14 font-heading text-lg font-bold uppercase tracking-[0.06em] text-white">{item.label}</figcaption>
        </figure>
      ))}
    </div>
  </div>
);

export default WorkSection;
