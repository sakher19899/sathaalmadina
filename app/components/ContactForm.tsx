"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

    const message = `طلب خدمة سطحة المدينة المنورة:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
الموقع: ${formData.location}
نوع السيارة: ${formData.carType}
نوع الخدمة: ${formData.serviceType}
تفاصيل إضافية: ${formData.message}`

    const whatsappUrl = `https://wa.me/966530001368?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        phone: "",
        location: "",
        carType: "",
        serviceType: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <Send className="w-5 h-5 text-cyan-400 ml-2" />
              <span className="text-cyan-200 font-medium">اطلب الخدمة الآن</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                احصل على خدمة
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                سطحة فورية
              </span>
            </h2>

            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              املأ النموذج وسنتواصل معك فوراً، أو اتصل بنا مباشرة على الرقم أدناه
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg ml-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">اتصل الآن</h3>
                  <p className="text-cyan-200">0530001368</p>
                </div>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-lg ml-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">خدمة 24/7</h3>
                  <p className="text-cyan-200">متوفرون طوال الوقت</p>
                </div>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg ml-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">جميع أحياء المدينة</h3>
                  <p className="text-cyan-200">تغطية شاملة</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0530001368" className="group">
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-white/20">
                  <Phone className="w-6 h-6 ml-2 group-hover:animate-bounce" />
                  اتصال مباشر
                </Button>
              </a>
              <a href="https://wa.me/966530001368" className="group">
                <Button
                  variant="outline"
                  className="w-full border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm"
                >
                  <MessageCircle className="w-6 h-6 ml-2 group-hover:animate-pulse" />
                  واتساب
                </Button>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">الاسم الكامل *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">رقم الهاتف *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="05xxxxxxxx"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">الموقع الحالي *</label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="حدد موقعك الحالي"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-cyan-400 focus:ring-cyan-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">نوع السيارة</label>
                  <select
                    name="carType"
                    value={formData.carType}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-cyan-400 focus:ring-cyan-400"
                  >
                    <option value="" className="text-gray-900">
                      اختر نوع السيارة
                    </option>
                    <option value="صغيرة" className="text-gray-900">
                      سيارة صغيرة
                    </option>
                    <option value="متوسطة" className="text-gray-900">
                      سيارة متوسطة
                    </option>
                    <option value="كبيرة" className="text-gray-900">
                      سيارة كبيرة
                    </option>
                    <option value="دراجة نارية" className="text-gray-900">
                      دراجة نارية
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">نوع الخدمة</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-cyan-400 focus:ring-cyan-400"
                  >
                    <option value="" className="text-gray-900">
                      اختر نوع الخدمة
                    </option>
                    <option value="سحب سيارة معطلة" className="text-gray-900">
                      سحب سيارة معطلة
                    </option>
                    <option value="سحب من حادث" className="text-gray-900">
                      سحب من حادث
                    </option>
                    <option value="نقل سيارة جديدة" className="text-gray-900">
                      نقل سيارة جديدة
                    </option>
                    <option value="نقل بين المدن" className="text-gray-900">
                      نقل بين المدن
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">تفاصيل إضافية</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="اشرح تفاصيل الحالة أو أي معلومات إضافية"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-cyan-400 focus:ring-cyan-400"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-white/20"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white ml-2"></div>
                ) : (
                  <Send className="w-6 h-6 ml-2" />
                )}
                إرسال الطلب عبر واتساب
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
