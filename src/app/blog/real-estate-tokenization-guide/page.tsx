import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'چگونه یک ساختمان را توکنایز کنیم؟ راهنمای کامل | RWA Labs',
  description: 'راهنمای جامع توکنایز املاک و مستغلات: مراحل عملی، قوانین، هزینه‌ها و نمونه‌های موفق. مشاوره رایگان با متخصصان RWA Labs',
  keywords: 'توکنایز املاک,توکنایز ساختمان,راهنمای توکنایز املاک,توکن ملک,املاک دیجیتال,real estate tokenization',
  openGraph: {
    title: 'چگونه یک ساختمان را توکنایز کنیم؟ راهنمای کامل',
    description: 'راهنمای جامع توکنایز املاک و مستغلات: مراحل عملی، قوانین، هزینه‌ها و نمونه‌های موفق',
    type: 'article',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
    authors: ['فاطمه احمدی'],
    publishedTime: '2024-01-12T10:00:00Z',
    modifiedTime: '2024-01-12T10:00:00Z',
  },
}

const steps = [
  {
    step: '1',
    title: 'ارزیابی و کارشناسی ملک',
    description: 'ارزیابی دقیق ملک توسط کارشناسان معتبر و تعیین ارزش واقعی آن',
    details: [
      'بررسی موقعیت مکانی و دسترسی‌ها',
      'ارزیابی کیفیت ساخت و ساز',
      'بررسی مدارک قانونی و مالکیت',
      'تخمین ارزش بر اساس بازار محلی'
    ]
  },
  {
    step: '2',
    title: 'تهیه قرارداد هوشمند',
    description: 'ایجاد قرارداد هوشمند مناسب بر اساس استاندارد ERC-20',
    details: [
      'طراحی قرارداد بر اساس نیازهای خاص',
      'پیاده‌سازی قابلیت تقسیم مالکیت',
      'اضافه کردن قابلیت‌های مدیریت',
      'تست و بررسی امنیت قرارداد'
    ]
  },
  {
    step: '3',
    title: 'تقسیم مالکیت به توکن‌ها',
    description: 'تقسیم ملک به توکن‌های قابل‌معامله',
    details: [
      'تعیین تعداد توکن‌ها (معمولاً 1000-10000)',
      'محاسبه ارزش هر توکن',
      'ایجاد توکن‌ها در بلاکچین',
      'تخصیص توکن‌ها به مالک اصلی'
    ]
  },
  {
    step: '4',
    title: 'راه‌اندازی بازار معامله',
    description: 'ایجاد بازار ثانویه برای معامله توکن‌ها',
    details: [
      'اتصال به صرافی‌های DEX',
      'راه‌اندازی پلتفرم معامله اختصاصی',
      'ایجاد نقدینگی اولیه',
      'راه‌اندازی سیستم قیمت‌گذاری'
    ]
  },
  {
    step: '5',
    title: 'مدیریت و نظارت مداوم',
    description: 'مدیریت مداوم ملک و نظارت بر عملکرد توکن‌ها',
    details: [
      'مدیریت اجاره و درآمد',
      'توزیع سود بین دارندگان توکن',
      'گزارش‌گیری منظم',
      'بروزرسانی وضعیت ملک'
    ]
  }
]

const benefits = [
  {
    title: 'تقسیم مالکیت',
    description: 'امکان تقسیم ملک گران‌قیمت بین چندین سرمایه‌گذار',
    icon: '👥'
  },
  {
    title: 'نقدینگی بالا',
    description: 'تبدیل دارایی غیرقابل‌نقد به دارایی قابل‌معامله',
    icon: '💰'
  },
  {
    title: 'دسترسی جهانی',
    description: 'سرمایه‌گذاران از سراسر جهان می‌توانند مشارکت کنند',
    icon: '🌍'
  },
  {
    title: 'شفافیت کامل',
    description: 'تمام تراکنش‌ها و مالکیت‌ها در بلاکچین ثبت می‌شود',
    icon: '🔍'
  }
]

const costs = [
  { item: 'ارزیابی ملک', cost: '0.5-1% ارزش ملک', description: 'کارشناسی و ارزیابی توسط متخصصان' },
  { item: 'قرارداد هوشمند', cost: '2-5 میلیون تومان', description: 'طراحی و پیاده‌سازی قرارداد' },
  { item: 'تست و حسابرسی', cost: '1-3 میلیون تومان', description: 'تست امنیت و حسابرسی کد' },
  { item: 'راه‌اندازی بازار', cost: '3-7 میلیون تومان', description: 'ایجاد پلتفرم معامله' },
  { item: 'مدیریت مداوم', cost: '0.1-0.3% سالانه', description: 'هزینه‌های مدیریت و نظارت' }
]

export default function RealEstateTokenizationGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/real-estate-guide.svg"
            alt="راهنمای توکنایز املاک"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-blue-100">
              <Link href="/blog" className="hover:text-white transition-colors">بلاگ</Link>
              <span>/</span>
              <span>املاک</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              چگونه یک ساختمان را توکنایز کنیم؟ راهنمای کامل
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              راهنمای جامع توکنایز املاک و مستغلات: مراحل عملی، قوانین، هزینه‌ها و نمونه‌های موفق
            </p>

            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                فاطمه احمدی
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                12 دی 1402
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                12 دقیقه مطالعه
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مقدمه</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                توکنایز املاک و مستغلات یکی از مهم‌ترین کاربردهای فناوری بلاکچین در دنیای املاک است. 
                این فرآیند امکان تقسیم مالکیت ساختمان‌های گران‌قیمت را بین چندین سرمایه‌گذار فراهم می‌کند 
                و نقدینگی بالایی برای دارایی‌های غیرقابل‌نقد ایجاد می‌کند.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                در این راهنمای جامع، تمام مراحل توکنایز املاک را از ابتدا تا انتها بررسی می‌کنیم 
                و نکات مهم و چالش‌های احتمالی را نیز مطرح می‌کنیم.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مراحل توکنایز املاک</h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مزایای توکنایز املاک</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Costs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">هزینه‌های توکنایز املاک</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">عنوان</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">هزینه</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">توضیحات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {costs.map((cost, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm text-gray-900">{cost.item}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-blue-600">{cost.cost}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{cost.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">نتیجه‌گیری</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                توکنایز املاک فرصتی بی‌نظیر برای دموکراتیک کردن سرمایه‌گذاری در املاک است. 
                این فناوری نه تنها دسترسی به سرمایه‌گذاری‌های گران‌قیمت را برای عموم مردم فراهم می‌کند، 
                بلکه نقدینگی بالایی نیز برای دارایی‌های غیرقابل‌نقد ایجاد می‌کند.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                اگر شما هم ملکی دارید که می‌خواهید توکنایز کنید، یا به عنوان سرمایه‌گذار به دنبال 
                فرصت‌های جدید در بازار املاک هستید، با تیم متخصص ما در RWA Labs تماس بگیرید.
              </p>
            </section>
          </article>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">آماده توکنایز ملک خود هستید؟</h3>
            <p className="text-blue-100 mb-6">با مشاوره رایگان ما، بهترین راهکار را برای ملک خود پیدا کنید</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                مشاوره رایگان
              </Link>
              <Link 
                href="/services/real-estate"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                مشاهده خدمات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
