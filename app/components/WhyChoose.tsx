export default function WhyChoose() {
  const features = [
    {
      title: "Mobile Convenience",
      description:
        "We come directly to your home or workplace, bringing professional detailing wherever you are.",
    },
    {
      title: "Premium Protection",
      description:
        "Ceramic coatings, paint protection film, and premium products that keep your vehicle looking flawless.",
    },
    {
      title: "Attention to Detail",
      description:
        "Every inch of your vehicle receives meticulous care for a showroom-quality finish.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Our goal is simple: exceed expectations and make every customer proud to drive their vehicle.",
    },
  ];

  return (
    <section className="bg-black py-28 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-blue-400">
            Why Choose Phoenix
          </p>

          <h2 className="text-5xl font-bold">
            Luxury Detailing.
            <br />
            Exceptional Results.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            We combine premium products, professional techniques, and a passion
            for perfection to give every vehicle the care it deserves.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:bg-blue-500/10"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}