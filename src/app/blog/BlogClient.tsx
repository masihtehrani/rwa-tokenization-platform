'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react'
import { useState } from 'react'

const articles = [
  {
    id: 'what-is-rwa-tokenization',
    title: 'توکنایز دارایی‌های واقعی چیست؟ راهنمای جامع برای تازه‌کارها',
    excerpt: 'آشنایی کامل با مفهوم توکنایز دارایی‌های واقعی و نحوه کارکرد آن در دنیای بلاکچین',
    category: 'آموزشی',
    author: 'RWA Labs',
    readTime: '8 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۱۵',
    image: '/images/blog/rwa-intro.jpg',
    featured: true
  },
  {
    id: 'real-estate-tokenization-guide',
    title: 'راهنمای کامل توکنایز املاک و مستغلات',
    excerpt: 'مراحل کامل توکنایز املاک از انتخاب دارایی تا عرضه در بازار ثانویه',
    category: 'راهنما',
    author: 'RWA Labs',
    readTime: '12 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۱۴',
    image: '/images/blog/real-estate-guide.jpg',
    featured: true
  },
  {
    id: 'erc-20-vs-erc-3643',
    title: 'مقایسه استانداردهای ERC-20 و ERC-3643 برای توکنایز',
    excerpt: 'تفاوت‌های کلیدی بین استانداردهای مختلف توکن و انتخاب بهترین گزینه',
    category: 'فنی',
    author: 'RWA Labs',
    readTime: '10 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۱۳',
    image: '/images/blog/erc-standards.jpg',
    featured: false
  },
  {
    id: 'smart-contract-security',
    title: 'امنیت قراردادهای هوشمند در توکنایز دارایی‌های واقعی',
    excerpt: 'راهکارهای امنیتی و بهترین روش‌های توسعه قراردادهای هوشمند امن',
    category: 'امنیت',
    author: 'RWA Labs',
    readTime: '15 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۱۲',
    image: '/images/blog/smart-contract-security.jpg',
    featured: false
  },
  {
    id: 'agricultural-tokenization',
    title: 'توکنایز محصولات کشاورزی: فرصت‌ها و چالش‌ها',
    excerpt: 'نحوه توکنایز محصولات کشاورزی و مزایای آن برای کشاورزان و سرمایه‌گذاران',
    category: 'کاربردی',
    author: 'RWA Labs',
    readTime: '9 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۱۱',
    image: '/images/blog/agriculture-token.jpg',
    featured: false
  },
  {
    id: 'legal-framework-rwa',
    title: 'چارچوب حقوقی توکنایز دارایی‌های واقعی در ایران',
    excerpt: 'قوانین و مقررات حاکم بر توکنایز دارایی‌های واقعی در کشور',
    category: 'حقوقی',
    author: 'RWA Labs',
    readTime: '11 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۱۰',
    image: '/images/blog/legal-framework.jpg',
    featured: false
  },
  {
    id: 'oracle-pricing-rwa',
    title: 'نقش اوراکل‌ها در قیمت‌گذاری دارایی‌های توکنایز شده',
    excerpt: 'چگونگی استفاده از اوراکل‌ها برای قیمت‌گذاری دقیق و به‌روز دارایی‌ها',
    category: 'فنی',
    author: 'RWA Labs',
    readTime: '7 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۹',
    image: '/images/blog/oracle-pricing.jpg',
    featured: false
  },
  {
    id: 'defi-integration-rwa',
    title: 'ادغام دارایی‌های واقعی با اکوسیستم DeFi',
    excerpt: 'نحوه ادغام دارایی‌های توکنایز شده با پروتکل‌های DeFi',
    category: 'DeFi',
    author: 'RWA Labs',
    readTime: '13 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۸',
    image: '/images/blog/defi-rwa.jpg',
    featured: false
  },
  {
    id: 'sukuk-digital-future',
    title: 'آینده صکوک دیجیتال و اوراق بهادار اسلامی',
    excerpt: 'روندهای آینده در حوزه صکوک دیجیتال و تأثیر آن بر بازارهای مالی',
    category: 'مالی',
    author: 'RWA Labs',
    readTime: '10 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۷',
    image: '/images/blog/sukuk-future.jpg',
    featured: false
  },
  {
    id: 'rwa-market-trends-2024',
    title: 'روندهای بازار توکنایز دارایی‌های واقعی در سال ۱۴۰۳',
    excerpt: 'بررسی روندهای کلیدی و پیش‌بینی‌های بازار RWA در سال جاری',
    category: 'بازار',
    author: 'RWA Labs',
    readTime: '14 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۶',
    image: '/images/blog/rwa-trends-2024.jpg',
    featured: false
  },
  // Technology Articles
  {
    id: 'solidity-complete-guide',
    title: 'راهنمای کامل Solidity برای توسعه قراردادهای هوشمند RWA',
    excerpt: 'آموزش جامع زبان برنامه‌نویسی Solidity و بهترین روش‌های توسعه قراردادهای هوشمند',
    category: 'تکنولوژی',
    author: 'RWA Labs',
    readTime: '20 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۵',
    image: '/images/blog/solidity-guide.jpg',
    featured: true
  },
  {
    id: 'erc-20-deep-dive',
    title: 'بررسی عمیق استاندارد ERC-20 و کاربردهای آن در RWA',
    excerpt: 'تحلیل کامل استاندارد ERC-20، مزایا، محدودیت‌ها و نحوه پیاده‌سازی در پروژه‌های RWA',
    category: 'تکنولوژی',
    author: 'RWA Labs',
    readTime: '16 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۴',
    image: '/images/blog/erc-20-deep-dive.jpg',
    featured: false
  },
  {
    id: 'erc-3643-comprehensive',
    title: 'استاندارد ERC-3643: راه‌حل کامل برای توکنایز دارایی‌های واقعی',
    excerpt: 'بررسی جامع استاندارد ERC-3643 و مزایای آن نسبت به سایر استانداردها در توکنایز',
    category: 'تکنولوژی',
    author: 'RWA Labs',
    readTime: '18 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۳',
    image: '/images/blog/erc-3643-comprehensive.jpg',
    featured: false
  },
  {
    id: 'proxy-pattern-explained',
    title: 'الگوی Proxy در قراردادهای هوشمند: راه‌حل به‌روزرسانی و ارتقا',
    excerpt: 'آموزش کامل الگوی Proxy و نحوه استفاده از آن برای ایجاد قراردادهای قابل ارتقا',
    category: 'تکنولوژی',
    author: 'RWA Labs',
    readTime: '12 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۲',
    image: '/images/blog/proxy-pattern-explained.jpg',
    featured: false
  },
  {
    id: 'multi-signature-security',
    title: 'امنیت Multi-Signature در قراردادهای RWA',
    excerpt: 'راهکارهای امنیتی Multi-Signature و نحوه پیاده‌سازی آن در پروژه‌های توکنایز',
    category: 'تکنولوژی',
    author: 'RWA Labs',
    readTime: '14 دقیقه',
    publishDate: '۱۴۰۳/۰۷/۰۱',
    image: '/images/blog/multi-signature-security.jpg',
    featured: false
  },
  {
    id: 'ipfs-storage-solution',
    title: 'IPFS: راه‌حل ذخیره‌سازی غیرمتمرکز برای RWA',
    excerpt: 'نحوه استفاده از IPFS برای ذخیره‌سازی امن و غیرمتمرکز اسناد و مدارک RWA',
    category: 'تکنولوژی',
    author: 'RWA Labs',
    readTime: '11 دقیقه',
    publishDate: '۱۴۰۳/۰۶/۳۰',
    image: '/images/blog/ipfs-storage.jpg',
    featured: false
  }
]

const categories = ['همه', 'آموزشی', 'راهنما', 'فنی', 'امنیت', 'کاربردی', 'حقوقی', 'DeFi', 'مالی', 'بازار', 'تکنولوژی']

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState('همه')

  const filteredArticles = selectedCategory === 'همه' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              بلاگ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">RWA Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              مقالات تخصصی و راهنماهای جامع در مورد توکنایز دارایی‌های واقعی
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">مقالات برجسته</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <span className="flex items-center">
                        <User className="w-4 h-4 ml-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 ml-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 ml-1" />
                      {article.publishDate}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">دسته‌بندی مقالات</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">
            {selectedCategory === 'همه' ? 'همه مقالات' : `مقالات ${selectedCategory}`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <span className="flex items-center">
                        <User className="w-4 h-4 ml-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 ml-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 ml-1" />
                      {article.publishDate}
                    </span>
                  </div>
                  <Link 
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    مطالعه کامل
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">آماده شروع توکنایز دارایی‌های خود هستید؟</h2>
          <p className="text-xl text-gray-300 mb-8">
            با تیم متخصص ما تماس بگیرید و مشاوره رایگان دریافت کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              تماس با ما
            </Link>
            <Link 
              href="/services"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              مشاهده خدمات
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
