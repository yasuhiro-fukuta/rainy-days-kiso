import Effects from "@/components/Effects";
import { site } from "@/lib/site";

export default function Home() {
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
              <a href="#challenge">The Challenge</a>
              <a href="#whatis">What&rsquo;s nerikiri</a>
              <a href="#teacher">Your teacher</a>
            </span>
            <a href="#book" className="book">
              Reserve
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="wrap hero-inner">
          <p className="place">Nagiso · Kiso Valley · On the old Nakasendo</p>
          <h1>
            The Nakasendo&rsquo;s Seasons,
            <br />
            <span className="warm serif-em">Captured in a Sweet</span>
          </h1>
          <p className="sub">
            An indoor, hands-on workshop by the hearth of a century-old
            storehouse: shape nerikiri &mdash; the delicate seasonal sweets of
            the Japanese tea ceremony &mdash; with your own hands, then eat them
            with a bowl of matcha. We call it the Nerikiri Challenge.
          </p>
          <div className="cta-row">
            <a href="#challenge" className="btn btn-primary">
              The Nerikiri Challenge <span className="arrow">&rarr;</span>
            </a>
            <a href="#book" className="btn btn-ghost on-dark">
              How to reserve
            </a>
          </div>
        </div>
      </section>

      <section className="challenge reveal" id="challenge">
        <div className="wrap grid">
          <div className="body">
            <p className="eyebrow">The main event</p>
            <h2>The Nerikiri Challenge</h2>
            <p>
              By an <em>irori</em> hearth, inside a century-old <em>kura</em>{" "}
              storehouse, you&rsquo;ll shape nerikiri &mdash; the delicate
              seasonal sweets served at Japanese tea ceremonies &mdash; petal by
              petal, with a local guiding your hands.
            </p>
            <p>
              Then you sit and eat your own little work with a bowl of matcha.
              Everything happens indoors, whatever the sky is doing &mdash;
              unhurried, warm, and about as far from a tour-bus queue as a day
              in Japan can get.
            </p>
            <div className="meta">
              <span>&asymp; 2 hours</span>
              <span>Indoors, by the hearth</span>
              <span>All skill levels</span>
              <span>Matcha included</span>
              <span>Family-friendly</span>
            </div>
          </div>
          <div className="photostack">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="big"
              src="/assets/wagashi.jpg"
              alt="Two hand-shaped nerikiri sweets on a wooden plate"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="sm"
              src="/assets/irori.jpg"
              alt="The irori hearth room, hanging pot hook and shoji screens"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="sm"
              src="/assets/kura.jpg"
              alt="Inside the old kura storehouse, timber beams and tansu chests"
            />
          </div>
        </div>
      </section>

      <section className="whatis reveal" id="whatis">
        <div className="wrap inner">
          <p className="eyebrow">First time hearing the word?</p>
          <h2>So, what is nerikiri?</h2>
          <div className="rule" />
          <p>
            Nerikiri <span className="jp">(&#x7DF4;&#x308A;&#x5207;&#x308A;)</span>{" "}
            is one of the small jewels of Japanese confectionery: sweetened
            white-bean paste, tinted in soft seasonal colours and shaped entirely
            by hand into flowers, leaves, and fruit.
          </p>
          <p>
            Each one is a tiny edible sculpture of the moment it&rsquo;s made in
            &mdash; cherry blossom in spring, red maple in autumn, snow-round and
            white in winter. They&rsquo;re the sweet traditionally served just
            before matcha, made to be as lovely to look at as they are to eat.
          </p>
          <p>
            Ours follow the seasons of the old Nakasendo &mdash; hydrangea in
            the June rains, sunflowers in high summer, chrysanthemum as the
            maples turn.
          </p>
        </div>
        <div className="wrap seasons">
          <p className="lead serif-em">
            A few of ours from this year &mdash; whatever the season hands us.
          </p>
          <div className="strip">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/nerikiri_ajisai.jpg"
                alt="Ajisai nerikiri — white sweets topped with jewel-blue hydrangea petals of kingyoku jelly"
                loading="lazy"
              />
              <figcaption>
                <span className="kanji">紫陽花</span> Hydrangea &mdash; the June
                rains
              </figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/nerikiri_himawari.jpg"
                alt="Himawari nerikiri — bright yellow sunflower sweets on a blue-and-white plate"
                loading="lazy"
              />
              <figcaption>
                <span className="kanji">向日葵</span> Sunflower &mdash; high
                summer
              </figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/nerikiri_hanabi.jpg"
                alt="Hanabi nerikiri — pastel sweets patterned like fireworks bursting"
                loading="lazy"
              />
              <figcaption>
                <span className="kanji">花火</span> Fireworks &mdash; festival
                nights
              </figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/nerikiri_kiku.jpg"
                alt="Kiku nerikiri — pale pink chrysanthemum sweets, petals drawn with a wooden blade"
                loading="lazy"
              />
              <figcaption>
                <span className="kanji">菊</span> Chrysanthemum &mdash; deep
                autumn
              </figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/nerikiri_usagi.jpg"
                alt="Usagi nerikiri — two little rabbit-shaped sweets on a black plate"
                loading="lazy"
              />
              <figcaption>
                <span className="kanji">月兎</span> Moon rabbit &mdash;
                moon-viewing
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="teacher reveal" id="teacher">
        <div className="wrap grid">
          <figure className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tea_service.jpg"
              alt="Makiko Koide kneeling on the tatami, whisking a bowl of matcha for a guest"
            />
            <figcaption>Makiko, serving matcha in the tatami room.</figcaption>
          </figure>
          <div className="body">
            <p className="eyebrow">Your teacher</p>
            <h2>Meet Makiko Koide</h2>
            <p>
              Makiko was born in a town along the old Kiso Road &mdash; the
              mountain highway whose seasons now shape her sweets.
            </p>
            <p>
              It was Kyoto&rsquo;s nerikiri that set her course: she was struck
              by how much flavour and beauty could live in something so small.
              Two years of confectionery school followed, then a national
              confectioner&rsquo;s licence{" "}
              <span className="jp-term">(seika eiseishi)</span>, then three
              years of apprenticeship in Tokyo.
            </p>
            <p>
              Now she is back home, raising her children and shaping this
              workshop so that people passing through the Kiso can meet
              nerikiri for themselves. Her craft doesn&rsquo;t stop at the
              sweets &mdash; the old house, kept as it felt a century ago, and
              the unhurried time you spend in it are part of the work too.
            </p>
            <blockquote className="mkquote">
              <p>
                &ldquo;Nerikiri, as far as I know, hasn&rsquo;t changed &mdash;
                not in the old days, not now. A few ingredients, a few simple
                tools, and the rest is the maker&rsquo;s hands. It&rsquo;s a
                craftsman&rsquo;s world &mdash; I&rsquo;m still learning it
                myself.&rdquo;
              </p>
              <cite>&mdash; Makiko</cite>
            </blockquote>
            <p>
              The workshop follows her lead: the same paste, the same few
              tools &mdash; and your own two hands, finding out what they can
              do.
            </p>
            <div className="meta">
              <span>Kiso born and raised</span>
              <span>Licensed confectioner (seika eiseishi)</span>
              <span>3 years&rsquo; training in Tokyo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="book-sec reveal" id="book">
        <div className="wrap inner">
          <p className="eyebrow on-dark">One thing to know</p>
          <h2>This one takes a little planning.</h2>
          <p>
            Nerikiri is made fresh in small batches, and the bean paste is
            prepared by hand before you arrive.
          </p>
          <span className="highlight">Please reserve about a month ahead.</span>
          <p>
            Book it when you plan your trip. The workshop is entirely indoors,
            so it keeps its place in your itinerary whatever the weather
            decides to do.
          </p>
          <div className="cta-row">
            <a href={site.whatsapp} className="btn btn-primary">
              Reserve on WhatsApp <span className="arrow">&rarr;</span>
            </a>
            <a
              href={`mailto:${site.email}?subject=Nerikiri%20Challenge%20booking`}
              className="btn btn-ghost on-dark"
            >
              Email us
            </a>
          </div>
          <p className="talk">
            Or call / text{" "}
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>. English is
            fine.
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
            <p className="about">
              A slow, hands-on wagashi workshop in the Kiso Valley. Run out of
              Kashiwaya guesthouse, Nagiso, Nagano.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#challenge">The Challenge</a>
              </li>
              <li>
                <a href="#whatis">What&rsquo;s nerikiri</a>
              </li>
              <li>
                <a href="#teacher">Your teacher</a>
              </li>
              <li>
                <a href="#book">Reserve</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href={site.instagram}>Instagram</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>Email us</a>
              </li>
              <li>
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>&copy; 2026 Rainy Days in the Kiso · From Scratch LLC</span>
          <span>Nagiso, Nagano, Japan</span>
        </div>
      </footer>

      <Effects />
    </>
  );
}
