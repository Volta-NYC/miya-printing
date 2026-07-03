import { ColorStrip, HeroPrintStack } from "@/components/print-visuals";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { process, proofPoints, services, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative isolate min-h-screen overflow-hidden bg-ink pt-24 text-paper">
          <div className="absolute inset-0 -z-10 opacity-70">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,200,255,0.2),transparent_28%),radial-gradient(circle_at_85%_74%,rgba(255,77,166,0.18),transparent_25%),linear-gradient(135deg,#07090c_0%,#10151d_50%,#07090c_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-72 bg-[linear-gradient(180deg,transparent,#07090c)]" />
          </div>

          <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
            <div>
              <h1 className="max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.07em] sm:text-8xl lg:text-9xl">
                Print with Pride
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/72">
                Miya Graphics & Print turns menus, cards, flyers, stickers, canvas prints, and
                custom pieces into sharp, ready-to-use work for Sunnyside businesses and neighbors.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-bright" href={site.mapsUrl}>
                  Visit the Shop
                </a>
                <a className="button button-outline" href="#services">
                  See Services
                </a>
                <a className="button button-ghost" href={site.instagramUrl}>
                  {site.instagram}
                </a>
              </div>
            </div>

            <HeroPrintStack />
          </div>
        </section>

        <section className="overflow-hidden border-y border-black bg-yellow py-4 text-ink">
          <div className="ticker-track flex min-w-max gap-8 text-sm font-black uppercase tracking-[0.22em]">
            {[...proofPoints, ...proofPoints, ...proofPoints].map((item, index) => (
              <span className="flex items-center gap-8" key={`${item}-${index}`}>
                {item}
                <span className="h-2 w-2 rounded-full bg-magenta" />
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="bg-paper px-4 py-20 text-ink sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
              <div>
                <p className="eyebrow text-magenta">Services</p>
                <h2 className="mt-4 max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                  The everyday print runs that keep local shops moving.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-ink/68 lg:justify-self-end">
                Keep it simple: bring a print-ready file or a project idea, choose the finish, and
                get crisp pieces made close to home on Queens Boulevard.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {services.map((service, index) => (
                <RevealOnScroll delay={index * 120} key={service.title}>
                  <article className={`service-card accent-${service.accent}`}>
                    <p className="service-number">0{index + 1}</p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink px-4 py-20 text-paper sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div>
              <p className="eyebrow text-cyan">Print, Cut, Fold</p>
              <h2 className="mt-4 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
                Restaurant menus are the house specialty.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/68">
                Public posts from Miya highlight same-day trifold takeout menus, a useful niche for
                restaurants, cafes, salons, event vendors, and neighborhood businesses that need
                polished material without a long production cycle.
              </p>
            </div>

            <RevealOnScroll>
              <div className="process-panel">
                <ColorStrip />
                {process.map((item, index) => (
                  <div className="process-row" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section id="work" className="bg-paper text-ink">
          <div className="grid lg:grid-cols-2">
            <div className="min-h-[34rem] bg-black p-4 sm:p-6 lg:p-8">
              <div className="sample-board">
                <RevealOnScroll className="sample-reveal sample-poster-reveal">
                  <div className="sample-poster">
                    <span>MENU</span>
                    <b>Folded</b>
                    <i />
                  </div>
                </RevealOnScroll>
                <RevealOnScroll className="sample-reveal sample-card-reveal cyan-card-reveal" delay={100}>
                  <div className="sample-card cyan-card">
                    <span>Business Cards</span>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll
                  className="sample-reveal sample-card-reveal magenta-card-reveal"
                  delay={180}
                >
                  <div className="sample-card magenta-card">
                    <span>Stickers</span>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll className="sample-reveal sample-canvas-reveal" delay={260}>
                  <div className="sample-canvas">
                    <span>Canvas Prints</span>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
            <div className="flex items-center px-4 py-20 sm:px-6 lg:px-16">
              <div>
                <p className="eyebrow text-orange">Work</p>
                <h2 className="mt-4 max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                  Graphic pieces with a little storefront electricity.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-ink/68">
                  The site keeps the energy direct: big typography, a strong first impression, and
                  product-like moments that feel darker and sharper with CMYK color hits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="bg-cyan px-4 py-20 text-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow text-ink/60">Visit</p>
              <h2 className="mt-4 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
                Find Miya on Queens Boulevard.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
                {site.addressLine1}, {site.addressLine2}. Near the 7 train in Sunnyside, ready for
                local pickup runs and custom print questions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="button button-dark" href={site.mapsUrl}>
                  Get Directions
                </a>
                <a className="button button-dark-outline" href={site.instagramUrl}>
                  Instagram
                </a>
              </div>
            </div>

            <RevealOnScroll>
              <div className="map-card">
                <iframe
                  aria-label="Google Map showing Miya Graphics & Print at 42-07 Queens Blvd, Sunnyside, NY"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={site.mapEmbedUrl}
                  title="Miya Graphics & Print location"
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section id="contact" className="bg-paper px-4 py-20 text-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow text-magenta">Contact</p>
              <h2 className="mt-4 max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Start with a file, a deadline, or a rough idea.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink/68">
                For quotes and quick questions, message Miya on Instagram or stop by the shop with
                your print specs. Keep file size, quantity, paper choice, and pickup timing handy.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <RevealOnScroll>
                <article className="contact-card">
                  <p className="eyebrow text-cyan">Message</p>
                  <h3>Instagram DM</h3>
                  <p>{site.instagram}</p>
                  <a className="button button-bright mt-7" href={site.instagramUrl}>
                    Open Instagram
                  </a>
                </article>
              </RevealOnScroll>
              <RevealOnScroll delay={120}>
                <article className="contact-card contact-card-dark">
                  <p className="eyebrow text-yellow">In Person</p>
                  <h3>Visit the counter</h3>
                  <p>
                    {site.addressLine1}
                    <br />
                    {site.addressLine2}
                  </p>
                  <a className="button button-outline mt-7" href={site.mapsUrl}>
                    Get Directions
                  </a>
                </article>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
