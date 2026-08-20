import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";
import { services } from "@/data/services";

const Footer = () => (
  <footer className="border-t-4 border-(--accent) bg-[#151915] text-white">
    <div className="mx-auto w-full max-w-(--container-width) px-5 py-14 sm:px-7 lg:px-10 lg:py-18">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
        <div>
          <Link href="/" aria-label="Precision Land Clearing home" className="relative block h-21 w-72 max-w-full overflow-hidden bg-[#f5f4ee]"><Image src="/precision-logo-cropped.png" alt="Precision Land Clearing" fill className="object-contain object-left px-2 py-1.5" sizes="288px" /></Link>
          <p className="mt-6 max-w-sm leading-7 text-white/60">{siteConfig.description}</p>
          <a href={siteConfig.contact.phoneHref} className="mt-6 block font-heading text-2xl font-bold hover:text-[#9dcb89]">{siteConfig.contact.phone}</a>
          <a href={siteConfig.contact.emailHref} className="mt-2 block break-all text-sm text-white/65 hover:text-white">{siteConfig.contact.email}</a>
        </div>
        <nav aria-label="Footer navigation"><h2 className="font-heading text-lg font-bold uppercase">Navigate</h2><ul className="mt-5 space-y-3 text-sm text-white/62">{footerLinks.map((link) => "href" in link ? <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li> : null)}</ul></nav>
        <div><h2 className="font-heading text-lg font-bold uppercase">Services</h2><ul className="mt-5 space-y-3 text-sm text-white/62">{services.map((service) => <li key={service.title}><Link href="/services" className="hover:text-white">{service.title}</Link></li>)}</ul></div>
        <div><h2 className="font-heading text-lg font-bold uppercase">Follow the work</h2><div className="mt-5 flex flex-col gap-3 text-sm text-white/62"><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram ↗</a><a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook ↗</a><a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok ↗</a></div><p className="mt-7 font-heading text-lg font-bold">Call, text, or email Elias directly.</p></div>
      </div>
      <div className="mt-14 grid gap-4 border-t border-white/13 pt-6 text-xs leading-5 text-white/42 sm:grid-cols-[1fr_auto]">
        <div><p>Website concept for Precision Land Clearing. This demo is not the company&apos;s official website and form submissions are not delivered.</p><p className="mt-1">© 2026 Veriq. Demonstration concept.</p></div>
        <p>Website concept by <a href="https://www.veriqdigital.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3 hover:text-white">Veriq Digital</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
