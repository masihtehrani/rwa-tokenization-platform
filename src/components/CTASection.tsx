'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, Mail } from 'lucide-react'

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
            با مشاوره رایگان ما، بهترین راهکار توکنایز را برای دارایی خود پیدا کنید
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group">
              مشاوره رایگان دریافت کنید
              <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              مشاهده نمونه‌کارها
            </button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="https://t.me/rwatoken_support"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">تلگرام</h3>
              <p className="text-sm text-yellow-100">پشتیبانی فوری</p>
            </motion.a>

            <motion.a
              href="https://wa.me/989123456789"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">واتس‌اپ</h3>
              <p className="text-sm text-yellow-100">مشاوره تخصصی</p>
            </motion.a>

            <motion.a
              href="mailto:info@rwatoken.ir"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">ایمیل</h3>
              <p className="text-sm text-yellow-100">ارسال درخواست</p>
            </motion.a>
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
              <span>✓ سرعت 72 ساعته</span>
              <span>✓ پشتیبانی 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
