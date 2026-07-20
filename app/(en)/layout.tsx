import type { Metadata } from "next";
import { site } from "@/lib/site";
import { serif, sans } from "@/lib/fonts";
import { buildJsonLd } from "@/lib/jsonld";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Rainy Days in the Kiso — The Nakasendo's Seasons, Captured in a Sweet",
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
  alternates: {
    canonical: "/",
    languages: { en: "/", ja: "/ja" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "The Nakasendo's Seasons, Captured in a Sweet",
    description:
      "An indoor, hands-on workshop in the Kiso Valley: shape seasonal Japanese sweets by the hearth, then eat them with matcha. The Nerikiri Challenge, in Nagiso.",
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
    title: "The Nakasendo's Seasons, Captured in a Sweet",
    description:
      "Shape seasonal Japanese sweets by the hearth, indoors in the Kiso Valley. The Nerikiri Challenge, in Nagiso.",
    images: ["/assets/misty_mountain_banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd("en")),
          }}
        />
        {children}
      </body>
    </html>
  );
}
