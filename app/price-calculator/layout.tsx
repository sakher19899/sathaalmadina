import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "حاسبة أسعار سطحة المدينة المنورة | احسب تكلفة النقل",
  description:
    "احسب سعر خدمة سطحة المدينة المنورة فوراً. أسعار شفافة ومنافسة لسحب ونقل السيارات داخل المدينة وبين المدن.",
  keywords: "أسعار سطحة المدينة, حاسبة سعر السطحة, تكلفة نقل السيارات, سعر سحب السيارة",
  alternates: {
    canonical: "https://www.sathaalmadina.com/price-calculator",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/price-calculator",
    },
  },
  openGraph: {
    title: "حاسبة أسعار سطحة المدينة المنورة",
    description: "احسب سعر خدمة سطحة المدينة المنورة فوراً - أسعار شفافة ومنافسة",
    url: "https://www.sathaalmadina.com/price-calculator",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
