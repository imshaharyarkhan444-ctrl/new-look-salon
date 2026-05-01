import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#prices", label: "Prices" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[var(--color-gold)] flex items-center justify-center bg-black">
                <span className="font-display text-[var(--color-gold)] text-[11px] sm:text-xs leading-none tracking-wide">
                  NL
                </span>
              </div>
            </div>
            <div className="leading-tight">
              <div
                className={`font-display text-base sm:text-lg tracking-wide ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                New Look
              </div>
              <div
                className={`text-[10px] sm:text-[11px] tracking-[0.25em] uppercase ${
                  scrolled ? "text-neutral-500" : "text-white/70"
                }`}
              >
                Almere
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-neutral-700 hover:text-black"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-black px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-t border-neutral-100 transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[15px] text-neutral-800 border-b border-neutral-100 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] text-black px-5 py-3 text-sm font-semibold"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
