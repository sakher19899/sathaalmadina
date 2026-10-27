"use client"

interface LocalBusinessJsonLdProps {
  name?: string
  description?: string
  telephone?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  priceRange?: string
  image?: string
  url?: string
}

export function LocalBusinessJsonLd({
  name = "سطحة المدينة المنورة",
  description = "أفضل خدمة سطحة في المدينة المنورة متاحة 24 ساعة. سحب ونقل جميع أنواع السيارات بأسرع وقت وأفضل الأسعار.",
  telephone = "+966530001368",
  address = {
    streetAddress: "المدينة المنورة",
    addressLocality: "المدينة المنورة",
    addressRegion: "منطقة المدينة المنورة",
    postalCode: "42311",
    addressCountry: "SA",
  },
  geo = {
    latitude: 24.4672,
    longitude: 39.6024,
  },
  openingHours = ["Mo-Su 00:00-23:59"],
  priceRange = "$$",
  image = "https://www.sathaalmadina.com/images/satha-medina-night-service.png",
  url = "https://www.sathaalmadina.com",
}: LocalBusinessJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name,
    description,
    telephone,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange,
    image,
    url,
    sameAs: ["https://twitter.com/sathaalmadina", "https://www.instagram.com/sathaalmadina"],
    areaServed: {
      "@type": "City",
      name: "المدينة المنورة",
    },
    serviceType: ["سحب سيارات", "نقل سيارات", "خدمة طوارئ سيارات"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات سطحة المدينة",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "سحب سيارات",
            description: "خدمة سحب السيارات المعطلة",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "نقل سيارات",
            description: "نقل السيارات بين المدن",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "خدمة طوارئ",
            description: "خدمة طوارئ سيارات 24 ساعة",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

interface ArticleJsonLdProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
  url: string
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  author = "سطحة المدينة المنورة",
  image = "https://www.sathaalmadina.com/images/satha-medina-night-service.png",
  url,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://www.sathaalmadina.com",
    },
    publisher: {
      "@type": "Organization",
      name: "سطحة المدينة المنورة",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sathaalmadina.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

interface FAQJsonLdProps {
  questions: { question: string; answer: string }[]
}

export function FAQJsonLd({ questions }: FAQJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

interface ServiceJsonLdProps {
  name: string
  description: string
  provider?: string
  areaServed?: string
  url: string
}

export function ServiceJsonLd({
  name,
  description,
  provider = "سطحة المدينة المنورة",
  areaServed = "المدينة المنورة",
  url,
}: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    url,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

interface ReviewJsonLdProps {
  reviews: {
    author: string
    rating: number
    reviewBody: string
    datePublished: string
  }[]
}

export function ReviewJsonLd({ reviews }: ReviewJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.sathaalmadina.com",
    name: "سطحة المدينة المنورة",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sathaalmadina.com/#website",
    url: "https://www.sathaalmadina.com",
    name: "سطحة المدينة المنورة",
    description: "أفضل خدمة سطحة في المدينة المنورة متاحة 24 ساعة",
    publisher: {
      "@type": "Organization",
      name: "سطحة المدينة المنورة",
    },
    inLanguage: "ar-SA",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.sathaalmadina.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
