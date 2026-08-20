import type { ModalType } from "@/components/layout/LeadModal";

export const siteConfig = {
  name: "Precision Land Clearing",
  shortName: "Precision",
  owner: "Elias Rosales",
  description:
    "Land clearing and property preparation with direct communication from first conversation to finished work.",
  locale: "en_US",
  contact: {
    phone: "515-686-7761",
    phoneHref: "tel:+15156867761",
    smsHref: "sms:+15156867761",
    email: "contact@precisionlandclearing.co",
    emailHref: "mailto:contact@precisionlandclearing.co",
  },
  social: {
    instagram: "https://www.instagram.com/precision_landclearing",
    facebook:
      "https://www.facebook.com/p/Precision-Land-Clearing-61566959926993/",
    tiktok: "https://www.tiktok.com/@precisionlandclearing",
  },
} as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; modal: ModalType };

export const navigation: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Why Precision", href: "/#why-precision" },
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
