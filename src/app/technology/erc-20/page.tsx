import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Database, CheckCircle, ArrowRight, ExternalLink, Zap, Shield, Globe, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ERC-20 - استاندارد توکن‌های قابل‌تعویض | RWA Labs',
  description: 'راهنمای کامل استاندارد ERC-20 برای توکن‌های قابل‌تعویض. ویژگی‌ها، مزایا، مثال‌ها و نحوه پیاده‌سازی',
  keywords: 'ERC-20,استاندارد توکن,توکن قابل تعویض,Fungible Token,اتریوم,بلاکچین,Smart Contract',
  openGraph: {
    title: 'ERC-20 - استاندارد توکن‌های قابل‌تعویض',
    description: 'راهنمای کامل استاندارد ERC-20 برای توکن‌های قابل‌تعویض',
    type: 'article',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
    images: [
      {
        url: '/images/technology/erc-20-deep-dive.jpg',
        width: 1200,
        height: 630,
        alt: 'ERC-20 - استاندارد توکن‌های قابل‌تعویض',
      },
    ],
  },
}

const features = [
  {
    icon: Database,
    title: 'استاندارد بین‌المللی',
    description: 'استاندارد پذیرفته شده جهانی برای توکن‌های قابل‌تعویض'
  },
  {
    icon: Globe,
    title: 'سازگاری کامل',
    description: 'سازگار با تمام کیف‌پول‌ها، صرافی‌ها و DEX ها'
  },
  {
    icon: Zap,
    title: 'قابلیت معامله',
    description: 'امکان معامله آسان در بازارهای مختلف'
  },
  {
    icon: Shield,
    title: 'امنیت بالا',
    description: 'استاندارد امن و تست شده در هزاران پروژه'
  }
]

const functions = [
  {
    name: 'totalSupply()',
    description: 'بازگرداندن تعداد کل توکن‌های موجود',
    returns: 'uint256'
  },
  {
    name: 'balanceOf(address)',
    description: 'بازگرداندن موجودی توکن آدرس مشخص',
    returns: 'uint256'
  },
  {
    name: 'transfer(address, uint256)',
    description: 'انتقال توکن از آدرس فرستنده به گیرنده',
    returns: 'bool'
  },
  {
    name: 'approve(address, uint256)',
    description: 'اجازه دادن به آدرس دیگر برای استفاده از توکن‌ها',
    returns: 'bool'
  },
  {
    name: 'allowance(address, address)',
    description: 'بررسی میزان مجاز آدرس برای استفاده از توکن‌ها',
    returns: 'uint256'
  },
  {
    name: 'transferFrom(address, address, uint256)',
    description: 'انتقال توکن از آدرس مجاز به گیرنده',
    returns: 'bool'
  }
]

const events = [
  {
    name: 'Transfer',
    description: 'هنگام انتقال توکن‌ها بین آدرس‌ها',
    parameters: 'address indexed from, address indexed to, uint256 value'
  },
  {
    name: 'Approval',
    description: 'هنگام تایید مجوز استفاده از توکن‌ها',
    parameters: 'address indexed owner, address indexed spender, uint256 value'
  }
]

