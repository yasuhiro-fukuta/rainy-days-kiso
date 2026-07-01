import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Rainy Days in the Kiso — Enjoy the rain. Shape Japanese sweets by the hearth.",
    template: "%s · Rainy Days in the Kiso",
  },
  description: site.description,
  keywords: [
    "Kiso Valley rainy day",
    "Nagiso things to do",
    "nerikiri experience Japan",
    "Japanese sweets workshop",
    "wagashi class Nagano",
    "off-season travel Japan",
    "Nakasendo",
    "Kashiwaya",
  ],
  authors: [{ name: site.operator }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Rainy Days in the Kiso — Enjoy the rain",
    description:
      "A slow, crowd-free rainy afternoon in the Kiso Valley: shape seasonal Japanese sweets by the hearth, then eat them with matcha. The Nerikiri Challenge, in Nagiso.",
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: "/assets/misty_mountain_banner.jpg",
        width: 2000,
        height: 1333,
        alt: "Misty mountains and hydrangea over the Kiso Valley in the rainy season",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainy Days in the Kiso — Enjoy the rain",
    description:
      "Shape seasonal Japanese sweets by the hearth on a rainy afternoon in the Kiso Valley. The Nerikiri Challenge, in Nagiso.",
    images: ["/assets/misty_mountain_banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristAttraction",
      "@id": `${site.url}/#attraction`,
      name: "The Nerikiri Challenge",
      description:
        "A hands-on rainy-day workshop in the Kiso Valley: shape nerikiri, the delicate seasonal Japanese sweets served with matcha, by an irori hearth inside a century-old kura storehouse in Nagiso.",
      url: site.url,
      image: `${site.url}/assets/wagashi.jpg`,
      isAccessibleForFree: false,
      touristType: [
        "Families",
        "Couples",
        "Slow travel",
        "Off-season travellers",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      provider: { "@id": `${site.url}/#operator` },
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#operator`,
      name: site.operator,
      alternateName: "Kashiwaya · Beyond Nakasendo",
      url: site.url,
      email: site.email,
      telephone: site.phone,
      sameAs: [site.instagram, site.ebikeSite],
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.country,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#operator` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
