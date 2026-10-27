"use client"

import { useState } from "react"
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const areas = [
  { name: "حي العوالي", time: "10-15 دقيقة", available: true },
  { name: "حي الحرة الشرقية", time: "15-20 دقيقة", available: true },
  { name: "حي قباء", time: "12-18 دقيقة", available: true },
  { name: "حي النخيل", time: "15-25 دقيقة", available: true },
  { name: "حي الأزهري", time: "10-20 دقيقة", available: true },
  { name: "حي الجمعة", time: "15-25 دقيقة", available: true },
  { name: "حي العيون", time: "20-30 دقيقة", available: true },
  { name: "حي السلام", time: "15-25 دقيقة", available: true },
  { name: "حي الدفاع", time: "20-30 دقيقة", available: true },
  { name: "حي المطار", time: "25-35 دقيقة", available: true },
  { name: "حي الخالدية", time: "15-25 دقيقة", available: true },
  { name: "سطحة المليليح", time: "20-30 دقيقة", available: true },
]

const cities = [
  { name: "الرياض", distance: "400 كم", price: "من 800 ريال" },
  { name: "جدة", distance: "350 كم", price: "من 700 ريال" },
  { name: "مكة المكرمة", distance: "380 كم", price: "من 750 ريال" },
  { name: "الدمام", distance: "450 كم", price: "من 900 ريال" },
  { name: "تبوك", distance: "300 كم", price: "من 600 ريال" },
  { name: "أبها", distance: "650 كم", price: "من 1200 ريال" },
]

export default function Coverage() {
  const [activeTab, setActiveTab] = useState("local")

  return (
    <section
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50"
      id="coverage"
      aria-labelledby="coverage-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6 border border-indigo-200">
            <MapPin className="w-5 h-5 text-indigo-600 ml-2" aria-hidden="true" />
            <span className="text-indigo-700 font-medium">مناطق الخدمة</span>
          </div>
          <h2 id="coverage-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            تغطية سطحة المدينة المنورة{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              الشاملة
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تغطية شاملة لجميع أحياء المدينة المنورة مع إمكانية النقل إلى جميع مدن المملكة العربية السعودية
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-white rounded-2xl p-2 shadow-xl border-4 border-indigo-100"
            role="tablist"
            aria-label="نوع التغطية"
          >
            <button
              onClick={() => setActiveTab("local")}
              role="tab"
              aria-selected={activeTab === "local"}
              aria-controls="local-panel"
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "local"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              داخل المدينة المنورة
            </button>
            <button
              onClick={() => setActiveTab("intercity")}
              role="tab"
              aria-selected={activeTab === "intercity"}
              aria-controls="intercity-panel"
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "intercity"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              بين المدن
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "local" ? (
          <div
            id="local-panel"
            role="tabpanel"
            aria-labelledby="local-tab"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <h3 className="sr-only">أحياء المدينة المنورة التي نخدمها</h3>
            {areas.map((area, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-indigo-100 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {area.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 ml-1" aria-hidden="true" />
                        <span>وقت الوصول: {area.time}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 w-8 h-8 rounded-full flex items-center justify-center"
                    aria-label="متوفر"
                  >
                    <CheckCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 border border-indigo-100">
                  <p className="text-sm text-indigo-700 font-medium">متوفر الآن - سطحة {area.name}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            id="intercity-panel"
            role="tabpanel"
            aria-labelledby="intercity-tab"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <h3 className="sr-only">خدمة نقل السيارات بين المدن</h3>
            {cities.map((city, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-cyan-100 group"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    نقل سيارات إلى {city.name}
                  </h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center text-gray-600">
                      <span className="text-sm">المسافة من المدينة المنورة: {city.distance}</span>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-3 border border-cyan-100">
                      <p className="text-lg font-bold text-cyan-700">{city.price}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-indigo-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">لا تجد منطقتك في القائمة؟</h3>
            <p className="text-lg text-gray-600 mb-6">اتصل بنا وسنؤكد لك إمكانية الوصول إلى موقعك في المدينة المنورة</p>
            <a href="tel:0530001368" aria-label="اتصل للاستفسار عن تغطية منطقتك">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-12 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Phone className="w-6 h-6 ml-2" aria-hidden="true" />
                اتصل للاستفسار - 0530001368
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
