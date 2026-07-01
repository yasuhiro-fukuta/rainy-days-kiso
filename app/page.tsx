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
              <a href="#bonus">Shower Cycling</a>
            </span>
            <a href="#book" className="book">
              Reserve
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg" />
        <div id="rain" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="place">Nagiso · Kiso Valley · Japan&rsquo;s quiet season</p>
          <h1>
            Enjoy the rain.
            <br />
            <span className="warm serif-em">The crowds never do.</span>
          </h1>
          <p className="sub">
            You chose the quiet season on purpose &mdash; fewer people, slower
            days, kinder prices. So when the clouds settle over the Kiso,
            don&rsquo;t wait them out. Spend a soft grey afternoon by the hearth,
            shaping little seasonal sweets with your own hands. We call it the
            Nerikiri Challenge.
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
              Then you sit and eat your own little work with a bowl of matcha
              while the rain keeps up outside. Unhurried, warm, and about as far
              from a tour-bus queue as a day in Japan can get.
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
            Ours change with whatever the Kiso is doing outside the window that
            day. Which, when it&rsquo;s raining, tends to be rather beautiful.
          </p>
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
            Book it when you plan your trip, not when the rain starts &mdash;
            think of it as your rainy-day insurance. In the quiet season, the
            odds of getting your soft grey afternoon are good.
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

      <section className="bonus reveal" id="bonus">
        <div className="wrap">
          <div className="card">
            <div className="top">
              <div className="copy">
                <p className="eyebrow">Bonus round</p>
                <h2>
                  Rather be <em>out</em> in it?
                </h2>
                <p>
                  Some people don&rsquo;t want to come in out of the weather
                  &mdash; they want to ride straight through it. That&rsquo;s a
                  whole different kind of fun, and it has its own home.
                </p>
                <p>
                  Our fat-tyre e-bikes don&rsquo;t care if it&rsquo;s pouring or
                  snowing. Pull on a rashguard, ride the valley&rsquo;s hidden
                  gorges, and let the weather be part of the day. We call it{" "}
                  <span className="name">Shower Cycling</span>.
                </p>
                <div className="cta-row">
                  <a
                    href={site.ebikeSite}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-primary"
                  >
                    See Shower Cycling <span className="arrow">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="art">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/ebike.jpg"
                  alt="Two black fat-tyre MOVE e-bikes, ready to ride in any weather"
                />
              </div>
            </div>
            <div className="wide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/gorge.jpg"
                alt="Emerald river gorge in the Kiso Valley"
              />
              <span className="cap">
                Where it takes you &mdash; the hidden gorges of the Kiso.
              </span>
            </div>
          </div>
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
              Slow, hands-on things to do when the weather turns in the Kiso
              Valley. Run out of Kashiwaya guesthouse, Nagiso, Nagano.
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
                <a href="#bonus">Shower Cycling</a>
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
              <li>
                <a href={site.ebikeSite} target="_blank" rel="noopener">
                  Beyond Nakasendo Cycling
                </a>
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
