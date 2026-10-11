// Set NEXT_PUBLIC_SITE_URL to the production origin when the domain is ready.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nonstandard.online";
export const siteDescription =
  "NST — Non Standard Team. An independent creative agency for website development, branding, UI/UX, motion videos, copy, and technical writing. Projects from $2,000.";
export const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NST",
  alternateName: "Non Standard Team",
  description: siteDescription,
  email: "legadax@outlook.com",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 4 },
  logo: `${siteUrl}/icon.svg`,
  ...(siteUrl ? { url: siteUrl, "@id": `${siteUrl}/#organization` } : {}),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative and development services",
    itemListElement: [
      "Website development",
      "Branding & identity",
      "UI / UX design",
      "Motion & video",
      "Copy & technical writing",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 2000,
        priceCurrency: "USD",
      },
    })),
  },
};
