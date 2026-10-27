import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تواصل معنا | سطحة المدينة المنورة - رقم 0530001368",
  description:
    "تواصل مع سطحة المدينة المنورة على مدار 24 ساعة. رقم الهاتف: 0530001368. واتساب فوري، خدمة سريعة في جميع أحياء المدينة المنورة.",
  keywords: "تواصل سطحة المدينة, رقم سطحة المدينة المنورة, واتساب سطحة, خدمة عملاء سطحة",
  alternates: {
    canonical: "https://www.sathaalmadina.com/contact",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/contact",
    },
  },
  openGraph: {
    title: "تواصل معنا | سطحة المدينة المنورة",
    description: "تواصل مع سطحة المدينة المنورة على مدار 24 ساعة. رقم الهاتف: 0530001368",
    url: "https://www.sathaalmadina.com/contact",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
