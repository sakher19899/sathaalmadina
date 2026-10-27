import Head from "next/head"

export default function SEOHead() {
  return (
    <Head>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />

      {/* Bing Webmaster Tools Verification */}
      <meta name="msvalidate.01" content="your-bing-verification-code" />

      {/* Yandex Webmaster Verification */}
      <meta name="yandex-verification" content="your-yandex-verification-code" />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "سطحة المدينة المنورة",
            url: "https://your-domain.com",
            logo: "https://your-domain.com/logo.png",
            telephone: "0530001368",
            address: {
              "@type": "PostalAddress",
              streetAddress: "شارع رئيسي",
              addressLocality: "المدينة المنورة",
              addressRegion: "المدينة المنورة",
              postalCode: "41411",
              addressCountry: "SA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 24.466667,
              longitude: 39.6,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            sameAs: [
              "https://www.facebook.com/sathaalmadina",
              "https://twitter.com/sathaalmadina",
              "https://www.instagram.com/sathaalmadina",
              "https://wa.me/966530001368",
            ],
          }),
        }}
      />
    </Head>
  )
}
