"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calculator } from "lucide-react"
import Link from "next/link"

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3" dir="rtl">
      {/* Phone Button */}
      <a href="tel:0530001368">
        <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 w-14 h-14 rounded-full p-0">
          <Phone className="w-6 h-6" />
        </Button>
      </a>

      {/* WhatsApp Button */}
      <a href="https://wa.me/966530001368">
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 w-14 h-14 rounded-full p-0">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </a>

      {/* Price Calculator Button */}
      <Link href="/price-calculator">
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 w-14 h-14 rounded-full p-0">
          <Calculator className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  )
}
