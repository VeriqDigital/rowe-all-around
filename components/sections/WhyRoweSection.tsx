import Image from "next/image";
import whyRoweImage from "../../public/774667123_122111181753368675_2977548319304146401_n.jpg";

const reasons = [
  ["01", "One company, multiple services", "Reduce the need to coordinate different contractors for outdoor, cleanup, hauling, and property work."],
  ["02", "Clear communication", "Start with a straightforward conversation about the work your property needs."],
  ["03", "Built around your property", "Discuss the service based on the actual property instead of a one-size-fits-all package."],
  ["04", "Local service", "Serving customers in Port Charlotte and surrounding areas."],
] as const;

const WhyRoweSection = () => (
  <div className="grid overflow-hidden border border-(--border) bg-white lg:grid-cols-2">
    <div className="relative min-h-[420px] lg:min-h-[760px]">
      <Image src={whyRoweImage} alt="Rowe All Around team member caring for a residential lawn" fill className="object-cover object-[center_43%] sm:object-[center_46%] lg:object-[center_48%]" sizes="(max-width: 1024px) 100vw, 50vw" placeholder="blur" />
    </div>
    <div className="bg-[#111811] p-7 text-white sm:p-10 lg:p-14">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a9e466]">Why Rowe All Around</p>
      <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">Property care without the headache.</h2>
      <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">Rowe All Around gives property owners one place to call for lawn, landscaping, tree, cleanup, hauling, and property work.</p>
      <div className="mt-10 border-t border-white/16">
        {reasons.map(([number, title, description]) => (
          <div key={title} className="grid grid-cols-[auto_1fr] gap-5 border-b border-white/16 py-5">
            <span className="font-heading text-sm font-bold text-[#a9e466]">{number}</span>
            <div><h3 className="font-heading text-xl font-bold uppercase sm:text-2xl">{title}</h3><p className="mt-2 leading-7 text-white/62">{description}</p></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default WhyRoweSection;
