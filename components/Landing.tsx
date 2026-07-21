import Effects from "@/components/Effects";
import { site } from "@/lib/site";

type Lang = "en" | "ja";

/* All page copy for both languages lives here, so every future edit
   lands in one file and stays in sync across / (en) and /ja. */
const COPY = {
  en: {
    nav: {
      challenge: "The Challenge",
      whatis: "What’s nerikiri",
      teacher: "Your teacher",
      reserve: "Reserve",
      lang: "日本語",
      langHref: "/ja",
      langAria: "日本語版を開く",
    },
    hero: {
      place: "Nagiso · Kiso Valley · On the old Nakasendo",
      h1a: "The Nakasendo’s Seasons,",
      h1b: "Captured in a Sweet",
      sub: "An indoor, hands-on workshop by the hearth of a century-old storehouse: shape nerikiri — the delicate seasonal sweets of the Japanese tea ceremony — with your own hands, then eat them with a bowl of matcha. We call it the Nerikiri Challenge.",
      cta1: "The Nerikiri Challenge",
      cta2: "How to reserve",
    },
    challenge: {
      eyebrow: "The main event",
      h2: "The Nerikiri Challenge",
      p1: (
        <>
          By an <em>irori</em> hearth, inside a century-old <em>kura</em>{" "}
          storehouse, you&rsquo;ll shape nerikiri &mdash; the delicate seasonal
          sweets served at Japanese tea ceremonies &mdash; petal by petal, with
          a local guiding your hands.
        </>
      ),
      p2: "Then you sit and eat your own little work with a bowl of matcha. Everything happens indoors, whatever the sky is doing — unhurried, warm, and about as far from a tour-bus queue as a day in Japan can get.",
      chips: [
        "≈ 2 hours",
        "Indoors, by the hearth",
        "All skill levels",
        "Matcha included",
        "Family-friendly",
      ],
      altBig: "Two hand-shaped nerikiri sweets on a wooden plate",
      altIrori: "The irori hearth room, hanging pot hook and shoji screens",
      altKura: "Inside the old kura storehouse, timber beams and tansu chests",
    },
    whatis: {
      eyebrow: "First time hearing the word?",
      h2: "So, what is nerikiri?",
      p1: (
        <>
          Nerikiri <span className="jp">(&#x7DF4;&#x308A;&#x5207;&#x308A;)</span>{" "}
          is one of the small jewels of Japanese confectionery: sweetened
          white-bean paste, tinted in soft seasonal colours and shaped entirely
          by hand into flowers, leaves, and fruit.
        </>
      ),
      p2: "Each one is a tiny edible sculpture of the moment it’s made in — cherry blossom in spring, red maple in autumn, snow-round and white in winter. They’re the sweet traditionally served just before matcha, made to be as lovely to look at as they are to eat.",
      p3: "Ours follow the seasons of the old Nakasendo — hydrangea in the June rains, sunflowers in high summer, chrysanthemum as the maples turn.",
      lead: "A few of ours from this year — whatever the season hands us.",
      gallery: [
        {
          src: "/assets/nerikiri_ajisai.jpg",
          kanji: "紫陽花",
          caption: "Hydrangea — the June rains",
          alt: "Ajisai nerikiri — white sweets topped with jewel-blue hydrangea petals of kingyoku jelly",
        },
        {
          src: "/assets/nerikiri_himawari.jpg",
          kanji: "向日葵",
          caption: "Sunflower — high summer",
          alt: "Himawari nerikiri — bright yellow sunflower sweets on a blue-and-white plate",
        },
        {
          src: "/assets/nerikiri_hanabi.jpg",
          kanji: "花火",
          caption: "Fireworks — festival nights",
          alt: "Hanabi nerikiri — pastel sweets patterned like fireworks bursting",
        },
        {
          src: "/assets/nerikiri_kiku.jpg",
          kanji: "菊",
          caption: "Chrysanthemum — deep autumn",
          alt: "Kiku nerikiri — pale pink chrysanthemum sweets, petals drawn with a wooden blade",
        },
        {
          src: "/assets/nerikiri_usagi.jpg",
          kanji: "月兎",
          caption: "Moon rabbit — moon-viewing",
          alt: "Usagi nerikiri — two little rabbit-shaped sweets on a black plate",
        },
      ],
    },
    teacher: {
      eyebrow: "Your teacher",
      h2: "Meet Makiko Koide",
      p1: "Makiko was born in a town along the old Kiso Road — the mountain highway whose seasons now shape her sweets.",
      p2: (
        <>
          It was Kyoto&rsquo;s nerikiri that set her course: she was struck by
          how much flavour and beauty could live in something so small. Two
          years of confectionery school followed, then a national
          confectioner&rsquo;s licence{" "}
          <span className="jp-term">(seika eiseishi)</span>, then three years
          of apprenticeship in Tokyo.
        </>
      ),
      p3: "Now she is back home, raising her children and shaping this workshop so that people passing through the Kiso can meet nerikiri for themselves. Her craft doesn’t stop at the sweets — the old house, kept as it felt a century ago, and the unhurried time you spend in it are part of the work too.",
      quote:
        "“Nerikiri, as far as I know, hasn’t changed — not in the old days, not now. A few ingredients, a few simple tools, and the rest is the maker’s hands. It’s a craftsman’s world — I’m still learning it myself.”",
      cite: "— Makiko",
      kicker:
        "The workshop follows her lead: the same paste, the same few tools — and your own two hands, finding out what they can do.",
      chips: [
        "Kiso born and raised",
        "Licensed confectioner (seika eiseishi)",
        "3 years’ training in Tokyo",
      ],
      caption: "Makiko, serving matcha in the tatami room.",
      alt: "Makiko Koide kneeling on the tatami, whisking a bowl of matcha for a guest",
    },
    book: {
      eyebrow: "One thing to know",
      h2: "This one takes a little planning.",
      p1: "Nerikiri is made fresh in small batches, and the bean paste is prepared by hand before you arrive.",
      schedule: "From November 2026, we take bookings for Wednesdays.",
      highlight: "Please reserve about a month ahead.",
      p2: "Book it when you plan your trip. The workshop is entirely indoors, so it keeps its place in your itinerary whatever the weather decides to do.",
      ctaWhatsApp: "Reserve on WhatsApp",
      ctaEmail: "Email us",
      talkPrefix: "Or call / text ",
      talkSuffix: ". English is fine.",
    },
    footer: {
      about:
        "A slow, hands-on wagashi workshop in the Kiso Valley. Run out of Kashiwaya guesthouse, Nagiso, Nagano.",
      explore: "Explore",
      connect: "Connect",
      emailUs: "Email us",
      copyright: "© 2026 Rainy Days in the Kiso · From Scratch LLC",
      location: "Nagiso, Nagano, Japan",
    },
  },
  ja: {
    nav: {
      challenge: "体験について",
      whatis: "練り切りとは",
      teacher: "講師紹介",
      reserve: "予約する",
      lang: "English",
      langHref: "/",
      langAria: "Switch to English",
    },
    hero: {
      place: "長野県南木曽町 · 木曽谷 · 旧中山道沿い",
      h1a: "中山道の四季を、",
      h1b: "ひとつの和菓子に。",
      sub: "築100年余りの蔵、囲炉裏のそばで行う屋内・体験型ワークショップ。茶席に供される繊細な季節の上生菓子「練り切り」を自分の手で形づくり、抹茶とともに味わいます。名づけて「ねりきりチャレンジ」。",
      cta1: "ねりきりチャレンジ",
      cta2: "予約方法",
    },
    challenge: {
      eyebrow: "メインイベント",
      h2: "ねりきりチャレンジ",
      p1: (
        <>
          囲炉裏のそば、築100年余りの蔵の中で。地元の作り手に手を添えてもらいながら、練り切りを花びら一枚ずつ、かたちづくっていきます。
        </>
      ),
      p2: "仕上げは、自分の作品を抹茶とともに。すべて屋内で行うので、空模様は気になりません。急がず、あたたかく、観光バスの行列からいちばん遠い一日を。",
      chips: ["約2時間", "屋内・囲炉裏ばた", "経験不問", "抹茶付き", "ご家族歓迎"],
      altBig: "木の皿に載せた手づくりの練り切り2つ",
      altIrori: "囲炉裏の間。自在鉤と障子",
      altKura: "古い蔵の内部。梁と箪笥",
    },
    whatis: {
      eyebrow: "はじめての方へ",
      h2: "練り切りとは",
      p1: (
        <>
          練り切りは、和菓子の中でも小さな宝石のような上生菓子。白餡にやわらかな季節の色をのせ、花や葉、果実のかたちを、すべて手で仕上げます。
        </>
      ),
      p2: "ひとつひとつが、つくられた瞬間の季節を写しとる小さな彫刻 — 春は桜、秋は紅葉、冬は雪のまるみ。抹茶の前に供される、見て美しく、食べておいしい菓子です。",
      p3: "私たちの練り切りは、旧中山道の四季とともに — 六月の雨には紫陽花、盛夏には向日葵、紅葉のころには菊。",
      lead: "今年の作品から — 季節の恵みのままに。",
      gallery: [
        {
          src: "/assets/nerikiri_ajisai.jpg",
          kanji: "紫陽花",
          caption: "六月の雨",
          alt: "紫陽花の練り切り。錦玉の青い花びらをのせた白い菓子",
        },
        {
          src: "/assets/nerikiri_himawari.jpg",
          kanji: "向日葵",
          caption: "盛夏",
          alt: "染付の皿に並んだ黄色い向日葵の練り切り",
        },
        {
          src: "/assets/nerikiri_hanabi.jpg",
          kanji: "花火",
          caption: "夏祭りの夜",
          alt: "花火を写したパステル色の練り切り",
        },
        {
          src: "/assets/nerikiri_kiku.jpg",
          kanji: "菊",
          caption: "深まる秋",
          alt: "淡い桃色の菊の練り切り",
        },
        {
          src: "/assets/nerikiri_usagi.jpg",
          kanji: "月兎",
          caption: "お月見",
          alt: "黒い皿にのった兎の練り切り2つ",
        },
      ],
    },
    teacher: {
      eyebrow: "講師紹介",
      h2: "小出真希子",
      p1: "真希子は木曽街道沿いの町に生まれました。その街道の四季が、いまの菓子づくりに息づいています。",
      p2: (
        <>
          進む道を決めたのは、京都で出会った練り切り。小さな菓子に宿る風味と美しさに心を打たれ、製菓専門学校で2年学び、国家資格「製菓衛生師」を取得。東京で3年の修業を積みました。
        </>
      ),
      p3: "いまは地元に戻り、子育てのかたわら、木曽を訪れる人に練り切りを知ってもらうため、このワークショップを形にしています。こだわりは菓子だけではありません。当時の面影を残す古民家という空間と、そこに流れるゆったりとした時間も、仕事の一部です。",
      quote:
        "「練り切りは、私の知る限り、昔も今も変わりません。少ない材料と少ない道具で、その人の腕しだい。職人の世界ですから — 私もまだ、知らないことばかりです。」",
      cite: "— 真希子",
      kicker:
        "ワークショップも、この言葉のとおり。同じ餡、同じわずかな道具 — そしてあなた自身の両手で、できることを確かめてください。",
      chips: ["木曽生まれ・木曽育ち", "製菓衛生師(国家資格)", "東京で3年の修業"],
      caption: "畳の間で抹茶を点てる真希子。",
      alt: "畳の上で客に抹茶を点てる小出真希子",
    },
    book: {
      eyebrow: "ひとつだけ、お願い",
      h2: "この体験は、少し前もって。",
      p1: "練り切りは少量ずつの手づくり。餡も、お越しに合わせて手で仕込みます。",
      schedule: "2026年11月より、毎週水曜日に受付しています。",
      highlight: "ご予約は、1ヶ月前を目安にお願いします。",
      p2: "旅の計画と一緒にご予約を。完全屋内なので、当日の天気に旅程を左右されることはありません。",
      ctaWhatsApp: "WhatsAppで予約する",
      ctaEmail: "メールで問い合わせ",
      talkPrefix: "お電話・SMSは ",
      talkSuffix: " へどうぞ。",
    },
    footer: {
      about:
        "木曽谷・南木曽の宿「柏屋」発。手を動かして楽しむ、ゆったりとした和菓子ワークショップ。",
      explore: "メニュー",
      connect: "連絡先",
      emailUs: "メール",
      copyright: "© 2026 Rainy Days in the Kiso · From Scratch LLC",
      location: "長野県南木曽町",
    },
  },
} as const;

export default function Landing({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <>
      <header className="nav" id="nav">
        <div className="wrap bar">
          <a href="#top" className="brand">
            <span className="dot" />
            Rainy Days · Kiso
          </a>
          <nav className="navlinks">
            <span className="menu-links">
              <a href="#challenge">{t.nav.challenge}</a>
              <a href="#whatis">{t.nav.whatis}</a>
              <a href="#teacher">{t.nav.teacher}</a>
            </span>
            <a href="#book" className="book">
              {t.nav.reserve}
            </a>
            <a
              href={t.nav.langHref}
              className="lang"
              aria-label={t.nav.langAria}
            >
              {t.nav.lang}
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="wrap hero-inner">
          <p className="place">{t.hero.place}</p>
          <h1>
            {t.hero.h1a}
            <br />
            <span className="warm serif-em">{t.hero.h1b}</span>
          </h1>
          <p className="sub">{t.hero.sub}</p>
          <div className="cta-row">
            <a href="#challenge" className="btn btn-primary">
              {t.hero.cta1} <span className="arrow">&rarr;</span>
            </a>
            <a href="#book" className="btn btn-ghost on-dark">
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      <section className="challenge reveal" id="challenge">
        <div className="wrap grid">
          <div className="body">
            <p className="eyebrow">{t.challenge.eyebrow}</p>
            <h2>{t.challenge.h2}</h2>
            <p>{t.challenge.p1}</p>
            <p>{t.challenge.p2}</p>
            <div className="meta">
              {t.challenge.chips.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
          <div className="photostack">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="big" src="/assets/wagashi.jpg" alt={t.challenge.altBig} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sm" src="/assets/irori.jpg" alt={t.challenge.altIrori} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sm" src="/assets/kura.jpg" alt={t.challenge.altKura} />
          </div>
        </div>
      </section>

      <section className="whatis reveal" id="whatis">
        <div className="wrap inner">
          <p className="eyebrow">{t.whatis.eyebrow}</p>
          <h2>{t.whatis.h2}</h2>
          <div className="rule" />
          <p>{t.whatis.p1}</p>
          <p>{t.whatis.p2}</p>
          <p>{t.whatis.p3}</p>
        </div>
        <div className="wrap seasons">
          <p className="lead serif-em">{t.whatis.lead}</p>
          <div className="strip">
            {t.whatis.gallery.map((g) => (
              <figure key={g.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>
                  <span className="kanji">{g.kanji}</span> {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="teacher reveal" id="teacher">
        <div className="wrap grid">
          <figure className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tea_service.jpg" alt={t.teacher.alt} />
            <figcaption>{t.teacher.caption}</figcaption>
          </figure>
          <div className="body">
            <p className="eyebrow">{t.teacher.eyebrow}</p>
            <h2>{t.teacher.h2}</h2>
            <p>{t.teacher.p1}</p>
            <p>{t.teacher.p2}</p>
            <p>{t.teacher.p3}</p>
            <blockquote className="mkquote">
              <p>{t.teacher.quote}</p>
              <cite>{t.teacher.cite}</cite>
            </blockquote>
            <p>{t.teacher.kicker}</p>
            <div className="meta">
              {t.teacher.chips.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="book-sec reveal" id="book">
        <div className="wrap inner">
          <p className="eyebrow on-dark">{t.book.eyebrow}</p>
          <h2>{t.book.h2}</h2>
          <p>{t.book.p1}</p>
          <p>{t.book.schedule}</p>
          <span className="highlight">{t.book.highlight}</span>
          <p>{t.book.p2}</p>
          <div className="cta-row">
            <a href={site.whatsapp} className="btn btn-primary">
              {t.book.ctaWhatsApp} <span className="arrow">&rarr;</span>
            </a>
            <a
              href={`mailto:${site.email}?subject=Nerikiri%20Challenge%20booking`}
              className="btn btn-ghost on-dark"
            >
              {t.book.ctaEmail}
            </a>
          </div>
          <p className="talk">
            {t.book.talkPrefix}
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            {t.book.talkSuffix}
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap footer-top">
          <div>
            <div className="brand">
              <span className="dot" />
              Rainy Days · Kiso
            </div>
            <p className="about">{t.footer.about}</p>
          </div>
          <div>
            <h4>{t.footer.explore}</h4>
            <ul>
              <li>
                <a href="#challenge">{t.nav.challenge}</a>
              </li>
              <li>
                <a href="#whatis">{t.nav.whatis}</a>
              </li>
              <li>
                <a href="#teacher">{t.nav.teacher}</a>
              </li>
              <li>
                <a href="#book">{t.nav.reserve}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.connect}</h4>
            <ul>
              <li>
                <a href={site.instagram}>Instagram</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{t.footer.emailUs}</a>
              </li>
              <li>
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.location}</span>
        </div>
      </footer>

      <Effects />
    </>
  );
}
