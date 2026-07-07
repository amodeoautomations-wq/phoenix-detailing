import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-24 text-white">

        {/* Hero */}

        <section className="relative overflow-hidden border-b border-white/10 py-32">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]"></div>

          <div className="relative mx-auto max-w-6xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[0.4em] text-blue-500">
              ABOUT PHOENIX DETAILING
            </p>

            <h1 className="mt-6 text-6xl font-black md:text-7xl">
              Passion.
              <br />
              Precision.
              <br />
              Perfection.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-400">
              Phoenix Detailing was built on one simple goal:
              deliver dealership-quality results with unmatched
              customer service and attention to detail.
            </p>

          </div>

        </section>

        {/* Story */}

        <section className="py-24">

          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

            <div>

              <Image
                src="/images/hero.jpg"
                alt="Phoenix Detailing"
                width={900}
                height={700}
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

            <div>

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
                OUR STORY
              </p>

              <h2 className="mt-5 text-5xl font-black">
                Built From A Passion
                For Cars.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                Every vehicle deserves the highest level of care.
                Phoenix Detailing was founded with a commitment to
                premium workmanship, honest service, and results
                that exceed expectations.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Whether it's a daily driver, luxury vehicle, exotic,
                or weekend show car, every detail is performed with
                precision using professional products and techniques.
              </p>

            </div>

          </div>

        </section>

        {/* Why Choose */}

        <section className="border-t border-white/10 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
                WHY PHOENIX
              </p>

              <h2 className="mt-5 text-5xl font-black">
                Why Clients Trust Us
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-bold">Premium Products</h3>
                <p className="mt-4 text-gray-400">
                  Only trusted professional-grade products touch your vehicle.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-bold">Attention To Detail</h3>
                <p className="mt-4 text-gray-400">
                  Every inch is cleaned, corrected, and protected with care.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-bold">Customer First</h3>
                <p className="mt-4 text-gray-400">
                  Honest communication and satisfaction are our priorities.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-bold">Luxury Results</h3>
                <p className="mt-4 text-gray-400">
                  We strive to make every vehicle look better than new.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>

      <CallToAction />

      <Footer />

    </>
  );
}