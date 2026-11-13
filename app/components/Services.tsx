"use client"

import { Truck, Wrench, MapPin, Clock, Shield, Star } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Truck,
    title: "سحب السيارات المعطلة",
    description: "خدمة سحب فورية للسيارات المعطلة في أي مكان بالمدينة المنورة",
    features: ["استجابة خلال 15 دقيقة", "سطحة هيدروليك حديثة", "فريق مدرب ومحترف"],
    price: "من 100 ريال",
    gradient: "from-indigo-500 to-purple-500",
    shadowColor: "shadow-glow",
    image: "/images/satha-medina-accident-recovery.png",
  },
  {
    icon: MapPin,
    title: "نقل السيارات بين المدن",
    description: "نقل آمن للسيارات من المدينة المنورة إلى جميع مدن المملكة",
    features: ["تأمين شامل", "تتبع مباشر", "ضمان الوصول الآمن"],
    price: "حسب المسافة",
    gradient: "from-cyan-500 to-blue-500",
    shadowColor: "shadow-glow-cyan",
    image: "/images/satha-medina-suv-transport.png",
  },
  {
    icon: Wrench,
    title: "مساعدة على الطريق",
    description: "خدمات الطوارئ والمساعدة الفورية على الطريق",
    features: ["تشغيل البطارية", "تغيير الإطارات", "فتح السيارات المقفلة"],
    price: "من 80 ريال",
    gradient: "from-pink-500 to-purple-500",
    shadowColor: "shadow-glow-pink",
    image: "/images/satha-medina-hydraulic-truck.png",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            خدماتنا <span className="text-gradient-primary">المتميزة</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم خدمات شاملة لسحب ونقل السيارات بأعلى معايير الجودة والأمان في المدينة المنورة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden hover:border-indigo-200/50"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - سطحة المدينة المنورة`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-900">{service.price}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div
                    className={`bg-gradient-to-r ${service.gradient} p-3 sm:p-4 rounded-xl sm:rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 ${service.shadowColor}`}
                  >
                    <service.icon className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 mr-1">4.9</span>
                    </div>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-700">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full ml-3 flex-shrink-0`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <a
                    href="tel:0530001368"
                    className={`bg-gradient-to-r ${service.gradient} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:${service.shadowColor} transition-all duration-300 transform hover:scale-105 text-sm sm:text-base`}
                  >
                    اطلب الآن
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-center justify-center space-x-3 space-x-reverse group">
                <div className="bg-emerald-500/20 p-3 rounded-xl group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-emerald-400" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold">مؤمنة بالكامل</div>
                  <div className="text-sm sm:text-base text-gray-300">تأمين شامل على جميع الخدمات</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 space-x-reverse group">
                <div className="bg-cyan-500/20 p-3 rounded-xl group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <Clock className="w-8 sm:w-10 h-8 sm:h-10 text-cyan-400" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold">خدمة 24/7</div>
                  <div className="text-sm sm:text-base text-gray-300">متاحون في أي وقت</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 space-x-reverse group">
                <div className="bg-pink-500/20 p-3 rounded-xl group-hover:bg-pink-500/30 transition-colors duration-300">
                  <Star className="w-8 sm:w-10 h-8 sm:h-10 text-pink-400" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold">تقييم 4.9/5</div>
                  <div className="text-sm sm:text-base text-gray-300">رضا العملاء أولويتنا</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
