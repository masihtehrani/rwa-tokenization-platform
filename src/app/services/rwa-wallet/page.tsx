import { Metadata } from 'next'
import Link from 'next/link'
import { Wallet, ArrowRight, CheckCircle, Shield, Zap, Globe, Users, BarChart3, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'کیف‌پول بر بستر بلاکچین | کیف‌پول بلاکچینی برای توکن‌های دارایی واقعی | RWA Labs',
  description: 'کیف‌پول بلاکچینی اختصاصی برای ذخیره و مدیریت توکن‌های RWA. امنیت بالا، رابط کاربری ساده، پشتیبانی از تمام شبکه‌ها',
  keywords: 'کیف‌پول RWA,کیف‌پول بلاکچینی,کیف‌پول اختصاصی,مدیریت توکن,امنیت کیف‌پول,RWA wallet',
}

const walletFeatures = [
  {
    name: 'Multi-Chain Support',
    symbol: 'MULTI',
    description: 'پشتیبانی از تمام شبکه‌های بلاکچین اصلی',
    features: ['Ethereum', 'Polygon', 'BSC', 'Arbitrum', 'Optimism'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Multi-Signature',
    symbol: 'MULTISIG',
    description: 'کیف‌پول چند امضایی برای امنیت بالای تراکنش‌ها',
    features: ['امنیت بالا', 'مدیریت توزیع‌شده', 'قابلیت تنظیم آستانه', 'پشتیبانی سخت‌افزاری'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'RWA Management',
    symbol: 'RWA',
    description: 'مدیریت تخصصی توکن‌های دارایی واقعی',
    features: ['نمایش دارایی‌ها', 'مدیریت پورتفولیو', 'گزارش‌گیری', 'تحلیل عملکرد'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'DeFi Integration',
    symbol: 'DEFI',
    description: 'ادغام با پروتکل‌های DeFi مختلف',
    features: ['Staking', 'Lending', 'Yield Farming', 'Liquidity Pools'],
    color: 'from-yellow-500 to-orange-500'
  }
]

const features = [
  {
    icon: Wallet,
    title: 'امنیت بالا',
    description: 'استفاده از آخرین تکنولوژی‌های امنیتی',
    details: ['Multi-signature Wallet', 'Hardware Wallet Support', 'Encrypted Storage', 'Secure Backup']
  },
  {
    icon: Zap,
    title: 'سرعت بالا',
    description: 'تراکنش‌های سریع و کارمزد کم',
    details: ['Fast Transactions', 'Low Fees', 'Batch Operations', 'Gas Optimization']
  },
  {
    icon: Globe,
    title: 'Multi-Chain',
    description: 'پشتیبانی از تمام شبکه‌های بلاکچین',
    details: ['Ethereum', 'Polygon', 'BSC', 'Arbitrum', 'Optimism']
  },
  {
    icon: Users,
    title: 'مدیریت تیم',
    description: 'مدیریت تیم و دسترسی‌های مختلف',
    details: ['Role Management', 'Permission Control', 'Team Collaboration', 'Audit Trail']
  },
  {
    icon: BarChart3,
    title: 'گزارش‌گیری',
    description: 'گزارش‌های جامع از عملکرد و تراکنش‌ها',
    details: ['Real-time Reports', 'Performance Analytics', 'Transaction History', 'Tax Reports']
  },
  {
    icon: Shield,
    title: 'Backup & Recovery',
    description: 'پشتیبان‌گیری امن و بازیابی آسان',
    details: ['Secure Backup', 'Easy Recovery', 'Seed Phrase', 'Hardware Backup']
  }
]

const process = [
  {
    step: '1',
    title: 'نصب کیف‌پول',
    description: 'نصب کیف‌پول روی دستگاه مورد نظر'
  },
  {
    step: '2',
    title: 'ایجاد حساب',
    description: 'ایجاد حساب کاربری و تنظیم امنیت'
  },
  {
    step: '3',
    title: 'اتصال شبکه',
    description: 'اتصال به شبکه‌های بلاکچین مورد نظر'
  },
  {
    step: '4',
    title: 'مدیریت دارایی',
    description: 'مدیریت توکن‌های RWA و سایر دارایی‌ها'
  },
  {
    step: '5',
    title: 'معامله و سرمایه‌گذاری',
    description: 'انجام معاملات و سرمایه‌گذاری‌های مختلف'
  }
]

export default function RWAWalletPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              کیف‌پول بر بستر بلاکچین
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              کیف‌پول بلاکچینی اختصاصی برای ذخیره و مدیریت توکن‌های دارایی واقعی
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                دانلود کیف‌پول
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

      {/* Wallet Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ویژگی‌های کیف‌پول
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              امکانات پیشرفته برای مدیریت توکن‌های RWA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {walletFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6`}>
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{feature.symbol}</div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.features.map((feat, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feat}
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
              امکانات کلیدی
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              قابلیت‌های پیشرفته کیف‌پول RWA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
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
              نحوه استفاده از کیف‌پول
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مراحل راه‌اندازی و استفاده از کیف‌پول RWA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
                چرا کیف‌پول RWA؟
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">امنیت بالا</h3>
                    <p className="text-gray-600">استفاده از آخرین تکنولوژی‌های امنیتی</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">رابط کاربری ساده</h3>
                    <p className="text-gray-600">رابط کاربری آسان و قابل فهم</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">پشتیبانی کامل</h3>
                    <p className="text-gray-600">پشتیبانی 24/7 و راهنمایی کامل</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Chain</h3>
                    <p className="text-gray-600">پشتیبانی از تمام شبکه‌های بلاکچین</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">آمار و عملکرد</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <div className="text-indigo-100">کاربر فعال</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$50M+</div>
                  <div className="text-indigo-100">ارزش مدیریت شده</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-indigo-100">آپتایم</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-indigo-100">پشتیبانی</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده شروع استفاده از کیف‌پول RWA هستید؟
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            کیف‌پول خود را دانلود کنید و مدیریت دارایی‌های دیجیتال خود را شروع کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              دانلود کیف‌پول
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
