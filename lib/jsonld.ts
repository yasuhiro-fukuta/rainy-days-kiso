import { site } from "@/lib/site";

export function buildJsonLd(lang: "en" | "ja") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAttraction",
        "@id": `${site.url}/#attraction`,
        name:
          lang === "ja" ? "ねりきりチャレンジ" : "The Nerikiri Challenge",
        description:
          lang === "ja"
            ? "木曽谷の屋内・体験型ワークショップ。築100年の蔵の囲炉裏ばたで、抹茶とともに供される季節の上生菓子「練り切り」を手づくりします。長野県南木曽町。"
            : "A hands-on indoor workshop in the Kiso Valley: shape nerikiri, the delicate seasonal Japanese sweets served with matcha, by an irori hearth inside a century-old kura storehouse in Nagiso.",
        url: lang === "ja" ? `${site.url}/ja` : site.url,
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
        sameAs: [site.instagram],
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
        inLanguage: lang,
        publisher: { "@id": `${site.url}/#operator` },
      },
    ],
  };
}