const codeExample = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract RWAToken is IERC20 {
    string public name = "RWA Token";
    string public symbol = "RWA";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * 10**decimals;
        _balances[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }
    
    function balanceOf(address account) public view override returns (uint256) {
        return _balances[account];
    }
    
    function transfer(address to, uint256 amount) public override returns (bool) {
        require(_balances[msg.sender] >= amount, "Insufficient balance");
        _balances[msg.sender] -= amount;
        _balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }
    
    function approve(address spender, uint256 amount) public override returns (bool) {
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }
    
    function allowance(address owner, address spender) public view override returns (uint256) {
        return _allowances[owner][spender];
    }
    
    function transferFrom(address from, address to, uint256 amount) public override returns (bool) {
        require(_balances[from] >= amount, "Insufficient balance");
        require(_allowances[from][msg.sender] >= amount, "Insufficient allowance");
        
        _balances[from] -= amount;
        _balances[to] += amount;
        _allowances[from][msg.sender] -= amount;
        
        emit Transfer(from, to, amount);
        return true;
    }
}`

const useCases = [
  'توکن‌های کاربردی (Utility Tokens)',
  'توکن‌های امنیتی (Security Tokens)',
  'استیبل کوین‌ها (Stablecoins)',
  'توکن‌های حاکمیتی (Governance Tokens)',
  'توکن‌های RWA (Real World Assets)',
  'توکن‌های بازی (Gaming Tokens)',
  'توکن‌های پاداش (Reward Tokens)',
  'توکن‌های پرداخت (Payment Tokens)'
]

export default function ERC20Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/erc-20-deep-dive.jpg"
            alt="ERC-20 - استاندارد توکن‌های قابل‌تعویض"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-blue-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-green-100">
              <Link href="/technology" className="hover:text-white transition-colors">تکنولوژی</Link>
              <span>/</span>
              <span>ERC-20</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ERC-20 - استاندارد توکن‌های قابل‌تعویض
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              استاندارد بین‌المللی برای ایجاد توکن‌های قابل‌تعویض روی شبکه اتریوم و سایر شبکه‌های سازگار
            </p>
            
            <div className="flex flex-wrap items-center text-green-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>استاندارد توکن</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Globe className="w-5 h-5 mr-2" />
                <span>سازگاری کامل</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">ERC-20 چیست؟</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    ERC-20 یک استاندارد فنی برای قراردادهای هوشمند روی شبکه اتریوم است که نحوه ایجاد 
                    توکن‌های قابل‌تعویض (Fungible Tokens) را تعریف می‌کند. این استاندارد شامل مجموعه‌ای از 
                    قوانین و توابع است که تمام توکن‌های ERC-20 باید از آن پیروی کنند.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    این استاندارد امکان تعامل آسان بین توکن‌های مختلف، کیف‌پول‌ها، و صرافی‌ها را فراهم می‌کند. 
                    هر توکن ERC-20 دارای ویژگی‌های مشترک مانند قابلیت انتقال، تایید، و بررسی موجودی است.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">ویژگی‌های کلیدی</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

                {/* Functions */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">توابع اجباری</h2>
                  <div className="space-y-6">
                    {functions.map((func, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 font-mono">{func.name}</h3>
                          <span className="text-blue-600 font-semibold">{func.returns}</span>
                        </div>
                        <p className="text-gray-600">{func.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Events */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">رویدادها (Events)</h2>
                  <div className="space-y-6">
                    {events.map((event, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 font-mono mb-2">{event.name}</h3>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <code className="text-sm text-gray-800">{event.parameters}</code>
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

                {/* Use Cases */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">موارد استفاده</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
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
                      <span className="font-semibold text-green-600">استاندارد توکن</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">قابلیت:</span>
                      <span className="font-semibold text-green-600">قابل تعویض</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">شبکه:</span>
                      <span className="font-semibold text-green-600">اتریوم</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">وضعیت:</span>
                      <span className="font-semibold text-green-600">فعال</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">مزایا</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">سازگاری با کیف‌پول‌ها</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">قابلیت معامله آسان</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">استاندارد امن</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">پشتیبانی گسترده</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">منابع مفید</h3>
                  <div className="space-y-3">
                    <a href="https://eips.ethereum.org/EIPS/eip-20" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      EIP-20 Specification
                    </a>
                    <a href="https://docs.openzeppelin.com/contracts/4.x/erc20" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      OpenZeppelin ERC20
                    </a>
                    <a href="https://ethereum.org/en/developers/docs/standards/tokens/erc-20/" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ethereum Docs
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">نیاز به توکن ERC-20 دارید؟</h3>
                  <p className="text-green-100 mb-4">
                    تیم متخصص ما آماده توسعه توکن‌های ERC-20 برای پروژه‌های RWA است
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
