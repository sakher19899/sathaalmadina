import type { Metadata } from "next"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Stats from "./components/Stats"
import HowItWorks from "./components/HowItWorks"
import Coverage from "./components/Coverage"
import FAQ from "./components/FAQ"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import SEOContent from "./components/SEOContent"

export const metadata: Metadata = {
  title: "سطحة المدينة المنورة | رقم سطحة فورية 24 ساعة 0530001368 | خدمة سحب السيارات",
  description:
    "سطحة المدينة المنورة - أفضل خدمة سحب ونقل السيارات فورية 24 ساعة في المدينة المنورة. رقم سطحة المدينة 0530001368. سطحة هيدروليك المدينة المنورة، سحب سيارات معطلة، نقل بين المدن. خدمة سريعة وموثوقة في جميع أحياء المدينة المنورة والمناطق المجاورة.",
  keywords:
    "سطحة المدينة المنورة, رقم سطحة المدينة المنورة, سطحة فورية المدينة المنورة, سحب سيارات المدينة المنورة, نقل سيارات المدينة المنورة, سطحة 24 ساعة المدينة المنورة, سطحة هيدروليك المدينة المنورة, واتساب سطحة المدينة المنورة, سطحة رخيصة المدينة المنورة, أرقام سطحات المدينة المنورة, خدمة سطحة المدينة المنورة, سطحة سيارات المدينة المنورة, سطحة نقل المدينة المنورة",
  alternates: {
    canonical: "/",
  },
}

export const revalidate = 86400

export default function Home() {
  return (
    <>
      {/* FAQPage JSON-LD (consolidated) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ما هو رقم سطحة المدينة المنورة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "رقم سطحة المدينة المنورة هو 0530001368. نحن متوفرون 24 ساعة طوال أيام الأسبوع لخدمة سحب ونقل السيارات في جميع أحياء المدينة المنورة.",
                },
              },
              {
                "@type": "Question",
                name: "كم المدة للوصول داخل المدينة المنورة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "سطحة المدينة المنورة تصل خلال 15 إلى 30 دقيقة في أغلب أحياء المدينة المنورة، وقد تختلف المدة حسب الموقع والظروف المرورية.",
                },
              },
              {
                "@type": "Question",
                name: "هل سطحة المدينة المنورة تنقل السيارات بين المدن؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، سطحة المدينة المنورة تنقل السيارات إلى جميع مدن المملكة العربية السعودية بأسعار مميزة وخدمة احترافية.",
                },
              },
              {
                "@type": "Question",
                name: "ما هي خدمات سطحة المدينة المنورة؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "سطحة المدينة المنورة تقدم خدمات سحب السيارات المعطلة، نقل السيارات الجديدة، سحب السيارات من الحوادث، نقل السيارات بين المدن، وخدمة سطحة هيدروليك المدينة المنورة.",
                },
              },
              {
                "@type": "Question",
                name: "هل سطحة المدينة المنورة متوفرة في جميع الأحياء؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، سطحة المدينة المنورة تخدم جميع أحياء المدينة المنورة بما في ذلك العوالي، قباء، الحرة الشرقية، الحرة الغربية، المطار، والعيون.",
                },
              },
            ],
          }),
        }}
      />

      {/* Enhanced LocalBusiness Schema for سطحة المدينة المنورة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.sathaalmadina.com/#business",
            name: "سطحة المدينة المنورة",
            alternateName: ["رقم سطحة المدينة المنورة", "سطحة فورية المدينة المنورة", "سطحة هيدروليك المدينة المنورة"],
            description:
              "أفضل خدمة سحب ونقل السيارات في المدينة المنورة - سطحة المدينة المنورة متوفرة 24 ساعة لخدمة سحب السيارات المعطلة ونقل السيارات بين المدن",
            url: "https://www.sathaalmadina.com",
            telephone: "+966530001368",
            priceRange: "$$",
            currenciesAccepted: "SAR",
            paymentAccepted: "Cash, Credit Card",
            address: {
              "@type": "PostalAddress",
              addressLocality: "المدينة المنورة",
              addressRegion: "منطقة المدينة المنورة",
              addressCountry: "SA",
              postalCode: "42311",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 24.4539,
              longitude: 39.604,
            },
            openingHours: "Mo-Su 00:00-23:59",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 24.4539,
                longitude: 39.604,
              },
              geoRadius: "100000",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "خدمات سطحة المدينة المنورة",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "سحب سيارات معطلة المدينة المنورة",
                    description: "خدمة سحب السيارات المعطلة في جميع أحياء المدينة المنورة بسطحة هيدروليك حديثة",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "نقل سيارات بين المدن من المدينة المنورة",
                    description: "خدمة نقل السيارات من المدينة المنورة إلى جميع مدن المملكة العربية السعودية",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "سطحة هيدروليك المدينة المنورة",
                    description: "خدمة سطحة هيدروليك متطورة لنقل جميع أنواع السيارات بأمان في المدينة المنورة",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "سحب سيارات الحوادث المدينة المنورة",
                    description: "خدمة سحب السيارات من مواقع الحوادث في المدينة المنورة بفريق متخصص",
                  },
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
              bestRating: "5",
              worstRating: "1",
            },
            sameAs: ["https://wa.me/966530001368"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966530001368",
              contactType: "customer service",
              availableLanguage: "Arabic",
              areaServed: "المدينة المنورة",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white" dir="rtl">
        <Header />
        <main>
          <Hero />
          <Services />
          <Stats />
          <HowItWorks />
          <Coverage />
          <SEOContent />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
