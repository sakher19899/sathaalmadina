import { Users, Award, Clock, Shield, Target, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import BackToTop from "../components/BackToTop"
import Image from "next/image"
import { BreadcrumbJsonLd } from "../components/JsonLd"

const stats = [
  { number: "5000+", label: "عميل راضٍ", icon: Users },
  { number: "10+", label: "سنوات خبرة", icon: Award },
  { number: "24/7", label: "خدمة متواصلة", icon: Clock },
  { number: "100%", label: "أمان مضمون", icon: Shield },
]

const values = [
  {
    icon: Target,
    title: "الدقة والالتزام",
    description: "نلتزم بالمواعيد المحددة ونصل في الوقت المتفق عليه",
  },
  {
    icon: Shield,
    title: "الأمان والجودة",
    description: "نضمن سلامة سيارتك أثناء النقل بأعلى معايير الأمان",
  },
  {
    icon: Heart,
    title: "خدمة العملاء",
    description: "فريق خدمة عملاء محترف متاح 24 ساعة لخدمتكم",
  },
  {
    icon: Award,
    title: "الخبرة والاحترافية",
    description: "فريق عمل مدرب ومؤهل مع خبرة تزيد عن 10 سنوات",
  },
]

const team = [
  {
    name: "أحمد محمد السعدي",
    position: "مدير العمليات",
    experience: "15 سنة خبرة",
    image: "/placeholder.svg?height=300&width=300&text=أحمد+السعدي",
  },
  {
    name: "محمد عبدالله الأنصاري",
    position: "رئيس السائقين",
    experience: "12 سنة خبرة",
    image: "/placeholder.svg?height=300&width=300&text=محمد+الأنصاري",
  },
  {
    name: "عبدالرحمن سالم القرشي",
    position: "مسؤول خدمة العملاء",
    experience: "8 سنوات خبرة",
    image: "/placeholder.svg?height=300&width=300&text=عبدالرحمن+القرشي",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", url: "https://www.sathaalmadina.com" },
          { name: "من نحن", url: "https://www.sathaalmadina.com/about" },
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              نحن شركة رائدة في مجال خدمات سحب ونقل السيارات في المدينة المنورة، نقدم خدماتنا بأعلى معايير الجودة
              والاحترافية منذ أكثر من 10 سنوات
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  بدأت رحلتنا في عام 2014 برؤية واضحة: تقديم خدمة سطحة موثوقة وسريعة لأهالي المدينة المنورة. انطلقنا
                  بسطحة واحدة وحلم كبير بأن نكون الخيار الأول لكل من يحتاج خدمة نقل السيارات.
                </p>
                <p>
                  على مر السنين، نمت شركتنا لتصبح واحدة من أكبر شركات السطحة في المنطقة، مع أسطول يضم أكثر من 15 سطحة
                  متنوعة تخدم جميع أنواع السيارات.
                </p>
                <p>
                  اليوم، نفخر بخدمة أكثر من 5000 عميل راضٍ، ونواصل التطوير والتحسين لنقدم أفضل خدمة ممكنة لعملائنا
                  الكرام.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=قصة+سطحة+المدينة"
                alt="قصة سطحة المدينة المنورة"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قيمنا ومبادئنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نؤمن بأن النجاح الحقيقي يأتي من الالتزام بالقيم والمبادئ الأساسية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-100 p-3 rounded-lg ml-4">
                      <value.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">فريق العمل</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              فريق محترف ومدرب يعمل بتفانٍ لتقديم أفضل خدمة لعملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  أن نكون الشركة الرائدة في مجال خدمات سحب ونقل السيارات في المملكة العربية السعودية، ونقدم خدمات متميزة
                  تتجاوز توقعات عملائنا.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">رسالتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  نلتزم بتقديم خدمات سحب ونقل السيارات بأعلى معايير الجودة والأمان، مع الاستجابة السريعة لاحتياجات
                  عملائنا في أي وقت ومكان.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  )
}
