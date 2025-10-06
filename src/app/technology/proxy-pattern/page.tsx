import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, CheckCircle, ArrowRight, ExternalLink, Code, Shield, Database, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Proxy Pattern - الگوی ارتقای قراردادهای هوشمند | RWA Labs',
  description: 'راهنمای کامل Proxy Pattern برای ارتقای قراردادهای هوشمند. ویژگی‌ها، مزایا، انواع و نحوه پیاده‌سازی',
  keywords: 'Proxy Pattern,ارتقای قرارداد,Upgradeable Contract,OpenZeppelin,Storage Pattern,Implementation',
  openGraph: {
    title: 'Proxy Pattern - الگوی ارتقای قراردادهای هوشمند',
    description: 'راهنمای کامل Proxy Pattern برای ارتقای قراردادهای هوشمند',
    type: 'article',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
    images: [
      {
        url: '/images/technology/proxy-pattern-explained.jpg',
        width: 1200,
        height: 630,
        alt: 'Proxy Pattern - الگوی ارتقای قراردادهای هوشمند',
      },
    ],
  },
}

const features = [
  {
    icon: RefreshCw,
    title: 'قابلیت ارتقا',
    description: 'امکان ارتقای منطق قرارداد بدون تغییر آدرس'
  },
  {
    icon: Shield,
    title: 'حفظ آدرس',
    description: 'آدرس قرارداد و وضعیت آن حفظ می‌شود'
  },
  {
    icon: Database,
    title: 'مدیریت Storage',
    description: 'مدیریت هوشمند حافظه و داده‌های قرارداد'
  },
  {
    icon: Zap,
    title: 'بهینه‌سازی گاز',
    description: 'کاهش هزینه‌های گاز در ارتقاها'
  }
]

const proxyTypes = [
  {
    name: 'Transparent Proxy',
    description: 'پروکسی شفاف که تمام توابع را به implementation ارسال می‌کند',
    features: ['سادگی پیاده‌سازی', 'کنترل کامل admin', 'امنیت بالا', 'سازگاری کامل'],
    useCase: 'مناسب برای پروژه‌های کوچک و متوسط'
  },
  {
    name: 'UUPS Proxy',
    description: 'Universal Upgradeable Proxy Standard با ارتقای خودکار',
    features: ['ارتقای خودکار', 'کاهش هزینه گاز', 'کنترل بهتر', 'انعطاف بالا'],
    useCase: 'مناسب برای پروژه‌های بزرگ و پیچیده'
  },
  {
    name: 'Beacon Proxy',
    description: 'پروکسی beacon برای مدیریت چندین implementation',
    features: ['مدیریت متمرکز', 'ارتقای همزمان', 'مقیاس‌پذیری', 'کنترل یکپارچه'],
    useCase: 'مناسب برای پروژه‌های با چندین قرارداد'
  }
]

const codeExample = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Implementation Contract
contract RWATokenV1 is UUPSUpgradeable, Ownable {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    
    function initialize(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply
    ) public initializer {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        balanceOf[msg.sender] = _totalSupply;
    }
    
    function transfer(address to, uint256 amount) public returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        return true;
    }
    
    // UUPS upgrade authorization
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}

// Proxy Factory
contract ProxyFactory {
    event ProxyCreated(address indexed proxy, address indexed implementation);
    
    function createProxy(
        address implementation,
        address admin,
        bytes memory data
    ) public returns (address) {
        TransparentUpgradeableProxy proxy = new TransparentUpgradeableProxy(
            implementation,
            admin,
            data
        );
        emit ProxyCreated(address(proxy), implementation);
        return address(proxy);
    }
}

