import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'توکنایز دارایی‌های واقعی چیست؟ راهنمای جامع برای تازه‌کارها | RWA Labs',
  description: 'آشنایی کامل با مفهوم توکنایز دارایی‌های واقعی، مزایا، چالش‌ها و آینده این فناوری. راهنمای جامع برای مبتدیان',
  keywords: 'توکنایز دارایی واقعی,توکنایز چیست,RWA tokenization,راهنمای توکنایز,آموزش توکنایز',
  openGraph: {
    title: 'توکنایز دارایی‌های واقعی چیست؟ راهنمای جامع',
    description: 'آشنایی کامل با مفهوم توکنایز دارایی‌های واقعی، مزایا، چالش‌ها و آینده این فناوری',
    type: 'article',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
    authors: ['احمد محمدی'],
    publishedTime: '2024-01-15T10:00:00Z',
    modifiedTime: '2024-01-15T10:00:00Z',
  },
}

const tableOfContents = [
  { id: 'introduction', title: 'مقدمه' },
  { id: 'what-is-rwa', title: 'توکنایز دارایی‌های واقعی چیست؟' },
  { id: 'how-it-works', title: 'چگونه کار می‌کند؟' },
  { id: 'benefits', title: 'مزایای توکنایز' },
  { id: 'challenges', title: 'چالش‌ها و محدودیت‌ها' },
  { id: 'use-cases', title: 'موارد استفاده' },
  { id: 'future', title: 'آینده توکنایز RWA' },
  { id: 'conclusion', title: 'نتیجه‌گیری' }
]

const benefits = [
  {
    title: 'نقدینگی بالا',
    description: 'تبدیل دارایی‌های غیرقابل‌نقد به دارایی‌های قابل‌معامله',
    icon: '💰'
  },
  {
    title: 'دسترسی جهانی',
    description: 'امکان سرمایه‌گذاری از هر نقطه جهان',
    icon: '🌍'
  },
  {
    title: 'شفافیت کامل',
    description: 'تمام تراکنش‌ها در بلاکچین ثبت می‌شود',
    icon: '🔍'
  },
  {
    title: 'تقسیم مالکیت',
    description: 'امکان تقسیم دارایی‌های گران‌قیمت',
    icon: '👥'
  },
  {
    title: 'کاهش هزینه‌ها',
    description: 'حذف واسطه‌ها و کاهش هزینه‌های معامله',
    icon: '📉'
  },
  {
    title: 'امنیت بالا',
    description: 'استفاده از فناوری بلاکچین امن',
    icon: '🔒'
  }
]

