import { MapPin, Phone, Clock, Star, Shield, Award, MessageCircle } from "lucide-react"

export default function SEOContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main SEO Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              <span className="text-orange-500">سطحة المدينة المنورة</span> - الخدمة الأولى والأوثق
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-orange-600">سطحة المدينة المنورة</strong> هي الخيار الأول لخدمات سحب ونقل السيارات
              في جميع أحياء المدينة المنورة. نحن نقدم خدمة{" "}
              <strong className="text-red-600">سطحة فورية المدينة المنورة</strong> على مدار 24 ساعة بأعلى معايير الجودة
              والأمان.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-orange-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl text-white shadow-lg">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mr-4">تغطية شاملة</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                <strong className="text-orange-600">سطحة المدينة المنورة</strong> تخدم جميع أحياء المدينة المنورة بما في
                ذلك العوالي، قباء، الحرة الشرقية، الحرة الغربية، والمطار.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl text-white shadow-lg">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mr-4">خدمة 24 ساعة</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                <strong className="text-blue-600">رقم سطحة المدينة المنورة 0530001368</strong> متاح في أي وقت من اليوم
                والليل لتقديم خدمة سحب السيارات الفورية.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-white shadow-lg">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mr-4">سطحة هيدروليك</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                <strong className="text-green-600">سطحة هيدروليك المدينة المنورة</strong> حديثة ومتطورة لضمان النقل
                الآمن لجميع أنواع السيارات.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                لماذا تختار <span className="text-orange-400">سطحة المدينة المنورة</span>؟
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                نحن الخيار الأول لآلاف العملاء في المدينة المنورة لأسباب وجيهة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-orange-500/20 p-4 rounded-2xl inline-block mb-4">
                  <Star className="w-10 h-10 text-orange-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">تقييم 4.9/5</h4>
                <p className="text-gray-300">من تقييمات العملاء الحقيقية</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500/20 p-4 rounded-2xl inline-block mb-4">
                  <Clock className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">وصول سريع</h4>
                <p className="text-gray-300">خلال 15-30 دقيقة في المدينة</p>
              </div>

              <div className="text-center">
                <div className="bg-green-500/20 p-4 rounded-2xl inline-block mb-4">
                  <Shield className="w-10 h-10 text-green-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">مؤمنة بالكامل</h4>
                <p className="text-gray-300">تأمين شامل على جميع الخدمات</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/20 p-4 rounded-2xl inline-block mb-4">
                  <Award className="w-10 h-10 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">خبرة 10+ سنوات</h4>
                <p className="text-gray-300">في خدمة سحب السيارات</p>
              </div>
            </div>
          </div>

          {/* Service Types */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              خدمات <span className="text-orange-500">سطحة المدينة المنورة</span> المتنوعة
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-orange-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">خدمات السحب والنقل</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full ml-3"></div>
                  <span className="text-gray-700 text-lg">
                    <strong>سحب سيارات معطلة المدينة المنورة</strong> - خدمة فورية لجميع أنواع الأعطال
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full ml-3"></div>
                  <span className="text-gray-700 text-lg">
                    <strong>سحب سيارات الحوادث</strong> - فريق متخصص للتعامل مع حوادث السيارات
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                  <span className="text-gray-700 text-lg">
                    <strong>نقل سيارات جديدة</strong> - نقل آمن للسيارات الجديدة والمعروضة للبيع
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                  <span className="text-gray-700 text-lg">
                    <strong>النقل بين المدن</strong> - من المدينة المنورة إلى جميع مدن المملكة
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">مناطق الخدمة</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full ml-3"></div>
                  <span className="text-gray-700 text-lg">
                    <strong>وسط المدينة المنورة</strong> - المنطقة المركزية والحرم النبوي الشريف
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                  <span className="text-gray-700 text-lg">
                    <strong>العوالي والعيون</strong> - الأحياء الشمالية والشرقية
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                  <span className="text-gray-700 text-lg">
                    <strong>قباء والحرة</strong> - المناطق الجنوبية والغربية
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full ml-3"></div>
                  <span className="text-gray-700 text-lg">
                    <strong>مطار المدينة المنورة</strong> - خدمة خاصة للمطار والمناطق المحيطة
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">🚛 احتجت سطحة في المدينة المنورة؟</h3>
              <p className="text-xl mb-6">
                <strong>رقم سطحة المدينة المنورة: 0530001368</strong>
              </p>
              <p className="text-lg mb-8 text-orange-100">
                خدمة فورية 24 ساعة - وصول خلال 15 دقيقة - أسعار منافسة - تأمين شامل
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:0530001368"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  <Phone className="w-5 h-5 inline ml-2" />
                  اتصل الآن: 0530001368
                </a>
                <a
                  href="https://wa.me/966530001368"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 inline ml-2" />
                  واتساب سطحة المدينة
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
