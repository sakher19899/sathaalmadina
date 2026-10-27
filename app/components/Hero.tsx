"use client"
import { Phone, Clock, MapPin, Star, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-300/30">
              <Star className="w-5 h-5 text-cyan-400 ml-2" aria-hidden="true" />
              <span className="text-white font-medium">الخدمة الأولى في المدينة المنورة</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              سطحة المدينة المنورة
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                خدمة فورية 24 ساعة
              </span>
            </h1>

            <h2 className="sr-only">رقم سطحة المدينة المنورة 0530001368 - سحب ونقل السيارات</h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              خدمة سحب ونقل السيارات متاحة 24 ساعة في جميع أنحاء المدينة المنورة بأسرع وقت وأفضل الأسعار
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-white font-bold mb-2">24 ساعة</h3>
                <p className="text-indigo-200 text-sm">خدمة متواصلة</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-white font-bold mb-2">تغطية شاملة</h3>
                <p className="text-indigo-200 text-sm">جميع الأحياء</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-white font-bold mb-2">ضمان الجودة</h3>
                <p className="text-indigo-200 text-sm">خدمة احترافية</p>
              </div>
            </div>

            {/* CTA Buttons - تغيير لون الزر الأساسي للتدرج الأزرق */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="tel:0530001368" aria-label="اتصل الآن على رقم سطحة المدينة المنورة 0530001368">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <Phone className="w-6 h-6 ml-2" aria-hidden="true" />
                  اتصل الآن - 0530001368
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto bg-transparent"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="تعرف على خدمات سطحة المدينة المنورة"
              >
                تعرف على خدماتنا
                <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-indigo-200 text-sm">عملية سحب ناجحة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-indigo-200 text-sm">خدمة متواصلة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">15</div>
                <div className="text-indigo-200 text-sm">دقيقة وصول</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/-----------------------------------------------.jpg"
                alt="سطحة المدينة المنورة - خدمة سحب ونقل السيارات على مدار الساعة"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-6 right-6 left-6 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <h3 className="text-xl font-bold mb-2">خدمة سحب احترافية</h3>
                  <p className="text-indigo-100 text-sm">نصل إليك في أي مكان بالمدينة المنورة خلال 15 دقيقة</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
