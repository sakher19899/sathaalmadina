import { Shield, Eye, Lock, UserCheck, FileText, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import BackToTop from "../components/BackToTop"

const sections = [
  {
    icon: Eye,
    title: "جمع المعلومات",
    content: [
      "نقوم بجمع المعلومات التي تقدمها لنا طوعياً عند طلب خدماتنا",
      "المعلومات الشخصية مثل الاسم ورقم الهاتف والموقع",
      "معلومات السيارة مثل النوع والموديل ورقم اللوحة",
      "معلومات الموقع الجغرافي لتحديد مكان تقديم الخدمة",
    ],
  },
  {
    icon: Lock,
    title: "استخدام المعلومات",
    content: [
      "تقديم خدمات سحب ونقل السيارات المطلوبة",
      "التواصل معك لتنسيق الخدمة وتحديد المواعيد",
      "تحسين جودة خدماتنا وتطوير خدمات جديدة",
      "إرسال إشعارات مهمة متعلقة بالخدمة",
    ],
  },
  {
    icon: Shield,
    title: "حماية المعلومات",
    content: [
      "نستخدم تقنيات الحماية المتقدمة لحماية معلوماتك",
      "جميع البيانات محمية بتشفير SSL",
      "الوصول للمعلومات مقتصر على الموظفين المخولين فقط",
      "نقوم بمراجعة إجراءات الأمان بانتظام",
    ],
  },
  {
    icon: UserCheck,
    title: "مشاركة المعلومات",
    content: [
      "لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة",
      "قد نشارك المعلومات مع السائقين لتنفيذ الخدمة",
      "نشارك المعلومات مع السلطات عند الضرورة القانونية",
      "نحصل على موافقتك قبل أي مشاركة أخرى للمعلومات",
    ],
  },
  {
    icon: FileText,
    title: "الاحتفاظ بالمعلومات",
    content: [
      "نحتفظ بمعلوماتك طالما كان ذلك ضرورياً لتقديم الخدمة",
      "يمكنك طلب حذف معلوماتك في أي وقت",
      "نحذف المعلومات غير الضرورية بانتظام",
      "نحتفظ ببعض المعلومات للامتثال للمتطلبات القانونية",
    ],
  },
  {
    icon: Phone,
    title: "حقوقك",
    content: [
      "الحق في الوصول إلى معلوماتك الشخصية",
      "الحق في تصحيح أو تحديث معلوماتك",
      "الحق في طلب حذف معلوماتك",
      "الحق في الاعتراض على معالجة معلوماتك",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">سياسة الخصوصية</h1>
            <p className="text-xl text-gray-300 leading-relaxed">نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية</p>
            <div className="mt-6 text-sm text-gray-400">آخر تحديث: 15 يناير 2024</div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مقدمة</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    تحدد سياسة الخصوصية هذه كيفية قيام شركة "سطحة المدينة المنورة" بجمع واستخدام وحماية المعلومات التي
                    تقدمها عند استخدام خدماتنا.
                  </p>
                  <p>
                    نحن ملتزمون بضمان حماية خصوصيتك. عندما نطلب منك تقديم معلومات معينة يمكن من خلالها التعرف عليك عند
                    استخدام خدماتنا، فإننا نستخدم هذه المعلومات وفقاً لسياسة الخصوصية هذه فقط.
                  </p>
                  <p>باستخدام خدماتنا، فإنك توافق على جمع واستخدام المعلومات وفقاً لهذه السياسة.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-yellow-100 p-3 rounded-lg ml-4">
                      <section.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="bg-yellow-500 w-2 h-2 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-lg ml-4">
                    <FileText className="w-6 h-6 text-yellow-600" />
                  </div>
                  ملفات تعريف الارتباط (Cookies)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا الإلكتروني. هذه الملفات عبارة عن ملفات نصية صغيرة
                  يتم حفظها على جهازك.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">أنواع ملفات تعريف الارتباط التي نستخدمها:</h4>
                  <ul className="space-y-2 mr-4">
                    <li>• ملفات تعريف الارتباط الضرورية لتشغيل الموقع</li>
                    <li>• ملفات تعريف الارتباط التحليلية لفهم كيفية استخدام الموقع</li>
                    <li>• ملفات تعريف الارتباط الوظيفية لتذكر تفضيلاتك</li>
                  </ul>
                </div>
                <p>يمكنك إدارة أو حذف ملفات تعريف الارتباط من خلال إعدادات متصفحك.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">هل لديك أسئلة حول سياسة الخصوصية؟</h2>
            <p className="text-xl text-gray-300 mb-8">
              إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، لا تتردد في التواصل معنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0530001368">
                <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">اتصل بنا</h3>
                    <p className="text-yellow-400">0530001368</p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://wa.me/966530001368">
                <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">واتساب</h3>
                    <p className="text-yellow-400">0530001368</p>
                  </CardContent>
                </Card>
              </a>
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
