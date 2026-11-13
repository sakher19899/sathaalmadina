import { Phone, MapPin, Truck, CheckCircle, ArrowLeft } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "اتصل أو راسل واتساب",
    description: "تواصل معنا على الرقم 0530001368 أو عبر واتساب",
    number: "1",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: MapPin,
    title: "أرسل موقعك",
    description: "شارك موقعك الحالي ووجهتك المطلوبة",
    number: "2",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Truck,
    title: "وصول السطحة",
    description: "نصل إليك خلال 15-30 دقيقة داخل المدينة",
    number: "3",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: CheckCircle,
    title: "إنجاز المهمة",
    description: "ننقل سيارتك بأمان إلى الوجهة المطلوبة",
    number: "4",
    color: "from-purple-500 to-purple-600",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 ml-2" />
            خطوات بسيطة
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            طريقة <span className="text-gradient-primary">طلب الخدمة</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">خطوات بسيطة للحصول على خدمة سطحة سريعة ومضمونة</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-blue-200 z-0">
                    <ArrowLeft className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 text-indigo-400" />
                  </div>
                )}

                {/* Step Icon */}
                <div
                  className={`relative bg-gradient-to-r ${step.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-glow z-10`}
                >
                  <step.icon className="w-10 h-10" />
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 bg-white border-4 border-gray-100 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shadow-lg z-20">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">⏱️ سرعة، أمان، التزام</h3>
            <p className="text-xl mb-8 text-gray-200">📲 راسلنا واتساب وخلّي المهمة علينا</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="tel:0530001368"
                className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow"
              >
                اتصل الآن
              </a>
              <a
                href="https://wa.me/966530001368"
                className="flex-1 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
