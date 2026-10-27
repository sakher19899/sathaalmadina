import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "آراء عملاء سطحة المدينة المنورة | تقييمات وشهادات",
  description: "اقرأ آراء وتقييمات عملاء سطحة المدينة المنورة. أكثر من 5000 عميل راضٍ عن خدماتنا في سحب ونقل السيارات.",
  keywords: "آراء عملاء سطحة, تقييمات سطحة المدينة, شهادات العملاء, تجارب العملاء",
  alternates: {
    canonical: "https://www.sathaalmadina.com/testimonials",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/testimonials",
    },
  },
  openGraph: {
    title: "آراء عملاء سطحة المدينة المنورة",
    description: "آراء وتقييمات حقيقية من عملائنا الكرام",
    url: "https://www.sathaalmadina.com/testimonials",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
