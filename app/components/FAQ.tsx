"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, Phone } from "lucide-react"

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
      "نعم، سطحة المدينة المنورة تنقل السيارات إلى جميع مدن المملكة العربية السعودية بأسعار مميزة وخدمة احترافية من المدينة المنورة إلى جدة، مكة، الرياض، والطائف.",
  },
  {
    question: "هل تقدم سطحة المدينة المنورة الخدمة ليلاً؟",
    answer:
      "نعم، سطحة المدينة المنورة متوفرة 24 ساعة طوال أيام الأسبوع. رقم سطحة المدينة 0530001368 يعمل في أي وقت لخدمتكم.",
  },
  {
    question: "ما نوع السطحات المتوفرة في المدينة المنورة؟",
    answer:
      "سطحة المدينة المنورة توفر سطحات عادية وسطحة هيدروليك المدينة المنورة حسب نوع السيارة والحاجة، مع ضمان النقل الآمن.",
  },
  {
    question: "كيف يتم تحديد سعر سطحة المدينة المنورة؟",
    answer:
      "يتم تحديد سعر سطحة المدينة المنورة حسب المسافة ونوع الخدمة ونوع السيارة. نقدم أسعار منافسة وشفافة لجميع خدمات سطحة المدينة.",
  },
  {
    question: "هل سطحة المدينة المنورة تغطي جميع الأحياء؟",
    answer:
      "نعم، سطحة المدينة المنورة تغطي جميع أحياء ومناطق المدينة المنورة بدون استثناء، من حي العوالي إلى حي قباء وجميع الأحياء الأخرى.",
  },
  {
    question: "ماذا لو كانت السيارة لا تعمل نهائياً؟",
    answer:
      "لا مشكلة، سطحة المدينة المنورة تتعامل مع جميع حالات السيارات المعطلة أو التي لا تعمل باستخدام معدات متخصصة. اتصل برقم سطحة المدينة 0530001368.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 ml-2" />
            الأسئلة الشائعة
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            الأسئلة الشائعة حول <span className="text-gradient-primary">سطحة المدينة المنورة</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدمات <strong className="text-indigo-600">سطحة المدينة المنورة</strong>{" "}
            ورقم سطحة المدينة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border-l-4 border-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="bg-indigo-100 p-2 rounded-lg group-hover:bg-indigo-500 transition-all duration-300">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white p-8 rounded-3xl shadow-2xl inline-block transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-white">لديك سؤال آخر عن سطحة المدينة المنورة؟</h3>
            <p className="mb-6 text-lg text-gray-100">تواصل مع رقم سطحة المدينة مباشرة وسنجيب على جميع استفساراتك</p>
            <a
              href="tel:0530001368"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 ml-2" />
              اتصل برقم سطحة المدينة - 0530001368
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
