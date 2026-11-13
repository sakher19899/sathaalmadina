import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "من نحن | سطحة المدينة المنورة",
  description: "تعرف على سطحة المدينة المنورة وخدماتنا المميزة في سحب ونقل السيارات بالمدينة المنورة وخارجها.",
  alternates: { canonical: "/about" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
