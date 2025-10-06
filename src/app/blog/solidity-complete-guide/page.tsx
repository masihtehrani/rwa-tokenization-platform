import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'راهنمای کامل Solidity برای توسعه قراردادهای هوشمند RWA | RWA Labs',
  description: 'آموزش جامع زبان برنامه‌نویسی Solidity و بهترین روش‌های توسعه قراردادهای هوشمند برای توکنایز دارایی‌های واقعی',
  keywords: 'Solidity,قرارداد هوشمند,برنامه‌نویسی بلاکچین,توسعه RWA,آموزش Solidity',
  openGraph: {
    title: 'راهنمای کامل Solidity برای توسعه قراردادهای هوشمند RWA',
    description: 'آموزش جامع زبان برنامه‌نویسی Solidity و بهترین روش‌های توسعه قراردادهای هوشمند',
    type: 'article',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
  },
}

export default function SolidityGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              راهنمای کامل <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solidity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              برای توسعه قراردادهای هوشمند RWA
            </p>
            <div className="flex items-center justify-center space-x-6 rtl:space-x-reverse text-gray-400">
              <span className="flex items-center">
                <User className="w-5 h-5 ml-2" />
                RWA Labs
              </span>
              <span className="flex items-center">
                <Clock className="w-5 h-5 ml-2" />
                20 دقیقه
              </span>
              <span className="flex items-center">
                <Calendar className="w-5 h-5 ml-2" />
                ۱۴۰۳/۰۷/۰۵
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/blog/solidity-guide.jpg"
              alt="راهنمای کامل Solidity"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">مقدمه</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Solidity یکی از مهم‌ترین زبان‌های برنامه‌نویسی در دنیای بلاکچین است که برای توسعه قراردادهای هوشمند استفاده می‌شود. در این راهنما، شما با تمام جنبه‌های این زبان آشنا خواهید شد.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">مبانی Solidity</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Solidity یک زبان برنامه‌نویسی سطح بالا است که برای نوشتن قراردادهای هوشمند طراحی شده است. این زبان از نحو مشابه JavaScript استفاده می‌کند و برای پلتفرم اتریوم بهینه‌سازی شده است.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">انواع داده‌ها</h3>
              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`// انواع داده‌های اصلی
uint256 public totalSupply;
string public name;
bool public isActive;
address public owner;

// آرایه‌ها
uint256[] public balances;
mapping(address => uint256) public balances;`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">توابع و Modifiers</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                در Solidity، توابع نقش مهمی در تعریف رفتار قرارداد دارند. Modifiers نیز برای اعمال شرایط خاص استفاده می‌شوند.
              </p>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`contract RWAToken {
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    function mint(address to, uint256 amount) public onlyOwner {
        // منطق mint کردن
    }
}`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">امنیت در Solidity</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                امنیت یکی از مهم‌ترین جنبه‌های توسعه قراردادهای هوشمند است. در این بخش با بهترین روش‌های امنیتی آشنا می‌شوید.
              </p>

              <ul className="text-gray-300 text-lg leading-relaxed mb-6 space-y-2">
                <li>• استفاده از Checks-Effects-Interactions pattern</li>
                <li>• جلوگیری از Reentrancy attacks</li>
                <li>• اعتبارسنجی ورودی‌ها</li>
                <li>• استفاده از SafeMath library</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4">تست و Debug</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                تست کردن قراردادهای هوشمند بسیار مهم است. در این بخش با ابزارهای مختلف تست آشنا می‌شوید.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">نتیجه‌گیری</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Solidity یک زبان قدرتمند برای توسعه قراردادهای هوشمند است. با یادگیری صحیح این زبان، می‌توانید قراردادهای امن و کارآمد برای پروژه‌های RWA ایجاد کنید.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-4 sm:mb-0"
                >
                  <ArrowRight className="w-4 h-4 ml-2 rotate-180" />
                  بازگشت به بلاگ
                </Link>
                <Link 
                  href="/technology/solidity"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  مشاهده صفحه تکنولوژی
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
