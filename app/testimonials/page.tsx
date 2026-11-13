"use client"

import { useState } from "react"
import { Star, Quote, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import BackToTop from "../components/BackToTop"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد العلي",
    location: "حي العوالي، المدينة المنورة",
    rating: 5,
    date: "2024-01-10",
    service: "سحب سيارة معطلة",
    comment:
      "خدمة ممتازة وسريعة! تعطلت سيارتي في الطريق ووصلوا خلال 20 دقيقة. السائق كان محترف جداً والسعر معقول. أنصح بهم بشدة.",
    image: "/placeholder.svg?height=80&width=80&text=أحمد+العلي",
  },
  {
    id: 2,
    name: "فاطمة سالم القرشي",
    location: "حي الحرة الشرقية، المدينة المنورة",
    rating: 5,
    date: "2024-01-08",
    service: "نقل سيارة من المدينة إلى جدة",
    comment:
      "نقلوا سيارتي من المدينة إلى جدة بأمان تام. وصلت السيارة بدون أي خدوش والسعر كان أقل من المتوقع. شكراً لكم على الخدمة المميزة.",
    image: "/placeholder.svg?height=80&width=80&text=فاطمة+القرشي",
  },
  {
    id: 3,
    name: "عبدالله سعد الأنصاري",
    location: "حي قباء، المدينة المنورة",
    rating: 5,
    date: "2024-01-05",
    service: "سحب سيارة من حادث",
    comment:
      "تعرضت لحادث بسيط والحمد لله، واتصلت بهم فوراً. وصلوا بسرعة وتعاملوا مع الموقف بمهنية عالية. السائق كان متفهم ومساعد جداً.",
    image: "/placeholder.svg?height=80&width=80&text=عبدالله+الأنصاري",
  },
  {
    id: 4,
    name: "نورا أحمد الحربي",
    location: "حي النخيل، المدينة المنورة",
    rating: 5,
    date: "2024-01-03",
    service: "خدمة ليلية - سحب سيارة",
    comment:
      "تعطلت سيارتي في الليل وكنت خائفة، لكن خدمة العملاء طمأنوني ووصل السائق خلال 25 دقيقة. خدمة راقية ومحترمة جداً.",
    image: "/placeholder.svg?height=80&width=80&text=نورا+الحربي",
  },
  {
    id: 5,
    name: "محمد عبدالرحمن الشمري",
    location: "حي الأزهري، المدينة المنورة",
    rating: 4,
    date: "2024-01-01",
    service: "نقل سيارة جديدة",
    comment:
      "اشتريت سيارة جديدة واحتجت نقلها للبيت. الخدمة كانت جيدة والسعر مناسب، لكن تأخروا قليلاً عن الموعد المحدد. بشكل عام راضي عن الخدمة.",
    image: "/placeholder.svg?height=80&width=80&text=محمد+الشمري",
  },
  {
    id: 6,
    name: "سارة خالد المطيري",
    location: "حي الجمعة، المدينة المنورة",
    rating: 5,
    date: "2023-12-28",
    service: "سحب سيارة معطلة",
    comment:
      "خدمة رائعة! السائق وصل بسرعة وكان لطيف جداً. شرح لي سبب العطل وأعطاني نصائح مفيدة. أكيد سأتعامل معهم مرة أخرى.",
    image: "/placeholder.svg?height=80&width=80&text=سارة+المطيري",
  },
  {
    id: 7,
    name: "يوسف عمر الغامدي",
    location: "حي العيون، المدينة المنورة",
    rating: 5,
    date: "2023-12-25",
    service: "نقل سيارة من المدينة إلى الرياض",
    comment:
      "نقلت سيارتي من المدينة للرياض عشان الشغل. وصلت السيارة في الوقت المحدد وبحالة ممتازة. السعر كان عادل والخدمة احترافية.",
    image: "/placeholder.svg?height=80&width=80&text=يوسف+الغامدي",
  },
  {
    id: 8,
    name: "عائشة محمد الزهراني",
    location: "حي السلام، المدينة المنورة",
    rating: 5,
    date: "2023-12-20",
    service: "خدمة طارئة",
    comment:
      "كانت حالة طارئة وسيارتي تعطلت في مكان بعيد. اتصلت بهم وجاؤوا بسرعة رغم صعوبة الوصول للمكان. شكراً لكم على الاهتمام والسرعة.",
    image: "/placeholder.svg?height=80&width=80&text=عائشة+الزهراني",
  },
]

const stats = [
  { number: "4.9", label: "متوسط التقييم", suffix: "/5" },
  { number: "5000+", label: "عميل راضٍ", suffix: "" },
  { number: "98%", label: "نسبة الرضا", suffix: "" },
  { number: "15", label: "دقيقة متوسط الوصول", suffix: "" },
]

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("all")
  const [visibleCount, setVisibleCount] = useState(6)

  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (filter === "all") return true
    if (filter === "5") return testimonial.rating === 5
    if (filter === "4") return testimonial.rating === 4
    return true
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">آراء عملائنا</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              نفخر بثقة عملائنا وآرائهم الإيجابية التي تحفزنا على تقديم أفضل خدمة ممكنة
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  {stat.number}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-yellow-500 text-gray-900" : ""}
            >
              جميع التقييمات
            </Button>
            <Button
              variant={filter === "5" ? "default" : "outline"}
              onClick={() => setFilter("5")}
              className={filter === "5" ? "bg-yellow-500 text-gray-900" : ""}
            >
              5 نجوم
            </Button>
            <Button
              variant={filter === "4" ? "default" : "outline"}
              onClick={() => setFilter("4")}
              className={filter === "4" ? "bg-yellow-500 text-gray-900" : ""}
            >
              4 نجوم
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.slice(0, visibleCount).map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full ml-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4 ml-1" />
                        {testimonial.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 ml-1" />
                        {new Date(testimonial.date).toLocaleDateString("ar-SA")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex ml-2">{renderStars(testimonial.rating)}</div>
                    <span className="text-sm text-gray-600">({testimonial.rating}/5)</span>
                  </div>

                  <div className="bg-yellow-50 px-3 py-1 rounded-full text-sm text-yellow-700 mb-4 inline-block">
                    {testimonial.service}
                  </div>

                  <div className="relative">
                    <Quote className="absolute top-0 right-0 w-8 h-8 text-gray-200" />
                    <p className="text-gray-700 leading-relaxed pr-6">{testimonial.comment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {visibleCount < filteredTestimonials.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" className="px-8 py-3 bg-transparent">
                عرض المزيد من التقييمات
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">انضم إلى عملائنا الراضين</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            احصل على نفس الخدمة المتميزة التي حصل عليها آلاف العملاء قبلك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0530001368">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 font-bold">
                اتصل الآن - 0530001368
              </Button>
            </a>
            <a href="https://wa.me/966530001368">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 font-bold bg-transparent"
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
