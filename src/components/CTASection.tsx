'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Clock } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            آماده شروع توکنایز دارایی خود هستید؟
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            با مشاوره ما، راهکار توکنایز را برای دارایی خود پیدا کنید
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CalendlyButton 
              text="مشاوره رایگان دریافت کنید" 
              variant="secondary" 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100"
            />
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a
              href="tel:+982112345678"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">تلفن</h3>
              <p className="text-sm text-yellow-100">+98-21-1234-5678</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <Clock className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">تنظیم وقت ملاقات</h3>
              <p className="text-sm text-yellow-100 mb-4">مشاوره آنلاین</p>
              <CalendlyButton 
                text="رزرو وقت" 
                variant="secondary" 
                size="sm" 
                className="w-full"
              />
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="text-yellow-100 text-sm mb-4">
              بیش از 47 دارایی موفق توکنایز شده
            </div>
            <div className="flex justify-center items-center space-x-8 rtl:space-x-reverse text-yellow-200 text-sm">
              <span>✓ امنیت بالا</span>
              <span>✓ سرعت بالا</span>
              <span>✓ پشتیبانی 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
