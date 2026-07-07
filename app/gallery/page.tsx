import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/gallery/gallery${i + 1}.jpg`,
}));

const videos = Array.from({ length: 7 }, (_, i) => ({
  src: `/videos/video${i + 1}.mp4`,
}));

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-24 text-white">

        <section className="py-24 text-center">

          <p className="uppercase tracking-[0.35em] font-semibold text-blue-500">
            GALLERY
          </p>

          <h1 className="mt-6 text-6xl font-black">
            Our Recent Work
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-400">
            Browse our latest detailing transformations across Long Island.
          </p>

        </section>

        <section className="mx-auto max-w-7xl px-6">

          <div className="overflow-hidden rounded-3xl border border-white/10">

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

        </section>

        <section className="py-24 px-6">

          <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {images.map((image) => (

              <div
                key={image.src}
                className="overflow-hidden rounded-3xl border border-white/10"
              >

                <Image
                  src={image.src}
                  alt="Phoenix Detailing"
                  width={800}
                  height={800}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-110"
                />

              </div>

            ))}

          </div>

        </section>

        <section className="pb-24 px-6">

          <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2">

            {videos.slice(1).map((video) => (

              <video
                key={video.src}
                src={video.src}
                controls
                className="w-full rounded-3xl border border-white/10"
              />

            ))}

          </div>

        </section>

        <section className="pb-24 text-center">

          <Link
            href="https://myservicelink.app/phoenixdetailingli"
            target="_blank"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-10 py-5 text-xl font-bold text-white transition hover:scale-105"
          >
            Book Your Detail →
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}