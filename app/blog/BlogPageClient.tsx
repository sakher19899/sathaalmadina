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
    category: "tips",
    author: "فريق سطحة المدينة",
    date: "2024-01-15",
    readTime: "5 دقائق",
    views: 1250,
    image: "/-----------------.jpg",
    tags: ["نصائح", "صيانة", "طوارئ"],
  },
  {
    id: 2,
    title: "كيفية التعامل مع حوادث السيارات",
    excerpt: "دليل شامل للتعامل الصحيح مع حوادث السيارات وخطوات السلامة الواجب اتباعها",
    category: "safety",
    author: "خبير السلامة المرورية",
    date: "2024-01-12",
    readTime: "7 دقائق",
    views: 890,
    image: "/--------------.jpg",
    tags: ["حوادث", "سلامة", "تأمين"],
  },
  {
    id: 3,
    title: "علامات تدل على ضرورة تغيير زيت المحرك",
    excerpt: "تعرف على العلامات التي تشير إلى ضرورة تغيير زيت محرك سيارتك لتجنب الأعطال الكبيرة",
    category: "maintenance",
    author: "مهندس ميكانيكي",
    date: "2024-01-10",
    readTime: "4 دقائق",
    views: 1100,
    image: "/----------.jpg",
    tags: ["صيانة", "زيت المحرك", "نصائح"],
  },
  {
    id: 4,
    title: "أحدث تقنيات السطحات الهيدروليكية",
    excerpt: "اكتشف التطورات الحديثة في تقنيات السطحات الهيدروليكية وكيف تضمن نقلاً آمناً للسيارات",
    category: "news",
    author: "فريق التقنيات",
    date: "2024-01-08",
    readTime: "6 دقائق",
    views: 750,
    image: "/---------------.jpg",
    tags: ["تقنيات", "سطحة", "هيدروليك"],
  },
  {
    id: 5,
    title: "نصائح القيادة الآمنة في الطرق السريعة",
    excerpt: "دليل شامل للقيادة الآمنة على الطرق السريعة وتجنب المخاطر الشائعة",
    category: "safety",
    author: "خبير السلامة المرورية",
    date: "2024-01-05",
    readTime: "5 دقائق",
    views: 920,
    image: "/----------.jpg",
    tags: ["قيادة", "سلامة", "طرق سريعة"],
  },
  {
    id: 6,
    title: "كيفية اختيار خدمة السطحة المناسبة",
    excerpt: "معايير مهمة لاختيار خدمة سطحة موثوقة وآمنة لسيارتك",
    category: "tips",
    author: "فريق سطحة المدينة",
    date: "2024-01-03",
    readTime: "4 دقائق",
    views: 1350,
    image: "/-------------.jpg",
    tags: ["نصائح", "اختيار", "خدمة"],
  },
]

export default function BlogPageClient() {
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
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-20">
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
                  className={selectedCategory === category.id ? "bg-indigo-600 hover:bg-indigo-700 text-white" : ""}
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
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">اشترك في النشرة الإخبارية</h2>
            <p className="text-xl text-gray-300 mb-8">احصل على أحدث النصائح والمقالات مباشرة في بريدك الإلكتروني</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="أدخل بريدك الإلكتروني" className="flex-1 bg-white text-gray-900" />
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8">اشترك</Button>
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
