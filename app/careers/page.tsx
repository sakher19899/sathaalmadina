"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, DollarSign, Users, Phone, Send, CheckCircle, Star, Award, Heart } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import BackToTop from "../components/BackToTop"

const jobOpenings = [
  {
    id: 1,
    title: "سائق سطحة محترف",
    department: "العمليات",
    type: "دوام كامل",
    location: "المدينة المنورة",
    salary: "4000 - 6000 ريال",
    experience: "3+ سنوات",
    description:
      "نبحث عن سائق سطحة محترف وذو خبرة للانضمام إلى فريقنا. المرشح المثالي يجب أن يكون لديه رخصة قيادة سارية وخبرة في قيادة السطحات.",
    requirements: [
      "رخصة قيادة سارية (ثقيلة)",
      "خبرة لا تقل عن 3 سنوات في قيادة السطحات",
      "معرفة جيدة بطرق المدينة المنورة",
      "مهارات تواصل جيدة مع العملاء",
      "القدرة على العمل في نوبات مختلفة",
    ],
    benefits: ["راتب تنافسي + عمولات", "تأمين صحي شامل", "إجازات مدفوعة الأجر", "تدريب مستمر", "بيئة عمل إيجابية"],
  },
  {
    id: 2,
    title: "موظف خدمة عملاء",
    department: "خدمة العملاء",
    type: "دوام كامل",
    location: "المدينة المنورة",
    salary: "3000 - 4500 ريال",
    experience: "1+ سنة",
    description:
      "نبحث عن موظف خدمة عملاء للرد على استفسارات العملاء وتنسيق طلبات الخدمة. المرشح المثالي يجب أن يكون لديه مهارات تواصل ممتازة.",
    requirements: [
      "شهادة ثانوية عامة كحد أدنى",
      "خبرة في خدمة العملاء",
      "مهارات تواصل ممتازة",
      "إجادة استخدام الحاسوب",
      "القدرة على العمل تحت الضغط",
    ],
    benefits: ["راتب أساسي + حوافز", "تأمين صحي", "تدريب على رأس العمل", "فرص للترقي", "بيئة عمل مريحة"],
  },
  {
    id: 3,
    title: "فني صيانة سطحات",
    department: "الصيانة",
    type: "دوام كامل",
    location: "المدينة المنورة",
    salary: "3500 - 5000 ريال",
    experience: "2+ سنوات",
    description:
      "نبحث عن فني صيانة متخصص في صيانة وإصلاح السطحات والمعدات الثقيلة. المرشح المثالي يجب أن يكون لديه خبرة في الصيانة الميكانيكية.",
    requirements: [
      "دبلوم في الميكانيكا أو مجال ذي صلة",
      "خبرة في صيانة المعدات الثقيلة",
      "معرفة بالأنظمة الهيدروليكية",
      "القدرة على قراءة المخططات الفنية",
      "مهارات حل المشاكل",
    ],
    benefits: ["راتب تنافسي", "تأمين صحي وحوادث", "دورات تدريبية متخصصة", "أدوات عمل مجانية", "استقرار وظيفي"],
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: "رواتب تنافسية",
    description: "نقدم رواتب تنافسية مع نظام حوافز ومكافآت",
  },
  {
    icon: Heart,
    title: "تأمين صحي شامل",
    description: "تأمين صحي شامل للموظف وعائلته",
  },
  {
    icon: Clock,
    title: "مرونة في العمل",
    description: "ساعات عمل مرنة وإجازات مدفوعة الأجر",
  },
  {
    icon: Award,
    title: "فرص التطوير",
    description: "برامج تدريب وتطوير مستمرة",
  },
  {
    icon: Users,
    title: "بيئة عمل إيجابية",
    description: "فريق عمل متعاون وبيئة عمل صحية",
  },
  {
    icon: Star,
    title: "الاستقرار الوظيفي",
    description: "استقرار وظيفي وأمان مالي",
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [applicationData, setApplicationData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `طلب توظيف جديد:
الاسم: ${applicationData.name}
الهاتف: ${applicationData.phone}
البريد الإلكتروني: ${applicationData.email}
المنصب المطلوب: ${applicationData.position}
سنوات الخبرة: ${applicationData.experience}
رسالة إضافية: ${applicationData.message}`

    const whatsappUrl = `https://wa.me/966530001368?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">انضم إلى فريقنا</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              نبحث عن أشخاص موهوبين ومتحمسين للانضمام إلى عائلة سطحة المدينة المنورة
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا تعمل معنا؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نؤمن بأن موظفينا هم أهم أصولنا، لذلك نوفر لهم بيئة عمل مثالية وفرص نمو حقيقية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">الوظائف المتاحة</h2>
            <p className="text-xl text-gray-600">تصفح الوظائف المتاحة حالياً واختر ما يناسب مهاراتك</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{job.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded mr-2">{job.department}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{job.type}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 ml-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 ml-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 ml-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 ml-2" />
                      {job.experience}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => setSelectedJob(job)}
                      className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 flex-1"
                    >
                      عرض التفاصيل
                    </Button>
                    <Button
                      onClick={() => setApplicationData({ ...applicationData, position: job.title })}
                      variant="outline"
                      className="bg-transparent"
                    >
                      تقدم الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center">
                  <Send className="w-6 h-6 ml-2 text-yellow-600" />
                  تقدم بطلب توظيف
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل *</label>
                      <Input
                        type="text"
                        name="name"
                        value={applicationData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="05xxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                    <Input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">المنصب المطلوب *</label>
                      <select
                        name="position"
                        value={applicationData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">اختر المنصب</option>
                        {jobOpenings.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">سنوات الخبرة</label>
                      <select
                        name="experience"
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">اختر سنوات الخبرة</option>
                        <option value="أقل من سنة">أقل من سنة</option>
                        <option value="1-2 سنة">1-2 سنة</option>
                        <option value="3-5 سنوات">3-5 سنوات</option>
                        <option value="أكثر من 5 سنوات">أكثر من 5 سنوات</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رسالة إضافية</label>
                    <Textarea
                      name="message"
                      value={applicationData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="اكتب عن نفسك وخبراتك..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 text-lg"
                  >
                    <Send className="w-5 h-5 ml-2" />
                    إرسال الطلب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{selectedJob.title}</CardTitle>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">{selectedJob.department}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">{selectedJob.type}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => setSelectedJob(null)}>
                  إغلاق
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">وصف الوظيفة</h3>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">المتطلبات</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">المزايا</h3>
                <ul className="space-y-2">
                  {selectedJob.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 ml-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-600 ml-2" />
                  <span className="text-gray-700">{selectedJob.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-gray-600 ml-2" />
                  <span className="text-gray-700">{selectedJob.salary}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-600 ml-2" />
                  <span className="text-gray-700">{selectedJob.type}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-gray-600 ml-2" />
                  <span className="text-gray-700">{selectedJob.experience}</span>
                </div>
              </div>

              <Button
                onClick={() => {
                  setApplicationData({ ...applicationData, position: selectedJob.title })
                  setSelectedJob(null)
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold"
              >
                تقدم لهذه الوظيفة
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Contact HR */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">لديك أسئلة حول التوظيف؟</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            تواصل مع قسم الموارد البشرية للاستفسار عن الوظائف المتاحة أو عملية التقديم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0530001368">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-3 font-bold">
                <Phone className="w-5 h-5 ml-2" />
                اتصل بقسم الموارد البشرية
              </Button>
            </a>
            <a href="https://wa.me/966530001368">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 font-bold bg-transparent"
              >
                واتساب
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  )
}
