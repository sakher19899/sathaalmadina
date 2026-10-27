"use client"

import Link from "next/link"
import { Phone, MessageCircle, MapPin, Clock, Truck, Star } from "lucide-react"

const footerLinks = {
  services: [
    { name: "سحب السيارات المعطلة", href: "/services/towing" },
    { name: "نقل السيارات بين المدن", href: "/services/towing" },
    { name: "خدمات الطوارئ", href: "/services/towing" },
    { name: "حاسبة الأسعار", href: "/price-calculator" },
  ],
  company: [
    { name: "من نحن", href: "/about" },
    { name: "آراء العملاء", href: "/testimonials" },
    { name: "معرض الصور", href: "/gallery" },
    { name: "المدونة", href: "/blog" },
  ],
  support: [
    { name: "تواصل معنا", href: "/contact" },
    { name: "تتبع الطلب", href: "/track-order" },
    { name: "الأسئلة الشائعة", href: "/#faq" },
    { name: "وظائف", href: "/careers" },
  ],
  legal: [
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "شروط الاستخدام", href: "/terms" },
  ],
}

const serviceAreas = ["حي العوالي", "حي الحرة الشرقية", "حي قباء", "حي النخيل", "حي الأزهري", "حي الجمعة"]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                  سطحة المدينة المنورة
                </h3>
                <p className="text-cyan-200 text-sm">خدمة 24 ساعة</p>
              </div>
            </div>

            <p className="text-cyan-100 mb-6 leading-relaxed">
              أفضل خدمة سحب ونقل السيارات في المدينة المنورة. نقدم خدمات احترافية وموثوقة على مدار الساعة.
            </p>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-cyan-200 mr-2">4.9/5 من 500+ عميل</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 ml-3" />
                <a href="tel:0530001368" className="text-cyan-100 hover:text-white transition-colors">
                  0530001368
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-cyan-400 ml-3" />
                <a href="https://wa.me/966530001368" className="text-cyan-100 hover:text-white transition-colors">
                  واتساب
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 ml-3" />
                <span className="text-cyan-100">المدينة المنورة، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 ml-3" />
                <span className="text-cyan-100">24 ساعة طوال أيام الأسبوع</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cyan-100 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              الشركة
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cyan-100 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className="text-lg font-semibold mt-8 mb-4 text-cyan-200">الدعم</h5>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cyan-100 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              مناطق الخدمة
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full ml-3"></div>
                  <span className="text-cyan-100">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h5 className="font-bold text-white mb-2">خدمة طوارئ</h5>
              <p className="text-cyan-200 text-sm mb-3">متوفرون للحالات العاجلة</p>
              <a href="tel:0530001368">
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg text-center font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300">
                  اتصال طوارئ
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-cyan-200 text-sm mb-4 md:mb-0">© 2024 سطحة المدينة المنورة. جميع الحقوق محفوظة.</div>
            <div className="flex space-x-6 space-x-reverse">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-cyan-200 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* SEO Keywords */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-cyan-300 text-center leading-relaxed">
              <strong>سطحة المدينة المنورة</strong> - رقم سطحة المدينة المنورة 0530001368 - سطحة فورية المدينة المنورة -
              سحب سيارات المدينة المنورة - نقل سيارات المدينة المنورة - سطحة 24 ساعة المدينة المنورة - سطحة هيدروليك
              المدينة المنورة
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
