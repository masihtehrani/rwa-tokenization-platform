'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            مشاوره رایگان و استعلام قیمت
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            تیم متخصص ما آماده راهنمایی شما در مسیر توکنایز دارایی‌های واقعی است
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                راه‌های ارتباط با ما
              </h3>
              <p className="text-blue-100 leading-relaxed">
                برای دریافت مشاوره تخصصی و راهنمایی در مسیر توکنایز دارایی‌های واقعی، 
                با ما در ارتباط باشید. تیم ما آماده پاسخگویی به سوالات شماست.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">ایمیل</h4>
                  <p className="text-blue-100">info@rwatoken.ir</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">تلفن</h4>
                  <p className="text-blue-100">+98 21 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">تلگرام</h4>
                  <p className="text-blue-100">@rwatoken_support</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-white font-semibold mb-3">ساعات کاری</h4>
              <p className="text-blue-100 text-sm">
                شنبه تا پنج‌شنبه: 9:00 - 18:00<br />
                جمعه: 10:00 - 14:00
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}