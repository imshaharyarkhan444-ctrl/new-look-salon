export default function About() {
  const features = [
    {
      title: "Skilled Stylists",
      desc: "Years of experience in modern cuts, fades, and classic styling.",
    },
    {
      title: "Clean Environment",
      desc: "A friendly, hygienic space designed for your comfort.",
    },
    {
      title: "Trusted in Almere",
      desc: "Hundreds of satisfied customers and 4.8 stars on Google.",
    },
  ];

  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/salon-interior.jpg"
                alt="New Look Hair Salon interior with premium gold barber chairs"
                className="w-full h-[480px] sm:h-[560px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Gold accent card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[var(--color-gold)] text-black rounded-2xl px-6 py-5 shadow-lg max-w-[220px]">
              <div className="font-display text-3xl leading-none">10+</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold-dark)] font-semibold">
              About the Salon
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
              A premium grooming experience in the heart of Almere.
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              At New Look Hair Salon, we combine craftsmanship with care.
              Whether you're after a sharp fade, a classic cut, refined beard
              styling, or a fresh hair colour — our team delivers polished
              results in a relaxed, welcoming setting.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Trusted by hundreds of clients across Almere, we open every day
              of the week so you can drop in when it works for you.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="border border-neutral-200 rounded-xl p-5 hover:border-[var(--color-gold)] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[var(--color-gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="font-semibold text-sm text-black">{f.title}</div>
                  <div className="mt-1 text-xs text-neutral-500 leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
