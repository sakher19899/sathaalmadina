import { MapPin, Clock, Truck, Globe, Shield, Award } from "lucide-react"

const areas = [
  "المدينة المنورة - جميع الأحياء",
  "من المدينة إلى جدة",
  "من المدينة إلى مكة المكرمة",
  "من المدينة إلى الرياض",
  "من المدينة إلى الطائف",
  "من المدينة إلى ينبع",
  "من المدينة إلى تبوك",
  "جميع مدن المملكة العربية السعودية",
]

const features = [
  {
    icon: Clock,
    title: "متوفرون 24 ساعة طوال أيام الأسبوع",
    color: "text-indigo-500",
  },
  {
    icon: Shield,
    title: "أسعار منافسة وثابتة",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "فريق عمل مدرب ومحترف",
    color: "text-cyan-500",
  },
  {
    icon: Globe,
    title: "ضمان سلامة السيارة أثناء النقل",
    color: "text-purple-500",
  },
]

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 ml-2" />
            تغطية شاملة
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            مناطق <span className="text-gradient-primary">التغطية</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            نغطي جميع أنحاء المدينة المنورة ونقدم خدمات النقل بين المدن في جميع أنحاء المملكة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 space-x-reverse bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 hover:border-blue-500 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-indigo-600 transition-colors duration-300">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-2 rounded-lg ml-3">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                🚗 ننقل سيارتك إلى أي مدينة في المملكة
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 space-x-reverse p-3 bg-indigo-50 rounded-xl">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">وقت الوصول: 15-30 دقيقة داخل المدينة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse p-3 bg-blue-50 rounded-xl">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">سطحات متنوعة حسب نوع السيارة</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-center text-white">خدمة شاملة في جميع الأوقات</h3>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 space-x-reverse p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white group-hover:text-cyan-200 transition-colors duration-300">
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <a href="tel:0530001368">
                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                      احجز خدمتك الآن - 0530001368
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
