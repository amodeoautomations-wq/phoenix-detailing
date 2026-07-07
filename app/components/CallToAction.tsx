export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-black to-blue-900/20"></div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <p className="font-semibold uppercase tracking-[0.4em] text-blue-500">
          Ready To Get Started?
        </p>

        <h2 className="mt-6 text-5xl font-black text-white md:text-7xl">
          Give Your Vehicle
          <br />
          The Attention It Deserves.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-400">
          Whether you're looking for a premium detail, ceramic coating,
          paint correction, window tint, or paint protection film,
          Phoenix Detailing is ready to transform your vehicle.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          {/* Book Appointment */}

          <a
            href="https://myservicelink.app/phoenixdetailingli"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-10 py-5 text-lg font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,.45)] transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </a>

          {/* Call Now */}

          <a
            href="tel:+19342008660"
            className="rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}