"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle } from "lucide-react"

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      setIsVisible(scrollPosition > 200) // Show after scrolling down 200px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col items-end gap-2 animate-fade-in">
      {isVisible && (
        <>
          <a
            href="tel:0530001368"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 flex items-center space-x-2 space-x-reverse"
          >
            <Phone className="w-5 h-5" />
            <span>اتصل الآن</span>
          </a>
          <a
            href="https://wa.me/966530001368"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 flex items-center space-x-2 space-x-reverse"
          >
            <MessageCircle className="w-5 h-5" />
            <span>واتساب</span>
          </a>
        </>
      )}
    </div>
  )
}
