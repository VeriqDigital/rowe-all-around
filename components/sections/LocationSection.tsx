import Image from "next/image";
import { siteConfig } from "@/config/site";
import contactImage from "../../public/773612998_122111181795368675_3777126368320213196_n.jpg";

const channels = [
  { label: "Call Rowe", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
  { label: "Email Rowe", value: siteConfig.contact.email, href: siteConfig.contact.emailHref },
] as const;

const LocationSection = () => (
  <div className="grid overflow-hidden border border-(--border) bg-white lg:grid-cols-[0.9fr_1.1fr]">
    <div className="p-7 sm:p-10 lg:p-14">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">Request an estimate</p>
      <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">Need help with your property?</h2>
      <p className="mt-6 max-w-lg text-lg leading-8 text-(--muted)">Tell Rowe what needs attention—from recurring lawn care to landscaping, trimming, storm cleanup, or a larger outdoor property cleanup.</p>
      <div className="mt-9 border-t border-(--border)">
        {channels.map((channel) => (
          <a key={channel.label} href={channel.href} className="group grid gap-1 border-b border-(--border) py-5">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-(--accent)">{channel.label}</span>
            <span className="break-all font-heading text-xl font-bold group-hover:underline sm:text-2xl">{channel.value}</span>
          </a>
        ))}
      </div>
      <div className="mt-8 border-l-4 border-(--accent) bg-[#eef0e6] px-5 py-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--accent)">Service location</p>
        <p className="mt-1 font-heading text-2xl font-bold uppercase">Port Charlotte, FL</p>
      </div>
    </div>
    <div className="relative min-h-[420px] bg-[#202620] sm:min-h-[520px] lg:min-h-[720px]">
      <Image src={contactImage} alt="Rowe All Around team member trimming shrubs at a landscaped property" fill className="object-cover object-[center_36%] sm:object-[center_39%] lg:object-[center_41%]" sizes="(max-width: 1024px) 100vw, 55vw" placeholder="blur" />
    </div>
  </div>
);

export default LocationSection;
