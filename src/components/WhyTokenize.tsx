'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { DollarSign, Globe, Shield, Zap, Users, BarChart3 } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'نقدینگی بالا',
    description: 'دارایی‌های غیرقابل‌نقد را به دارایی‌های قابل‌معامله تبدیل کنید',
    stat: 'تا 300% افزایش نقدینگی'
  },
  {
    icon: Globe,
    title: 'دسترسی جهانی',
    description: 'سرمایه‌گذاران از سراسر جهان به دارایی‌های شما دسترسی دارند',
    stat: '24/7 معامله جهانی'
  },
  {
    icon: Shield,
    title: 'امنیت بالا',
    description: '<Link href="/technology" className="text-blue-400 hover:text-blue-300 underline">قراردادهای هوشمند</Link> امن و شفاف با استانداردهای بین‌المللی',
    stat: '100% امنیت بلاکچین'
  },
  {
    icon: Zap,
    title: 'سرعت بالا',
    description: 'فرآیند توکنایز سریع با کمترین کارمزد',
    stat: 'توکنایز سریع'
  },
  {
    icon: Users,
    title: 'تقسیم مالکیت',
    description: 'دارایی‌های گران‌قیمت را بین چندین سرمایه‌گذار تقسیم کنید',
    stat: 'تقسیم تا 1000 سهم'
  },
  {
    icon: BarChart3,
    title: 'شفافیت کامل',
    description: 'تمام تراکنش‌ها و مالکیت‌ها در <Link href="/technology" className="text-blue-400 hover:text-blue-300 underline">بلاکچین</Link> ثبت می‌شود',
    stat: 'شفافیت 100%'
  }
]

const stats = [
  { number: '$2.5M', label: 'دارایی توکنایزشده (میلیون دلار)' },
  { number: '47', label: 'تعداد دارایی‌ها' },
  { number: '18.5%', label: 'میانگین بازده سالانه' }
]

export default function WhyTokenize() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            چرا توکنایز کنیم؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            توکنایز دارایی‌های فیزیکی مزایای بی‌شماری برای دارنده دارایی و سرمایه‌گذاران دارد
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 mb-4">
                <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="text-blue-600 font-semibold text-sm">
                  {benefit.stat}
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              آماده شروع توکنایز دارایی خود هستید؟
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              با مشاوره رایگان ما، بهترین راهکار توکنایز را برای دارایی خود پیدا کنید
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              مشاوره رایگان دریافت کنید
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
