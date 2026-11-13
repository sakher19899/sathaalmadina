import { Phone, MessageCircle, MapPin, Clock, Award, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>

      <div className="container-responsive relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl shadow-glow-cyan">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">سطحة المدينة المنورة</h3>
                <p className="text-sm text-gray-300">الخدمة الأولى في المدينة</p>
              </div>
            </div>

            <p className="text-gray-200 leading-relaxed">
              خدمة نقل وسحب السيارات الأكثر موثوقية في المدينة المنورة مع أكثر من 10 سنوات من الخبرة
            </p>

            <div className="flex items-center space-x-2 space-x-reverse text-cyan-400">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-white">متوفرون 24/7</span>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 flex items-center space-x-2 space-x-reverse hover:bg-white/20 transition-colors duration-300">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-white">مؤمنة</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 flex items-center space-x-2 space-x-reverse hover:bg-white/20 transition-colors duration-300">
                <Award className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-medium text-white">معتمدة</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan-400">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                "سحب سيارات متعطلة",
                "سحب سيارات من الحوادث",
                "نقل سيارات جديدة",
                "النقل بين المدن",
                "سطحات هيدروليك",
              ].map((service, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 space-x-reverse text-gray-200 hover:text-cyan-400 transition-colors duration-300 cursor-pointer group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-400">مناطق التغطية</h4>
            <ul className="space-y-3">
              {[
                "جميع أحياء المدينة المنورة",
                "من المدينة إلى جدة",
                "من المدينة إلى مكة",
                "من المدينة إلى الرياض",
                "جميع مدن المملكة",
              ].map((area, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 space-x-reverse text-gray-200 hover:text-purple-400 transition-colors duration-300 cursor-pointer group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-pink-400">تواصل معنا</h4>
            <div className="space-y-4">
              <a
                href="tel:0530001368"
                className="flex items-center space-x-3 space-x-reverse text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
              >
                <div className="bg-cyan-500/20 p-2 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300 group-hover:scale-110 transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white">0530001368</p>
                  <p className="text-xs text-gray-300">اتصال مباشر</p>
                </div>
              </a>

              <a
                href="https://wa.me/966530001368"
                className="flex items-center space-x-3 space-x-reverse text-emerald-400 hover:text-emerald-300 transition-colors duration-300 group"
              >
                <div className="bg-emerald-500/20 p-2 rounded-lg group-hover:bg-emerald-500/30 transition-colors duration-300 group-hover:scale-110 transform duration-300">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white">واتساب</p>
                  <p className="text-xs text-gray-300">رسائل فورية</p>
                </div>
              </a>

              <div className="flex items-center space-x-3 space-x-reverse text-gray-200">
                <div className="bg-pink-500/20 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="font-medium text-white">المدينة المنورة</p>
                  <p className="text-xs text-gray-300">المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <p className="text-gray-200 mb-2 font-medium">
                سطحة المدينة المنورة – خدمة نقل وسحب السيارات الأولى في المدينة
              </p>
              <p className="text-gray-400 text-sm">
                جميع الحقوق محفوظة © {new Date().getFullYear()} |
                <a
                  href="https://sakhrs.com"
                  className="text-cyan-400 hover:text-cyan-300 mr-1 transition-colors duration-300"
                >
                  تصميم واستضافة: sakhrs
                </a>
              </p>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <a
                href="tel:0530001368"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                اتصل الآن
              </a>
              <a
                href="https://wa.me/966530001368"
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-6 py-3 rounded-xl font-bold transition-all duration-300"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
