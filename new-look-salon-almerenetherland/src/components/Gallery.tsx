const images = [
  { src: "/images/salon-interior.jpg", alt: "Premium salon chairs and mirrors", className: "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" },
  { src: "/images/haircut-men.jpg", alt: "Modern men's haircut" },
  { src: "/images/beard-styling.jpg", alt: "Beard styling and shave" },
  { src: "/images/hair-coloring.jpg", alt: "Hair coloring result" },
  { src: "/images/reception.jpg", alt: "Salon reception desk" },
  { src: "/images/hair-wash.jpg", alt: "Luxury hair wash" },
  { src: "/images/storefront.jpg", alt: "New Look Almere storefront" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold-dark)] font-semibold">
              Gallery
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
              A look inside the salon.
            </h2>
          </div>
          <p className="text-neutral-600 max-w-sm text-sm leading-relaxed">
            A modern, welcoming space designed for your most relaxing grooming
            experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`zoom-parent relative overflow-hidden rounded-xl bg-neutral-100 ${img.className ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="zoom-img w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
