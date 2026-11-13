"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, Eye, ArrowLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import BackToTop from "../components/BackToTop"
import Image from "next/image"
import Link from "next/link"

const categories = [
  { id: "all", name: "جميع المقالات" },
  { id: "tips", name: "نصائح القيادة" },
  { id: "maintenance", name: "صيانة السيارات" },
  { id: "safety", name: "السلامة المرورية" },
  { id: "news", name: "أخبار السيارات" },
]

const blogPosts = [
  {
    id: 1,
    title: "10 نصائح لتجنب تعطل السيارة في الطريق",
    excerpt: "تعرف على أهم النصائح التي تساعدك في تجنب تعطل سيارتك أثناء القيادة وكيفية التعامل مع المواقف الطارئة",
    content: `تعطل السيارة في الطريق من أكثر المواقف إزعاجاً للسائقين. في هذا المقال، سنقدم لك أهم النصائح لتجنب هذه المشكلة:

1. **الفحص الدوري للسيارة**: احرص على فحص سيارتك بانتظام عند ميكانيكي مختص
2. **مراقبة مستوى الزيت**: تأكد من مستوى زيت المحرك بانتظام
3. **فحص البطارية**: استبدل البطارية كل 3-4 سنوات
4. **مراقبة ضغط الإطارات**: تأكد من ضغط الإطارات المناسب
5. **فحص نظام التبريد**: تأكد من مستوى ماء الرديتر
6. **مراقبة أضواء التحذير**: لا تتجاهل أي ضوء تحذيري في لوحة القيادة
7. **حمل أدوات الطوارئ**: احتفظ بأدوات أساسية في السيارة
8. **تجنب القيادة بخزان فارغ**: احتفظ بربع خزان وقود على الأقل
9. **فحص الفرامل**: تأكد من سلامة نظام الفرامل
10. **القيادة الهادئة**: تجنب القيادة العنيفة والسرعة المفرطة`,
    category: "tips",
    author: "فريق سطحة المدينة",
    date: "2024-01-15",
    readTime: "5 دقائق",
    views: 1250,
    image: "/placeholder.svg?height=300&width=500&text=نصائح+تجنب+التعطل",
    tags: ["نصائح", "صيانة", "طوارئ"],
  },
  {
    id: 2,
    title: "كيفية التعامل مع حوادث السيارات",
    excerpt: "دليل شامل للتعامل الصحيح مع حوادث السيارات وخطوات السلامة الواجب اتباعها",
    content: `التعامل الصحيح مع حوادث السيارات أمر بالغ الأهمية لضمان سلامة الجميع:

**الخطوات الأولى:**
1. **توقف فوراً**: لا تغادر موقع الحادث
2. **تأكد من السلامة**: تحقق من عدم وجود إصابات
3. **اتصل بالطوارئ**: اتصل بالشرطة والإسعاف إذا لزم الأمر
4. **أمّن الموقع**: ضع مثلث التحذير خلف السيارة

**توثيق الحادث:**
- التقط صوراً للأضرار من زوايا مختلفة
- سجل معلومات السائق الآخر
- احصل على أرقام هواتف الشهود
- لا توقع على أي أوراق دون فهمها

**الاتصال بشركة التأمين:**
- أبلغ شركة التأمين فوراً
- قدم جميع المعلومات المطلوبة
- احتفظ بنسخة من التقرير

**نقل السيارة:**
إذا كانت السيارة غير قابلة للقيادة، اتصل بخدمة السطحة الموثوقة مثل سطحة المدينة المنورة على الرقم 0530001368`,
    category: "safety",
    author: "خبير السلامة المرورية",
    date: "2024-01-12",
    readTime: "7 دقائق",
    views: 890,
    image: "/placeholder.svg?height=300&width=500&text=حوادث+السيارات",
    tags: ["حوادث", "سلامة", "تأمين"],
  },
  {
    id: 3,
    title: "علامات تدل على ضرورة تغيير زيت المحرك",
    excerpt: "تعرف على العلامات التي تشير إلى ضرورة تغيير زيت محرك سيارتك لتجنب الأعطال الكبيرة",
    content: `زيت المحرك هو شريان الحياة لسيارتك. إليك أهم العلامات التي تدل على ضرورة تغييره:

**العلامات البصرية:**
1. **لون الزيت الأسود**: الزيت الجيد لونه ذهبي أو بني فاتح
2. **قوام الزيت السميك**: الزيت القديم يصبح لزجاً وسميكاً
3. **وجود شوائب**: ظهور جزيئات معدنية في الزيت

**العلامات الصوتية:**
- أصوات غريبة من المحرك
- صوت طقطقة عند بدء التشغيل
- ضوضاء أثناء القيادة

**علامات الأداء:**
- انخفاض في أداء المحرك
- زيادة استهلاك الوقود
- ارتفاع درجة حرارة المحرك

**المدة الزمنية:**
- كل 5000-7500 كيلومتر للزيت العادي
- كل 10000-15000 كيلومتر للزيت الصناعي

**نصائح مهمة:**
- لا تنتظر حتى ينفد الزيت تماماً
- استخدم نوع الزيت المناسب لسيارتك
- احتفظ بسجل لتغيير الزيت`,
    category: "maintenance",
    author: "مهندس ميكانيكي",
    date: "2024-01-10",
    readTime: "4 دقائق",
    views: 1100,
    image: "/placeholder.svg?height=300&width=500&text=زيت+المحرك",
    tags: ["صيانة", "زيت المحرك", "نصائح"],
  },
  {
    id: 4,
    title: "أحدث تقنيات السطحات الهيدروليكية",
    excerpt: "اكتشف التطورات الحديثة في تقنيات السطحات الهيدروليكية وكيف تضمن نقلاً آمناً للسيارات",
    content: `تطورت تقنيات السطحات الهيدروليكية بشكل كبير في السنوات الأخيرة:

**المميزات الحديثة:**
1. **نظام التحكم الإلكتروني**: تحكم دقيق في حركة المنصة
2. **أجهزة استشعار الوزن**: توزيع متوازن للحمولة
3. **نظام الأمان المتقدم**: حماية من الانزلاق والسقوط
4. **التحكم عن بُعد**: تشغيل السطحة بأمان من مسافة

**فوائد للعملاء:**
- نقل أكثر أماناً للسيارات الفاخرة
- تقليل مخاطر الخدوش والأضرار
- سرعة أكبر في التحميل والتفريغ
- إمكانية نقل السيارات المنخفضة

**في سطحة المدينة المنورة:**
نستخدم أحدث السطحات الهيدروليكية المجهزة بتقنيات متقدمة لضمان نقل آمن وسريع لسيارتكم. فريقنا مدرب على استخدام هذه التقنيات بكفاءة عالية.`,
    category: "news",
    author: "فريق التقنيات",
    date: "2024-01-08",
    readTime: "6 دقائق",
    views: 750,
    image: "/placeholder.svg?height=300&width=500&text=سطحة+هيدروليكية",
    tags: ["تقنيات", "سطحة", "هيدروليك"],
  },
  {
    id: 5,
    title: "نصائح القيادة الآمنة في الطرق السريعة",
    excerpt: "دليل شامل للقيادة الآمنة على الطرق السريعة وتجنب المخاطر الشائعة",
    content: `القيادة على الطرق السريعة تتطلب مهارات خاصة واحتياطات إضافية:

**قبل الانطلاق:**
1. **فحص السيارة**: تأكد من سلامة الإطارات والفرامل
2. **التخطيط للرحلة**: حدد المسار والتوقفات
3. **حالة السائق**: تأكد من أنك مستيقظ ومتنبه
4. **الوقود**: املأ الخزان قبل السفر

**أثناء القيادة:**
- حافظ على مسافة أمان كافية
- استخدم المرايا بانتظام
- تجنب التغيير المفاجئ للمسارات
- احترم حدود السرعة

**في حالة الطوارئ:**
- توقف في مكان آمن
- ضع مثلث التحذير
- اتصل بخدمة الطوارئ
- ابق داخل السيارة إذا أمكن

**خدمات الطوارئ:**
في حالة تعطل سيارتك على الطريق السريع، اتصل بسطحة المدينة المنورة على 0530001368 للحصول على مساعدة سريعة وآمنة.`,
    category: "safety",
    author: "خبير السلامة المرورية",
    date: "2024-01-05",
    readTime: "5 دقائق",
    views: 920,
    image: "/placeholder.svg?height=300&width=500&text=قيادة+آمنة",
    tags: ["قيادة", "سلامة", "طرق سريعة"],
  },
  {
    id: 6,
    title: "كيفية اختيار خدمة السطحة المناسبة",
    excerpt: "معايير مهمة لاختيار خدمة سطحة موثوقة وآمنة لسيارتك",
    content: `اختيار خدمة السطحة المناسبة أمر مهم لضمان سلامة سيارتك:

**المعايير الأساسية:**
1. **الترخيص والتأمين**: تأكد من أن الشركة مرخصة ومؤمنة
2. **الخبرة**: اختر شركة ذات خبرة طويلة في المجال
3. **نوع السطحات**: تأكد من توفر النوع المناسب لسيارتك
4. **التوفر**: خدمة 24 ساعة للحالات الطارئة

**علامات الجودة:**
- سائقون مدربون ومحترفون
- معدات حديثة ومصانة جيداً
- أسعار واضحة وعادلة
- تقييمات إيجابية من العملاء

**أسئلة مهمة:**
- ما هو وقت الوصول المتوقع؟
- هل السطحة مناسبة لنوع سيارتي؟
- ما هي تكلفة الخدمة؟
- هل يوجد تأمين على السيارة أثناء النقل؟

**لماذا سطحة المدينة المنورة؟**
- خبرة أكثر من 10 سنوات
- أسطول متنوع من السطحات
- خدمة 24/7
- أسعار منافسة
- تأمين شامل
- فريق محترف ومدرب`,
    category: "tips",
    author: "فريق سطحة المدينة",
    date: "2024-01-03",
    readTime: "4 دقائق",
    views: 1350,
    image: "/placeholder.svg?height=300&width=500&text=اختيار+السطحة",
    tags: ["نصائح", "اختيار", "خدمة"],
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [visiblePosts, setVisiblePosts] = useState(6)

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch = post.title.includes(searchTerm) || post.excerpt.includes(searchTerm)
    return matchesCategory && matchesSearch
  })

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 3)
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">مدونة سطحة المدينة</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              نصائح مفيدة ومقالات تعليمية حول السيارات والقيادة الآمنة
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-yellow-500 text-gray-900" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(0, visiblePosts).map((post) => (
                <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find((cat) => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 ml-1" />
                      <span className="ml-3">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-3 ml-1" />
                      <span className="ml-3">{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                      <Eye className="w-4 h-4 mr-3 ml-1" />
                      <span>{post.views}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs flex items-center"
                          >
                            <Tag className="w-3 h-3 ml-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          اقرأ المزيد
                          <ArrowLeft className="w-4 h-4 mr-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-12">
                <Button onClick={loadMore} variant="outline" className="px-8 py-3 bg-transparent">
                  عرض المزيد من المقالات
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">اشترك في النشرة الإخبارية</h2>
            <p className="text-xl text-gray-300 mb-8">احصل على أحدث النصائح والمقالات مباشرة في بريدك الإلكتروني</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="أدخل بريدك الإلكتروني" className="flex-1 bg-white text-gray-900" />
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8">اشترك</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  )
}
