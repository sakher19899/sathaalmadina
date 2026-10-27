import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "من نحن | سطحة المدينة المنورة - خبرة 10 سنوات في سحب السيارات",
  description:
    "تعرف على سطحة المدينة المنورة - أكثر من 10 سنوات خبرة في خدمات سحب ونقل السيارات. فريق محترف، أسطول حديث، وخدمة 24 ساعة.",
  keywords: "سطحة المدينة المنورة, من نحن, خدمات سحب السيارات, نقل سيارات, سطحة موثوقة",
  alternates: {
    canonical: "https://www.sathaalmadina.com/about",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/about",
    },
  },
  openGraph: {
    title: "من نحن | سطحة المدينة المنورة",
    description: "تعرف على سطحة المدينة المنورة - أكثر من 10 سنوات خبرة في خدمات سحب ونقل السيارات.",
    url: "https://www.sathaalmadina.com/about",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
