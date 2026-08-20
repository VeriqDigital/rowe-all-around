import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";
import { services } from "@/data/services";

const Footer = () => (
  <footer className="border-t-4 border-(--accent) bg-[#101710] text-white">
    <div className="mx-auto w-full max-w-(--container-width) px-5 py-14 sm:px-7 lg:px-10 lg:py-18">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
        <div>
          <Link href="/" aria-label="Rowe All Around home" className="relative block size-36 overflow-hidden rounded-full bg-white">
            <Image src="/762542637_122109575775368675_8841562891983492712_n.jpg" alt="Rowe All Around lawn care and property maintenance" fill className="object-cover" sizes="144px" />
          </Link>
          <p className="mt-6 max-w-sm leading-7 text-white/60">{siteConfig.description}</p>
          <a href={siteConfig.contact.phoneHref} className="mt-6 block font-heading text-2xl font-bold hover:text-[#a9e466]">{siteConfig.contact.phone}</a>
          <a href={siteConfig.contact.emailHref} className="mt-2 block break-all text-sm text-white/65 hover:text-white">{siteConfig.contact.email}</a>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="font-heading text-lg font-bold uppercase">Navigate</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/62">
            {footerLinks.map((link) => "href" in link ? <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li> : null)}
          </ul>
        </nav>
        <div>
          <h2 className="font-heading text-lg font-bold uppercase">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/62">
            {services.map((service) => <li key={service.title}><Link href="/services" className="hover:text-white">{service.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg font-bold uppercase">Port Charlotte</h2>
          <p className="mt-5 text-sm leading-6 text-white/62">Lawn, landscaping, tree, cleanup, hauling, and property services in Port Charlotte and surrounding areas.</p>
          <p className="mt-7 font-heading text-lg font-bold uppercase">One call. The whole property.</p>
        </div>
      </div>
      <div className="mt-14 grid gap-4 border-t border-white/13 pt-6 text-xs leading-5 text-white/42 sm:grid-cols-[1fr_auto]">
        <div>
          <p>Website concept prepared for Rowe All Around LLC. Estimate form submissions are not currently delivered.</p>
          <p className="mt-1">Rowe All Around LLC &middot; Port Charlotte, FL &middot; &copy; 2026</p>
        </div>
        <p>Website by <a href="https://www.veriqdigital.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3 hover:text-white">Veriq</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
