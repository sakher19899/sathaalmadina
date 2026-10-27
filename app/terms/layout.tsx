import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "الشروط والأحكام | سطحة المدينة المنورة",
  description: "الشروط والأحكام لاستخدام خدمات سطحة المدينة المنورة. اقرأ شروط الخدمة والتعاقد وسياسة الإلغاء.",
  alternates: {
    canonical: "https://www.sathaalmadina.com/terms",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/terms",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
