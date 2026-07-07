import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-3">

          {/* Logo & Description */}

          <div>

            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Phoenix Detailing"
                width={120}
                height={120}
                className="transition duration-300 hover:scale-105"
              />
            </Link>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Phoenix Detailing
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Premium mobile auto detailing serving Long Island & Suffolk County.
              Delivering luxury results through ceramic coatings, paint correction,
              window tint, paint protection film, and professional detailing.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link
                href="/"
                className="block text-gray-400 transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="block text-gray-400 transition hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                href="/gallery"
                className="block text-gray-400 transition hover:text-blue-400"
              >
                Gallery
              </Link>

              <Link
                href="/#reviews"
                className="block text-gray-400 transition hover:text-blue-400"
              >
                Reviews
              </Link>

              <Link
                href="/contact"
                className="block text-gray-400 transition hover:text-blue-400"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>📍 Long Island, New York</p>

              <a
                href="tel:+19342008660"
                className="block transition hover:text-blue-400"
              >
                📞 (934) 200-8660
              </a>

              <a
                href="mailto:phoenixds.nyc@gmail.com"
                className="block transition hover:text-blue-400"
              >
                ✉️ phoenixds.nyc@gmail.com
              </a>

              <a
                href="https://www.instagram.com/phoenixdetailing.li/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 transition hover:text-blue-300"
              >
                Instagram →
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 Phoenix Detailing. All Rights Reserved.
          </p>

          <p className="mt-3 text-sm text-gray-600">
            Website Designed & Developed by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Amodeo Automations
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}