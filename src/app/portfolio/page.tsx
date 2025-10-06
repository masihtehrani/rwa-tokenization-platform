import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight, CheckCircle, Calendar, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'پروژه‌های تکمیل شده | نمونه‌کارهای RWA Labs',
  description: 'پروژه‌های موفق توکنایز دارایی‌های واقعی شامل زعفران، پسته، گوسفند، برنج و سایر دارایی‌ها',
  keywords: 'نمونه‌کار توکنایز,پروژه‌های RWA,توکن زعفران,توکن پسته,توکن گوسفند,توکن برنج',
}

const projects = [
  {
    id: 'saffron',
    title: 'پروژه توکن زعفران',
    description: 'اولین پروژه توکنایز زعفران در ایران با قرارداد هوشمند ERC-20 و قابلیت‌های پیشرفته',
    image: '/images/portfolio/saffron-project.jpg',
    status: 'تکمیل شده',
    launchDate: '1402/06/15',
    totalValue: '$500K',
    investors: '150+',
    features: [
      'قرارداد هوشمند ERC-20',
      'اتصال متامسک و کیف‌پول‌های مختلف',
      'لیست در DEX های معتبر',
      'قابلیت فریز کیف‌پول',
      'سیستم ایردراپ حرفه‌ای',
      'انتقال تکی و دسته‌ای'
    ],
    link: 'https://zfrnbon.surge.sh',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'pistachio',
    title: 'پروژه توکن پسته',
    description: 'توکنایز پسته با قابلیت‌های پیشرفته و اتصال به صرافی‌های غیرمتمرکز',
    image: '/images/portfolio/pistachio-project.jpg',
    status: 'تکمیل شده',
    launchDate: '1402/08/20',
    totalValue: '$300K',
    investors: '120+',
    features: [
      'استاندارد ERC-20',
      'اتصال به Uniswap V3',
      'قابلیت پاز کردن توکن',
      'Proxy Pattern برای ارتقا',
      'Multi-signature Wallet',
      'گزارش‌گیری خودکار'
    ],
    link: 'https://zfrnbon.surge.sh',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'sheep',
    title: 'پروژه توکن گوسفند',
    description: 'توکنایز دامداری و گوسفند با قابلیت‌های مدیریت پیشرفته',
    image: '/images/portfolio/sheep-project.jpg',
    status: 'تکمیل شده',
    launchDate: '1402/10/10',
    totalValue: '$200K',
    investors: '80+',
    features: [
      'استاندارد ERC-20',
      'اتصال به PancakeSwap',
      'قابلیت فریز کیف‌پول',
      'ایردراپ جزئی و تعداد بالا',
      'Time-locked Contracts',
      'Emergency Pause'
    ],
    link: 'https://gsfnbon.surge.sh',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'rice',
    title: 'پروژه توکن برنج',
    description: 'توکنایز برنج با قابلیت‌های انتقال دسته‌ای و مدیریت پیشرفته',
    image: '/images/portfolio/rice-project.jpg',
    status: 'تکمیل شده',
    launchDate: '1402/12/05',
    totalValue: '$150K',
    investors: '60+',
    features: [
      'استاندارد ERC-20',
      'اتصال به SushiSwap',
      'Batch Transfer',
      'Gas Optimization',
      'Upgradeable Contracts',
      'Version Control'
    ],
    link: 'https://brnjbon.surge.sh',
    color: 'from-yellow-400 to-yellow-600'
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              پروژه‌های تکمیل شده
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              نمونه‌کارهای موفق ما در حوزه توکنایز دارایی‌های واقعی
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Project Header */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Calendar className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="text-sm text-gray-600">تاریخ راه‌اندازی</span>
                      </div>
                      <div className="font-semibold text-gray-900">{project.launchDate}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-gray-600">ارزش کل</span>
                      </div>
                      <div className="font-semibold text-gray-900">{project.totalValue}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-4 h-4 text-purple-600 mr-1" />
                        <span className="text-sm text-gray-600">سرمایه‌گذار</span>
                      </div>
                      <div className="font-semibold text-gray-900">{project.investors}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">ویژگی‌های کلیدی:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <Link 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    >
                      مشاهده پروژه
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link 
                      href={`/portfolio/${project.id}`}
                      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors group"
                    >
                      جزئیات بیشتر
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              آمار کلی پروژه‌ها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              دستاوردهای ما در حوزه توکنایز دارایی‌های واقعی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">پروژه تکمیل شده</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$1.15M</div>
              <div className="text-gray-600">ارزش کل پروژه‌ها</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">410+</div>
              <div className="text-gray-600">سرمایه‌گذار فعال</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">نرخ موفقیت</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            پروژه خود را به ما بسپارید
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تیم متخصص ما آماده همکاری در پروژه‌های توکنایز دارایی‌های واقعی شماست
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              درخواست پروژه جدید
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              مشاهده خدمات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
