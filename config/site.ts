import type { ModalType } from "@/components/layout/LeadModal";

export const siteConfig = {
  name: "Rowe All Around LLC",
  shortName: "Rowe All Around",
  isApprovedForProduction: false,
  description:
    "Lawn, landscaping, tree, cleanup, hauling, and property services for Port Charlotte homes and properties.",
  locale: "en_US",
  url: "https://roweallaround.org",
  location: "Port Charlotte, FL",
  postalCode: "33980",
  contact: {
    phone: "(941) 317-0509",
    phoneHref: "tel:+19413170509",
    email: "roweallaround@gmail.com",
    emailHref: "mailto:roweallaround@gmail.com",
  },
} as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; modal: ModalType };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = {
  label: "Get a Free Estimate",
  modal: "service",
} as const satisfies { label: string; modal: ModalType };
