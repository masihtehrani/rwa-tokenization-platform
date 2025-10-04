import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowRight, CheckCircle, Shield, Zap, Globe, Users, BarChart3, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'صکوک دیجیتال و اوراق بهادار | اوراق اسلامی، صکوک درآمدزا | RWA Labs',
  description: 'صکوک دیجیتال، اوراق بهادار اسلامی، صکوک درآمدزا، اوراق مشارکت و اوراق قرضه با استاندارد ERC-3643',
  keywords: 'صکوک دیجیتال,اوراق بهادار اسلامی,صکوک درآمدزا,اوراق مشارکت,اوراق قرضه,ERC-3643,digital sukuk',
}

const sukukTypes = [
  {
    name: 'صکوک اجاره',
    symbol: 'IJARAH',
    description: 'صکوک اجاره با پشتوانه دارایی‌های واقعی و درآمد اجاره',
    features: ['پشتوانه دارایی واقعی', 'درآمد اجاره ماهانه', 'استاندارد ERC-3643', 'کیف‌پول چند امضایی'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'صکوک مرابحه',
    symbol: 'MURABAHA',
    description: 'صکوک مرابحه با پشتوانه کالاها و خدمات',
    features: ['پشتوانه کالا فیزیکی', 'قیمت‌گذاری شفاف', 'معامله 24/7', 'گزارش‌گیری خودکار'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'صکوک سلف',
    symbol: 'SALAM',
    description: 'صکوک سلف با پشتوانه محصولات آینده',
    features: ['پشتوانه محصول آینده', 'Batch Transfer', 'Gas Optimization', 'Upgradeable Contracts'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'اوراق مشارکت',
    symbol: 'PARTICIPATION',
    description: 'اوراق مشارکت در پروژه‌های مختلف',
    features: ['پشتوانه پروژه فیزیکی', 'اتصال به PancakeSwap', 'قابلیت فریز کیف‌پول', 'Time-locked Contracts'],
    color: 'from-purple-500 to-pink-500'
  }
]

const features = [
  {
    icon: FileText,
    title: 'استاندارد ERC-3643',
    description: 'استفاده از استاندارد پیشرفته برای اوراق بهادار دیجیتال',
    details: ['انطباق با مقررات مالی', 'قابلیت KYC/AML داخلی', 'مدیریت مجوزها', 'انتقال شرطی']
  },
  {
    icon: TrendingUp,
    title: 'درآمد ثابت',
    description: 'درآمد ثابت و قابل پیش‌بینی از دارایی‌های پشتوانه',
    details: ['پرداخت منظم سود', 'محاسبه خودکار', 'شفافیت کامل', 'گزارش‌گیری لحظه‌ای']
  },
  {
    icon: Shield,
    title: 'امنیت بالا',
    description: 'استفاده از قراردادهای هوشمند امن و کیف‌پول چند امضایی',
    details: ['Multi-signature Wallet', 'Smart Contract Security', 'Audit شده', 'Backup کامل']
  },
  {
    icon: Globe,
    title: 'معامله 24/7',
    description: 'امکان معامله در تمام ساعات شبانه‌روز در صرافی‌های مختلف',
    details: ['DEX Integration', 'CEX Listing', 'Liquidity Pools', 'Trading Pairs']
  },
  {
    icon: Users,
    title: 'مدیریت ریسک',
    description: 'سیستم پیشرفته مدیریت ریسک و بیمه دارایی‌ها',
    details: ['Risk Assessment', 'Insurance Coverage', 'Hedging Strategies', 'Portfolio Management']
  },
  {
    icon: BarChart3,
    title: 'گزارش‌گیری کامل',
    description: 'گزارش‌های جامع از وضعیت اوراق و عملکرد',
    details: ['Real-time Reports', 'Performance Analytics', 'Audit Trail', 'Compliance Reports']
  }
]

const process = [
  {
    step: '1',
    title: 'ارزیابی و کارشناسی',
    description: 'ارزیابی دقیق دارایی‌های پشتوانه توسط کارشناسان معتبر'
  },
  {
    step: '2',
    title: 'تهیه اوراق',
    description: 'تهیه اوراق بهادار با استاندارد ERC-3643'
  },
  {
    step: '3',
    title: 'تأیید شرعی',
    description: 'تأیید شرعی اوراق توسط مراجع معتبر'
  },
  {
    step: '4',
    title: 'راه‌اندازی بازار',
    description: 'راه‌اندازی بازار معامله و صرافی‌ها'
  },
  {
    step: '5',
    title: 'مدیریت و نظارت',
    description: 'مدیریت مداوم و نظارت بر عملکرد'
  }
]

export default function DigitalSukukPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              صکوک دیجیتال و اوراق بهادار
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              اوراق بهادار اسلامی، صکوک درآمدزا، اوراق مشارکت و اوراق قرضه با استاندارد ERC-3643
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                مشاوره رایگان
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                مشاهده نمونه‌کارها
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sukuk Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              انواع صکوک و اوراق بهادار
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              انواع مختلف صکوک و اوراق بهادار اسلامی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sukukTypes.map((sukuk, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${sukuk.color} flex items-center justify-center mx-auto mb-6`}>
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{sukuk.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{sukuk.symbol}</div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {sukuk.description}
                </p>

                <div className="space-y-2">
                  {sukuk.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ویژگی‌های کلیدی
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              امکانات پیشرفته برای صکوک دیجیتال و اوراق بهادار
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              فرآیند ایجاد صکوک دیجیتال
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مراحل ایجاد صکوک دیجیتال و اوراق بهادار
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                چرا صکوک دیجیتال؟
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">انطباق شرعی</h3>
                    <p className="text-gray-600">مطابق با اصول اسلامی و تأیید شده توسط مراجع</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">درآمد ثابت</h3>
                    <p className="text-gray-600">درآمد ثابت و قابل پیش‌بینی از دارایی‌های پشتوانه</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">امنیت بالا</h3>
                    <p className="text-gray-600">ذخیره‌سازی امن و بیمه‌شده</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">دسترسی جهانی</h3>
                    <p className="text-gray-600">معامله در بازارهای بین‌المللی</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">آمار و عملکرد</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$5.8M</div>
                  <div className="text-indigo-100">ارزش صکوک دیجیتال</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12</div>
                  <div className="text-indigo-100">تعداد صکوک</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8.5%</div>
                  <div className="text-indigo-100">بازده سالانه</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">320+</div>
                  <div className="text-indigo-100">سرمایه‌گذار</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده ایجاد صکوک دیجیتال هستید؟
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            با مشاوره رایگان ما، بهترین راهکار صکوک دیجیتال را برای خود پیدا کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              مشاوره رایگان
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
