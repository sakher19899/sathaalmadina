"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import BackToTop from "../components/BackToTop"

const contactMethods = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "0530001368",
    description: "متاح 24 ساعة طوال أيام الأسبوع",
    link: "tel:0530001368",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "0530001368",
    description: "رسائل فورية وسريعة",
    link: "https://wa.me/966530001368",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MapPin,
    title: "الموقع",
    value: "المدينة المنورة",
    description: "نخدم جميع أحياء المدينة",
    link: "#",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "24/7",
    description: "خدمة متواصلة بدون انقطاع",
    link: "#",
    color: "bg-yellow-100 text-yellow-600",
  },
]

const serviceAreas = [
  "حي العوالي",
  "حي الحرة الشرقية",
  "حي قباء",
  "حي النخيل",
  "حي الأزهري",
  "حي الجمعة",
  "حي العيون",
  "حي السلام",
  "حي الدفاع",
  "حي المطار",
  "حي الخالدية",
  "حي الراية",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    carType: "",
    serviceType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = `طلب خدمة جديد:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
البريد الإلكتروني: ${formData.email}
الموقع: ${formData.location}
نوع السيارة: ${formData.carType}
نوع الخدمة: ${formData.serviceType}
الرسالة: ${formData.message}`

    const whatsappUrl = `https://wa.me/966530001368?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        carType: "",
        serviceType: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا بأي طريقة تناسبكم
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-xl font-semibold text-gray-800 mb-2">{method.value}</p>
                  <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                  {method.link !== "#" && (
                    <a href={method.link}>
                      <Button variant="outline" size="sm">
                        تواصل الآن
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="w-6 h-6 ml-2 text-yellow-600" />
                    أرسل لنا رسالة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          الاسم الكامل *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          رقم الهاتف *
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="05xxxxxxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        الموقع الحالي *
                      </label>
                      <Input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="حدد موقعك الحالي"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="carType" className="block text-sm font-medium text-gray-700 mb-2">
                          نوع السيارة
                        </label>
                        <select
                          id="carType"
                          name="carType"
                          value={formData.carType}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                          <option value="">اختر نوع السيارة</option>
                          <option value="صغيرة">سيارة صغيرة</option>
                          <option value="متوسطة">سيارة متوسطة</option>
                          <option value="كبيرة">سيارة كبيرة</option>
                          <option value="دراجة نارية">دراجة نارية</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                          نوع الخدمة المطلوبة
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                          <option value="">اختر نوع الخدمة</option>
                          <option value="سحب سيارة معطلة">سحب سيارة معطلة</option>
                          <option value="سحب من حادث">سحب من حادث</option>
                          <option value="نقل سيارة جديدة">نقل سيارة جديدة</option>
                          <option value="نقل بين المدن">نقل بين المدن</option>
                          <option value="أخرى">أخرى</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        تفاصيل إضافية
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="اشرح تفاصيل الحالة أو أي معلومات إضافية"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 ml-2"></div>
                      ) : (
                        <Send className="w-5 h-5 ml-2" />
                      )}
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Service Areas and Additional Info */}
            <div className="space-y-8">
              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 ml-2 text-yellow-600" />
                    مناطق الخدمة في المدينة المنورة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-yellow-500 w-2 h-2 rounded-full ml-2"></div>
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>ملاحظة:</strong> نخدم جميع أحياء المدينة المنورة وضواحيها. إذا لم تجد منطقتك في القائمة،
                      تواصل معنا وسنؤكد لك إمكانية الخدمة.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">حالات الطوارئ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-4">في حالات الطوارئ أو الحوادث، اتصل بنا فوراً على الرقم التالي:</p>
                  <a href="tel:0530001368">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                      <Phone className="w-5 h-5 ml-2" />
                      اتصال طوارئ - 0530001368
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>نصائح مهمة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start">
                    <div className="bg-green-500 w-2 h-2 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <p>تأكد من إزالة الأشياء الثمينة من السيارة قبل وصول السطحة</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 w-2 h-2 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <p>احتفظ بمفاتيح السيارة ووثائقها معك</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 w-2 h-2 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <p>كن متواجداً في الموقع عند وصول السطحة</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 w-2 h-2 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <p>أبلغنا عن أي أضرار موجودة مسبقاً في السيارة</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  )
}
