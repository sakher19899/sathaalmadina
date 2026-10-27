"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "ما هو رقم سطحة المدينة المنورة؟",
    answer:
      "رقم سطحة المدينة المنورة هو 0530001368. نحن متوفرون 24 ساعة طوال أيام الأسبوع لخدمة سحب ونقل السيارات في جميع أحياء المدينة المنورة.",
  },
  {
    question: "كم المدة للوصول داخل المدينة المنورة؟",
    answer:
      "سطحة المدينة المنورة تصل خلال 15 إلى 30 دقيقة في أغلب أحياء المدينة المنورة، وقد تختلف المدة حسب الموقع والظروف المرورية.",
  },
  {
    question: "هل سطحة المدينة المنورة تنقل السيارات بين المدن؟",
    answer:
      "نعم، سطحة المدينة المنورة تنقل السيارات إلى جميع مدن المملكة العربية السعودية بأسعار مميزة وخدمة احترافية.",
  },
  {
    question: "كم تكلفة خدمة سطحة المدينة المنورة؟",
    answer:
      "أسعار سطحة المدينة المنورة تبدأ من 80 ريال داخل المدينة، ومن 400 ريال للنقل بين المدن. الأسعار تختلف حسب المسافة ونوع السيارة.",
  },
  {
    question: "هل خدمة سطحة المدينة المنورة متوفرة 24 ساعة؟",
    answer: "نعم، سطحة المدينة المنورة متوفرة 24 ساعة طوال أيام الأسبوع بما في ذلك العطل والإجازات الرسمية.",
  },
  {
    question: "هل يوجد تأمين على السيارة أثناء النقل؟",
    answer: "نعم، جميع السيارات مؤمنة بالكامل أثناء عملية النقل مع سطحة المدينة المنورة ضد أي أضرار قد تحدث.",
  },
  {
    question: "ما أنواع السيارات التي تنقلها سطحة المدينة المنورة؟",
    answer:
      "سطحة المدينة المنورة تنقل جميع أنواع السيارات: الصغيرة، المتوسطة، الكبيرة، الدراجات النارية، والمركبات التجارية الخفيفة.",
  },
  {
    question: "كيف يمكنني تتبع موقع السطحة؟",
    answer:
      "يمكنك تتبع موقع سطحة المدينة المنورة من خلال الاتصال بخدمة العملاء على 0530001368 أو عبر واتساب للحصول على تحديثات مباشرة.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50" id="faq">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6 border border-indigo-200">
            <HelpCircle className="w-5 h-5 text-indigo-600 ml-2" />
            <span className="text-indigo-700 font-medium">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            أسئلة شائعة حول{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              سطحة المدينة المنورة
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            إجابات على أكثر الأسئلة شيوعاً حول خدمات سطحة المدينة المنورة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border-4 border-indigo-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-bold text-gray-900 flex-1">{faq.question}</span>
                  <div
                    className={`bg-gradient-to-r from-indigo-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center ml-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">لم تجد إجابة لسؤالك؟</h3>
              <p className="text-lg text-gray-600 mb-6">تواصل معنا مباشرة وسنجيب على جميع استفساراتك</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0530001368">
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Phone className="w-5 h-5 ml-2" />
                    اتصل الآن - 0530001368
                  </Button>
                </a>
                <a href="https://wa.me/966530001368">
                  <Button
                    variant="outline"
                    className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 font-bold px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 bg-transparent"
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    واتساب
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
