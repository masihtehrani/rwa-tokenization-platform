'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 'saffron',
    title: 'پروژه توکن زعفران',
    description: 'اولین پروژه توکنایز زعفران در ایران با قرارداد هوشمند ERC-20 و قابلیت‌های پیشرفته',
    image: '/images/portfolio/saffron-project.jpg',
    status: 'تکمیل شده',
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

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            درباره ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            تیم متخصص بلاکچین با تجربه در توسعه قراردادهای هوشمند و توکنایز دارایی‌های واقعی
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed mb-4">
              ما تیمی از متخصصان بلاکچین و توسعه‌دهندگان قراردادهای هوشمند هستیم که در حوزه توکنایز دارایی‌های واقعی (RWA) فعالیت می‌کنیم.
            </p>
            <p className="text-lg leading-relaxed">
              پروژه موفق توکن زعفران ما را در{' '}
              <a 
                href="https://zfrnbon.surge.sh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-200 underline font-semibold"
              >
                zfrnbon.surge.sh
              </a>{' '}
              مشاهده کنید.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'فعال' 
                        ? 'bg-green-100 text-green-800' 
                        : project.status === 'در حال توسعه'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

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

                  {/* Action Button */}
                  <div className="flex justify-between items-center">
                    {project.link !== '#' ? (
                      <Link 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                      >
                        مشاهده پروژه
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <span className="text-gray-400 font-semibold">
                        به‌زودی
                      </span>
                    )}
                    
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
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              پروژه خود را به ما بسپارید
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              تیم متخصص ما آماده همکاری در پروژه‌های توکنایز دارایی‌های واقعی شماست
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                درخواست پروژه جدید
              </button>
              <Link href="/portfolio">
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-400 hover:text-gray-800 transition-all duration-300">
                  مشاهده همه پروژه‌ها
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
