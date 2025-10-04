import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, ArrowRight, CheckCircle, Shield, Zap, Globe, Users, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'توکنایز املاک و مستغلات | تبدیل ساختمان به توکن دیجیتال | RWA Labs',
  description: 'ساختمان‌های مسکونی، تجاری و پروژه‌های عمرانی را به توکن دیجیتال تبدیل کنید. تقسیم مالکیت، درآمد اجاره، بازار ثانویه و گزارش‌گیری خودکار.',
  keywords: 'توکنایز املاک,توکن ساختمان,توکن ملک,real estate tokenization,املاک دیجیتال,تقسیم مالکیت ملک',
}

const features = [
  {
    icon: Building2,
    title: 'قرارداد هوشمند ERC-20',
    description: 'استاندارد بین‌المللی برای توکن‌های قابل‌تعویض',
    details: ['ERC-20 Standard', 'Smart Contract Security', 'Gas Optimization']
  },
  {
    icon: Users,
    title: 'تقسیم مالکیت تا 1000 سهم',
    description: 'امکان تقسیم مالکیت ملک بین چندین سرمایه‌گذار',
    details: ['Fractional Ownership', 'Flexible Shares', 'Voting Rights']
  },
  {
    icon: BarChart3,
    title: 'درآمد اجاره ماهانه',
    description: 'توزیع خودکار درآمد اجاره بین سهام‌داران',
    details: ['Automatic Distribution', 'Monthly Payouts', 'Transparent Records']
  },
  {
    icon: Globe,
    title: 'بازار ثانویه AMM',
    description: 'معامله توکن‌های ملک در صرافی‌های غیرمتمرکز',
    details: ['DEX Integration', '24/7 Trading', 'Liquidity Pools']
  },
  {
    icon: Shield,
    title: 'گزارش‌گیری خودکار',
    description: 'گزارش‌های کامل و شفاف از وضعیت ملک',
    details: ['Automated Reports', 'Financial Transparency', 'Legal Compliance']
  },
  {
    icon: Zap,
    title: 'ارزیابی کارشناسی',
    description: 'ارزیابی دقیق و حرفه‌ای ارزش ملک',
    details: ['Professional Appraisal', 'Market Analysis', 'Value Assessment']
  }
]

const process = [
  {
    step: '1',
    title: 'ارزیابی و کارشناسی',
    description: 'ارزیابی دقیق ملک توسط کارشناسان معتبر'
  },
  {
    step: '2',
    title: 'تهیه مدارک',
    description: 'تهیه و بررسی مدارک قانونی و فنی'
  },
  {
    step: '3',
    title: 'تقسیم مالکیت',
    description: 'تقسیم ملک به سهام قابل‌معامله'
  },
  {
    step: '4',
    title: 'ایجاد قرارداد هوشمند',
    description: 'توسعه و تست قرارداد هوشمند امن'
  },
  {
    step: '5',
    title: 'راه‌اندازی بازار',
    description: 'راه‌اندازی بازار ثانویه و معامله'
  }
]

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              توکنایز املاک و مستغلات
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              ساختمان‌های مسکونی، تجاری و پروژه‌های عمرانی را به توکن دیجیتال تبدیل کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
              >
                مشاوره رایگان
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                مشاهده نمونه‌کارها
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ویژگی‌های کلیدی
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              امکانات پیشرفته برای توکنایز املاک و مستغلات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              فرآیند توکنایز املاک
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مراحل تبدیل ملک به توکن دیجیتال
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                چرا املاک را توکنایز کنیم؟
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">نقدینگی بالا</h3>
                    <p className="text-gray-600">تبدیل دارایی غیرقابل‌نقد به دارایی قابل‌معامله</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">تقسیم مالکیت</h3>
                    <p className="text-gray-600">امکان سرمایه‌گذاری در املاک گران‌قیمت</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">شفافیت کامل</h3>
                    <p className="text-gray-600">تمام تراکنش‌ها در بلاکچین ثبت می‌شود</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">دسترسی جهانی</h3>
                    <p className="text-gray-600">سرمایه‌گذاران از سراسر جهان</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">آمار و عملکرد</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$2.5M</div>
                  <div className="text-blue-100">ارزش املاک توکنایز شده</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">47</div>
                  <div className="text-blue-100">تعداد املاک</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">18.5%</div>
                  <div className="text-blue-100">بازده سالانه</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1,200+</div>
                  <div className="text-blue-100">سرمایه‌گذار</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده توکنایز ملک خود هستید؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            با مشاوره رایگان ما، بهترین راهکار توکنایز را برای ملک خود پیدا کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              مشاوره رایگان
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
