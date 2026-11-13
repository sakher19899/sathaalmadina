"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, MapPin, Send, Clock, Shield, Award } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    carType: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = `مرحباً، أحتاج خدمة سطحة:
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
الموقع: ${formData.location}
نوع السيارة: ${formData.carType}
وصف الحالة: ${formData.description}`

    const whatsappUrl = `https://wa.me/966530001368?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        phone: "",
        location: "",
        carType: "",
        description: "",
      })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "رقم الهاتف",
      value: "0530001368",
      description: "متاح 24 ساعة طوال أيام الأسبوع",
      link: "tel:0530001368",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "0530001368",
      description: "رسائل فورية وسريعة",
      link: "https://wa.me/966530001368",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "منطقة الخدمة",
      value: "المدينة المنورة",
      description: "جميع أحياء ومناطق المدينة",
      link: "#",
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Send className="w-4 h-4 ml-2" />
            تواصل معنا
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient-primary">تواصل معنا</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto">املأ النموذج أدناه وسنتواصل معك فوراً لتقديم الخدمة</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">طلب خدمة سطحة</h3>
                <p className="text-gray-600">املأ البيانات وسنتواصل معك فوراً</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    الاسم *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-indigo-500 rounded-xl py-3 px-4 transition-all duration-300"
                    placeholder="أدخل اسمك الكريم"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    رقم الجوال *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-indigo-500 rounded-xl py-3 px-4 transition-all duration-300"
                    placeholder="05xxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-2">
                  الموقع الحالي *
                </label>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-200 focus:border-indigo-500 rounded-xl py-3 px-4 transition-all duration-300"
                  placeholder="حدد موقعك الحالي"
                />
              </div>

              <div>
                <label htmlFor="carType" className="block text-sm font-bold text-gray-700 mb-2">
                  نوع السيارة
                </label>
                <Input
                  type="text"
                  id="carType"
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 focus:border-indigo-500 rounded-xl py-3 px-4 transition-all duration-300"
                  placeholder="مثال: كامري 2020"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-bold text-gray-700 mb-2">
                  وصف الحالة
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border-2 border-gray-200 focus:border-indigo-500 rounded-xl py-3 px-4 transition-all duration-300"
                  placeholder="اشرح حالة السيارة والخدمة المطلوبة"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                ) : (
                  <MessageCircle className="w-5 h-5 ml-2" />
                )}
                إرسال عبر واتساب
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div
                      className={`bg-gradient-to-r ${method.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors duration-300">
                        {method.title}
                      </h4>
                      {method.link !== "#" ? (
                        <a href={method.link} className="text-indigo-600 hover:text-indigo-700 font-bold text-xl">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-semibold text-lg">{method.value}</p>
                      )}
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                  <Clock className="w-6 h-6 ml-2 text-cyan-400" />
                  خدمة عاجلة؟
                </h3>
                <p className="text-gray-200 mb-6 text-lg">إذا كنت في حالة طارئة أو تحتاج خدمة فورية، اتصل بنا مباشرة</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:0530001368"
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    اتصال فوري
                  </a>
                  <a
                    href="https://wa.me/966530001368"
                    className="flex-1 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    واتساب سريع
                  </a>
                </div>
              </div>
            </div>

            {/* Service Features */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 ml-2 text-indigo-500" />
                مميزات خدمتنا
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="bg-indigo-100 p-1 rounded-full">
                    <Clock className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">وصول سريع خلال 15-30 دقيقة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">تأمين شامل على السيارة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="bg-cyan-100 p-1 rounded-full">
                    <Award className="w-4 h-4 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">فريق محترف ومدرب</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
