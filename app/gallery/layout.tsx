import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "معرض صور سطحة المدينة المنورة | صور خدماتنا",
  description:
    "تصفح معرض صور سطحة المدينة المنورة - صور حقيقية لسطحاتنا الهيدروليكية وخدمات سحب ونقل السيارات في المدينة المنورة.",
  keywords: "صور سطحة المدينة, معرض سطحة, سطحة هيدروليك, صور نقل سيارات",
  alternates: {
    canonical: "https://www.sathaalmadina.com/gallery",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/gallery",
    },
  },
  openGraph: {
    title: "معرض صور سطحة المدينة المنورة",
    description: "صور حقيقية لسطحاتنا وخدماتنا في المدينة المنورة",
    url: "https://www.sathaalmadina.com/gallery",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