const useCases = [
  {
    category: 'املاک و مستغلات',
    examples: ['ساختمان‌های مسکونی', 'مجتمع‌های تجاری', 'زمین‌های کشاورزی', 'پروژه‌های عمرانی'],
    description: 'توکنایز املاک امکان تقسیم مالکیت و معامله آسان را فراهم می‌کند'
  },
  {
    category: 'فلزات گران‌بها',
    examples: ['طلا', 'نقره', 'پلاتین', 'سنگ‌های قیمتی'],
    description: 'تبدیل فلزات گران‌بها به توکن دیجیتال با پشتوانه فیزیکی'
  },
  {
    category: 'محصولات کشاورزی',
    examples: ['زعفران', 'پسته', 'برنج', 'گوسفند'],
    description: 'توکنایز محصولات کشاورزی برای مدیریت بهتر و معامله آسان'
  },
  {
    category: 'اوراق بهادار',
    examples: ['صکوک', 'اوراق مشارکت', 'اوراق قرضه', 'سهام خصوصی'],
    description: 'تبدیل اوراق بهادار سنتی به توکن‌های دیجیتال'
  }
]

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/rwa-intro.svg"
            alt="توکنایز دارایی‌های واقعی"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-blue-100">
              <Link href="/blog" className="hover:text-white transition-colors">بلاگ</Link>
              <span>/</span>
              <span>مقدماتی</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              توکنایز دارایی‌های واقعی چیست؟ راهنمای جامع برای تازه‌کارها
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              آشنایی کامل با مفهوم توکنایز دارایی‌های واقعی، مزایا، چالش‌ها و آینده این فناوری
            </p>

            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                احمد محمدی
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                15 دی 1402
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                8 دقیقه مطالعه
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">فهرست مطالب</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">مقدمه</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    در دنیای امروز، فناوری بلاکچین فرصت‌های جدیدی برای سرمایه‌گذاری و مالکیت دارایی‌ها ایجاد کرده است. 
                    یکی از مهم‌ترین این فرصت‌ها، توکنایز دارایی‌های واقعی (Real-World Assets - RWA) است که امکان 
                    تبدیل هر دارایی فیزیکی به توکن دیجیتال قابل‌معامله را فراهم می‌کند.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    این فناوری نه تنها انقلابی در نحوه مالکیت و معامله دارایی‌ها ایجاد کرده، بلکه دسترسی به 
                    سرمایه‌گذاری‌های گران‌قیمت را برای عموم مردم فراهم کرده است.
                  </p>
                </section>

                {/* What is RWA */}
                <section id="what-is-rwa" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">توکنایز دارایی‌های واقعی چیست؟</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    توکنایز دارایی‌های واقعی فرآیندی است که در آن یک دارایی فیزیکی (مانند ملک، طلا، یا محصولات کشاورزی) 
                    به توکن‌های دیجیتال قابل‌معامله تبدیل می‌شود. هر توکن نمایانگر بخشی از مالکیت آن دارایی است.
                  </p>
                  
                  <div className="bg-blue-50 border-r-4 border-blue-500 p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">مثال عملی</h3>
                    <p className="text-blue-800">
                      فرض کنید یک ساختمان 100 میلیارد تومانی دارید. با توکنایز، می‌توانید آن را به 1000 توکن 
                      تقسیم کنید که هر توکن نمایانگر 0.1% مالکیت ساختمان است. حالا هر کسی می‌تواند با خرید 
                      یک یا چند توکن، بخشی از مالکیت این ساختمان را داشته باشد.
                    </p>
                  </div>
                </section>

                {/* How it works */}
                <section id="how-it-works" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">چگونه کار می‌کند؟</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    فرآیند توکنایز شامل مراحل زیر است:
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        step: '1',
                        title: 'ارزیابی دارایی',
                        description: 'ارزیابی دقیق دارایی توسط کارشناسان معتبر و تعیین ارزش آن'
                      },
                      {
                        step: '2',
                        title: 'تهیه قرارداد هوشمند',
                        description: 'ایجاد قرارداد هوشمند بر اساس استانداردهای مناسب (ERC-20 یا ERC-3643)'
                      },
                      {
                        step: '3',
                        title: 'تقسیم مالکیت',
                        description: 'تقسیم دارایی به توکن‌های قابل‌معامله و تعیین تعداد توکن‌ها'
                      },
                      {
                        step: '4',
                        title: 'راه‌اندازی بازار',
                        description: 'راه‌اندازی بازار معامله و اتصال به صرافی‌های مختلف'
                      },
                      {
                        step: '5',
                        title: 'مدیریت مداوم',
                        description: 'مدیریت و نظارت بر عملکرد توکن‌ها و دارایی پشتوانه'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Benefits */}
                <section id="benefits" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">مزایای توکنایز</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    توکنایز دارایی‌های واقعی مزایای متعددی برای دارنده دارایی و سرمایه‌گذاران دارد:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                        <p className="text-gray-700">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Use Cases */}
                <section id="use-cases" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">موارد استفاده</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    توکنایز در حوزه‌های مختلف کاربرد دارد:
                  </p>
                  
                  <div className="space-y-8">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.category}</h3>
                        <p className="text-gray-700 mb-4">{useCase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {useCase.examples.map((example, exampleIndex) => (
                            <span key={exampleIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Future */}
                <section id="future" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">آینده توکنایز RWA</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    آینده توکنایز دارایی‌های واقعی بسیار روشن است. پیش‌بینی می‌شود که تا سال 2030، 
                    ارزش بازار RWA به بیش از 10 تریلیون دلار برسد.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">روندهای کلیدی آینده:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">ادغام بیشتر با پروتکل‌های DeFi</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">پذیرش گسترده توسط نهادهای مالی سنتی</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">توسعه استانداردهای جدید و بهبود یافته</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">ایجاد قوانین و مقررات مناسب</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">نتیجه‌گیری</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    توکنایز دارایی‌های واقعی فرصتی بی‌نظیر برای دموکراتیک کردن سرمایه‌گذاری و ایجاد نقدینگی 
                    در دارایی‌های غیرقابل‌نقد است. این فناوری با استفاده از بلاکچین، شفافیت، امنیت و دسترسی 
                    جهانی را به ارمغان می‌آورد.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    اگر شما هم دارایی‌ای دارید که می‌خواهید توکنایز کنید، یا به عنوان سرمایه‌گذار به دنبال 
                    فرصت‌های جدید هستید، با تیم متخصص ما در RWA Labs تماس بگیرید.
                  </p>
                </section>
              </article>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">آماده شروع پروژه توکنایز خود هستید؟</h3>
                <p className="text-blue-100 mb-6">با مشاوره رایگان ما، بهترین راهکار را برای دارایی‌های خود پیدا کنید</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    مشاوره رایگان
                  </Link>
                  <Link 
                    href="/services"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    مشاهده خدمات
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
