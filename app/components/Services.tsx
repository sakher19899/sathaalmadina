"use client"

import { useState } from "react"
import { Truck, Clock, Shield, Star, Phone, ArrowLeft, Wrench, Car, Bus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    id: "towing",
    title: "سحب السيارات",
    description: "خدمة سحب احترافية لجميع أنواع السيارات الصغيرة والكبيرة",
    image: "/images/satha-medina-suv-transport.png",
    icon: Truck,
    features: ["سحب آمن", "معدات حديثة", "فريق محترف"],
    price: "من 150 ريال",
    time: "15-20 دقيقة",
    alt: "خدمة سحب السيارات في المدينة المنورة - سطحة هيدروليك",
  },
  {
    id: "transport",
    title: "نقل السيارات",
    description: "نقل السيارات بين المدن والمحافظات بأمان تام",
    image: "/images/satha-medina-bus-transport.png",
    icon: Car,
    features: ["نقل آمن", "تأمين شامل", "تتبع الرحلة"],
    price: "من 300 ريال",
    time: "حسب المسافة",
    alt: "خدمة نقل السيارات بين المدن من المدينة المنورة",
  },
  {
    id: "emergency",
    title: "خدمة الطوارئ",
    description: "استجابة فورية للحوادث والأعطال في أي وقت",
    image: "/images/satha-medina-accident-recovery.png",
    icon: Shield,
    features: ["استجابة فورية", "24 ساعة", "فريق طوارئ"],
    price: "من 200 ريال",
    time: "10-15 دقيقة",
    alt: "خدمة طوارئ سطحة المدينة المنورة - استجابة سريعة للحوادث",
  },
  {
    id: "heavy",
    title: "سحب المركبات الثقيلة",
    description: "سحب الشاحنات والحافلات والمعدات الثقيلة",
    image: "/images/satha-medina-hydraulic-truck.png",
    icon: Bus,
    features: ["معدات هيدروليكية", "رافعات قوية", "خبرة عالية"],
    price: "من 500 ريال",
    time: "20-30 دقيقة",
    alt: "سحب المركبات الثقيلة والشاحنات في المدينة المنورة",
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState("towing")

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6 border border-indigo-200">
            <Wrench className="w-5 h-5 text-indigo-600 ml-2" aria-hidden="true" />
            <span className="text-indigo-700 font-medium">خدماتنا المتميزة</span>
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            خدمات سطحة المدينة المنورة{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              الشاملة
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متكاملة من خدمات السحب والنقل بأعلى معايير الجودة والأمان في المدينة المنورة
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist" aria-label="خدمات سطحة المدينة">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                role="tab"
                aria-selected={activeService === service.id}
                aria-controls={`panel-${service.id}`}
                className={`flex items-center px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl scale-105"
                    : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 shadow-lg"
                }`}
              >
                <IconComponent className="w-5 h-5 ml-2" aria-hidden="true" />
                {service.title}
              </button>
            )
          })}
        </div>

        {/* Active Service Details */}
        {services.map((service) => {
          const IconComponent = service.icon
          return (
            activeService === service.id && (
              <div
                key={service.id}
                id={`panel-${service.id}`}
                role="tabpanel"
                aria-labelledby={service.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center ml-4">
                        <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900">{service.title}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                            {service.price}
                          </span>
                          <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                            <Clock className="w-4 h-4 ml-1" aria-hidden="true" />
                            {service.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">مميزات الخدمة:</h4>
                    <ul className="grid gap-3" role="list">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center bg-white rounded-xl p-4 shadow-lg border border-indigo-100"
                        >
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-8 h-8 rounded-full flex items-center justify-center ml-3">
                            <Star className="w-4 h-4 text-white" aria-hidden="true" />
                          </div>
                          <span className="font-medium text-gray-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:0530001368" aria-label={`اطلب خدمة ${service.title} الآن - 0530001368`}>
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                        <Phone className="w-6 h-6 ml-2" aria-hidden="true" />
                        اطلب الخدمة الآن
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto bg-transparent"
                      onClick={() =>
                        document.getElementById("price-calculator")?.scrollIntoView({ behavior: "smooth" })
                      }
                      aria-label="احسب تكلفة الخدمة"
                    >
                      احسب التكلفة
                      <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center ml-3">
                        <Star className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">خدمة متميزة</div>
                        <div className="text-xs text-gray-600">ضمان الجودة</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        })}

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج خدمة مخصصة؟</h3>
            <p className="text-lg mb-6 opacity-90">تواصل معنا وسنقدم لك الحل المناسب لاحتياجاتك</p>
            <a href="tel:0530001368" aria-label="اتصل بنا للحصول على خدمة مخصصة">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Phone className="w-6 h-6 ml-2" aria-hidden="true" />
                اتصل بنا - 0530001368
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
