import { Metadata } from 'next'
import Link from 'next/link'
import { Code, Shield, Zap, Globe, Database, Lock, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'تکنولوژی‌های استفاده شده | RWA Labs - فناوری بلاکچین پیشرفته',
  description: 'تکنولوژی‌های پیشرفته بلاکچین، قراردادهای هوشمند، استانداردهای توکن و امنیت در پلتفرم RWA Labs',
  keywords: 'تکنولوژی بلاکچین,قرارداد هوشمند,Solidity,ERC-20,ERC-3643,Proxy Pattern,Multi-Sig,امنیت بلاکچین',
}

const technologies = [
  {
    name: 'Solidity',
    category: 'زبان برنامه‌نویسی',
    description: 'زبان برنامه‌نویسی اصلی برای توسعه قراردادهای هوشمند روی شبکه اتریوم',
    features: [
      'زبان برنامه‌نویسی قراردادهای هوشمند',
      'سازگار با ماشین مجازی اتریوم (EVM)',
      'پشتیبانی از کتابخانه‌های استاندارد',
      'امنیت بالا و بهینه‌سازی گاز',
      'قابلیت ارث‌بری و ماژولار بودن'
    ],
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'ERC-20',
    category: 'استاندارد توکن',
    description: 'استاندارد بین‌المللی برای توکن‌های قابل‌تعویض (Fungible Tokens)',
    features: [
      'استاندارد توکن‌های قابل‌تعویض',
      'سازگاری با تمام کیف‌پول‌ها',
      'قابلیت معامله در صرافی‌ها',
      'توابع استاندارد transfer و approve',
      'پشتیبانی از تمام DEX ها'
    ],
    icon: Database,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'ERC-3643',
    category: 'استاندارد اوراق بهادار',
    description: 'استاندارد پیشرفته برای توکن‌های اوراق بهادار و دارایی‌های رگولاتوری',
    features: [
      'استاندارد اوراق بهادار دیجیتال',
      'انطباق با مقررات مالی',
      'قابلیت KYC/AML داخلی',
      'مدیریت مجوزها و محدودیت‌ها',
      'پشتیبانی از انتقال شرطی'
    ],
    icon: Shield,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Proxy Pattern',
    category: 'الگوی معماری',
    description: 'الگوی طراحی برای قابلیت ارتقای قراردادهای هوشمند بدون تغییر آدرس',
    features: [
      'قابلیت ارتقای قراردادها',
      'حفظ آدرس قرارداد',
      'مدیریت نسخه‌ها',
      'قابلیت rollback',
      'بهینه‌سازی گاز'
    ],
    icon: Zap,
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Multi-Signature',
    category: 'امنیت',
    description: 'کیف‌پول چند امضایی برای امنیت بالای تراکنش‌ها',
    features: [
      'نیاز به چندین امضا برای تراکنش',
      'امنیت بالا در برابر هک',
      'مدیریت توزیع‌شده',
      'قابلیت تنظیم آستانه امضا',
      'پشتیبانی از کیف‌پول‌های سخت‌افزاری'
    ],
    icon: Lock,
    color: 'from-red-500 to-pink-500'
  },
  {
    name: 'IPFS',
    category: 'ذخیره‌سازی',
    description: 'سیستم فایل بین‌سیاره‌ای برای ذخیره‌سازی غیرمتمرکز داده‌ها',
    features: [
      'ذخیره‌سازی غیرمتمرکز',
      'مقاوم در برابر سانسور',
      'دسترسی دائمی به داده‌ها',
      'هزینه کم ذخیره‌سازی',
      'یکپارچگی داده‌ها'
    ],
    icon: Globe,
    color: 'from-indigo-500 to-blue-500'
  }
]

const securityFeatures = [
  {
    title: 'حسابرسی امنیتی',
    description: 'تمام قراردادهای هوشمند توسط متخصصان امنیت بررسی می‌شوند',
    icon: Shield
  },
  {
    title: 'تست‌های جامع',
    description: 'تست‌های گسترده برای اطمینان از عملکرد صحیح',
    icon: CheckCircle
  },
  {
    title: 'به‌روزرسانی امنیتی',
    description: 'به‌روزرسانی مداوم برای رفع آسیب‌پذیری‌ها',
    icon: Zap
  },
  {
    title: 'پشتیبان‌گیری',
    description: 'سیستم پشتیبان‌گیری کامل و بازیابی داده‌ها',
    icon: Database
  }
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              تکنولوژی‌های پیشرفته
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              فناوری‌های بلاکچین، قراردادهای هوشمند و استانداردهای بین‌المللی
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              تکنولوژی‌های استفاده شده
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              فناوری‌های پیشرفته و استانداردهای بین‌المللی برای توکنایز دارایی‌های واقعی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  <Link href={`/technology/${tech.name === 'ERC-20' ? 'erc-20' : tech.name === 'ERC-3643' ? 'erc-3643' : tech.name === 'Proxy Pattern' ? 'proxy-pattern' : tech.name === 'Multi-Signature' ? 'multi-signature' : tech.name.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                    {tech.name}
                  </Link>
                </h3>
                  <span className="text-blue-600 font-semibold text-sm">{tech.category}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
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

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              امنیت و قابلیت اطمینان
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              امنیت بالای سیستم و قابلیت اطمینان در تمام مراحل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              مشخصات فنی
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              جزئیات فنی و مشخصات سیستم
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">قراردادهای هوشمند</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">زبان برنامه‌نویسی:</span>
                  <span className="text-blue-600">Solidity 0.8.19+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">شبکه:</span>
                  <span className="text-blue-600">Ethereum, Polygon, BSC</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">استاندارد توکن:</span>
                  <span className="text-blue-600">ERC-20, ERC-3643</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">الگوی ارتقا:</span>
                  <span className="text-blue-600">Proxy Pattern</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">امنیت</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">کیف‌پول:</span>
                  <span className="text-blue-600">Multi-Signature</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">حسابرسی:</span>
                  <span className="text-blue-600">CertiK, ConsenSys</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">ذخیره‌سازی:</span>
                  <span className="text-blue-600">IPFS, Arweave</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">اوراکل:</span>
                  <span className="text-blue-600">Chainlink, Band Protocol</span>
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
            سوالی درباره تکنولوژی‌ها دارید؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تیم فنی ما آماده پاسخگویی به سوالات تخصصی شماست
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              تماس با تیم فنی
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              مشاهده خدمات
            </Link>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-100 text-sm">
              طراحی و توسعه توسط{' '}
              <a 
                href="https://miroteam.ir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-200 underline font-semibold"
              >
                MiroTeam
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
