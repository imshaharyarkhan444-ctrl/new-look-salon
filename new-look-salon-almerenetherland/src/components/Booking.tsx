import { useState } from "react";

const services = [
  "Men's Haircut",
  "Women's Haircut",
  "Beard Styling",
  "Hair Coloring",
  "Wash & Treatment",
  "Kids Haircut",
  "Other",
];

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0] });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello New Look Almere! I'd like to book an appointment.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}`
    );
    window.open(`https://wa.me/31642544898?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left CTA */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold-dark)] font-semibold">
              Booking
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
              Book your appointment today.
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed max-w-md">
              Reach out by phone, WhatsApp, or send us a quick request — we'll
              confirm your time slot right away. Open 7 days a week.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:+31642544898"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black hover:bg-neutral-800 text-white px-6 py-3.5 text-sm font-semibold transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a13.5 13.5 0 01-6.064-6.064l1.293-.97c.362-.271.527-.733.417-1.173L8.872 5.106A1.125 1.125 0 007.78 4.25H6.41a2.25 2.25 0 00-2.25 2.25v.25z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/31642544898"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1eb656] text-white px-6 py-3.5 text-sm font-semibold transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.9L4 20l4.2-1.1a7.93 7.93 0 003.85.98h.01a7.94 7.94 0 005.61-13.56h-.07zm-5.55 12.21h-.01a6.6 6.6 0 01-3.36-.92l-.24-.14-2.5.66.67-2.43-.16-.25a6.6 6.6 0 1112.24-3.5 6.6 6.6 0 01-6.64 6.58zm3.62-4.94c-.2-.1-1.17-.58-1.35-.65-.18-.07-.31-.1-.45.1-.13.2-.51.65-.62.78-.12.13-.23.15-.42.05-.2-.1-.84-.31-1.6-.99-.59-.53-1-1.18-1.11-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.35.05-.53.25-.18.2-.7.69-.7 1.67s.71 1.94.81 2.07c.1.13 1.4 2.13 3.39 2.99.47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.12-.94-.05-.08-.18-.13-.38-.23z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Open 7 days a week
              </div>
              <span className="w-px h-4 bg-neutral-300" />
              <div>09:00 — 18:00</div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] p-6 sm:p-8 border border-neutral-200/70">
            <h3 className="font-display text-xl text-black">Quick request</h3>
            <p className="text-sm text-neutral-500 mt-1">
              Send us your details — we'll get back to you on WhatsApp.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Full name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Phone number
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+31 6 12345678"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Service
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 transition"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-black px-6 py-3.5 text-sm font-semibold transition-colors"
              >
                Send Request
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>

              {submitted && (
                <p className="text-xs text-green-600 text-center">
                  Opening WhatsApp… please send the message to confirm.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
