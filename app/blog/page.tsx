import type { Metadata } from "next"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = {
  title: "مدونة سطحة المدينة المنورة | نصائح ومقالات عن السيارات",
  description:
    "مدونة سطحة المدينة المنورة - نصائح مفيدة ومقالات تعليمية حول السيارات والقيادة الآمنة وخدمات السحب والنقل. تعلم كيفية الحفاظ على سيارتك.",
  keywords: "مدونة سطحة, نصائح السيارات, صيانة السيارات, القيادة الآمنة, سطحة المدينة المنورة",
  alternates: {
    canonical: "https://www.sathaalmadina.com/blog",
    languages: {
      "ar-SA": "https://www.sathaalmadina.com/blog",
    },
  },
  openGraph: {
    title: "مدونة سطحة المدينة المنورة | نصائح ومقالات",
    description: "نصائح مفيدة ومقالات تعليمية حول السيارات والقيادة الآمنة",
    url: "https://www.sathaalmadina.com/blog",
    type: "website",
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
