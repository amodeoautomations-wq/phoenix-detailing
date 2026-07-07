export default function Reviews() {
  const reviews = [
    {
      name: "Chris Amodeo",
      review:
        "Paolo is truly amazing and professional. He knows what he's doing. Best detail for the price and they're mobile on the spot. Highly recommend. My detail came out perfect.",
    },
    {
      name: "Tristán Szakács",
      review:
        "My car came out immaculate. I purchased the highest tier package and will definitely be getting it again next year. Mobile service for monthly cleaning is also incredibly convenient.",
    },
    {
      name: "Danielle Beach",
      review:
        "He is literally always the best and always does an amazing job. He's the easiest person to communicate with and the quality of work is outstanding every single time.",
    },
    {
      name: "Yana Molina",
      review:
        "Phoenix Detailing did an impeccable job on my Jeep Gladiator. The attention to detail, inside and out, was outstanding. My vehicle looks spotless and refreshed.",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#050505] py-32 px-6"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_60%)]"></div>

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-20 text-center">

          <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl">

            <span className="text-3xl text-yellow-400">
              ★★★★★
            </span>

            <div>

              <p className="text-left text-2xl font-bold text-white">
                5.0 Google Rating
              </p>

              <p className="text-left text-sm text-gray-400">
                Trusted by Long Island Drivers
              </p>

            </div>

          </div>

          <h2 className="mt-10 text-5xl font-black text-white md:text-6xl">
            Real Reviews.
            <span className="block text-blue-500">
              Real Results.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Customer satisfaction is our highest priority. These reviews come
            directly from real Phoenix Detailing customers who trusted us with
            their vehicles.
          </p>

        </div>

        {/* Reviews */}

        <div className="grid gap-8 md:grid-cols-2">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_25px_60px_rgba(59,130,246,.30)]"
            >

              <div className="mb-6 text-2xl text-yellow-400">
                ★★★★★
              </div>

              <p className="italic leading-8 text-gray-300">
                "{review.review}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <h3 className="text-2xl font-bold text-white transition group-hover:text-blue-400">
                  {review.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  Verified Google Review
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Button */}

        <div className="mt-20 flex justify-center">

          <a
            href="https://maps.app.goo.gl/a679m23RHeqJFRZU6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-10 py-4 text-lg font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,.45)]"
          >
            View All Google Reviews →
          </a>

        </div>

      </div>
    </section>
  );
}