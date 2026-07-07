import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black py-32 px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.08),transparent_65%)]"></div>

      <div className="relative mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-blue-500">
            OUR WORK
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            See The
            <span className="block text-blue-500">
              Phoenix Difference
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Real vehicles. Real transformations. Every detail is completed with
            precision and care.
          </p>

        </div>

        <div className="mt-20 overflow-hidden rounded-3xl border border-white/10">

          <video
            src="/videos/video1.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
          />

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {images.map((image) => (
            <div
              key={image}
              className="group overflow-hidden rounded-3xl border border-white/10"
            >

              <Image
                src={image}
                alt="Phoenix Detailing"
                width={800}
                height={800}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

            </div>
          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/gallery"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-10 py-4 text-lg font-bold text-white transition hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,.45)]"
          >
            View Full Gallery →
          </Link>

        </div>

      </div>

    </section>
  );
}