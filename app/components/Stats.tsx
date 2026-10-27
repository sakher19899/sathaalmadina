"use client"

import { useEffect, useState } from "react"
import { Users, Clock, Star, Truck } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 5000,
    suffix: "+",
    label: "عميل راضٍ",
    description: "خدمنا آلاف العملاء بنجاح",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Clock,
    number: 15,
    suffix: " دقيقة",
    label: "متوسط وقت الوصول",
    description: "أسرع استجابة في المدينة",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Star,
    number: 4.9,
    suffix: "/5",
    label: "تقييم العملاء",
    description: "أعلى تقييمات الجودة",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Truck,
    number: 12,
    suffix: " سطحة",
    label: "أسطول متكامل",
    description: "معدات حديثة ومتطورة",
    color: "from-cyan-500 to-blue-600",
  },
]

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="stats-section"
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Star className="w-5 h-5 text-yellow-400 ml-2" />
            <span className="text-white font-medium">إنجازاتنا بالأرقام</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            أرقام تتحدث عن{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">تميزنا</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            سنوات من الخبرة والتميز في خدمة عملائنا الكرام
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div
                  className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-center mb-4">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    {isVisible ? <CountUp end={stat.number} suffix={stat.suffix} /> : `0${stat.suffix}`}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative Element */}
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping`}
                ></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">انضم إلى آلاف العملاء الراضين</h3>
            <p className="text-lg text-gray-200 mb-6">
              احجز خدمتك الآن واكتشف لماذا نحن الخيار الأول في المدينة المنورة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0530001368">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                  <Clock className="w-6 h-6 ml-2 inline" />
                  احجز الآن - 0530001368
                </button>
              </a>
              <button
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Truck className="w-6 h-6 ml-2 inline" />
                تصفح الخدمات
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
