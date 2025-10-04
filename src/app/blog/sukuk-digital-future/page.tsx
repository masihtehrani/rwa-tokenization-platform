import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'تفاوت ERC-20 و ERC-3643: کدام استاندارد برای RWA مناسب‌تر است؟ | RWA Labs',
  description: 'مقایسه کامل استانداردهای ERC-20 و ERC-3643 برای توکنایز دارایی‌های واقعی. مزایا، معایب و کاربردهای هر استاندارد',
  keywords: 'ERC-20,ERC-3643,استاندارد توکن,توکنایز دارایی واقعی,مقایسه استانداردها,بلاکچین',
  openGraph: {
    title: 'تفاوت ERC-20 و ERC-3643: کدام استاندارد برای RWA مناسب‌تر است؟',
    description: 'مقایسه کامل استانداردهای ERC-20 و ERC-3643 برای توکنایز دارایی‌های واقعی',
    type: 'article',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
    authors: ['علی رضایی'],
    publishedTime: '2024-01-10T10:00:00Z',
  },
}

export default function ERC20vsERC3643Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/erc-standards.svg"
            alt="مقایسه ERC-20 و ERC-3643"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-purple-100">
              <Link href="/blog" className="hover:text-white transition-colors">بلاگ</Link>
              <span>/</span>
              <span>تکنولوژی</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              تفاوت ERC-20 و ERC-3643: کدام استاندارد برای RWA مناسب‌تر است؟
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              مقایسه کامل استانداردهای توکن و انتخاب بهترین گزینه برای توکنایز دارایی‌های واقعی
            </p>

            <div className="flex items-center space-x-6 text-purple-100">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                علی رضایی
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                10 دی 1402
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                10 دقیقه مطالعه
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مقدمه</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                انتخاب استاندارد مناسب برای توکنایز دارایی‌های واقعی یکی از مهم‌ترین تصمیمات در فرآیند توسعه است. 
                در این مقاله، دو استاندارد اصلی ERC-20 و ERC-3643 را مقایسه می‌کنیم.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ERC-20: استاندارد توکن‌های قابل‌تعویض</h2>
              <div className="bg-blue-50 border-r-4 border-blue-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">ویژگی‌های کلیدی ERC-20:</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• سادگی در پیاده‌سازی</li>
                  <li>• سازگاری بالا با صرافی‌ها</li>
                  <li>• هزینه کم توسعه</li>
                  <li>• مناسب برای توکن‌های عمومی</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ERC-3643: استاندارد اوراق بهادار</h2>
              <div className="bg-green-50 border-r-4 border-green-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">ویژگی‌های کلیدی ERC-3643:</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• انطباق با مقررات مالی</li>
                  <li>• قابلیت KYC/AML داخلی</li>
                  <li>• مدیریت مجوزها</li>
                  <li>• مناسب برای اوراق بهادار</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">نتیجه‌گیری</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                انتخاب بین ERC-20 و ERC-3643 بستگی به نوع دارایی و نیازهای رگولاتوری دارد. 
                برای دارایی‌های عمومی، ERC-20 مناسب‌تر است، اما برای اوراق بهادار، ERC-3643 گزینه بهتری است.
              </p>
            </section>
          </article>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">نیاز به مشاوره تخصصی دارید؟</h3>
            <p className="text-purple-100 mb-6">با متخصصان ما تماس بگیرید</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                مشاوره رایگان
              </Link>
              <Link 
                href="/technology"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                مشاهده تکنولوژی‌ها
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
