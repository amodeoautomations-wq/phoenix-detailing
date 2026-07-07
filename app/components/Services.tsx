import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Ceramic Coating",
      description:
        "Long-lasting protection with incredible gloss, water beading, and resistance against the elements.",
      image: "/images/ceramic.jpg",
      href: "/services#ceramic-coating",
    },
    {
      title: "Paint Correction",
      description:
        "Remove swirl marks, oxidation, and light scratches to restore a flawless finish.",
      image: "/images/paint-correction.jpg",
      href: "/services#paint-correction",
    },
    {
      title: "Interior Detailing",
      description:
        "Deep cleaning and conditioning that makes your interior look and feel brand new.",
      image: "/images/interior.jpg",
      href: "/services#interior-detailing",
    },
    {
      title: "Exterior Detailing",
      description:
        "Professional wash, decontamination, polish, and protection for a showroom shine.",
      image: "/images/exterior.jpg",
      href: "/services#exterior-detailing",
    },
    {
      title: "Window Tint",
      description:
        "Premium tint installation for privacy, heat rejection, and a clean finished look.",
      image: "/images/tint.jpg",
      href: "/services#window-tint",
    },
    {
      title: "Paint Protection Film",
      description:
        "Invisible protection against rock chips, scratches, and road debris.",
      image: "/images/ppf.jpg",
      href: "/services#paint-protection-film",
    },
  ];

  return (
    <section id="services" className="bg-[#050505] py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">
          <p className="uppercase tracking-[0.4em] text-blue-400">
            Premium Services
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            Everything Your Vehicle Deserves
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every service is performed with premium products, professional
            equipment, and an obsession with perfection.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.35)]"
            >
              <div
                className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-block rounded-full border border-blue-500 px-6 py-3 text-blue-400 transition duration-300 hover:bg-blue-600 hover:text-white"
                >
                  Learn More →
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}