'use client'

import { motion } from 'framer-motion'
import { Building2, Gem, Wheat, Car, FileText, Wallet, Mountain, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'real-estate',
    title: 'توکنایز املاک و مستغلات',
    description: 'ساختمان‌های مسکونی، تجاری و پروژه‌های عمرانی را به توکن تبدیل کنید',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
    href: '/services/real-estate'
  },
  {
    id: 'mining-metals',
    title: 'توکنایز دارایی‌های معدنی و فلزات',
    description: 'طلا، نقره، مس، آهن، سنگ‌های قیمتی و معادن مختلف',
    icon: Gem,
    color: 'from-yellow-500 to-orange-500',
    href: '/services/mining-metals'
  },
  {
    id: 'agriculture',
    title: 'توکنایز محصولات کشاورزی و دامداری',
    description: 'زعفران، پسته، برنج، گوسفند و سایر محصولات کشاورزی و دامداری',
    icon: Wheat,
    color: 'from-green-500 to-emerald-500',
    href: '/services/agriculture'
  },
  {
    id: 'vehicles',
    title: 'توکنایز خودرو و ماشین‌آلات',
    description: 'خودروهای لوکس، ماشین‌آلات سنگین و تجهیزات صنعتی',
    icon: Car,
    color: 'from-purple-500 to-pink-500',
    href: '/services/vehicles'
  },
  {
    id: 'digital-sukuk',
    title: 'صکوک دیجیتال و اوراق بهادار',
    description: 'اوراق بهادار اسلامی، صکوک درآمدزا، اوراق مشارکت و اوراق قرضه',
    icon: FileText,
    color: 'from-indigo-500 to-blue-500',
    href: '/services/digital-sukuk'
  },
  {
    id: 'rwa-wallet',
    title: 'کیف‌پول اختصاصی RWA',
    description: 'کیف‌پول بلاکچینی اختصاصی برای ذخیره و مدیریت توکن‌های RWA',
    icon: Wallet,
    color: 'from-indigo-500 to-purple-500',
    href: '/services/rwa-wallet'
  }
]

export default function ServicesOverview() {
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
            خدمات تخصصی ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            هر نوع دارایی واقعی را با استانداردهای بین‌المللی و امنیت بالا توکنایز می‌کنیم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.href}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    جزئیات بیشتر
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center mx-auto group">
              مشاهده همه خدمات
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
