import { Users, Award, Clock, Shield } from "lucide-react"

const stats = [
  {
    icon: Award,
    number: "+10",
    label: "سنوات خبرة",
    description: "في خدمة سحب ونقل السيارات",
    color: "from-indigo-500 to-purple-500",
    shadowColor: "shadow-glow",
  },
  {
    icon: Users,
    number: "5000+",
    label: "عميل راضٍ",
    description: "يثقون في خدماتنا المتميزة",
    color: "from-cyan-500 to-blue-500",
    shadowColor: "shadow-glow-cyan",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "خدمة متواصلة",
    description: "متوفرون في أي وقت لخدمتكم",
    color: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-glow-emerald",
  },
  {
    icon: Shield,
    number: "100%",
    label: "أمان مضمون",
    description: "تأمين شامل على جميع الخدمات",
    color: "from-pink-500 to-purple-500",
    shadowColor: "shadow-glow-pink",
  },
]

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48"></div>

      <div className="container-responsive relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Award className="w-4 h-4 ml-2" />
            إنجازاتنا
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            أرقام تتحدث عن <span className="text-gradient-primary">تميزنا</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بما حققناه من إنجازات وثقة عملائنا على مدار السنوات الماضية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden hover:border-indigo-200/50 p-6 sm:p-8 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`bg-gradient-to-r ${stat.color} p-4 sm:p-5 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 ${stat.shadowColor} mb-4 sm:mb-6`}
                >
                  <stat.icon className="w-8 sm:w-10 h-8 sm:h-10" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {stat.number}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{stat.label}</h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-2xl">
            <Shield className="w-6 h-6 ml-3 text-emerald-400" />
            <span className="text-lg sm:text-xl font-bold">مرخصة ومؤمنة بالكامل</span>
          </div>
        </div>
      </div>
    </section>
  )
}
