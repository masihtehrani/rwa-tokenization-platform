import { Metadata } from 'next'
import Link from 'next/link'
import { Car, ArrowRight, CheckCircle, Shield, Zap, Globe, Users, BarChart3, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'توکنایز خودرو و ماشین‌آلات | خودروهای لوکس، ماشین‌آلات سنگین | RWA Labs',
  description: 'توکنایز خودروهای لوکس، ماشین‌آلات سنگین و تجهیزات صنعتی. پشتوانه فیزیکی، قیمت‌گذاری زنده، معامله 24/7',
  keywords: 'توکنایز خودرو,توکن ماشین,خودرو دیجیتال,ماشین‌آلات سنگین,تجهیزات صنعتی,RWA vehicles',
}

const vehicles = [
  {
    name: 'خودروهای لوکس',
    symbol: 'LUXURY',
    description: 'توکنایز خودروهای لوکس با پشتوانه فیزیکی و قیمت‌گذاری زنده',
    features: ['پشتوانه خودرو فیزیکی', 'قیمت‌گذاری زنده', 'استاندارد ERC-20', 'کیف‌پول چند امضایی'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'ماشین‌آلات سنگین',
    symbol: 'HEAVY',
    description: 'توکنایز ماشین‌آلات سنگین با قابلیت معامله و ذخیره‌سازی امن',
    features: ['پشتوانه ماشین فیزیکی', 'قیمت‌گذاری بر اساس بازار', 'معامله 24/7', 'گزارش‌گیری خودکار'],
    color: 'from-gray-500 to-slate-500'
  },
  {
    name: 'تجهیزات صنعتی',
    symbol: 'INDUSTRIAL',
    description: 'توکنایز تجهیزات صنعتی با قابلیت‌های انتقال دسته‌ای و مدیریت پیشرفته',
    features: ['پشتوانه تجهیزات فیزیکی', 'Batch Transfer', 'Gas Optimization', 'Upgradeable Contracts'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'کشتی و قایق',
    symbol: 'MARINE',
    description: 'توکنایز کشتی و قایق با قابلیت‌های مدیریت پیشرفته',
    features: ['پشتوانه کشتی فیزیکی', 'اتصال به PancakeSwap', 'قابلیت فریز کیف‌پول', 'Time-locked Contracts'],
    color: 'from-cyan-500 to-blue-500'
  }
]

const features = [
  {
    icon: Car,
    title: 'پشتوانه فیزیکی',
    description: 'تمام توکن‌ها دارای پشتوانه فیزیکی در پارکینگ‌های امن',
    details: ['پارکینگ‌های امن و بیمه‌شده', 'گواهی مالکیت', 'بازرسی منظم', 'گزارش‌گیری لحظه‌ای']
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
    description: 'سیستم پیشرفته مدیریت ریسک و بیمه خودروها',
    details: ['Risk Assessment', 'Insurance Coverage', 'Hedging Strategies', 'Portfolio Management']
  },
  {
    icon: BarChart3,
    title: 'گزارش‌گیری کامل',
    description: 'گزارش‌های جامع از وضعیت خودروها و عملکرد',
    details: ['Real-time Reports', 'Performance Analytics', 'Audit Trail', 'Compliance Reports']
  }
]

const process = [
  {
    step: '1',
    title: 'ارزیابی و کارشناسی',
    description: 'ارزیابی دقیق خودروها توسط کارشناسان معتبر'
  },
  {
    step: '2',
    title: 'ذخیره‌سازی امن',
    description: 'ذخیره‌سازی در پارکینگ‌های امن و بیمه‌شده'
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

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              توکنایز خودرو و ماشین‌آلات
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              خودروهای لوکس، ماشین‌آلات سنگین و تجهیزات صنعتی را به توکن دیجیتال تبدیل کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                مشاوره رایگان
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                مشاهده نمونه‌کارها
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              انواع خودرو و ماشین‌آلات قابل توکنایز
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              انواع خودروها و ماشین‌آلات مختلف
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${vehicle.color} flex items-center justify-center mx-auto mb-6`}>
                  <Car className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{vehicle.symbol}</div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {vehicle.description}
                </p>

                <div className="space-y-2">
                  {vehicle.features.map((feature, featureIndex) => (
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
              امکانات پیشرفته برای توکنایز خودرو و ماشین‌آلات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
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
              فرآیند توکنایز خودرو و ماشین‌آلات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مراحل تبدیل خودرو و ماشین‌آلات به توکن دیجیتال
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
                چرا خودرو و ماشین‌آلات را توکنایز کنیم؟
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
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">آمار و عملکرد</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$3.2M</div>
                  <div className="text-purple-100">ارزش خودروهای توکنایز شده</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">28</div>
                  <div className="text-purple-100">تعداد خودروها</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15.8%</div>
                  <div className="text-purple-100">بازده سالانه</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">180+</div>
                  <div className="text-purple-100">سرمایه‌گذار</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده توکنایز خودرو و ماشین‌آلات خود هستید؟
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            با مشاوره رایگان ما، بهترین راهکار توکنایز را برای خودروهای خود پیدا کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              مشاوره رایگان
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
