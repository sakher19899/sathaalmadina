import { Truck, Shield, Clock, MapPin, Phone, CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FloatingButtons from "../../components/FloatingButtons"
import BackToTop from "../../components/BackToTop"
import Image from "next/image"

const towingTypes = [
  {
    title: "سحب السيارات المعطلة",
    description: "نقوم بسحب السيارات التي تعطلت في الطريق بسبب أعطال ميكانيكية أو كهربائية",
    features: ["وصول سريع خلال 15-30 دقيقة", "معدات متخصصة للسحب الآمن", "فحص أولي للعطل"],
    image: "/placeholder.svg?height=300&width=400&text=سحب+سيارة+معطلة",
  },
  {
    title: "سحب من الحوادث",
    description: "خدمة متخصصة لسحب السيارات من مواقع الحوادث المرورية بأمان تام",
    features: ["التعامل مع حالات الطوارئ", "تنسيق مع الجهات المختصة", "سحب آمن للسيارات المصدومة"],
    image: "/placeholder.svg?height=300&width=400&text=سحب+من+حادث",
  },
  {
    title: "سحب السيارات الغارقة",
    description: "خدمة خاصة لسحب السيارات التي تعرضت للغرق أو السيول",
    features: ["معدات خاصة للسحب من المياه", "تجفيف أولي للسيارة", "نقل آمن لورش الصيانة"],
    image: "/placeholder.svg?height=300&width=400&text=سحب+سيارة+غارقة",
  },
]

const processSteps = [
  {
    step: "1",
    title: "الاتصال",
    description: "اتصل بنا على 0530001368 أو راسلنا عبر واتساب",
    icon: Phone,
  },
  {
    step: "2",
    title: "تحديد الموقع",
    description: "شارك موقعك الحالي ووصف حالة السيارة",
    icon: MapPin,
  },
  {
    step: "3",
    title: "إرسال السطحة",
    description: "نرسل أقرب سطحة مناسبة لحالتك",
    icon: Truck,
  },
  {
    step: "4",
    title: "السحب الآمن",
    description: "نقوم بسحب سيارتك بأمان إلى الوجهة المطلوبة",
    icon: Shield,
  },
]

const safetyFeatures = [
  "أحزمة تثبيت قوية ومتينة",
  "أنظمة حماية من الخدوش",
  "سائقون مدربون على السلامة",
  "تأمين شامل أثناء النقل",
  "فحص السيارة قبل وبعد النقل",
  "معدات إضاءة للعمل الليلي",
]

export default function TowingServicePage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">خدمة سحب السيارات</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                خدمة سحب احترافية وآمنة لجميع أنواع السيارات في المدينة المنورة وخارجها. نصل إليك خلال دقائق ونضمن نقل
                سيارتك بأمان تام.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0530001368">
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-3">
                    <Phone className="w-5 h-5 ml-2" />
                    اطلب الخدمة الآن
                  </Button>
                </a>
                <a href="/price-calculator">
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 font-bold bg-transparent"
                  >
                    احسب السعر
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=خدمة+سحب+السيارات"
                alt="خدمة سحب السيارات"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">أنواع خدمات السحب</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">نقدم خدمات سحب متنوعة تناسب جميع الحالات والظروف</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {towingTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">كيف تعمل خدمة السحب؟</h2>
            <p className="text-xl text-gray-600">خطوات بسيطة للحصول على خدمة سحب سريعة وآمنة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ضمانات السلامة والأمان</h2>
              <p className="text-xl text-gray-600 mb-8">
                نحن نضع سلامة سيارتك في المقدمة. جميع عمليات السحب تتم وفقاً لأعلى معايير السلامة والأمان.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Shield className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=ضمانات+السلامة"
                alt="ضمانات السلامة والأمان"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-6">أسعار تنافسية وشفافة</h2>
                <p className="text-xl mb-8">
                  نقدم أسعاراً عادلة ومنافسة مع عدم وجود رسوم خفية. السعر يحدد مسبقاً قبل بدء الخدمة.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/20 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">داخل المدينة</h3>
                    <p className="text-2xl font-bold">من 80 ريال</p>
                    <p className="text-sm">حسب المسافة ونوع السيارة</p>
                  </div>
                  <div className="bg-white/20 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">بين المدن</h3>
                    <p className="text-2xl font-bold">من 400 ريال</p>
                    <p className="text-sm">حسب الوجهة والمسافة</p>
                  </div>
                  <div className="bg-white/20 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">خدمة طارئة</h3>
                    <p className="text-2xl font-bold">+50% إضافية</p>
                    <p className="text-sm">للخدمات الليلية والطارئة</p>
                  </div>
                </div>
                <a href="/price-calculator">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3">
                    احسب السعر بدقة
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">آراء عملائنا</h2>
            <p className="text-xl text-gray-600">ماذا يقول عملاؤنا عن خدمة السحب؟</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                rating: 5,
                comment: "خدمة ممتازة وسريعة! وصلوا خلال 20 دقيقة وسحبوا سيارتي بأمان تام.",
              },
              {
                name: "فاطمة سالم",
                rating: 5,
                comment: "تعاملوا مع سيارتي بحرص شديد. السائق كان محترف ومهذب جداً.",
              },
              {
                name: "عبدالله أحمد",
                rating: 5,
                comment: "أسعار معقولة وخدمة سريعة. أنصح بهم لأي شخص يحتاج خدمة سحب.",
              },
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="mr-2 text-sm text-gray-600">({review.rating}/5)</span>
                  </div>
                  <p className="text-gray-700 mb-4">"{review.comment}"</p>
                  <p className="font-semibold text-gray-900">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">تحتاج خدمة سحب الآن؟</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            لا تنتظر! اتصل بنا الآن وسنصل إليك خلال دقائق لسحب سيارتك بأمان
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0530001368">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 font-bold text-lg">
                <Phone className="w-6 h-6 ml-2" />
                اتصل الآن - 0530001368
              </Button>
            </a>
            <a href="https://wa.me/966530001368">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 font-bold text-lg bg-transparent"
              >
                واتساب سريع
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center text-gray-300">
            <Clock className="w-5 h-5 ml-2" />
            <span>متوفرون 24 ساعة طوال أيام الأسبوع</span>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  )
}
