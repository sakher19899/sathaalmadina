import type React from "react"
import type { Metadata } from "next"
import { Cairo, Tajawal } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingButtons from "./components/FloatingButtons"
import BackToTop from "./components/BackToTop"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
})

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sathaalmadina.com"),
  title: {
    default: "سطحة المدينة المنورة - خدمة سحب ونقل السيارات 24 ساعة | 0530001368",
    template: "%s | سطحة المدينة المنورة",
  },
  description:
    "أفضل خدمة سطحة في المدينة المنورة متاحة 24 ساعة. سحب ونقل جميع أنواع السيارات بأسرع وقت وأفضل الأسعار. اتصل الآن: 0530001368",
  keywords: [
    "سطحة المدينة المنورة",
    "سحب سيارات المدينة",
    "نقل سيارات",
    "سطحة 24 ساعة",
    "خدمة سطحة فورية",
    "رقم سطحة المدينة",
    "سطحة طوارئ",
    "نقل سيارات معطلة",
  ],
  authors: [{ name: "سطحة المدينة المنورة" }],
  creator: "سطحة المدينة المنورة",
  publisher: "سطحة المدينة المنورة",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.sathaalmadina.com",
    title: "سطحة المدينة المنورة - خدمة سحب ونقل السيارات 24 ساعة",
    description:
      "أفضل خدمة سطحة في المدينة المنورة متاحة 24 ساعة. سحب ونقل جميع أنواع السيارات بأسرع وقت وأفضل الأسعار.",
    siteName: "سطحة المدينة المنورة",
    images: [
      {
        url: "/images/satha-medina-night-service.png",
        width: 1200,
        height: 630,
        alt: "سطحة المدينة المنورة - خدمة سحب ونقل السيارات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سطحة المدينة المنورة - خدمة سحب ونقل السيارات 24 ساعة",
    description:
      "أفضل خدمة سطحة في المدينة المنورة متاحة 24 ساعة. سحب ونقل جميع أنواع السيارات بأسرع وقت وأفضل الأسعار.",
    images: ["/images/satha-medina-night-service.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.sathaalmadina.com",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body className="font-cairo antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <FloatingButtons />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
