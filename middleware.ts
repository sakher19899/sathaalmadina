import { NextResponse, type NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const host = req.headers.get("host") || ""

  // 1) تحويل non-www إلى www (مهم للـ SEO لتوحيد الروابط)
  if (host === "sathaalmadina.com") {
    url.host = "www.sathaalmadina.com"
    return NextResponse.redirect(url, 308)
  }

  // 2) منع فهرسة روابط المعاينة
  if (host.endsWith(".v0.dev") || host.endsWith(".vercel.app")) {
    const res = NextResponse.next()
    res.headers.set("X-Robots-Tag", "noindex, nofollow")
    return res
  }

  return NextResponse.next()
}

// تجاهل الملفات الثابتة
export const config = {
  matcher: ["/((?!_next/|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js)$).*)"],
}
