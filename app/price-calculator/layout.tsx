import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/price-calculator" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
