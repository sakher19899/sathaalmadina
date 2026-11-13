import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "مدونة سطحة المدينة المنورة | نصائح ومقالات عن السيارات",
  description:
    "مدونة سطحة المدينة المنورة - نصائح مفيدة ومقالات تعليمية حول السيارات والقيادة الآمنة وخدمات السحب والنقل.",
  alternates: { canonical: "/blog" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
