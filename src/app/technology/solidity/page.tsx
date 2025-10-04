import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Code, CheckCircle, ArrowRight, ExternalLink, Zap, Shield, Database, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solidity - زبان برنامه‌نویسی قراردادهای هوشمند | RWA Labs',
  description: 'راهنمای کامل زبان برنامه‌نویسی Solidity برای توسعه قراردادهای هوشمند. ویژگی‌ها، مزایا، مثال‌ها و بهترین روش‌ها',
  keywords: 'Solidity,زبان برنامه‌نویسی,قرارداد هوشمند,EVM,بلاکچین,توسعه قرارداد,Smart Contract',
  openGraph: {
    title: 'Solidity - زبان برنامه‌نویسی قراردادهای هوشمند',
    description: 'راهنمای کامل زبان برنامه‌نویسی Solidity برای توسعه قراردادهای هوشمند',
    type: 'article',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
    images: [
      {
        url: '/images/technology/solidity.svg',
        width: 1200,
        height: 630,
        alt: 'Solidity - زبان برنامه‌نویسی قراردادهای هوشمند',
      },
    ],
  },
}

const features = [
  {
    icon: Code,
    title: 'زبان برنامه‌نویسی تخصصی',
    description: 'زبان برنامه‌نویسی مخصوص توسعه قراردادهای هوشمند روی شبکه اتریوم'
  },
  {
    icon: Database,
    title: 'سازگار با EVM',
    description: 'کاملاً سازگار با ماشین مجازی اتریوم (Ethereum Virtual Machine)'
  },
  {
    icon: Shield,
    title: 'امنیت بالا',
    description: 'طراحی شده با تمرکز بر امنیت و جلوگیری از آسیب‌پذیری‌ها'
  },
  {
    icon: Zap,
    title: 'بهینه‌سازی گاز',
    description: 'قابلیت بهینه‌سازی مصرف گاز برای کاهش هزینه‌های تراکنش'
  }
]

const codeExamples = [
  {
    title: 'قرارداد ساده ERC-20',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleToken {
    string public name = "RWA Token";
    string public symbol = "RWA";
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply;
        balanceOf[msg.sender] = _initialSupply;
    }
    
    function transfer(address to, uint256 value) public returns (bool) {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
}`
  },
  {
    title: 'قرارداد RWA Token',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RWAToken is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 1000000 * 10**18;
    uint256 public tokenPrice = 0.001 ether;
    
    mapping(address => bool) public authorizedMinters;
    
    constructor() ERC20("RWA Token", "RWA") {}
    
    function mint(address to, uint256 amount) public onlyAuthorizedMinter {
        require(totalSupply() + amount <= MAX_SUPPLY, "Max supply exceeded");
        _mint(to, amount);
    }
    
    modifier onlyAuthorizedMinter() {
        require(authorizedMinters[msg.sender] || msg.sender == owner(), "Not authorized");
        _;
    }
    
    function setAuthorizedMinter(address minter, bool authorized) public onlyOwner {
        authorizedMinters[minter] = authorized;
    }
}`
  }
]

const bestPractices = [
  'استفاده از آخرین نسخه Solidity (0.8.19+)',
  'اعمال modifier های امنیتی مناسب',
  'تست‌های جامع قبل از deploy',
  'استفاده از کتابخانه‌های معتبر مثل OpenZeppelin',
  'اعمال checks-effects-interactions pattern',
  'مستندسازی کامل کد',
  'استفاده از events برای logging',
  'اعمال access control مناسب'
]

export default function SolidityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/solidity.svg"
            alt="Solidity - زبان برنامه‌نویسی قراردادهای هوشمند"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-blue-100">
              <Link href="/technology" className="hover:text-white transition-colors">تکنولوژی</Link>
              <span>/</span>
              <span>Solidity</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Solidity - زبان برنامه‌نویسی قراردادهای هوشمند
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              زبان برنامه‌نویسی تخصصی برای توسعه قراردادهای هوشمند روی شبکه اتریوم و سایر شبکه‌های سازگار با EVM
            </p>
            
            <div className="flex flex-wrap items-center text-blue-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Code className="w-5 h-5 mr-2" />
                <span>زبان برنامه‌نویسی</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>سازگار با EVM</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Shield className="w-5 h-5 mr-2" />
                <span>امنیت بالا</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Solidity چیست؟</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Solidity یک زبان برنامه‌نویسی سطح بالا است که برای نوشتن قراردادهای هوشمند طراحی شده است. 
                    این زبان به طور خاص برای اجرا روی ماشین مجازی اتریوم (EVM) توسعه یافته و از syntax مشابه 
                    JavaScript و C++ استفاده می‌کند.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Solidity امکان ایجاد قراردادهای پیچیده و امن را فراهم می‌کند که می‌توانند دارایی‌های دیجیتال، 
                    توکن‌ها، و سیستم‌های مالی غیرمتمرکز را مدیریت کنند. این زبان به طور گسترده در پروژه‌های 
                    DeFi، NFT، و توکنایز دارایی‌های واقعی استفاده می‌شود.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">ویژگی‌های کلیدی</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

                {/* Code Examples */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">مثال‌های کد</h2>
                  {codeExamples.map((example, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{example.title}</h3>
                      <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                        <pre className="text-green-400 text-sm leading-relaxed">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Best Practices */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">بهترین روش‌ها</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bestPractices.map((practice, index) => (
                      <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{practice}</span>
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
                      <span className="text-gray-600">نسخه فعلی:</span>
                      <span className="font-semibold text-blue-600">0.8.19+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">نوع زبان:</span>
                      <span className="font-semibold text-blue-600">Statically Typed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">سازگاری:</span>
                      <span className="font-semibold text-blue-600">EVM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">پشتیبانی:</span>
                      <span className="font-semibold text-blue-600">فعال</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">منابع مفید</h3>
                  <div className="space-y-3">
                    <a href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      مستندات رسمی
                    </a>
                    <a href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Remix IDE
                    </a>
                    <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Hardhat Framework
                    </a>
                    <a href="https://openzeppelin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      OpenZeppelin
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">نیاز به مشاوره دارید؟</h3>
                  <p className="text-blue-100 mb-4">
                    تیم متخصص ما آماده کمک در توسعه قراردادهای هوشمند با Solidity است
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
