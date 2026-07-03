import { navItems, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-black px-4 py-14 text-paper sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.7fr_0.8fr]">
        <div>
          <p className="text-4xl font-black leading-none tracking-[-0.04em]">{site.name}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-paper/66">{site.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="button button-bright" href={site.mapsUrl}>
              Get Directions
            </a>
            <a className="button button-outline" href={site.instagramUrl}>
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm text-paper/68">
            {navItems.map((item) => (
              <a className="transition hover:text-paper" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-title">Find Us</h3>
          <div className="mt-5 space-y-4 text-sm leading-6 text-paper/68">
            <p>
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </p>
            <a className="transition hover:text-paper" href={site.instagramUrl}>
              {site.instagram}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-paper/42 sm:flex-row sm:items-center sm:justify-between">
        <p>Local print studio in Sunnyside, Queens.</p>
        <p>Print with pride.</p>
      </div>
    </footer>
  );
}
