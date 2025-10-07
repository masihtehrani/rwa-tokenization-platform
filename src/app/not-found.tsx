import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Home, Search, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'صفحه مورد نظر یافت نشد | RWA Labs',
  description: 'صفحه مورد نظر شما یافت نشد. به صفحه اصلی بازگردید یا از منوی سایت استفاده کنید.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-white mb-4 opacity-20">404</div>
          <div className="text-6xl font-bold text-yellow-400 mb-4">404</div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          صفحه مورد نظر یافت نشد
        </h1>
        
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link 
            href="/"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300 group"
          >
            <Home className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">صفحه اصلی</h3>
            <p className="text-sm text-blue-100">بازگشت به خانه</p>
          </Link>

          <Link 
            href="/services"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300 group"
          >
            <Search className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">خدمات ما</h3>
            <p className="text-sm text-blue-100">مشاهده خدمات</p>
          </Link>

          <Link 
            href="/contact"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300 group"
          >
            <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">تماس با ما</h3>
            <p className="text-sm text-blue-100">مشاوره رایگان</p>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            بازگشت به صفحه اصلی
          </Link>
          
          <Link 
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            تماس با پشتیبانی
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">نیاز به کمک دارید؟</h3>
          <p className="text-blue-100 text-sm mb-4">
            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="tel:+982112345678" className="text-yellow-400 hover:text-yellow-300">
              📞 +98 21 1234 5678
            </a>
            <a href="mailto:info@rwa-assets.ir" className="text-yellow-400 hover:text-yellow-300">
              ✉️ info@rwa-assets.ir
            </a>
            <a href="https://t.me/rwa_labs" className="text-yellow-400 hover:text-yellow-300">
              💬 @rwa_labs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
