import { navItems, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07090c]/86 text-paper backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <a className="group flex items-center gap-3" href="#top" aria-label="Miya home">
          <span className="grid h-11 w-11 place-items-center border border-white/18 bg-white/[0.06] shadow-[5px_5px_0_#00c8ff]">
            <span className="font-black tracking-[-0.04em] text-paper">M</span>
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black tracking-wide">{site.shortName}</span>
            <span className="block text-[0.62rem] font-black uppercase tracking-[0.24em] text-paper/55">
              Graphics & Print
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 text-[0.72rem] font-black uppercase tracking-[0.18em] text-paper/68 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-bright" href={site.mapsUrl}>
          Directions
        </a>
      </div>
    </header>
  );
}
