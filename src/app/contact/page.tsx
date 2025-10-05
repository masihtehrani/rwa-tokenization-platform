import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

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
    details: ['+98-21-1234-5678', '+98-912-345-6789'],
    description: 'تماس مستقیم با تیم پشتیبانی'
  },
  {
    icon: Mail,
    title: 'ایمیل',
    details: ['info@rwa-labs.ir', 'support@rwa-labs.ir'],
    description: 'ارسال ایمیل و دریافت پاسخ سریع'
  },
  {
    icon: MessageCircle,
    title: 'تلگرام',
    details: ['@rwatoken_support', '@rwatoken_news'],
    description: 'پشتیبانی فوری در تلگرام'
  },
  {
    icon: MapPin,
    title: 'آدرس',
    details: ['تهران، خیابان ولیعصر', 'برج میلاد، طبقه 15'],
    description: 'دفتر مرکزی RWA Labs'
  }
]

const workingHours = [
  { day: 'شنبه تا چهارشنبه', hours: '9:00 - 18:00' },
  { day: 'پنج‌شنبه', hours: '9:00 - 14:00' },
  { day: 'جمعه', hours: 'تعطیل' }
]

const faqItems = [
  {
    question: 'چقدر طول می‌کشد تا دارایی من توکنایز شود؟',
    answer: 'فرآیند توکنایز معمولاً بین 3 تا 7 روز کاری طول می‌کشد، بسته به نوع دارایی و پیچیدگی پروژه.'
  },
  {
    question: 'هزینه توکنایز چقدر است؟',
    answer: 'هزینه توکنایز بر اساس نوع و ارزش دارایی محاسبه می‌شود. برای استعلام دقیق با ما تماس بگیرید.'
  },
  {
    question: 'آیا مشاوره رایگان ارائه می‌دهید؟',
    answer: 'بله، مشاوره اولیه کاملاً رایگان است و بدون هیچ تعهدی می‌توانید از آن استفاده کنید.'
  },
  {
    question: 'چه نوع دارایی‌هایی قابل توکنایز هستند؟',
    answer: 'املاک، طلا، محصولات کشاورزی، خودرو، دارایی‌های معدنی و اوراق بهادار قابل توکنایز هستند.'
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+982112345678"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                تماس فوری
              </a>
              <a 
                href="https://t.me/rwatoken_support"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                تلگرام
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              اطلاعات تماس
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              راه‌های مختلف تماس با تیم RWA Labs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-blue-600 font-semibold">
                      {detail}
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                فرم تماس
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">مشاوره رایگان</h3>
                    <p className="text-gray-600">مشاوره اولیه کاملاً رایگان و بدون تعهد</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">پاسخ سریع</h3>
                    <p className="text-gray-600">پاسخ به درخواست‌ها در کمتر از 2 ساعت</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">پشتیبانی 24/7</h3>
                    <p className="text-gray-600">پشتیبانی مداوم در تمام ساعات شبانه‌روز</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ساعات کاری
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ساعات پاسخگویی تیم پشتیبانی
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">ساعات کاری</h3>
              </div>
              
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm text-center">
                  <strong>نکته:</strong> برای مسائل فوری می‌توانید از طریق تلگرام یا واتس‌اپ با ما تماس بگیرید
                </p>
              </div>
            </div>
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
            <a 
              href="https://t.me/rwatoken_support"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              تلگرام
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
