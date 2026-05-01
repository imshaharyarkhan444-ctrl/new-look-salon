export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold-dark)] font-semibold">
            Visit Us
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
            Find us in Almere.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-neutral-200/70 shadow-sm h-[360px] sm:h-[460px]">
            <iframe
              title="New Look Hair Salon Almere — Map"
              src="https://www.google.com/maps?q=Markerkant+10+132D,+1316+AL+Almere,+Netherlands&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 grid gap-4">
            <InfoCard
              title="Address"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-7.5-7-12a7 7 0 1114 0c0 4.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              }
            >
              Markerkant 10 132D
              <br />
              1316 AL Almere, Netherlands
            </InfoCard>

            <InfoCard
              title="Phone"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a13.5 13.5 0 01-6.064-6.064l1.293-.97c.362-.271.527-.733.417-1.173L8.872 5.106A1.125 1.125 0 007.78 4.25H6.41a2.25 2.25 0 00-2.25 2.25v.25z" />
                </svg>
              }
            >
              <a href="tel:+31642544898" className="hover:text-[var(--color-gold-dark)]">
                +31 6 42544898
              </a>
            </InfoCard>

            <InfoCard
              title="Opening Hours"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" d="M12 7v5l3 2" />
                </svg>
              }
            >
              Open 7 days a week
              <br />
              09:00 — 18:00
            </InfoCard>

            <InfoCard
              title="Social"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              }
            >
              <a
                href="https://www.instagram.com/new_look_almere/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--color-gold-dark)]"
              >
                @new_look_almere
              </a>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 bg-[var(--color-cream)] rounded-xl p-5 border border-neutral-200/70">
      <div className="w-10 h-10 rounded-lg bg-black text-[var(--color-gold)] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
          {title}
        </div>
        <div className="mt-1 text-[15px] text-neutral-800 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
