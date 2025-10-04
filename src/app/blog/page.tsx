'use client'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'بلاگ RWA Labs | مقالات تخصصی توکنایز دارایی‌های واقعی',
  description: 'مقالات تخصصی و راهنماهای جامع در مورد توکنایز دارایی‌های واقعی، قراردادهای هوشمند و فناوری‌های بلاکچین',
  keywords: 'بلاگ RWA,مقالات توکنایز,راهنمای توکنایز,مقالات بلاکچین,آموزش توکنایز',
  openGraph: {
    title: 'بلاگ RWA Labs | مقالات تخصصی توکنایز',
    description: 'مقالات تخصصی و راهنماهای جامع در مورد توکنایز دارایی‌های واقعی',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
  },
}

const articles = [
  {
    id: 'what-is-rwa-tokenization',
    title: 'توکنایز دارایی‌های واقعی چیست؟ راهنمای جامع برای تازه‌کارها',
    excerpt: 'آشنایی کامل با مفهوم توکنایز دارایی‌های واقعی، مزایا، چالش‌ها و آینده این فناوری',
    author: 'احمد محمدی',
    date: '2024-01-15',
    readTime: '8 دقیقه',
    category: 'مقدماتی',
    image: '/images/blog/rwa-intro.svg',
    featured: true
  },
  {
    id: 'real-estate-tokenization-guide',
    title: 'چگونه یک ساختمان را توکنایز کنیم؟ راهنمای کامل',
    excerpt: 'مراحل عملی توکنایز املاک و مستغلات از ارزیابی تا راه‌اندازی بازار ثانویه',
    author: 'فاطمه احمدی',
    date: '2024-01-12',
    readTime: '12 دقیقه',
    category: 'املاک',
    image: '/images/blog/real-estate-guide.svg',
    featured: true
  },
  {
    id: 'erc-20-vs-erc-3643',
    title: 'تفاوت ERC-20 و ERC-3643: کدام استاندارد برای RWA مناسب‌تر است؟',
    excerpt: 'مقایسه کامل استانداردهای توکن و انتخاب بهترین گزینه برای توکنایز دارایی‌های واقعی',
    author: 'علی رضایی',
    date: '2024-01-10',
    readTime: '10 دقیقه',
    category: 'تکنولوژی',
    image: '/images/blog/erc-standards.svg',
    featured: false
  },
  {
    id: 'agricultural-tokenization',
    title: 'توکنایز محصولات کشاورزی: فرصت‌ها و چالش‌ها',
    excerpt: 'نحوه توکنایز محصولات کشاورزی و دامداری با تمرکز بر زعفران و پسته',
    author: 'مریم حسینی',
    date: '2024-01-08',
    readTime: '9 دقیقه',
    category: 'کشاورزی',
    image: '/images/blog/agriculture-token.svg',
    featured: false
  },
  {
    id: 'smart-contract-security',
    title: 'امنیت قراردادهای هوشمند: راهنمای کامل برای توسعه‌دهندگان',
    excerpt: 'بهترین روش‌های امنیتی در توسعه قراردادهای هوشمند برای توکنایز RWA',
    author: 'احمد محمدی',
    date: '2024-01-05',
    readTime: '15 دقیقه',
    category: 'امنیت',
    image: '/images/blog/smart-contract-security.svg',
    featured: false
  },
  {
    id: 'sukuk-digital-future',
    title: 'آینده صکوک دیجیتال در ایران و جهان',
    excerpt: 'بررسی فرصت‌های صکوک دیجیتال و نقش آن در اقتصاد اسلامی',
    author: 'فاطمه احمدی',
    date: '2024-01-03',
    readTime: '11 دقیقه',
    category: 'صکوک',
    image: '/images/blog/sukuk-future.svg',
    featured: false
  },
  {
    id: 'defi-integration-rwa',
    title: 'ادغام RWA با پروتکل‌های DeFi: فرصت‌های جدید',
    excerpt: 'نحوه ادغام دارایی‌های واقعی با پروتکل‌های DeFi برای ایجاد محصولات جدید',
    author: 'علی رضایی',
    date: '2024-01-01',
    readTime: '13 دقیقه',
    category: 'DeFi',
    image: '/images/blog/defi-rwa.svg',
    featured: false
  },
  {
    id: 'legal-framework-rwa',
    title: 'چارچوب حقوقی توکنایز دارایی‌های واقعی در ایران',
    excerpt: 'بررسی قوانین و مقررات مربوط به توکنایز در ایران و راه‌های انطباق',
    author: 'مریم حسینی',
    date: '2023-12-28',
    readTime: '14 دقیقه',
    category: 'حقوقی',
    image: '/images/blog/legal-framework.svg',
    featured: false
  },
  {
    id: 'oracle-pricing-rwa',
    title: 'نقش اوراکل‌ها در قیمت‌گذاری دارایی‌های واقعی',
    excerpt: 'چگونگی استفاده از اوراکل‌ها برای قیمت‌گذاری دقیق و زنده دارایی‌های RWA',
    author: 'احمد محمدی',
    date: '2023-12-25',
    readTime: '7 دقیقه',
    category: 'تکنولوژی',
    image: '/images/blog/oracle-pricing.svg',
    featured: false
  },
  {
    id: 'rwa-market-trends-2024',
    title: 'روندهای بازار RWA در سال 2024: پیش‌بینی‌ها و فرصت‌ها',
    excerpt: 'بررسی روندهای کلیدی بازار توکنایز دارایی‌های واقعی در سال 2024',
    author: 'فاطمه احمدی',
    date: '2023-12-22',
    readTime: '10 دقیقه',
    category: 'بازار',
    image: '/images/blog/rwa-trends-2024.svg',
    featured: false
  }
]

const categories = ['همه', 'مقدماتی', 'املاک', 'تکنولوژی', 'کشاورزی', 'امنیت', 'صکوک', 'DeFi', 'حقوقی', 'بازار']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('همه')

  const filteredArticles = selectedCategory === 'همه'
    ? articles
    : articles.filter(article => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              بلاگ RWA Labs
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              مقالات تخصصی و راهنماهای جامع در مورد توکنایز دارایی‌های واقعی
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              مقالات برجسته
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مهم‌ترین مقالات و راهنماهای تخصصی
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.filter(article => article.featured).map((article, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  <Link 
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    مطالعه کامل
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              تمام مقالات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعه کامل مقالات تخصصی
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  <Link 
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    مطالعه کامل
                    <ArrowRight className="w-3 h-3 mr-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            عضو خبرنامه ما شوید
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            آخرین مقالات و اخبار توکنایز دارایی‌های واقعی را دریافت کنید
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              عضویت
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
