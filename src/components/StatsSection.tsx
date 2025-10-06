'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Building2, Coins, Users } from 'lucide-react'

const stats = [
  {
    icon: Coins,
    number: '$2.5M',
    label: 'دارایی توکنایزشده',
    description: 'ارزش کل دارایی‌های توکنایز شده',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Building2,
    number: '47',
    label: 'تعداد دارایی‌ها',
    description: 'دارایی‌های مختلف توکنایز شده',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    number: '18.5%',
    label: 'میانگین بازده سالانه',
    description: 'بازدهی متوسط سرمایه‌گذاری‌ها',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    number: '1,200+',
    label: 'سرمایه‌گذاران فعال',
    description: 'تعداد کاربران فعال پلتفرم',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            آمار و عملکرد ما
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            دستاوردهای ما در حوزه توکنایز دارایی‌های واقعی
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                
                <div className="text-gray-300 text-sm">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              چرا RWA Labs؟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <div className="text-yellow-400 font-semibold mb-2">✓ امنیت بالا</div>
                <div className="text-sm">قراردادهای هوشمند امن و استانداردهای بین‌المللی</div>
              </div>
              <div>
                <div className="text-yellow-400 font-semibold mb-2">✓ سرعت بالا</div>
                <div className="text-sm">توکنایز سریع با کمترین کارمزد</div>
              </div>
              <div>
                <div className="text-yellow-400 font-semibold mb-2">✓ پشتیبانی 24/7</div>
                <div className="text-sm">پشتیبانی و مشاوره</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
