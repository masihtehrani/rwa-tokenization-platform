'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(projects.length / itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(projects.length / itemsPerView)) % Math.ceil(projects.length / itemsPerView))
  }

  const getVisibleProjects = () => {
    const start = currentIndex * itemsPerView
    return projects.slice(start, start + itemsPerView)
  }

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
            پروژه‌های تکمیل شده
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            نمونه‌کارهای موفق ما در حوزه توکنایز دارایی‌های واقعی
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            disabled={currentIndex === 0}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            disabled={currentIndex >= Math.ceil(projects.length / itemsPerView) - 1}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {getVisibleProjects().map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
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

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            {Array.from({ length: Math.ceil(projects.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
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
