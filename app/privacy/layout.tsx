import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "سياسة الخصوصية | سطحة المدينة المنورة",
  description: "سياسة الخصوصية لموقع سطحة المدينة المنورة. نحترم خصوصيتك ونحمي بياناتك الشخصية وفقاً لأعلى المعايير.",
  alternates: {
    canonical: "https://www.sathaalmadina.com/privacy",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/privacy",
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
