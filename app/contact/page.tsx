import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-24 text-white">

        {/* Hero */}

        <section className="relative overflow-hidden border-b border-white/10 py-32">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]"></div>

          <div className="relative mx-auto max-w-6xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
              CONTACT PHOENIX DETAILING
            </p>

            <h1 className="mt-6 text-5xl font-black md:text-7xl">
              Let's Make Your
              <br />
              Vehicle Shine Again
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-400">
              Whether you need a full detail, ceramic coating, paint correction,
              window tint, or paint protection film, we're here to help.
            </p>

          </div>

        </section>

        {/* Contact Content */}

        <section className="py-24">

          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

            {/* Contact Cards */}

            <div>

              <h2 className="text-4xl font-black">
                Get In Touch
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Have questions or ready to schedule your appointment? Contact
                Phoenix Detailing today and we'll help you choose the perfect
                service for your vehicle.
              </p>

              <div className="mt-12 space-y-6">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-blue-500">

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    Phone
                  </p>

                  <a
                    href="tel:+19342008660"
                    className="mt-3 block text-2xl font-bold transition hover:text-blue-400"
                  >
                    (934) 200-8660
                  </a>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-blue-500">

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    Email
                  </p>

                  <a
                    href="mailto:phoenixds.nyc@gmail.com"
                    className="mt-3 block text-xl font-bold transition hover:text-blue-400 break-all"
                  >
                    phoenixds.nyc@gmail.com
                  </a>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-blue-500">

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    Instagram
                  </p>

                  <a
                    href="https://instagram.com/phoenixdetailing.li"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-2xl font-bold transition hover:text-blue-400"
                  >
                    @phoenixdetailing.li
                  </a>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-blue-500">

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    Service Area
                  </p>

                  <p className="mt-3 text-2xl font-bold">
                    Baywood & Long Island, NY
                  </p>

                </div>

              </div>

            </div>

            {/* Booking Card */}

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-4xl font-black">
                Ready To Book?
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Skip the back-and-forth and reserve your appointment online.
                Choose your service, pick a date, and book directly with
                Phoenix Detailing.
              </p>

              <div className="mt-10 space-y-5">

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  ✅ Mobile & In-Shop Detailing
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  ✅ Ceramic Coatings
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  ✅ Paint Correction
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  ✅ Window Tint & PPF
                </div>

              </div>

              <a
                href="https://myservicelink.app/phoenixdetailingli"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 py-5 text-center text-xl font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,.45)]"
              >
                Book Your Detail →
              </a>

              <p className="mt-6 text-center text-sm text-gray-500">
                Secure online booking • Fast confirmation • Mobile service available
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}