import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-24 text-white">

        {/* Hero */}

        <section className="relative overflow-hidden border-b border-white/10 py-32">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]"></div>

          <div className="relative mx-auto max-w-7xl px-6 text-center">

            <Link
              href="/"
              className="mb-10 inline-block text-blue-400 transition hover:text-blue-300"
            >
              ← Back to Home
            </Link>

            <p className="font-semibold uppercase tracking-[0.4em] text-blue-500">
              PREMIUM SERVICES
            </p>

            <h1 className="mt-6 text-6xl font-black md:text-7xl">
              Luxury Auto Detailing
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-400">
              Every service is performed with premium products,
              professional equipment, and meticulous attention to detail.
              We treat every vehicle like it's our own.
            </p>

          </div>

        </section>

        {/* Ceramic Coating */}

        <section
          id="ceramic-coating"
          className="scroll-mt-28 py-24"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

            <div>

              <Image
                src="/images/ceramic.jpg"
                alt="Ceramic Coating"
                width={900}
                height={700}
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

            <div>

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
                CERAMIC COATING
              </p>

              <h2 className="mt-5 text-5xl font-black">
                Long Lasting Protection.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                Our premium ceramic coatings create a durable protective layer
                that enhances gloss, repels water, blocks harmful UV rays, and
                keeps your vehicle looking freshly detailed for years.
              </p>

              <div className="mt-10 space-y-4 text-lg">
                <p>✓ Extreme Gloss & Depth</p>
                <p>✓ Hydrophobic Water Beading</p>
                <p>✓ UV & Chemical Protection</p>
                <p>✓ Easier Cleaning & Maintenance</p>
              </div>

              <a
                href="https://myservicelink.app/phoenixdetailingli"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.45)]"
              >
                Book Ceramic Coating
              </a>

            </div>

          </div>

        </section>
                {/* Paint Correction */}

        <section
          id="paint-correction"
          className="scroll-mt-28 border-t border-white/10 py-24"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

            <div className="order-2 lg:order-1">

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
                PAINT CORRECTION
              </p>

              <h2 className="mt-5 text-5xl font-black">
                Restore Your Paint.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                Swirl marks, oxidation, light scratches, and paint imperfections
                are safely removed through professional machine polishing,
                revealing deep gloss and mirror-like reflections.
              </p>

              <div className="mt-10 space-y-4 text-lg">
                <p>✓ Removes Swirl Marks</p>
                <p>✓ Eliminates Light Scratches</p>
                <p>✓ Deep Mirror Finish</p>
                <p>✓ Perfect Before Ceramic Coating</p>
              </div>

              <a
                href="https://myservicelink.app/phoenixdetailingli"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.45)]"
              >
                Book Paint Correction
              </a>

            </div>

            <div className="order-1 lg:order-2">

              <Image
                src="/images/paint-correction.jpg"
                alt="Paint Correction"
                width={900}
                height={700}
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

          </div>

        </section>

        {/* Interior Detailing */}

        <section
          id="interior-detailing"
          className="scroll-mt-28 border-t border-white/10 py-24"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

            <div>

              <Image
                src="/images/interior.jpg"
                alt="Interior Detailing"
                width={900}
                height={700}
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

            <div>

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
                INTERIOR DETAILING
              </p>

              <h2 className="mt-5 text-5xl font-black">
                A Cabin That Feels Brand New.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                From deep carpet extraction to leather conditioning and
                meticulous dashboard cleaning, every inch of your interior is
                restored with precision. We eliminate dirt, stains, dust, and
                odors to create a clean, comfortable driving experience.
              </p>

              <div className="mt-10 space-y-4 text-lg">
                <p>✓ Deep Vacuum & Extraction</p>
                <p>✓ Leather Cleaning & Conditioning</p>
                <p>✓ Dashboard & Trim Restoration</p>
                <p>✓ Crystal Clear Interior Glass</p>
              </div>

              <a
                href="https://myservicelink.app/phoenixdetailingli"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.45)]"
              >
                Book Interior Detail
              </a>

            </div>

          </div>

        </section>
                {/* Exterior Detailing */}

        <section
          id="exterior-detailing"
          className="scroll-mt-28 border-t border-white/10 py-24"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

            <div className="order-2 lg:order-1">

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
                EXTERIOR DETAILING
              </p>

              <h2 className="mt-5 text-5xl font-black">
                Turn Heads Everywhere.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                Our exterior detailing service safely removes dirt, road grime,
                brake dust, and contaminants while restoring a deep, glossy
                finish. Every wheel, tire, trim piece, and painted surface is
                meticulously cleaned and protected.
              </p>

              <div className="mt-10 space-y-4 text-lg">
                <p>✓ Foam Cannon Pre-Wash</p>
                <p>✓ Hand Wash & Clay Bar</p>
                <p>✓ Wheel & Tire Cleaning</p>
                <p>✓ Streak-Free Finish</p>
              </div>

              <a
                href="https://myservicelink.app/phoenixdetailingli"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.45)]"
              >
                Book Exterior Detail
              </a>

            </div>

            <div className="order-1 lg:order-2">

              <Image
                src="/images/exterior.jpg"
                alt="Exterior Detailing"
                width={900}
                height={700}
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

          </div>

        </section>

        {/* Window Tint */}

        <section
          id="window-tint"
          className="scroll-mt-28 border-t border-white/10 py-24"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

            <div>

              <Image
                src="/images/tint.jpg"
                alt="Window Tint"
                width={900}
                height={700}
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

            <div>

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
                WINDOW TINT
              </p>

              <h2 className="mt-5 text-5xl font-black">
                Style Meets Protection.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                Premium window tint enhances your vehicle's appearance while
                reducing interior heat, blocking harmful UV rays, and providing
                increased comfort and privacy for every drive.
              </p>

              <div className="mt-10 space-y-4 text-lg">
                <p>✓ Heat Rejection</p>
                <p>✓ UV Protection</p>
                <p>✓ Increased Privacy</p>
                <p>✓ Clean Factory Appearance</p>
              </div>

              <a
                href="https://myservicelink.app/phoenixdetailingli"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.45)]"
              >
                Book Window Tint
              </a>

            </div>

          </div>

        </section>
                {/* Paint Protection Film */}

        <section
          id="paint-protection-film"
          className="scroll-mt-28 border-t border-white/10 py-24"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

            <div className="order-2 lg:order-1">

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
                PAINT PROTECTION FILM
              </p>

              <h2 className="mt-5 text-5xl font-black">
                Invisible Protection.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                Paint Protection Film (PPF) provides the highest level of
                defense against rock chips, scratches, bug acids, and road
                debris while preserving your vehicle's flawless finish with an
                almost invisible layer of protection.
              </p>

              <div className="mt-10 space-y-4 text-lg">
                <p>✓ Self-Healing Film</p>
                <p>✓ Rock Chip Protection</p>
                <p>✓ Virtually Invisible Finish</p>
                <p>✓ Long-Term Paint Preservation</p>
              </div>

              <a
                href="https://myservicelink.app/phoenixdetailingli"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.45)]"
              >
                Book Paint Protection Film
              </a>

            </div>

            <div className="order-1 lg:order-2">

              <Image
                src="/images/ppf.jpg"
                alt="Paint Protection Film"
                width={900}
                height={700}
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

          </div>

        </section>

      </main>

      <CallToAction />

      <Footer />

    </>
  );
}