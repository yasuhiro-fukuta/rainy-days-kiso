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
        offers: {
          "@type": "Offer",
          priceCurrency: "JPY",
          price: 2000,
          description:
            lang === "ja"
              ? "基本料金1グループ¥2,000＋お一人¥2,000（オープンキャンペーン価格）。2日前までに要予約。"
              : "¥2,000 per group plus ¥2,000 per person (opening offer). Book at least 2 days ahead.",
          url: `${lang === "ja" ? `${site.url}/ja` : site.url}#book`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq-${lang}`,
        inLanguage: lang,
        mainEntity: (lang === "ja"
          ? [
              ["何曜日に体験できますか？", "曜日は問いません。WhatsAppかLINEでご希望の日と人数をお送りください。"],
              ["いつまでに予約が必要ですか？", "2日前までにご予約ください。練り切りの餡はお越しに合わせて手で仕込みます。"],
              ["料金はいくらですか？", "オープンキャンペーン価格で、基本料金1グループ¥2,000＋お一人¥2,000です。2名さまなら¥6,000。"],
              ["どのくらい時間がかかりますか？", "メインの体験は約2時間です。朝8:30〜9:30の1時間のモーニング・セッションもあります。"],
              ["雨の日でもできますか？", "はい。囲炉裏のある蔵の中で行う完全屋内の体験です。"],
              ["英語で受けられますか？", "はい。英語で通訳します。経験は要りません。"],
              ["場所はどこですか？", "長野県南木曽町、旧中山道沿いの宿「柏屋」です。柏屋にご宿泊の方はモーニング・セッションの送迎が無料です。"],
            ]
          : [
              ["Which days can I join?", "Any day of the week. Message us your preferred date and group size on WhatsApp or LINE."],
              ["How far ahead do I need to book?", "At least 2 days ahead. The bean paste is prepared by hand for your visit."],
              ["How much does it cost?", "Opening offer: ¥2,000 per group plus ¥2,000 per person — ¥6,000 for two."],
              ["How long does it take?", "The main workshop takes about 2 hours. There is also a one-hour Morning Session, 8:30–9:30."],
              ["Can I do it on a rainy day?", "Yes. It is entirely indoors, by an irori hearth in an old kura storehouse."],
              ["Is it in English?", "Yes. The workshop is interpreted into English, and no experience is needed."],
              ["Where is it?", "At Kashiwaya guesthouse in Nagiso, on the old Nakasendo in the Kiso Valley, Nagano. Guests staying at Kashiwaya get a free shuttle for the Morning Session."],
            ]
        ).map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#operator`,
        name: site.operator,
        alternateName: "Kashiwaya · Beyond Nakasendo",
        url: site.url,
        email: site.email,
        telephone: site.phone,
        sameAs: [site.instagram, site.line],
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
