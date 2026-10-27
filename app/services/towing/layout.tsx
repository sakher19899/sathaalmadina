import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدمة سحب السيارات | سطحة المدينة المنورة - سطحة هيدروليك 24 ساعة",
  description:
    "خدمة سحب سيارات احترافية في المدينة المنورة. سطحة هيدروليك آمنة، سحب من الحوادث، نقل سيارات معطلة. وصول سريع خلال 15-30 دقيقة. اتصل: 0530001368",
  keywords: "سحب سيارات المدينة المنورة, سطحة هيدروليك, سحب من حوادث, نقل سيارات معطلة, خدمة طوارئ سيارات",
  alternates: {
    canonical: "https://www.sathaalmadina.com/services/towing",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/services/towing",
    },
  },
  openGraph: {
    title: "خدمة سحب السيارات | سطحة المدينة المنورة",
    description: "خدمة سحب سيارات احترافية في المدينة المنورة - وصول سريع وسحب آمن 24/7",
    url: "https://www.sathaalmadina.com/services/towing",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
