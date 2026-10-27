"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Car, Wrench, MapPin, Eye, X } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import Image from "next/image"

const categories = [
  { id: "all", name: "جميع الصور", icon: Eye },
  { id: "trucks", name: "السطحات", icon: Truck },
  { id: "services", name: "الخدمات", icon: Wrench },
  { id: "cars", name: "السيارات", icon: Car },
  { id: "locations", name: "المواقع", icon: MapPin },
]

const galleryItems = [
  {
    id: 1,
    category: "services",
    title: "سطحة المدينة المنورة تنقل سيارة SUV",
    description: "سطحة المدينة المنورة تقوم بنقل سيارة SUV بيضاء بأمان تام أمام مركز الخدمات السريعة",
    image: "/images/satha-medina-suv-transport.png",
    alt: "سطحة المدينة المنورة تنقل سيارة SUV بيضاء - خدمة نقل السيارات بالمدينة المنورة رقم 0530001368",
  },
  {
    id: 2,
    category: "services",
    title: "سطحة المدينة المنورة تنقل حافلة",
    description: "سطحة المدينة المنورة تنقل حافلة زرقاء كبيرة بخدمة احترافية ومعدات متخصصة",
    image: "/images/satha-medina-bus-transport.png",
    alt: "سطحة المدينة المنورة تنقل حافلة كبيرة - خدمة نقل المركبات الثقيلة بالمدينة المنورة",
  },
  {
    id: 3,
    category: "trucks",
    title: "سطحة هيدروليك المدينة المنورة",
    description: "سطحة هيدروليك المدينة المنورة حديثة ومجهزة بأحدث التقنيات لنقل جميع أنواع السيارات",
    image: "/images/satha-medina-empty-truck.png",
    alt: "سطحة هيدروليك المدينة المنورة فارغة - أحدث سطحات المدينة المنورة رقم 0530001368",
  },
  {
    id: 4,
    category: "services",
    title: "خدمة سطحة المدينة المنورة الليلية",
    description: "سطحة المدينة المنورة تقدم خدمة 24 ساعة حتى في ساعات الليل المتأخرة مع إضاءة كاملة",
    image: "/images/satha-medina-night-service.png",
    alt: "سطحة المدينة المنورة خدمة ليلية - سطحة 24 ساعة المدينة المنورة رقم 0530001368",
  },
  {
    id: 5,
    category: "services",
    title: "سحب سيارة من حادث مروري",
    description: "سطحة المدينة المنورة تسحب سيارة معطلة من موقع حادث مروري بفريق متخصص ومعدات آمنة",
    image: "/images/satha-medina-accident-recovery.png",
    alt: "سطحة المدينة المنورة تسحب سيارة من حادث - خدمة سحب سيارات الحوادث بالمدينة المنورة",
  },
  {
    id: 6,
    category: "trucks",
    title: "سطحة المدينة المنورة في الموقع",
    description: "سطحة المدينة المنورة جاهزة للخدمة في أي موقع داخل المدينة المنورة وخارجها",
    image: "/images/satha-medina-hydraulic-truck.png",
    alt: "سطحة المدينة المنورة جاهزة للخدمة - خدمة سطحة فورية المدينة المنورة",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [visibleCount, setVisibleCount] = useState(9)

  const filteredItems = galleryItems.filter((item) => selectedCategory === "all" || item.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">معرض صور سطحة المدينة المنورة</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              تصفح مجموعة من الصور الحقيقية لـ <strong>سطحة المدينة المنورة</strong> وهي تقدم خدماتها المتميزة في جميع
              أحياء المدينة المنورة - رقم سطحة المدينة: <strong>0530001368</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id ? "bg-yellow-500 text-gray-900" : ""
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.slice(0, visibleCount).map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={item.id <= 3}
                    loading={item.id <= 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {visibleCount < filteredItems.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" className="px-8 py-3 bg-transparent">
                عرض المزيد من صور سطحة المدينة المنورة
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              aria-label="إغلاق الصورة"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              صور حقيقية لخدمات <span className="text-yellow-600">سطحة المدينة المنورة</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              هذه الصور الحقيقية تُظهر جودة خدمات <strong>سطحة المدينة المنورة</strong> في نقل وسحب جميع أنواع السيارات.
              نحن نقدم خدمة <strong>سطحة فورية المدينة المنورة</strong> على مدار 24 ساعة بأعلى معايير الأمان والجودة.
              <strong>رقم سطحة المدينة المنورة: 0530001368</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">سطحة هيدروليك المدينة المنورة</h3>
                <p className="text-gray-600 text-sm">أحدث السطحات الهيدروليكية لنقل آمن لجميع أنواع السيارات</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">خدمة 24 ساعة</h3>
                <p className="text-gray-600 text-sm">سطحة المدينة المنورة متوفرة في أي وقت ليلاً ونهاراً</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">جميع أنواع السيارات</h3>
                <p className="text-gray-600 text-sm">من السيارات الصغيرة إلى الحافلات والمركبات الثقيلة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">هل أعجبتك خدمات سطحة المدينة المنورة؟</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            احصل على نفس الخدمة المتميزة التي تراها في الصور - اتصل برقم سطحة المدينة الآن
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0530001368">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 font-bold">
                اتصل برقم سطحة المدينة - 0530001368
              </Button>
            </a>
            <a href="/price-calculator">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 font-bold bg-transparent"
              >
                احسب سعر سطحة المدينة
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
