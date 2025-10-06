import Link from 'next/link'
import { Mail, Phone, MessageCircle, ExternalLink, Send } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'توکنایز املاک و مستغلات', href: '/services/real-estate' },
    { name: 'توکنایز دارایی‌های معدنی و فلزات', href: '/services/mining-metals' },
    { name: 'توکنایز محصولات کشاورزی و دامداری', href: '/services/agriculture' },
    { name: 'توکنایز خودرو و ماشین‌آلات', href: '/services/vehicles' },
    { name: 'صکوک دیجیتال و اوراق بهادار', href: '/services/digital-sukuk' },
    { name: 'کیف‌پول اختصاصی RWA', href: '/services/rwa-wallet' },
  ],
  company: [
    { name: 'درباره ما', href: '/about' },
    { name: 'پروژه‌ها', href: '/portfolio' },
    { name: 'تکنولوژی', href: '/technology' },
    { name: 'مقالات', href: '/blog' },
    { name: 'تماس با ما', href: '/contact' },
  ],
  legal: [
    { name: 'قوانین و مقررات', href: '/legal/terms' },
    { name: 'حریم خصوصی', href: '/legal/privacy' },
    { name: 'سوالات متداول', href: '/faq' },
    { name: 'پشتیبانی', href: '/support' },
  ],
  social: [
    { name: 'تلگرام', href: 'https://t.me/rwatoken_support', icon: MessageCircle },
    { name: 'واتس‌اپ', href: 'https://wa.me/989123456789', icon: Send },
    { name: 'ایمیل', href: 'mailto:info@rwa-assets.ir', icon: Mail },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RWA</span>
              </div>
              <div>
                <div className="text-xl font-bold">توکنایز</div>
                <div className="text-sm text-gray-400">دارایی‌های واقعی</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              پلتفرم تخصصی توکنایز دارایی‌های واقعی با استفاده از فناوری بلاکچین. 
              هر دارایی قابل‌لمس را در 72 ساعت به توکن دیجیتال تبدیل کنید.
            </p>
            <div className="space-y-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 mr-3" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">خدمات ما</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">شرکت</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">قوانین</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © ۱۴۰۳ RWA Labs - تمام حقوق محفوظ است
            </div>
            <div className="flex items-center space-x-6 rtl:space-x-reverse text-sm text-gray-400">
              <span>طراحی و توسعه توسط</span>
              <a
                href="https://miroteam.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors duration-300 font-semibold"
              >
                MiroTeam
                <ExternalLink className="w-4 h-4 mr-1" />
              </a>
              <a
                href="https://zfrnbon.surge.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors duration-300"
              >
                پروژه زعفران
                <ExternalLink className="w-4 h-4 mr-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
