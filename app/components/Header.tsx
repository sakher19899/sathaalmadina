"use client"

import { useState } from "react"
import { Phone, Menu, X, MapPin } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white sticky top-0 z-50 shadow-2xl backdrop-blur-sm border-b border-white/10">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center space-x-3 sm:space-x-4 space-x-reverse">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg flex-shrink-0 shadow-glow-cyan">
              <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-white truncate">سطحة المدينة المنورة</h1>
              <p className="text-xs text-gray-300 hidden sm:block">خدمة 24 ساعة</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 space-x-reverse">
            <a
              href="/"
              className="hover:text-cyan-400 transition-colors duration-300 font-medium relative group text-white text-sm xl:text-base"
            >
              الرئيسية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="hover:text-cyan-400 transition-colors duration-300 font-medium relative group text-white text-sm xl:text-base"
            >
              الخدمات
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#how-it-works"
              className="hover:text-purple-400 transition-colors duration-300 font-medium relative group text-white text-sm xl:text-base"
            >
              طريقة الطلب
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#coverage"
              className="hover:text-emerald-400 transition-colors duration-300 font-medium relative group text-white text-sm xl:text-base"
            >
              مناطق التغطية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#faq"
              className="hover:text-pink-400 transition-colors duration-300 font-medium relative group text-white text-sm xl:text-base"
            >
              الأسئلة الشائعة
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors duration-300 font-medium relative group text-white text-sm xl:text-base"
            >
              تواصل معنا
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/price-calculator"
              className="hover:text-yellow-400 transition-colors duration-300 font-medium relative group text-white text-sm xl:text-base"
            >
              حاسبة الأسعار
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4 space-x-reverse">
            <a
              href="tel:0530001368"
              className="hidden md:flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="hidden lg:inline">0530001368</span>
              <span className="lg:hidden">اتصل</span>
            </a>

            <button
              className="lg:hidden bg-gradient-to-r from-cyan-500 to-blue-500 p-2 sm:p-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-glow-cyan"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="فتح القائمة"
            >
              {isMenuOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-white/10 animate-fade-in">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              <a
                href="/"
                className="hover:text-cyan-400 transition-colors duration-300 font-medium py-2 text-white text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </a>
              <a
                href="#services"
                className="hover:text-cyan-400 transition-colors duration-300 font-medium py-2 text-white text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات
              </a>
              <a
                href="#how-it-works"
                className="hover:text-purple-400 transition-colors duration-300 font-medium py-2 text-white text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                طريقة الطلب
              </a>
              <a
                href="#coverage"
                className="hover:text-emerald-400 transition-colors duration-300 font-medium py-2 text-white text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                مناطق التغطية
              </a>
              <a
                href="#faq"
                className="hover:text-pink-400 transition-colors duration-300 font-medium py-2 text-white text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                الأسئلة الشائعة
              </a>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition-colors duration-300 font-medium py-2 text-white text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </a>
              <a
                href="/price-calculator"
                className="hover:text-yellow-400 transition-colors duration-300 font-medium py-2 text-white text-base sm:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                حاسبة الأسعار
              </a>
              <a
                href="tel:0530001368"
                className="flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold w-fit mt-4 text-base sm:text-lg hover:shadow-glow transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>0530001368</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
