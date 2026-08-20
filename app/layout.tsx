import type { Metadata } from "next";
import { Barlow, Roboto_Condensed } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/config/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rowe All Around LLC | Lawn Care & Property Maintenance in Port Charlotte, FL",
    template: `%s | Rowe All Around LLC`,
  },
  description:
    "Lawn maintenance, landscaping, tree trimming, hurricane cleanup, and property cleanup in Port Charlotte, Florida. Contact Rowe All Around LLC to request an estimate.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Rowe All Around LLC | Lawn Care & Property Maintenance in Port Charlotte, FL",
    description:
      "Lawn maintenance, landscaping, tree trimming, hurricane cleanup, and property cleanup in Port Charlotte, Florida.",
    siteName: "Rowe All Around LLC",
    locale: siteConfig.locale,
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rowe All Around lawn care and property maintenance in Port Charlotte, Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowe All Around LLC",
    description:
      "Lawn care and property maintenance in Port Charlotte, Florida.",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/762542637_122109575775368675_8841562891983492712_n.jpg`,
  description: siteConfig.description,
  telephone: "+1-941-317-0509",
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Charlotte",
    addressRegion: "FL",
    postalCode: siteConfig.postalCode,
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
