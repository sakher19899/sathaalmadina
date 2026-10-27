"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  {
    name: "خدماتنا",
    href: "/services/towing",
    submenu: [
      { name: "سحب السيارات", href: "/services/towing" },
      { name: "المعرض", href: "/gallery" },
      { name: "حاسبة الأسعار", href: "/price-calculator" },
    ],
  },
  {
    name: "المزيد",
    href: "#",
    submenu: [
      { name: "المدونة", href: "/blog" },
      { name: "آراء العملاء", href: "/testimonials" },
      { name: "الوظائف", href: "/careers" },
    ],
  },
  { name: "تواصل معنا", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-4 border-gradient-to-r from-indigo-500 to-purple-600">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" dir="rtl">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <h1 className="text-xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              سطحة المدينة
            </h1>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation with dropdowns */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <>
                  <button
                    className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-indigo-50"
                    onMouseEnter={() => setOpenSubmenu(item.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 mr-1" />
                  </button>
                  <div
                    className={`absolute top-full right-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                      openSubmenu === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setOpenSubmenu(item.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-indigo-50"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="tel:0530001368">
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="w-4 h-4 ml-2" />
              اتصل الآن
            </Button>
          </a>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-lg font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    سطحة المدينة
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.submenu ? (
                          <div className="space-y-1">
                            <span className="block px-3 py-2 text-base font-semibold text-gray-900">{item.name}</span>
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg px-6 py-2 text-sm text-gray-600 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <a href="tel:0530001368">
                      <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold">
                        <Phone className="w-4 h-4 ml-2" />
                        اتصل الآن - 0530001368
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
