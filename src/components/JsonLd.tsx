const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.intacsolution.com/#organization",
  name: "INTAC Solution",
  alternateName: "ITS",
  url: "https://www.intacsolution.com/",
  description:
    "INTAC Solution provides mobile device refurbishment, quality assurance, packaging, workforce operations and warehouse automation support for Samsung and major U.S. wireless carriers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5550 Granite Parkway STE 295",
    addressLocality: "Plano",
    addressRegion: "TX",
    addressCountry: "US",
  },
  location: [
    {
      "@type": "Place",
      name: "Tablet & Gear Refurbish and Packaging Center",
      address: {
        "@type": "PostalAddress",
        streetAddress: "240 Dividend Dr.",
        addressLocality: "Coppell",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      name: "Mobile Refurbish Center",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2800 Market Street",
        addressLocality: "Irving",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      name: "Mobile Software Engineering Lab",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6625 Excellence Way",
        addressLocality: "Plano",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      name: "Mobile Network Testing Lab",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3245 146th Pl SE STE 300",
        addressLocality: "Bellevue",
        addressRegion: "WA",
        addressCountry: "US",
      },
    },
  ],
  knowsAbout: [
    "Mobile device refurbishment",
    "Reverse logistics",
    "Device interoperability testing",
    "Device packaging and kitting",
    "Warehouse workforce operations",
    "Warehouse automation",
  ],
  // TODO: add the headhunting site here once its domain is live, e.g.
  // sameAs: ["https://www.linkedin.com/company/intac-solution/", "https://<headhunting-domain>/"],
  // subOrganization: { "@type": "Organization", name: "<brand>", url: "https://<headhunting-domain>/" },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }}
    />
  );
}
