// معلومات المشروع الكاملة - سطحة المدينة المنورة

export const PROJECT_INFO = {
  // معلومات الاتصال
  contact: {
    siteName: "سطحة المدينة المنورة",
    phone: "0530001368",
    whatsapp: "966530001368",
    website: "https://www.sathaalmadina.com",
    location: "المدينة المنورة، المملكة العربية السعودية",
  },

  // مسارات الصفحات
  routes: [
    { path: "/", name: "الصفحة الرئيسية", priority: 1.0 },
    { path: "/about", name: "من نحن", priority: 0.8 },
    { path: "/services/towing", name: "خدمات السطحة", priority: 0.9 },
    { path: "/price-calculator", name: "حاسبة الأسعار", priority: 0.7 },
    { path: "/gallery", name: "معرض الصور", priority: 0.6 },
    { path: "/testimonials", name: "آراء العملاء", priority: 0.6 },
    { path: "/contact", name: "اتصل بنا", priority: 0.8 },
    { path: "/blog", name: "المدونة", priority: 0.7 },
    { path: "/blog/[id]", name: "صفحات المدونة الفردية", priority: 0.6 },
    { path: "/careers", name: "الوظائف", priority: 0.5 },
    { path: "/privacy", name: "سياسة الخصوصية", priority: 0.3 },
    { path: "/terms", name: "الشروط والأحكام", priority: 0.3 },
    { path: "/track-order", name: "تتبع الطلب", priority: 0.5 },
    { path: "/admin/orders", name: "إدارة الطلبات", priority: 0.1 },
    { path: "/not-found", name: "صفحة 404", priority: 0.1 },
  ],

  // الصور المستخدمة
  images: [
    {
      path: "/images/satha-medina-night-service.png",
      alt: "سطحة المدينة المنورة - خدمة ليلية",
      description: "الصورة الرئيسية للموقع",
    },
    {
      path: "/images/satha-medina-hydraulic-truck.png",
      alt: "سطحة هيدروليك المدينة المنورة",
      description: "سطحة هيدروليك متطورة",
    },
    {
      path: "/images/satha-medina-accident-recovery.png",
      alt: "سحب سيارات الحوادث",
      description: "خدمة سحب سيارات الحوادث",
    },
    {
      path: "/images/satha-medina-suv-transport.png",
      alt: "نقل سيارات دفع رباعي",
      description: "نقل السيارات الكبيرة",
    },
    {
      path: "/images/satha-medina-bus-transport.png",
      alt: "نقل حافلات",
      description: "نقل الحافلات والمركبات الكبيرة",
    },
    {
      path: "/images/satha-medina-empty-truck.png",
      alt: "سطحة فارغة جاهزة للخدمة",
      description: "سطحة جاهزة لاستقبال السيارات",
    },
  ],

  // الألوان والتصميم
  design: {
    colors: {
      primary: "from-slate-900 via-indigo-900 to-purple-900",
      buttons: "from-indigo-600 to-purple-600",
      gradientText: "from-cyan-400 via-purple-400 to-pink-400",
      accent: {
        cyan: "text-cyan-400",
        emerald: "text-emerald-400",
        purple: "text-purple-400",
        pink: "text-pink-400",
      },
    },
    fonts: ["Cairo", "Tajawal"],
    framework: "Next.js 14 + Tailwind CSS",
  },

  // الخدمات المقدمة
  services: [
    {
      name: "سحب سيارات معطلة",
      description: "خدمة سحب فورية للسيارات المعطلة في أي مكان",
      price: "من 100 ريال",
    },
    {
      name: "سحب سيارات من الحوادث",
      description: "سحب السيارات من مواقع الحوادث بعناية فائقة",
      price: "حسب الحالة",
    },
    {
      name: "نقل سيارات جديدة",
      description: "نقل السيارات الجديدة من المعارض والوكالات",
      price: "حسب المسافة",
    },
    {
      name: "النقل بين المدن",
      description: "نقل السيارات من المدينة المنورة إلى جميع مدن المملكة",
      price: "حسب المسافة",
    },
    {
      name: "سطحات هيدروليك",
      description: "سطحات هيدروليك متطورة لجميع أنواع السيارات",
      price: "من 150 ريال",
    },
    {
      name: "خدمة طوارئ 24 ساعة",
      description: "متوفرون في أي وقت لخدمة الطوارئ",
      price: "متغير",
    },
  ],

  // مناطق التغطية
  coverage: [
    "المدينة المنورة - جميع الأحياء",
    "من المدينة إلى جدة",
    "من المدينة إلى مكة المكرمة",
    "من المدينة إلى الرياض",
    "من المدينة إلى الطائف",
    "من المدينة إلى ينبع",
    "من المدينة إلى تبوك",
    "جميع مدن المملكة العربية السعودية",
  ],

  // الكومبوننتس الرئيسية
  components: [
    "Header",
    "Hero",
    "Services",
    "Stats",
    "HowItWorks",
    "Coverage",
    "FAQ",
    "ContactForm",
    "Footer",
    "BackToTop",
    "FloatingButtons",
    "SEOContent",
  ],

  // معلومات SEO
  seo: {
    title: "سطحة المدينة المنورة | رقم سطحة فورية 24 ساعة 0530001368",
    description:
      "أفضل خدمة سطحة في المدينة المنورة متوفرة 24 ساعة. سحب ونقل السيارات المتعطلة والحوادث. اتصل الآن 0530001368",
    keywords: [
      "سطحة المدينة المنورة",
      "رقم سطحة المدينة",
      "سحب سيارات المدينة",
      "نقل سيارات",
      "سطحة 24 ساعة",
      "خدمة طوارئ سيارات",
      "سطحة هيدروليك المدينة",
      "واتساب سطحة المدينة",
    ],
  },
}

export default PROJECT_INFO
