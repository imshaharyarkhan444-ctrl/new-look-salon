export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-salon.jpg"
          alt="Interior of New Look Hair Salon in Almere"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
      </div>

      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 pt-28 pb-20 sm:pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-4 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/85">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
            Open 7 Days a Week — Almere
          </div>

          <h1 className="mt-6 font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            New Look
            <span className="block text-[var(--color-gold)]">Hair Salon</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
            Professional hair styling and modern cuts in Almere. A premium
            barbershop experience crafted by skilled stylists who care about
            every detail.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-black px-6 py-3.5 text-sm font-semibold transition-colors"
            >
              Book Appointment
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:+31642544898"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a13.5 13.5 0 01-6.064-6.064l1.293-.97c.362-.271.527-.733.417-1.173L8.872 5.106A1.125 1.125 0 007.78 4.25H6.41a2.25 2.25 0 00-2.25 2.25v.25z" />
              </svg>
              Call +31 6 42544898
            </a>
          </div>

          {/* Rating chip */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-black/40 border border-white/15 backdrop-blur px-4 py-3">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-4 h-4 text-[var(--color-gold)]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.366 2.444a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10.001 15.347l-3.366 2.444c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.653 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <div className="text-white text-sm leading-tight">
              <div className="font-semibold">4.8 / 5 on Google</div>
              <div className="text-white/60 text-xs">195+ verified reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
