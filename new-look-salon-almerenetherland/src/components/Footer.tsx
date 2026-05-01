export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-[var(--color-gold)] flex items-center justify-center">
                <span className="font-display text-[var(--color-gold)] text-xs">NL</span>
              </div>
              <div>
                <div className="font-display text-lg">New Look</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/60">
                  Almere
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Premium hair styling and modern cuts in the heart of Almere. Open
              every day of the week.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#prices" className="hover:text-white">Prices</a></li>
              <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Markerkant 10 132D, 1316 AL Almere</li>
              <li>
                <a href="tel:+31642544898" className="hover:text-white">+31 6 42544898</a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/new_look_almere/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram: @new_look_almere
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} New Look Hair Salon Almere. All rights reserved.</div>
          <div>Open 7 days a week · 09:00 — 18:00</div>
        </div>
      </div>
    </footer>
  );
}
