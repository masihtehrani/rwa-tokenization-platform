import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, CheckCircle } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'

export const metadata: Metadata = {
  title: 'تماس با RWA Labs | مشاوره رایگان توکنایز | پشتیبانی 24/7',
  description: 'تماس با تیم RWA Labs برای مشاوره رایگان توکنایز دارایی‌های واقعی. پشتیبانی 24/7، مشاوره تخصصی و راهنمایی کامل',
  keywords: 'تماس RWA Labs,مشاوره رایگان توکنایز,پشتیبانی توکنایز,تماس با تیم بلاکچین,راهنمایی توکنایز',
  openGraph: {
    title: 'تماس با RWA Labs | مشاوره رایگان توکنایز',
    description: 'تماس با تیم RWA Labs برای مشاوره رایگان توکنایز دارایی‌های واقعی',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: 'تلفن تماس',
    details: ['+98-21-1234-5678'],
    description: 'تماس مستقیم با تیم پشتیبانی'
  },
  {
    icon: Clock,
    title: 'تنظیم وقت ملاقات',
    details: ['مشاوره آنلاین'],
    description: 'رزرو وقت ملاقات آنلاین'
  }
]


const faqItems = [
  {
    question: 'چه نوع دارایی‌هایی قابل توکنایز هستند؟',
    answer: 'املاک، طلا، محصولات کشاورزی، خودرو، دارایی‌های معدنی و اوراق بهادار قابل توکنایز هستند.'
  },
  {
    question: 'هزینه توکنایز چقدر است؟',
    answer: 'هزینه توکنایز بر اساس نوع و ارزش دارایی محاسبه می‌شود. برای استعلام دقیق با ما تماس بگیرید.'
  },
  {
    question: 'آیا مشاوره ارائه می‌دهید؟',
    answer: 'بله، مشاوره اولیه رایگان است و بدون هیچ تعهدی می‌توانید از آن استفاده کنید.'
  },
  {
    question: 'چگونه می‌توانم شروع کنم؟',
    answer: 'برای شروع، با ما تماس بگیرید یا وقت ملاقات تنظیم کنید تا در مورد پروژه شما صحبت کنیم.'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              تماس با ما
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              برای مشاوره رایگان، استعلام قیمت و راهنمایی در مورد توکنایز دارایی‌های واقعی با ما تماس بگیرید
            </p>
          </div>
        </div>
      </section>





      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              سوالات متداول
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              پاسخ سوالات رایج در مورد توکنایز دارایی‌های واقعی
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده شروع پروژه توکنایز خود هستید؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            همین حالا با ما تماس بگیرید و مشاوره رایگان دریافت کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+982112345678"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              تماس فوری
            </a>
            <CalendlyButton 
              text="تنظیم وقت ملاقات" 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
