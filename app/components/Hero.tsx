"use client"

import { Phone, MessageCircle, Star, Shield, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-float"></div>

      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8 sm:space-y-12">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in">
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400 ml-2" />
                <span className="text-sm sm:text-base font-medium">معتمدة</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400 ml-2" />
                <span className="text-sm sm:text-base font-medium">مؤمنة</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-pink-400 ml-2" />
                <span className="text-sm sm:text-base font-medium">فورية</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6 animate-slide-up text-center lg:text-right">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">سطحة المدينة المنورة</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                  خدمة فورية 24 ساعة
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed">
                خدمة سحب ونقل السيارات الأسرع والأوثق في المدينة المنورة
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center animate-slide-up">
              <a
                href="tel:0530001368"
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
              >
                <div className="flex items-center justify-center space-x-3 space-x-reverse">
                  <Phone className="w-6 sm:w-7 h-6 sm:h-7 group-hover:animate-bounce" />
                  <span>اتصل الآن: 0530001368</span>
                </div>
              </a>

              <a
                href="https://wa.me/966530001368"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
              >
                <div className="flex items-center justify-center space-x-3 space-x-reverse">
                  <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7 group-hover:animate-bounce" />
                  <span>واتساب فوري</span>
                </div>
              </a>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 space-x-reverse animate-fade-in">
              <div className="flex space-x-1 space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 sm:w-7 h-6 sm:h-7 text-yellow-400 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-lg sm:text-xl text-gray-300 mr-3">4.9/5 من تقييمات العملاء</span>
            </div>
          </div>

          {/* Hero Image - Static */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <Image
                src="/images/satha-medina-night-service.png"
                alt="سطحة المدينة المنورة - خدمة نقل السيارات 24 ساعة رقم 0530001368"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce-slow shadow-glow-cyan">
              خدمة 24/7
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-float shadow-colored">
              وصول خلال 15 دقيقة
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
