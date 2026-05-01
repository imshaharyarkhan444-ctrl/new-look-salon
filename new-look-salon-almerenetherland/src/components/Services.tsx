type Service = {
  title: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Men's Haircut",
    desc: "Classic to modern cuts, fades, and detailed styling tailored to you.",
    price: "from €20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path strokeLinecap="round" d="M8.5 16L20 4M15.5 16L4 4" />
      </svg>
    ),
  },
  {
    title: "Women's Haircut",
    desc: "Precision cuts and personalised styling for every length and texture.",
    price: "from €28",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a5 5 0 00-5 5v3c0 4 5 10 5 10s5-6 5-10V8a5 5 0 00-5-5z" />
        <circle cx="12" cy="9" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Beard Styling",
    desc: "Razor-sharp lines and traditional shaves for a refined finish.",
    price: "from €10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8c2-3 5-4 7-4s5 1 7 4c0 6-3 12-7 12S5 14 5 8z" />
        <path strokeLinecap="round" d="M9 11h.01M15 11h.01" />
      </svg>
    ),
  },
  {
    title: "Hair Coloring",
    desc: "Balayage, highlights and full colour using premium products.",
    price: "from €40",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l5 6a5 5 0 11-10 0l5-6z" />
      </svg>
    ),
  },
  {
    title: "Wash & Treatment",
    desc: "Hair wash, deep conditioning, and protein treatments to restore shine.",
    price: "from €3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M6 12c0 4 3 7 6 7s6-3 6-7M8 8c0-2 2-4 4-4s4 2 4 4" />
      </svg>
    ),
  },
  {
    title: "Kids Haircut",
    desc: "Gentle, friendly cuts for children up to 10 years old.",
    price: "€17",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold-dark)] font-semibold">
            Our Services
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
            Crafted with care, finished with style.
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            From everyday cuts to full transformations — every service is
            delivered with attention to detail.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/70 hover:border-[var(--color-gold)] hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-xl bg-black text-[var(--color-gold)] flex items-center justify-center group-hover:bg-[var(--color-gold)] group-hover:text-black transition-colors">
                  {s.icon}
                </div>
                <span className="text-xs font-medium text-[var(--color-gold-dark)] bg-[var(--color-gold-light)]/40 rounded-full px-3 py-1">
                  {s.price}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl text-black">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
