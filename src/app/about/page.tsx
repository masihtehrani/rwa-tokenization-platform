import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, ArrowRight, CheckCircle, Award, Target, Zap, Code, Shield, Globe, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'درباره RWA Labs | تیم متخصص توکنایز دارایی‌های واقعی | 5+ سال تجربه',
  description: 'آشنایی با تیم RWA Labs و متخصصان بلاکچین. 5+ سال تجربه در توکنایز دارایی‌های واقعی، قراردادهای هوشمند و فناوری‌های پیشرفته',
  keywords: 'درباره RWA Labs,تیم بلاکچین,متخصصان توکنایز,توسعه قرارداد هوشمند,تیم RWA,تجربه توکنایز,متخصصان Solidity,تیم MiroTeam',
  openGraph: {
    title: 'درباره RWA Labs | تیم متخصص توکنایز دارایی‌های واقعی',
    description: 'آشنایی با تیم RWA Labs و متخصصان بلاکچین. 5+ سال تجربه در توکنایز دارایی‌های واقعی',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
  },
}


const achievements = [
  {
    number: '50+',
    label: 'پروژه موفق',
    description: 'پروژه‌های توکنایز تکمیل شده'
  },
  {
    number: '$10M+',
    label: 'ارزش توکنایز شده',
    description: 'ارزش کل دارایی‌های توکنایز شده'
  },
  {
    number: '1000+',
    label: 'سرمایه‌گذار راضی',
    description: 'مشتریان و سرمایه‌گذاران راضی'
  },
  {
    number: '99.9%',
    label: 'آپتایم سیستم',
    description: 'قابلیت اطمینان سیستم'
  }
]

const values = [
  {
    icon: Shield,
    title: 'امنیت',
    description: 'امنیت در اولویت اول ماست. تمام سیستم‌ها و قراردادهای ما توسط متخصصان امنیت بررسی می‌شوند.'
  },
  {
    icon: Target,
    title: 'دقت',
    description: 'دقت در جزئیات و کیفیت کار ما را از رقبا متمایز می‌کند.'
  },
  {
    icon: Users,
    title: 'مشتری‌محوری',
    description: 'رضایت مشتریان هدف اصلی ماست و تمام تلاش خود را برای آن می‌کنیم.'
  },
  {
    icon: Zap,
    title: 'نوآوری',
    description: 'همیشه در جستجوی راه‌های جدید و بهتر برای بهبود خدمات خود هستیم.'
  }
]

const technologies = [
  {
    name: 'Solidity',
    description: 'زبان برنامه‌نویسی قراردادهای هوشمند',
    level: 'Expert'
  },
  {
    name: 'Ethereum',
    description: 'شبکه بلاکچین اصلی',
    level: 'Expert'
  },
  {
    name: 'Polygon',
    description: 'شبکه Layer 2',
    level: 'Advanced'
  },
  {
    name: 'IPFS',
    description: 'ذخیره‌سازی غیرمتمرکز',
    level: 'Advanced'
  },
  {
    name: 'Chainlink',
    description: 'اوراکل قیمت‌گذاری',
    level: 'Expert'
  },
  {
    name: 'Web3.js',
    description: 'کتابخانه اتصال به بلاکچین',
    level: 'Expert'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              درباره RWA Labs
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              تیم متخصص بلاکچین و توسعه‌دهندگان قراردادهای هوشمند با 5+ سال تجربه در توکنایز دارایی‌های واقعی
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/portfolio"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                مشاهده نمونه‌کارها
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ماموریت ما
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ما در RWA Labs معتقدیم که آینده سرمایه‌گذاری در توکنایز دارایی‌های واقعی است. 
                ماموریت ما این است که با استفاده از فناوری بلاکچین و قراردادهای هوشمند، 
                هر دارایی فیزیکی را به توکن دیجیتال قابل‌معامله تبدیل کنیم.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                تیم ما متشکل از متخصصان بلاکچین، توسعه‌دهندگان قراردادهای هوشمند و کارشناسان امنیت است 
                که با همکاری یکدیگر، راهکارهای نوآورانه برای توکنایز دارایی‌های واقعی ارائه می‌دهند.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>پروژه موفق توکن زعفران ما را در</span>
                  <Link 
                    href="https://zfrnbon.surge.sh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:text-yellow-200 underline mr-2"
                  >
                    zfrnbon.surge.sh
                  </Link>
                  <span>مشاهده کنید</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <span>طراحی و توسعه توسط</span>
                  <Link 
                    href="https://miroteam.ir" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 underline mr-2 font-semibold"
                  >
                    MiroTeam
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">آمار و دستاوردها</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-blue-100 font-semibold mb-1">{achievement.label}</div>
                    <div className="text-blue-200 text-sm">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ارزش‌های ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اصول و ارزش‌هایی که در تمام کارهای ما رعایت می‌شود
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              تکنولوژی‌های مورد استفاده
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              فناوری‌های پیشرفته که در پروژه‌های ما استفاده می‌شود
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {tech.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/technology"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              مشاهده جزئیات تکنولوژی‌ها
              <ArrowRight className="w-5 h-5 mr-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده همکاری با ما هستید؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            با تیم متخصص ما تماس بگیرید و پروژه توکنایز خود را شروع کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              تماس با ما
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}