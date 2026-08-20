import Image from "next/image";
import whyPrecisionImage from "../../public/641639088_122213699834565330_3996149708807636919_n.jpg";

const reasons = [
  ["01", "Direct communication", "Know who you’re talking to and stay informed about the work."],
  ["02", "Straightforward process", "Discuss the property, the scope, access, and next steps before work begins."],
  ["03", "Recommended work", "Customers specifically praise Precision’s communication, pricing, professionalism, and results."],
] as const;

const WhyPrecisionSection = () => (
  <div className="grid overflow-hidden border border-(--border) bg-white lg:grid-cols-2">
    <div className="relative min-h-[420px] lg:min-h-[720px]"><Image src={whyPrecisionImage} alt="Open property after Precision Land Clearing cleanup work" fill className="object-cover" style={{ objectPosition: "center 54%" }} sizes="(max-width: 1024px) 100vw, 50vw" placeholder="blur" loading="eager" /></div>
    <div className="bg-[#1a1e1a] p-7 text-white sm:p-10 lg:p-14">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9fd18c]">Why Precision</p>
      <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">Clear communication. Quality work.</h2>
      <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">Land-clearing projects can feel like a lot to coordinate. Precision keeps the conversation grounded in your property and the outcome you need.</p>
      <div className="mt-10 border-t border-white/16">
        {reasons.map(([number, title, description]) => <div key={title} className="grid grid-cols-[auto_1fr] gap-5 border-b border-white/16 py-6"><span className="font-heading text-sm font-bold text-[#8ec37a]">{number}</span><div><h3 className="font-heading text-2xl font-bold uppercase">{title}</h3><p className="mt-2 leading-7 text-white/62">{description}</p></div></div>)}
      </div>
    </div>
  </div>
);

export default WhyPrecisionSection;
