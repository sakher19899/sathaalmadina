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
import { LocalBusinessJsonLd, FAQJsonLd } from "./components/JsonLd"

export const metadata: Metadata = {
  title: "سطحة المدينة المنورة | رقم سطحة فورية 24 ساعة 0530001368 | خدمة سحب السيارات",
  description:
    "سطحة المدينة المنورة - أفضل خدمة سحب ونقل السيارات فورية 24 ساعة في المدينة المنورة. رقم سطحة المدينة 0530001368. سطحة هيدروليك المدينة المنورة، سحب سيارات معطلة، نقل بين المدن. خدمة سريعة وموثوقة في جميع أحياء المدينة المنورة والمناطق المجاورة.",
  keywords:
    "سطحة المدينة المنورة, رقم سطحة المدينة المنورة, سطحة فورية المدينة المنورة, سحب سيارات المدينة المنورة, نقل سيارات المدينة المنورة, سطحة 24 ساعة المدينة المنورة, سطحة هيدروليك المدينة المنورة, واتساب سطحة المدينة المنورة, سطحة رخيصة المدينة المنورة, أرقام سطحات المدينة المنورة, خدمة سطحة المدينة المنورة, سطحة سيارات المدينة المنورة, سطحة نقل المدينة المنورة",
  alternates: {
    canonical: "https://www.sathaalmadina.com",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com",
    },
  },
}

export const revalidate = 86400

const faqData = [
  {
    question: "ما هو رقم سطحة المدينة المنورة؟",
    answer:
      "رقم سطحة المدينة المنورة هو 0530001368. نحن متوفرون 24 ساعة طوال أيام الأسبوع لخدمة سحب ونقل السيارات في جميع أحياء المدينة المنورة.",
  },
  {
    question: "كم المدة للوصول داخل المدينة المنورة؟",
    answer:
      "سطحة المدينة المنورة تصل خلال 15 إلى 30 دقيقة في أغلب أحياء المدينة المنورة، وقد تختلف المدة حسب الموقع والظروف المرورية.",
  },
  {
    question: "هل سطحة المدينة المنورة تنقل السيارات بين المدن؟",
    answer:
      "نعم، سطحة المدينة المنورة تنقل السيارات إلى جميع مدن المملكة العربية السعودية بأسعار مميزة وخدمة احترافية.",
  },
  {
    question: "ما هي أسعار سطحة المدينة المنورة؟",
    answer:
      "تبدأ أسعارنا من 80 ريال داخل المدينة المنورة ومن 400 ريال للنقل بين المدن. الأسعار تعتمد على المسافة ونوع السيارة.",
  },
  {
    question: "هل تعملون في الأعياد والعطلات؟",
    answer: "نعم، نحن متوفرون 24 ساعة طوال أيام الأسبوع بما في ذلك الأعياد والعطلات الرسمية.",
  },
]

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />

      <FAQJsonLd questions={faqData} />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50" dir="rtl">
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
