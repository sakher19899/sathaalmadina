"use client"

import { useState } from "react"
import { Phone, MapPin, Truck, CheckCircle, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    id: 1,
    title: "اتصل بنا",
    description: "اتصل على 0530001368 أو راسلنا عبر واتساب وأخبرنا عن موقعك ونوع الخدمة المطلوبة",
    icon: Phone,
    gradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    id: 2,
    title: "تحديد الموقع",
    description: "شارك موقعك الحالي معنا وسنحدد أقرب سطحة متاحة لك",
    icon: MapPin,
    gradient: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    id: 3,
    title: "إرسال السطحة",
    description: "نرسل السطحة المناسبة لحالتك وستصل خلال 15-30 دقيقة",
    icon: Truck,
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: 4,
    title: "إنجاز المهمة",
    description: "نقوم بسحب أو نقل سيارتك بأمان إلى الوجهة المطلوبة",
    icon: CheckCircle,
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50" id="how-it-works">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6 border border-indigo-200">
            <Clock className="w-5 h-5 text-indigo-600 ml-2" />
            <span className="text-indigo-700 font-medium">كيف نعمل</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            خطوات بسيطة للحصول على{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">خدمتنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            عملية سهلة وسريعة للحصول على خدمة سطحة المدينة المنورة في أي وقت ومن أي مكان
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-emerald-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeStep === index ? "scale-105" : "hover:scale-105"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`${step.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 ${step.borderColor} relative`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 bg-white border-4 border-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-gray-900">{step.id}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`bg-gradient-to-br ${step.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Active Indicator */}
                  {activeStep === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl border-2 border-indigo-300 animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time Indicator */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-indigo-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-indigo-600 ml-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                المدة الإجمالية:{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  15-30 دقيقة
                </span>
              </h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">من لحظة اتصالك بنا حتى وصول السطحة إلى موقعك</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0530001368">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن - 0530001368
                </Button>
              </a>
              <a href="https://wa.me/966530001368">
                <Button
                  variant="outline"
                  className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 font-bold px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
