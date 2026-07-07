import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.JPG"
        alt="Phoenix Detailing"
        fill
        priority
        className="object-cover object-center -z-20"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Blue Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_60%)] -z-10"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        <Image
          src="/images/logo.png"
          alt="Phoenix Detailing"
          width={600}
          height={600}
          className="mb-8 h-auto w-64 md:w-80 lg:w-[420px]"
          priority
        />

        <h1 className="text-5xl font-black text-white md:text-7xl">
          Phoenix Detailing
        </h1>

        <p
          className="mt-5 text-2xl text-blue-400"
          style={{
            fontFamily: "var(--font-orbitron)",
            letterSpacing: "0.08em",
          }}
        >
          Elevate The Way You Drive
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
          Premium mobile auto detailing serving Long Island and Suffolk County.
          Ceramic coatings, paint correction, window tint, paint protection
          film, and professional interior & exterior detailing.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="https://myservicelink.app/phoenixdetailingli"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-10 py-5 text-lg font-bold text-white shadow-[0_0_35px_rgba(59,130,246,.45)] transition-all duration-300 hover:scale-105"
          >
            Book Now
          </a>

          <a
            href="tel:+19342008660"
            className="rounded-full border border-white/20 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            Call Now
          </a>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
}