'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Link as LinkIcon, Pause, Users, Coins, ArrowRight, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: LinkIcon,
    title: 'اتصال به DEX های معتبر',
    description: 'لیست شدن در صرافی‌های غیرمتمرکز معتبر و امکان معامله 24/7',
    details: ['Uniswap V3', 'PancakeSwap', 'SushiSwap', 'QuickSwap'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'قابلیت فریز کیف‌پول',
    description: 'امکان فریز کردن کیف‌پول برای توکن‌های معتبر و Tether',
    details: ['Multi-signature Wallet', 'Time-locked Contracts', 'Emergency Pause'],
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Pause,
    title: 'قابلیت پاز کردن توکن',
    description: 'امکان توقف موقت معاملات توکن در صورت نیاز',
    details: ['Emergency Stop', 'Maintenance Mode', 'Regulatory Compliance'],
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Users,
    title: 'ایردراپ حرفه‌ای',
    description: 'سیستم ایردراپ پیشرفته با امکان توزیع جزئی و تعداد بالا',
    details: ['Batch Airdrop', 'Partial Distribution', 'Gas Optimization'],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Coins,
    title: 'انتقال تکی و دسته‌ای',
    description: 'امکان انتقال توکن‌ها به صورت تکی یا دسته‌ای',
    details: ['Single Transfer', 'Batch Transfer', 'Gas Efficient'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'قابلیت توسعه و ارتقا',
    description: 'پیاده‌سازی Proxy Pattern برای امکان ارتقا بدون تغییر آدرس',
    details: ['Upgradeable Contracts', 'Proxy Pattern', 'Version Control'],
    color: 'from-gray-500 to-slate-500'
  }
]

export default function TechnicalFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ویژگی‌های فنی پیشرفته
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            امکانات حرفه‌ای و پیشرفته برای مدیریت و معامله توکن‌های RWA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
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
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              مشخصات فنی پلتفرم
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">ERC-20</div>
                <div className="text-orange-100">استاندارد توکن</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">ERC-3643</div>
                <div className="text-orange-100">اوراق بهادار</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Proxy Pattern</div>
                <div className="text-orange-100">قابلیت ارتقا</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Multi-Sig</div>
                <div className="text-orange-100">امنیت بالا</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
