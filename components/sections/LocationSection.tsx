import Image from "next/image";
import { siteConfig } from "@/config/site";
import contactProjectImage from "../../public/661484558_122219148014565330_7697467081420242906_n.jpg";

const channels = [
  { label: "Call Elias", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
  { label: "Text Elias", value: siteConfig.contact.phone, href: siteConfig.contact.smsHref },
  { label: "Email Precision", value: siteConfig.contact.email, href: siteConfig.contact.emailHref },
] as const;

const LocationSection = () => (
  <div className="grid border border-(--border) bg-white lg:grid-cols-[0.9fr_1.1fr]">
    <div className="p-7 sm:p-10 lg:p-14">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--accent)">Project inquiry</p>
      <h2 className="mt-4 font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">Have land that needs cleared?</h2>
      <p className="mt-6 max-w-lg text-lg leading-8 text-(--muted)">Tell Elias about the property, the current conditions, and what you are looking to accomplish.</p>
      <div className="mt-9 border-t border-(--border)">
        {channels.map((channel) => <a key={channel.label} href={channel.href} className="group grid gap-1 border-b border-(--border) py-5"><span className="text-xs font-bold uppercase tracking-[0.16em] text-(--accent)">{channel.label}</span><span className="break-all font-heading text-xl font-bold group-hover:underline sm:text-2xl">{channel.value}</span></a>)}
      </div>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold uppercase tracking-[0.08em]">
        <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-(--accent)">Instagram ↗</a>
        <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-(--accent)">Facebook ↗</a>
        <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-(--accent)">TikTok ↗</a>
      </div>
    </div>
    <div className="relative min-h-[380px] bg-[#202620] sm:min-h-[480px] lg:min-h-[680px]"><Image src={contactProjectImage} alt="Compact loader and trailer at a Precision Land Clearing work site after sunset" fill className="object-cover" style={{ objectPosition: "58% 62%" }} sizes="(max-width: 1024px) 100vw, 55vw" placeholder="blur" loading="eager" /></div>
  </div>
);

export default LocationSection;
