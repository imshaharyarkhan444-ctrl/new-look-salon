const prices = [
  { name: "Kids (up to 10 years)", price: "17,00" },
  { name: "Men's Haircut", price: "20,00" },
  { name: "Hair Wash", price: "3,00" },
  { name: "Beard Trim & Shave", price: "10,00" },
  { name: "Haircut + Beard Shave + Wash", price: "28,00" },
  { name: "Threading / Wax (Full Face)", price: "20,00" },
  { name: "Facial Treatment", price: "25,00" },
  { name: "Women's Long Haircut", price: "28,00" },
  { name: "Hair Coloring (from)", price: "40,00" },
  { name: "Highlights (from)", price: "40,00" },
  { name: "Blow Dry (from)", price: "25,00" },
  { name: "Protein Hair Treatment (from)", price: "80,00" },
];

export default function Prices() {
  return (
    <section id="prices" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold-dark)] font-semibold">
            Prijzenlijst
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
            Honest, transparent pricing.
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Premium grooming and styling at fair prices — no hidden fees.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-[var(--color-cream)] rounded-2xl p-6 sm:p-10 border border-neutral-200/70">
          <ul className="divide-y divide-neutral-200/70">
            {prices.map((p) => (
              <li
                key={p.name}
                className="flex items-baseline justify-between gap-4 py-3.5"
              >
                <span className="text-[15px] text-neutral-800">{p.name}</span>
                <span className="flex-1 mx-3 border-b border-dotted border-neutral-300 translate-y-[-3px]" />
                <span className="font-display text-lg text-black tabular-nums">
                  €{p.price}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-black hover:bg-neutral-800 text-white px-6 py-3 text-sm font-semibold transition-colors"
            >
              Book Your Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