// Usage Example
contract DeployScript {
    function deployRWAToken() public {
        // 1. Deploy Implementation
        RWATokenV1 implementation = new RWATokenV1();
        
        // 2. Deploy Proxy
        ProxyFactory factory = new ProxyFactory();
        address proxy = factory.createProxy(
            address(implementation),
            msg.sender, // admin
            abi.encodeWithSelector(
                RWATokenV1.initialize.selector,
                "RWA Token",
                "RWA",
                1000000 * 10**18
            )
        );
        
        // 3. Use proxy as regular contract
        RWATokenV1 token = RWATokenV1(proxy);
        // token is now ready to use
    }
}`

const bestPractices = [
  'استفاده از OpenZeppelin Upgrades',
  'تست کامل قبل از ارتقا',
  'بک‌آپ از داده‌های مهم',
  'اعمال access control مناسب',
  'مستندسازی تغییرات',
  'استفاده از storage gaps',
  'تست compatibility',
  'بررسی security implications'
]

const advantages = [
  'قابلیت ارتقای بدون توقف',
  'حفظ آدرس و وضعیت قرارداد',
  'امکان رفع باگ‌ها و بهبودها',
  'کاهش ریسک قراردادهای جدید',
  'مدیریت بهتر lifecycle',
  'قابلیت rollback در صورت مشکل',
  'بهینه‌سازی مداوم',
  'انعطاف در توسعه'
]

export default function ProxyPatternPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/proxy-pattern-explained.jpg"
            alt="Proxy Pattern - الگوی ارتقای قراردادهای هوشمند"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-red-900/90 to-pink-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-orange-100">
              <Link href="/technology" className="hover:text-white transition-colors">تکنولوژی</Link>
              <span>/</span>
              <span>Proxy Pattern</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Proxy Pattern - الگوی ارتقای قراردادهای هوشمند
            </h1>
            
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              الگوی طراحی پیشرفته برای ایجاد قراردادهای هوشمند قابل ارتقا بدون تغییر آدرس و حفظ وضعیت
            </p>
            
            <div className="flex flex-wrap items-center text-orange-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <RefreshCw className="w-5 h-5 mr-2" />
                <span>قابلیت ارتقا</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Shield className="w-5 h-5 mr-2" />
                <span>حفظ آدرس</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>مدیریت Storage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Proxy Pattern چیست؟</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Proxy Pattern یک الگوی طراحی پیشرفته در قراردادهای هوشمند است که امکان ارتقای منطق قرارداد 
                    بدون تغییر آدرس آن را فراهم می‌کند. این الگو از دو بخش اصلی تشکیل شده: Proxy Contract 
                    که آدرس ثابت دارد و Implementation Contract که منطق قرارداد را شامل می‌شود.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    این الگو به ویژه برای پروژه‌های RWA که نیاز به تکامل مداوم و بهبود دارند، بسیار مفید است. 
                    با استفاده از Proxy Pattern می‌توانید باگ‌ها را رفع کنید، ویژگی‌های جدید اضافه کنید، 
                    و بهینه‌سازی‌های امنیتی اعمال کنید بدون اینکه کاربران مجبور به تغییر آدرس قرارداد شوند.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">ویژگی‌های کلیدی</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proxy Types */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">انواع Proxy Pattern</h2>
                  <div className="space-y-6">
                    {proxyTypes.map((type, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">ویژگی‌ها:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {type.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                                <CheckCircle className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3">
                          <p className="text-sm text-orange-800">
                            <strong>موارد استفاده:</strong> {type.useCase}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">مثال پیاده‌سازی</h2>
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm leading-relaxed">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">بهترین روش‌ها</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bestPractices.map((practice, index) => (
                      <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advantages */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">مزایای Proxy Pattern</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">اطلاعات کلی</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">نوع:</span>
                      <span className="font-semibold text-orange-600">الگوی طراحی</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">قابلیت:</span>
                      <span className="font-semibold text-orange-600">ارتقا</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">کتابخانه:</span>
                      <span className="font-semibold text-orange-600">OpenZeppelin</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">پیچیدگی:</span>
                      <span className="font-semibold text-orange-600">متوسط</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">مزایای کلیدی</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600">ارتقای بدون توقف</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600">حفظ آدرس</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600">مدیریت Storage</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600">انعطاف بالا</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">منابع مفید</h3>
                  <div className="space-y-3">
                    <a href="https://docs.openzeppelin.com/contracts/4.x/upgradeable" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      OpenZeppelin Upgrades
                    </a>
                    <a href="https://docs.openzeppelin.com/upgrades-plugins/1.x/" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Upgrades Plugins
                    </a>
                    <a href="https://blog.openzeppelin.com/proxy-patterns/" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Proxy Patterns Blog
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">نیاز به قرارداد قابل ارتقا دارید؟</h3>
                  <p className="text-orange-100 mb-4">
                    تیم متخصص ما آماده پیاده‌سازی Proxy Pattern برای پروژه‌های RWA است
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    تماس با ما
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
