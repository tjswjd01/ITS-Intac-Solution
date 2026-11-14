const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.intacsolution.com/#organization",
  name: "INTAC Solution",
  alternateName: "ITS",
  url: "https://www.intacsolution.com/",
  description:
    "INTAC Solution (ITS) provides direct hire recruiting, staffing and workforce management, engineering-led managed operations, refurbishment-process automation and U.S. market entry support for Korean and global companies in the United States.",
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
    "Direct hire recruiting",
    "Korean-English bilingual recruiting",
    "Staffing and workforce management",
    "Warehouse and logistics staffing",
    "Managed operations",
    "Mobile device refurbishment operations",
    "Refurbishment process automation",
    "U.S. market entry support",
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
