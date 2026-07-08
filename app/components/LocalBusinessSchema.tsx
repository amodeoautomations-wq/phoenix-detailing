export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: "Phoenix Detailing",
    image: "https://phoenix-detailing.vercel.app/images/og-image.png",
    url: "https://phoenix-detailing.vercel.app",
    telephone: "+1-934-200-8660",
    email: "phoenixds.nyc@gmail.com",
    areaServed: [
      "Long Island",
      "Suffolk County",
      "Baywood",
      "Smithtown",
      "Islip",
      "Hauppauge",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baywood",
      addressRegion: "NY",
      addressCountry: "US",
    },
    sameAs: [
      "https://instagram.com/phoenixdetailing.li",
    ],
    priceRange: "$$",
    description:
      "Premium mobile auto detailing specializing in ceramic coatings, paint correction, paint protection film, window tint, and interior and exterior detailing.",
    serviceType: [
      "Ceramic Coating",
      "Paint Correction",
      "Paint Protection Film",
      "Window Tint",
      "Interior Detailing",
      "Exterior Detailing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}