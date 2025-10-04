import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Gem, Wheat, Car, FileText, Wallet, ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'خدمات توکنایز دارایی‌های واقعی | RWA Labs - 6 سرویس تخصصی',
  description: '6 سرویس تخصصی توکنایز: املاک، دارایی‌های معدنی، محصولات کشاورزی، خودرو، صکوک دیجیتال و کیف‌پول اختصاصی RWA',
  keywords: 'خدمات توکنایز,توکنایز املاک,توکن طلا,توکن محصولات کشاورزی,صکوک دیجیتال,کیف‌پول RWA,توکنایز دارایی واقعی',
  openGraph: {
    title: 'خدمات توکنایز دارایی‌های واقعی | RWA Labs',
    description: '6 سرویس تخصصی توکنایز دارایی‌های واقعی با بالاترین کیفیت و امنیت',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
  },
}

const services = [
  {
    id: 'real-estate',
    title: 'توکنایز املاک و مستغلات',
    description: 'ساختمان‌های مسکونی، تجاری و پروژه‌های عمرانی را به توکن تبدیل کنید',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
    href: '/services/real-estate',
    features: [
      'قرارداد هوشمند ERC-20',
      'تقسیم مالکیت تا 1000 سهم',
      'درآمد اجاره ماهانه',
      'بازار ثانویه AMM',
      'گزارش‌گیری خودکار',
      'ارزیابی کارشناسی'
    ],
    stats: { value: '$5.2M', assets: '23', return: '12.5%' }
  },
  {
    id: 'mining-metals',
    title: 'توکنایز دارایی‌های معدنی و فلزات',
    description: 'طلا، نقره، مس، آهن، سنگ‌های قیمتی و معادن مختلف',
    icon: Gem,
    color: 'from-yellow-500 to-orange-500',
    href: '/services/mining-metals',
    features: [
      'پشتوانه فیزیکی طلا',
      'قیمت‌گذاری زنده',
      'استاندارد ERC-20',
      'کیف‌پول چند امضایی',
      'معامله 24/7',
      'اتصال به DEX ها'
    ],
    stats: { value: '$1.2M', assets: '15', return: '22.5%' }
  },
  {
    id: 'agriculture',
    title: 'توکنایز محصولات کشاورزی و دامداری',
    description: 'زعفران، پسته، برنج، گوسفند و سایر محصولات کشاورزی و دامداری',
    icon: Wheat,
    color: 'from-green-500 to-emerald-500',
    href: '/services/agriculture',
    features: [
      'استاندارد ERC-20',
      'قیمت‌گذاری زنده',
      'مدیریت موجودی',
      'گزارش‌گیری',
      'پشتوانه فیزیکی',
      'معامله 24/7'
    ],
    stats: { value: '$2.5M', assets: '47', return: '18.5%' }
  },
  {
    id: 'vehicles',
    title: 'توکنایز خودرو و ماشین‌آلات',
    description: 'خودروهای لوکس، ماشین‌آلات سنگین و تجهیزات صنعتی',
    icon: Car,
    color: 'from-purple-500 to-pink-500',
    href: '/services/vehicles',
    features: [
      'قرارداد هوشمند',
      'قیمت‌گذاری زنده',
      'مدیریت مالکیت',
      'بازار ثانویه',
      'پشتوانه فیزیکی',
      'گزارش‌گیری کامل'
    ],
    stats: { value: '$3.2M', assets: '28', return: '15.8%' }
  },
  {
    id: 'digital-sukuk',
    title: 'صکوک دیجیتال و اوراق بهادار',
    description: 'اوراق بهادار اسلامی، صکوک درآمدزا، اوراق مشارکت و اوراق قرضه',
    icon: FileText,
    color: 'from-indigo-500 to-blue-500',
    href: '/services/digital-sukuk',
    features: [
      'استاندارد ERC-3643',
      'انطباق شرعی',
      'درآمد ثابت',
      'مدیریت ریسک',
      'قیمت‌گذاری زنده',
      'گزارش‌گیری کامل'
    ],
    stats: { value: '$5.8M', assets: '12', return: '8.5%' }
  },
  {
    id: 'rwa-wallet',
    title: 'کیف‌پول اختصاصی RWA',
    description: 'کیف‌پول بلاکچینی اختصاصی برای ذخیره و مدیریت توکن‌های RWA',
    icon: Wallet,
    color: 'from-indigo-500 to-purple-500',
    href: '/services/rwa-wallet',
    features: [
      'Multi-Chain Support',
      'Multi-Signature',
      'RWA Management',
      'DeFi Integration',
      'امنیت بالا',
      'رابط کاربری ساده'
    ],
    stats: { value: '$50M+', users: '10K+', uptime: '99.9%' }
  }
]

const stats = [
  { number: '$18.7M+', label: 'ارزش کل توکنایز شده', icon: DollarSign },
  { number: '135+', label: 'تعداد دارایی‌ها', icon: Building2 },
  { number: '15.2%', label: 'میانگین بازده سالانه', icon: TrendingUp },
  { number: '1000+', label: 'سرمایه‌گذار راضی', icon: Users }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              خدمات توکنایز دارایی‌های واقعی
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              6 سرویس تخصصی برای توکنایز انواع دارایی‌های واقعی با بالاترین کیفیت و امنیت
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              آمار و عملکرد
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              دستاوردهای ما در توکنایز دارایی‌های واقعی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              سرویس‌های ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خدمات تخصصی توکنایز دارایی‌های واقعی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{service.stats.value}</div>
                    <div className="text-xs text-gray-500">ارزش</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{service.stats.assets}</div>
                    <div className="text-xs text-gray-500">دارایی</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{service.stats.return}</div>
                    <div className="text-xs text-gray-500">بازده</div>
                  </div>
                </div>

                <Link 
                  href={service.href}
                  className="inline-flex items-center w-full justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  جزئیات بیشتر
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Link>
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
              فرآیند توکنایز
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مراحل تبدیل دارایی‌های واقعی به توکن دیجیتال
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'ارزیابی', description: 'ارزیابی دقیق دارایی توسط کارشناسان' },
              { step: '2', title: 'قرارداد', description: 'تهیه قرارداد هوشمند مناسب' },
              { step: '3', title: 'توکنایز', description: 'تبدیل دارایی به توکن دیجیتال' },
              { step: '4', title: 'بازار', description: 'راه‌اندازی بازار معامله' },
              { step: '5', title: 'مدیریت', description: 'مدیریت و نظارت مداوم' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده شروع پروژه توکنایز خود هستید؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            با مشاوره رایگان ما، بهترین راهکار توکنایز را برای دارایی‌های خود پیدا کنید
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