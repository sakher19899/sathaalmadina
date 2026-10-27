import type { Metadata } from "next"
import BlogPostClientPage from "./BlogPostClientPage"

// هذه الدالة تولد الميتاداتا ديناميكياً لكل مقال
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // في الإنتاج، يمكنك جلب بيانات المقال من API أو قاعدة بيانات
  const postId = params.id

  // بيانات افتراضية للمقال (يمكن استبدالها بجلب البيانات الفعلية)
  const title = `مقال رقم ${postId} | مدونة سطحة المدينة المنورة`
  const description = `محتوى مفيد ونصائح قيمة حول السيارات والقيادة الآمنة وخدمات السحب في المدينة المنورة.`

  return {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: "2024-01-15T00:00:00Z",
      authors: ["سطحة المدينة المنورة"],
    },
    // ترميز JSON-LD للمقال
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: description,
        author: {
          "@type": "Organization",
          name: "سطحة المدينة المنورة",
        },
        publisher: {
          "@type": "Organization",
          name: "سطحة المدينة المنورة",
          logo: {
            "@type": "ImageObject",
            url: "https://www.sathaalmadina.com/logo.png",
          },
        },
        datePublished: "2024-01-15T00:00:00Z",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.sathaalmadina.com/blog/${postId}`,
        },
      }),
    },
  }
}

export default function BlogPostPage() {
  return <BlogPostClientPage />
}
