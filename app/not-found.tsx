import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Phone, Search, ArrowRight } from "lucide-react"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="text-9xl font-bold text-yellow-500 mb-8">404</div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">الصفحة غير موجودة</h1>
          <p className="text-xl text-gray-600 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر</p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-3">
                <Home className="w-5 h-5 ml-2" />
                العودة للرئيسية
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8 py-3 bg-transparent">
                <Phone className="w-5 h-5 ml-2" />
                تواصل معنا
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">روابط مفيدة</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/track-order"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Search className="w-5 h-5 text-yellow-600 ml-3" />
                <span>تتبع الطلب</span>
                <ArrowRight className="w-4 h-4 mr-auto" />
              </Link>
              <Link
                href="/price-calculator"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Search className="w-5 h-5 text-yellow-600 ml-3" />
                <span>حاسبة الأسعار</span>
                <ArrowRight className="w-4 h-4 mr-auto" />
              </Link>
              <Link
                href="/about"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Search className="w-5 h-5 text-yellow-600 ml-3" />
                <span>من نحن</span>
                <ArrowRight className="w-4 h-4 mr-auto" />
              </Link>
              <Link
                href="/testimonials"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Search className="w-5 h-5 text-yellow-600 ml-3" />
                <span>آراء العملاء</span>
                <ArrowRight className="w-4 h-4 mr-auto" />
              </Link>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl">
            <h3 className="text-xl font-bold mb-3">تحتاج مساعدة عاجلة؟</h3>
            <p className="mb-4">اتصل بنا الآن للحصول على خدمة سطحة فورية</p>
            <a href="tel:0530001368">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold">
                <Phone className="w-5 h-5 ml-2" />
                0530001368
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
