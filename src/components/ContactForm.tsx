'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, Calendar, ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    meetingType: 'iranian'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the data to your backend
    // For now, we'll just show success message
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
        meetingType: 'iranian'
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">درخواست شما ارسال شد!</h3>
        <p className="text-green-600">تیم ما در کمتر از 24 ساعت با شما تماس خواهد گرفت.</p>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          درخواست دمو و استعلام قیمت
        </h3>
        <p className="text-gray-600">
          فرم زیر را پر کنید تا تیم متخصص ما با شما تماس بگیرد
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              نام و نام خانوادگی *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="نام کامل خود را وارد کنید"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              شماره تماس *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="09123456789"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ایمیل *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            نوع پروژه *
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">انتخاب کنید</option>
                      <option value="real-estate">توکنایز املاک</option>
                      <option value="precious-metals">توکنایز طلا و فلزات</option>
                      <option value="agriculture">توکنایز محصولات کشاورزی</option>
                      <option value="vehicles">توکنایز خودرو</option>
                      <option value="mining">توکنایز دارایی‌های معدنی</option>
                      <option value="sukuk">صکوک دیجیتال</option>
                      <option value="custom">سایر</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            نوع ملاقات
          </label>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <label className="flex items-center">
              <input
                type="radio"
                name="meetingType"
                value="iranian"
                checked={formData.meetingType === 'iranian'}
                onChange={handleChange}
                className="mr-2"
              />
              ملاقات ایرانی
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="meetingType"
                value="international"
                checked={formData.meetingType === 'international'}
                onChange={handleChange}
                className="mr-2"
              />
              ملاقات بین‌المللی
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            توضیحات پروژه
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="جزئیات پروژه خود را شرح دهید..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
        >
          ارسال درخواست
          <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">راه‌های تماس مستقیم</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center text-gray-600">
            <Phone className="w-5 h-5 mr-3 text-blue-600" />
            <span>+98-21-1234-5678</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="w-5 h-5 mr-3 text-blue-600" />
            <span>info@rwa-assets.ir</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-3 text-blue-600" />
            <span>رزرو وقت ملاقات</span>
          </div>
        </div>
      </div>
    </div>
  )
}
