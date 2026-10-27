import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "وظائف سطحة المدينة المنورة | انضم لفريقنا",
  description:
    "انضم لفريق سطحة المدينة المنورة. فرص عمل متاحة للسائقين المحترفين وموظفي خدمة العملاء. بيئة عمل ممتازة ورواتب مجزية.",
  keywords: "وظائف سطحة, عمل سائق سطحة, وظائف المدينة المنورة, فرص عمل نقل سيارات",
  alternates: {
    canonical: "https://www.sathaalmadina.com/careers",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/careers",
    },
  },
  openGraph: {
    title: "وظائف سطحة المدينة المنورة",
    description: "انضم لفريق سطحة المدينة المنورة - فرص عمل متاحة",
    url: "https://www.sathaalmadina.com/careers",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
