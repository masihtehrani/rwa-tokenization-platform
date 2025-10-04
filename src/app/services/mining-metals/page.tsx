import { Metadata } from 'next'
import Link from 'next/link'
import { Gem, ArrowRight, CheckCircle, Shield, Zap, Globe, Users, BarChart3, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'توکنایز دارایی‌های معدنی و فلزات | طلا، نقره، مس، آهن | RWA Labs',
  description: 'توکنایز طلا، نقره، مس، آهن، سنگ‌های قیمتی و معادن مختلف. پشتوانه فیزیکی، قیمت‌گذاری زنده، معامله 24/7',
  keywords: 'توکنایز طلا,توکن نقره,توکن مس,توکن آهن,توکن معدن,طلا دیجیتال,فلزات گران‌بها,دارایی معدنی',
}

const metals = [
  {
    name: 'طلا',
    symbol: 'GOLD',
    description: 'توکنایز طلا با پشتوانه فیزیکی و قیمت‌گذاری زنده',
    features: ['پشتوانه طلای فیزیکی', 'قیمت‌گذاری زنده', 'استاندارد <Link href="/technology" className="text-blue-400 hover:text-blue-300 underline">ERC-20</Link>', 'کیف‌پول چند امضایی'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'نقره',
    symbol: 'SILVER',
    description: 'توکنایز نقره با قابلیت معامله و ذخیره‌سازی امن',
    features: ['پشتوانه نقره فیزیکی', 'قیمت‌گذاری بر اساس بازار', 'معامله 24/7', 'گزارش‌گیری خودکار'],
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'مس',
    symbol: 'COPPER',
    description: 'توکنایز مس صنعتی با کاربردهای گسترده',
    features: ['پشتوانه مس فیزیکی', 'قیمت‌گذاری صنعتی', 'مدیریت ریسک', 'پشتیبانی تخصصی'],
    color: 'from-orange-600 to-red-600'
  },
  {
    name: 'آهن',
    symbol: 'IRON',
    description: 'توکنایز آهن و فولاد برای صنایع مختلف',
    features: ['پشتوانه آهن فیزیکی', 'قیمت‌گذاری بر اساس تقاضا', 'گزارش‌گیری فنی', 'مدیریت موجودی'],
    color: 'from-gray-600 to-gray-800'
  }
]

const features = [
  {
    icon: Gem,
    title: 'پشتوانه فیزیکی',
    description: 'تمام توکن‌ها دارای پشتوانه فیزیکی در انبارهای امن',
    details: ['انبارهای امن و بیمه‌شده', 'گواهی کیفیت', 'بازرسی منظم', 'گزارش‌گیری لحظه‌ای']
  },
  {
    icon: TrendingUp,
    title: 'قیمت‌گذاری زنده',
    description: 'قیمت‌گذاری بر اساس بازارهای جهانی و اوراکل‌های معتبر',
    details: ['اتصال به Chainlink', 'قیمت‌گذاری لحظه‌ای', 'محاسبه خودکار', 'شفافیت کامل']
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
    description: 'گزارش‌های جامع از وضعیت دارایی‌ها و عملکرد',
    details: ['Real-time Reports', 'Performance Analytics', 'Audit Trail', 'Compliance Reports']
  }
]

const process = [
  {
    step: '1',
    title: 'ارزیابی و کارشناسی',
    description: 'ارزیابی دقیق فلزات و معادن توسط کارشناسان معتبر'
  },
  {
    step: '2',
    title: 'ذخیره‌سازی امن',
    description: 'ذخیره‌سازی در انبارهای امن و بیمه‌شده'
  },
  {
    step: '3',
    title: 'ایجاد توکن',
    description: 'ایجاد توکن با پشتوانه فیزیکی و قیمت‌گذاری'
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

export default function MiningMetalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              توکنایز دارایی‌های معدنی و فلزات
            </h1>
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              طلا، نقره، مس، آهن، سنگ‌های قیمتی و معادن مختلف را به توکن دیجیتال تبدیل کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                مشاوره رایگان
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                مشاهده نمونه‌کارها
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metals Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              فلزات و معادن قابل توکنایز
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              انواع فلزات گران‌بها و معادن مختلف
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metals.map((metal, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metal.color} flex items-center justify-center mx-auto mb-6`}>
                  <Gem className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{metal.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{metal.symbol}</div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {metal.description}
                </p>

                <div className="space-y-2">
                  {metal.features.map((feature, featureIndex) => (
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
              امکانات پیشرفته برای توکنایز فلزات و معادن
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              فرآیند توکنایز فلزات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مراحل تبدیل فلزات و معادن به توکن دیجیتال
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
                چرا فلزات را توکنایز کنیم؟
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">نقدینگی بالا</h3>
                    <p className="text-gray-600">تبدیل دارایی فیزیکی به دارایی قابل‌معامله</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">قیمت‌گذاری شفاف</h3>
                    <p className="text-gray-600">قیمت‌گذاری بر اساس بازارهای جهانی</p>
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
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">آمار و عملکرد</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$1.2M</div>
                  <div className="text-yellow-100">ارزش فلزات توکنایز شده</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15</div>
                  <div className="text-yellow-100">تعداد معادن</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">22.5%</div>
                  <div className="text-yellow-100">بازده سالانه</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">300+</div>
                  <div className="text-yellow-100">سرمایه‌گذار</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده توکنایز فلزات خود هستید؟
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            با مشاوره رایگان ما، بهترین راهکار توکنایز را برای فلزات خود پیدا کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              مشاوره رایگان
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
