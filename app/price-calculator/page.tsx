"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, MessageCircle, Tag } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

// مناطق المدينة المنورة فقط
const areas = [
  { id: "center", name: "وسط المدينة", basePrice: 50 },
  { id: "north", name: "شمال المدينة", basePrice: 60 },
  { id: "south", name: "جنوب المدينة", basePrice: 60 },
  { id: "east", name: "شرق المدينة", basePrice: 65 },
  { id: "west", name: "غرب المدينة", basePrice: 65 },
  { id: "airport", name: "المطار", basePrice: 80 },
]

const carTypes = [
  { id: "sedan", name: "سيارة صالون", multiplier: 1 },
  { id: "suv", name: "سيارة دفع رباعي", multiplier: 1.2 },
  { id: "truck", name: "شاحنة صغيرة", multiplier: 1.5 },
  { id: "bus", name: "حافلة صغيرة", multiplier: 1.8 },
  { id: "motorcycle", name: "دراجة نارية", multiplier: 0.7 },
]

const serviceTypes = [
  { id: "towing", name: "سحب سيارة معطلة", multiplier: 1 },
  { id: "transport", name: "نقل سيارة سليمة", multiplier: 0.8 },
  { id: "roadside", name: "مساعدة على الطريق", multiplier: 0.6 },
  { id: "accident", name: "سحب بعد حادث", multiplier: 1.3 },
]

const timeSlots = [
  { id: "normal", name: "الوقت العادي (6 ص - 10 م)", multiplier: 1 },
  { id: "night", name: "الوقت الليلي (10 م - 6 ص)", multiplier: 1.2 },
  { id: "weekend", name: "نهاية الأسبوع", multiplier: 1.1 },
  { id: "holiday", name: "العطل الرسمية", multiplier: 1.3 },
]

export default function PriceCalculatorPage() {
  const [fromArea, setFromArea] = useState("")
  const [toArea, setToArea] = useState("")
  const [carType, setCarType] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [timeSlot, setTimeSlot] = useState("")
  const [distance, setDistance] = useState("")
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null)
  const [originalPrice, setOriginalPrice] = useState<number | null>(null)

  const calculatePrice = () => {
    if (!fromArea || !toArea || !carType || !serviceType || !timeSlot) {
      alert("يرجى ملء جميع الحقول المطلوبة")
      return
    }

    const fromAreaData = areas.find((area) => area.id === fromArea)
    const toAreaData = areas.find((area) => area.id === toArea)
    const carTypeData = carTypes.find((type) => type.id === carType)
    const serviceTypeData = serviceTypes.find((service) => service.id === serviceType)
    const timeSlotData = timeSlots.find((slot) => slot.id === timeSlot)

    if (!fromAreaData || !toAreaData || !carTypeData || !serviceTypeData || !timeSlotData) {
      return
    }

    // حساب السعر الأساسي
    let basePrice = (fromAreaData.basePrice + toAreaData.basePrice) / 2

    // إضافة تكلفة المسافة إذا تم إدخالها
    if (distance && Number.parseFloat(distance) > 0) {
      basePrice += Number.parseFloat(distance) * 2 // 2 ريال لكل كيلومتر
    }

    // تطبيق المضاعفات
    const finalPrice = basePrice * carTypeData.multiplier * serviceTypeData.multiplier * timeSlotData.multiplier

    // السعر الأصلي قبل الخصم
    const original = Math.round(finalPrice * 2) // السعر الأصلي (مضاعف)

    // السعر بعد خصم 50%
    const discounted = Math.round(finalPrice)

    setOriginalPrice(original)
    setCalculatedPrice(discounted)
  }

  const sendWhatsAppMessage = () => {
    if (!calculatedPrice) return

    const fromAreaName = areas.find((area) => area.id === fromArea)?.name
    const toAreaName = areas.find((area) => area.id === toArea)?.name
    const carTypeName = carTypes.find((type) => type.id === carType)?.name
    const serviceTypeName = serviceTypes.find((service) => service.id === serviceType)?.name

    const message = `مرحباً، أريد طلب خدمة سطحة:
    
📍 من: ${fromAreaName}
📍 إلى: ${toAreaName}
🚗 نوع السيارة: ${carTypeName}
🔧 نوع الخدمة: ${serviceTypeName}
💰 السعر المتوقع: ${calculatedPrice} ريال (بعد خصم 50%)

أرجو التواصل معي لتأكيد الطلب.`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/966530001368?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">حاسبة أسعار سطحة المدينة المنورة</h1>
            <p className="text-xl text-gray-600">احسب تكلفة خدمة السطحة بدقة قبل الطلب</p>

            {/* عرض الخصم */}
            <div className="mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 rounded-xl inline-block">
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <Tag className="w-6 h-6" />
                <span className="text-lg font-bold">عرض خاص: خصم 50% على جميع الخدمات!</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-6 h-6 ml-2 text-indigo-600" />
                  احسب التكلفة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">من أين؟ *</label>
                  <Select value={fromArea} onValueChange={setFromArea}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المنطقة" />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.map((area) => (
                        <SelectItem key={area.id} value={area.id}>
                          {area.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* To Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">إلى أين؟ *</label>
                  <Select value={toArea} onValueChange={setToArea}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المنطقة" />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.map((area) => (
                        <SelectItem key={area.id} value={area.id}>
                          {area.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Distance */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">المسافة التقريبية (كم)</label>
                  <Input
                    type="number"
                    placeholder="مثال: 15"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                  />
                </div>

                {/* Car Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع السيارة *</label>
                  <Select value={carType} onValueChange={setCarType}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع السيارة" />
                    </SelectTrigger>
                    <SelectContent>
                      {carTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع الخدمة *</label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الخدمة" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">وقت الخدمة *</label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر وقت الخدمة" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot.id} value={slot.id}>
                          {slot.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculatePrice}
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 text-lg font-bold"
                >
                  احسب السعر
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* Price Result */}
              {calculatedPrice && (
                <Card className="border-2 border-indigo-200">
                  <CardHeader>
                    <CardTitle className="text-center text-indigo-600">نتيجة الحساب</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    {originalPrice && (
                      <div className="text-gray-500">
                        <span className="text-lg line-through">السعر الأصلي: {originalPrice} ريال</span>
                      </div>
                    )}
                    <div className="text-4xl font-bold text-green-600 mb-4">{calculatedPrice} ريال</div>
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg inline-block">
                      <span className="font-bold">
                        وفرت: {originalPrice ? originalPrice - calculatedPrice : 0} ريال!
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">* السعر تقريبي وقد يختلف حسب الظروف الفعلية</p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button
                        onClick={sendWhatsAppMessage}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      >
                        <MessageCircle className="w-5 h-5 ml-2" />
                        اطلب عبر واتساب
                      </Button>
                      <a
                        href="tel:0530001368"
                        className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
                      >
                        اتصل بنا
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}
