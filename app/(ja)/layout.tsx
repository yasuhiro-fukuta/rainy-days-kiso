import type { Metadata } from "next";
import { site } from "@/lib/site";
import { serif, sans } from "@/lib/fonts";
import { buildJsonLd } from "@/lib/jsonld";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rainy Days in the Kiso — 中山道の四季を、ひとつの和菓子に。",
    template: "%s · Rainy Days in the Kiso",
  },
  description:
    "中山道・木曽路の四季を、ひとつの和菓子に。囲炉裏のある築100年の蔵で練り切りづくりを体験し、抹茶とともに味わう屋内ワークショップ「ねりきりチャレンジ」。長野県南木曽町・柏屋にて。",
  keywords: [
    "練り切り 体験",
    "和菓子 ワークショップ",
    "南木曽 観光",
    "木曽 体験",
    "中山道",
    "上生菓子",
    "柏屋",
  ],
  authors: [{ name: site.operator }],
  alternates: {
    canonical: "/ja",
    languages: { en: "/", ja: "/ja" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "中山道の四季を、ひとつの和菓子に。",
    description:
      "囲炉裏のある築100年の蔵で練り切りづくりを体験し、抹茶とともに味わう屋内ワークショップ。長野県南木曽町。",
    url: `${site.url}/ja`,
    locale: "ja_JP",
    images: [
      {
        url: "/assets/misty_mountain_banner.jpg",
        width: 2000,
        height: 1333,
        alt: "梅雨の木曽谷。霧の山並みと紫陽花",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "中山道の四季を、ひとつの和菓子に。",
    description:
      "囲炉裏のある築100年の蔵で練り切りづくり。抹茶とともに味わう屋内ワークショップ。長野県南木曽町。",
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
    <html lang="ja" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd("ja")),
          }}
        />
        {children}
      </body>
    </html>
  );
}
