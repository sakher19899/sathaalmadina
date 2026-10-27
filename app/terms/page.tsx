import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import BackToTop from "../components/BackToTop"

const sections = [
  {
    icon: CheckCircle,
    title: "قبول الشروط",
    content: [
      "باستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام",
      "إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا",
      "نحتفظ بالحق في تعديل هذه الشروط في أي وقت",
      "استمرار استخدامك للخدمة يعني موافقتك على الشروط المحدثة",
    ],
  },
  {
    icon: FileText,
    title: "وصف الخدمة",
    content: [
      "نقدم خدمات سحب ونقل السيارات داخل المدينة المنورة وخارجها",
      "تشمل خدماتنا سحب السيارات المعطلة والمصدومة ونقل السيارات الجديدة",
      "نوفر خدمة 24 ساعة طوال أيام الأسبوع",
      "جميع خدماتنا تخضع للتوفر وظروف الطقس والطرق",
    ],
  },
  {
    icon: DollarSign,
    title: "الأسعار والدفع",
    content: [
      "الأسعار محددة حسب المسافة ونوع الخدمة ونوع السيارة",
      "جميع الأسعار شاملة ضريبة القيمة المضافة",
      "الدفع يتم نقداً أو عبر وسائل الدفع الإلكترونية المتاحة",
      "في حالة إلغاء الخدمة بعد وصول السطحة، قد تطبق رسوم إلغاء",
    ],
  },
  {
    icon: Scale,
    title: "المسؤوليات",
    content: [
      "نتحمل مسؤولية سلامة سيارتك أثناء النقل وفقاً لشروط التأمين",
      "العميل مسؤول عن تقديم معلومات صحيحة عن السيارة وموقعها",
      "العميل مسؤول عن إزالة الأشياء الثمينة من السيارة قبل النقل",
      "لا نتحمل مسؤولية الأضرار الناتجة عن عيوب موجودة مسبقاً في السيارة",
    ],
  },
  {
    icon: AlertTriangle,
    title: "القيود والاستثناءات",
    content: [
      "لا نقدم خدمات في المناطق الخطرة أو المحظورة",
      "قد نرفض الخدمة للسيارات التي تحتوي على مواد خطرة",
      "الخدمة قد تتأخر بسبب الظروف الجوية أو المرورية",
      "نحتفظ بالحق في رفض الخدمة دون إبداء أسباب",
    ],
  },
  {
    icon: XCircle,
    title: "الإلغاء والاسترداد",
    content: [
      "يمكن إلغاء الطلب مجاناً قبل وصول السطحة بـ 15 دقيقة",
      "في حالة الإلغاء بعد وصول السطحة، تطبق رسوم إلغاء 50 ريال",
      "لا يمكن استرداد المبلغ بعد بدء تنفيذ الخدمة",
      "في حالة عدم تمكننا من تقديم الخدمة، سيتم استرداد المبلغ كاملاً",
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">شروط الاستخدام</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              الشروط والأحكام التي تحكم استخدام خدمات سطحة المدينة المنورة
            </p>
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
                    مرحباً بكم في موقع وخدمات "سطحة المدينة المنورة". هذه الشروط والأحكام تحكم استخدامكم لخدماتنا وموقعنا
                    الإلكتروني.
                  </p>
                  <p>
                    من خلال الوصول إلى موقعنا أو استخدام خدماتنا، فإنكم توافقون على الالتزام بهذه الشروط والأحكام. إذا
                    كنتم لا توافقون على أي جزء من هذه الشروط، فيرجى عدم استخدام خدماتنا.
                  </p>
                  <p>
                    نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق. استمراركم في استخدام الخدمة بعد أي تعديلات
                    يعني موافقتكم على الشروط المحدثة.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Additional Terms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>التأمين والضمان</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  جميع سياراتنا مؤمنة ضد الأضرار التي قد تحدث أثناء عملية النقل. نضمن سلامة سيارتك وفقاً لشروط وثيقة
                  التأمين المعتمدة.
                </p>
                <p>في حالة حدوث أي ضرر أثناء النقل، سيتم التعامل مع الموضوع وفقاً لإجراءات شركة التأمين المعتمدة.</p>
                <p>الضمان لا يشمل الأضرار الموجودة مسبقاً في السيارة أو الأضرار الناتجة عن عوامل خارجة عن سيطرتنا.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>القانون المطبق</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية ويتم تفسيرها وفقاً لها.</p>
                <p>أي نزاع ينشأ عن هذه الشروط أو استخدام خدماتنا سيخضع للاختصاص القضائي للمحاكم السعودية.</p>
                <p>نسعى لحل أي خلافات ودياً قبل اللجوء للطرق القانونية.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">هل لديك أسئلة حول الشروط والأحكام؟</h2>
            <p className="text-xl text-gray-300 mb-8">
              إذا كان لديك أي استفسارات حول شروط الاستخدام، تواصل معنا وسنوضح لك كل التفاصيل
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0530001368">
                <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">اتصل بنا</h3>
                    <p className="text-yellow-400">0530001368</p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://wa.me/966530001368">
                <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
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
