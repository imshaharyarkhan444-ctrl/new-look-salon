const reviews = [
  {
    name: "Daniel V.",
    rating: 5,
    text: "Best barber in Almere! Clean shop, friendly staff, and my fade was perfect. Highly recommend.",
    when: "2 weeks ago",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text: "Amazing experience. They took their time with my colour and the result is exactly what I wanted.",
    when: "1 month ago",
  },
  {
    name: "Mark de Boer",
    rating: 5,
    text: "Open every day which is super convenient. Professional service and great atmosphere.",
    when: "3 weeks ago",
  },
  {
    name: "Ahmed R.",
    rating: 5,
    text: "Top kapper! Great haircut and beard trim. The place looks premium and the team is skilled.",
    when: "1 week ago",
  },
  {
    name: "Lisa K.",
    rating: 4,
    text: "Lovely salon and very welcoming staff. My daughter loves coming here for her haircuts.",
    when: "2 months ago",
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-[var(--color-gold)]" : "text-neutral-300"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.366 2.444a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10.001 15.347l-3.366 2.444c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.653 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-black py-20 sm:py-28 overflow-hidden">
      {/* Decorative gold gradient */}
      <div className="absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(ellipse_at_top,rgba(201,169,106,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Left summary */}
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)] font-semibold">
              Reviews
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              Loved by clients across Almere.
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <div className="font-display text-6xl text-white leading-none">
                4.8
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} filled={i <= 5} />
                  ))}
                </div>
                <div className="mt-1 text-sm text-white/60">
                  Based on 195+ Google reviews
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/New+Look+Almere"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)]"
            >
              Read all reviews on Google
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Reviews grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-[var(--color-gold)]/40 transition-colors"
              >
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} filled={i <= r.rating} />
                  ))}
                </div>
                <blockquote className="mt-4 text-white/85 text-sm leading-relaxed">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-gold)] text-black flex items-center justify-center font-semibold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{r.name}</div>
                    <div className="text-white/50 text-xs">{r.when}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
