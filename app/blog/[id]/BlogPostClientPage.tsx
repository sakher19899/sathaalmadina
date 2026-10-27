"use client"

import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, Eye, ArrowRight, Share2, Heart } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FloatingButtons from "../../components/FloatingButtons"
import BackToTop from "../../components/BackToTop"
import Image from "next/image"
import Link from "next/link"

// نفس بيانات المقالات من الصفحة الرئيسية
const blogPosts = [
  {
    id: 1,
    title: "10 نصائح لتجنب تعطل السيارة في الطريق",
    excerpt: "تعرف على أهم النصائح التي تساعدك في تجنب تعطل سيارتك أثناء القيادة وكيفية التعامل مع المواقف الطارئة",
    content: `تعطل السيارة في الطريق من أكثر المواقف إزعاجاً للسائقين. في هذا المقال، سنقدم لك أهم النصائح لتجنب هذه المشكلة:

## 1. الفحص الدوري للسيارة
احرص على فحص سيارتك بانتظام عند ميكانيكي مختص. الفحص الدوري يساعد في اكتشاف المشاكل قبل أن تتفاقم وتؤدي إلى تعطل السيارة.

## 2. مراقبة مستوى الزيت
تأكد من مستوى زيت المحرك بانتظام. الزيت هو شريان الحياة للمحرك، ونقصه يمكن أن يؤدي إلى أضرار جسيمة.

## 3. فحص البطارية
استبدل البطارية كل 3-4 سنوات أو عند ظهور علامات الضعف مثل بطء دوران المحرك عند التشغيل.

## 4. مراقبة ضغط الإطارات
تأكد من ضغط الإطارات المناسب شهرياً. الضغط المنخفض يزيد من استهلاك الوقود ويقلل من عمر الإطار.

## 5. فحص نظام التبريد
تأكد من مستوى ماء الرديتر ونظافة المبرد. ارتفاع درجة حرارة المحرك من أكثر أسباب التعطل شيوعاً.

## 6. مراقبة أضواء التحذير
لا تتجاهل أي ضوء تحذيري في لوحة القيادة. هذه الأضواء تنبهك لمشاكل قد تؤدي إلى تعطل السيارة.

## 7. حمل أدوات الطوارئ
احتفظ بأدوات أساسية في السيارة مثل كابلات البطارية، مفك براغي، وإطار احتياطي.

## 8. تجنب القيادة بخزان فارغ
احتفظ بربع خزان وقود على الأقل. القيادة بخزان فارغ يمكن أن تضر بمضخة الوقود.

## 9. فحص الفرامل
تأكد من سلامة نظام الفرامل وسماكة تيل الفرامل. الفرامل المهترئة خطر على السلامة.

## 10. القيادة الهادئة
تجنب القيادة العنيفة والسرعة المفرطة. القيادة الهادئة تطيل عمر السيارة وتقلل من احتمالية الأعطال.

## خلاصة
باتباع هذه النصائح، يمكنك تقليل احتمالية تعطل سيارتك بشكل كبير. ولكن إذا حدث وتعطلت سيارتك، لا تتردد في الاتصال بخدمة سطحة موثوقة مثل سطحة المدينة المنورة على الرقم 0530001368.`,
    category: "tips",
    author: "فريق سطحة المدينة",
    date: "2024-01-15",
    readTime: "5 دقائق",
    views: 1250,
    image: "/placeholder.svg?height=400&width=800&text=نصائح+تجنب+التعطل",
    tags: ["نصائح", "صيانة", "طوارئ"],
  },
  // يمكن إضافة باقي المقالات هنا...
]

const relatedPosts = [
  {
    id: 2,
    title: "كيفية التعامل مع حوادث السيارات",
    image: "/placeholder.svg?height=200&width=300&text=حوادث+السيارات",
  },
  {
    id: 3,
    title: "علامات تدل على ضرورة تغيير زيت المحرك",
    image: "/placeholder.svg?height=200&width=300&text=زيت+المحرك",
  },
  {
    id: 6,
    title: "كيفية اختيار خدمة السطحة المناسبة",
    image: "/placeholder.svg?height=200&width=300&text=اختيار+السطحة",
  },
]

export default function BlogPostClientPage() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">المقال غير موجود</h1>
          <Link href="/blog">
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900">العودة للمدونة</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-yellow-600">
                الرئيسية
              </Link>
              <ArrowRight className="w-4 h-4 mx-2" />
              <Link href="/blog" className="hover:text-yellow-600">
                المدونة
              </Link>
              <ArrowRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900">{post.title}</span>
            </nav>

            <div className="mb-8">
              <span className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                نصائح القيادة
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <User className="w-5 h-5 ml-2" />
                  <span className="ml-4">{post.author}</span>
                  <Calendar className="w-5 h-5 mr-4 ml-2" />
                  <span className="ml-4">{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                  <Eye className="w-5 h-5 mr-4 ml-2" />
                  <span>{post.views} مشاهدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Share2 className="w-4 h-4 ml-2" />
                    مشاركة
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Heart className="w-4 h-4 ml-2" />
                    إعجاب
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                          {paragraph.replace("## ", "")}
                        </h2>
                      )
                    }
                    return (
                      <p key={index} className="mb-6">
                        {paragraph}
                      </p>
                    )
                  })}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">الكلمات المفتاحية:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        <Tag className="w-3 h-3 ml-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">مقالات ذات صلة</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{relatedPost.title}</h3>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        اقرأ المزيد
                        <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">تحتاج خدمة سطحة؟</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            إذا تعطلت سيارتك أو تحتاج نقلها، اتصل بنا الآن للحصول على خدمة سريعة وموثوقة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0530001368">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 font-bold text-lg">
                اتصل الآن - 0530001368
              </Button>
            </a>
            <a href="https://wa.me/966530001368">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 font-bold text-lg bg-transparent"
              >
                واتساب
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  )
}
