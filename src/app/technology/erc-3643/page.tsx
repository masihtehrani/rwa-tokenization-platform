import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, CheckCircle, ArrowRight, ExternalLink, Zap, Database, Globe, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ERC-3643 - استاندارد اوراق بهادار دیجیتال | RWA Labs',
  description: 'راهنمای کامل استاندارد ERC-3643 برای اوراق بهادار دیجیتال. ویژگی‌ها، مزایا، انطباق رگولاتوری و نحوه پیاده‌سازی',
  keywords: 'ERC-3643,اوراق بهادار دیجیتال,Security Token,رگولاتوری,KYC,AML,تایید هویت',
  openGraph: {
    title: 'ERC-3643 - استاندارد اوراق بهادار دیجیتال',
    description: 'راهنمای کامل استاندارد ERC-3643 برای اوراق بهادار دیجیتال',
    type: 'article',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
    images: [
      {
        url: '/images/technology/erc3643.svg',
        width: 1200,
        height: 630,
        alt: 'ERC-3643 - استاندارد اوراق بهادار دیجیتال',
      },
    ],
  },
}

const features = [
  {
    icon: Shield,
    title: 'انطباق رگولاتوری',
    description: 'طراحی شده برای انطباق با قوانین مالی و مقررات اوراق بهادار'
  },
  {
    icon: Lock,
    title: 'KYC/AML داخلی',
    description: 'قابلیت احراز هویت و مبارزه با پولشویی درون قرارداد'
  },
  {
    icon: Database,
    title: 'مدیریت مجوزها',
    description: 'سیستم پیشرفته مدیریت مجوزها و محدودیت‌های انتقال'
  },
  {
    icon: Zap,
    title: 'انتقال شرطی',
    description: 'امکان انتقال توکن‌ها بر اساس شرایط خاص و قوانین'
  }
]

const complianceFeatures = [
  'احراز هویت سرمایه‌گذاران (KYC)',
  'مبارزه با پولشویی (AML)',
  'بررسی صلاحیت سرمایه‌گذاری',
  'مدیریت محدودیت‌های جغرافیایی',
  'کنترل زمان نگهداری توکن',
  'مدیریت سقف سرمایه‌گذاری',
  'گزارش‌گیری رگولاتوری',
  'کنترل انتقال بین کشورها'
]

const tokenTypes = [
  {
    name: 'Equity Tokens',
    description: 'توکن‌های سهام که مالکیت در شرکت را نشان می‌دهند',
    features: ['حق رای', 'دریافت سود', 'حق مالکیت', 'قابلیت انتقال محدود']
  },
  {
    name: 'Debt Tokens',
    description: 'توکن‌های بدهی که اوراق قرضه دیجیتال هستند',
    features: ['دریافت بهره', 'بازپرداخت اصل', 'اولویت بازپرداخت', 'قابلیت معامله']
  },
  {
    name: 'Asset-Backed Tokens',
    description: 'توکن‌های پشتوانه‌دار که توسط دارایی‌های واقعی پشتیبانی می‌شوند',
    features: ['پشتوانه فیزیکی', 'ارزش ذاتی', 'قابلیت بازخرید', 'شفافیت کامل']
  },
  {
    name: 'Utility Tokens',
    description: 'توکن‌های کاربردی که دسترسی به خدمات را فراهم می‌کنند',
    features: ['دسترسی به پلتفرم', 'پرداخت کارمزد', 'قابلیت سوزاندن', 'استفاده محدود']
  }
]

const codeExample = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract SecurityToken is ERC20, AccessControl {
    bytes32 public constant KYC_ROLE = keccak256("KYC_ROLE");
    bytes32 public constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");
    
    mapping(address => bool) public kycVerified;
    mapping(address => bool) public transferAllowed;
    mapping(address => uint256) public transferLimits;
    
    uint256 public maxSupply;
    bool public transfersPaused;
    
    event KYCVerified(address indexed account, bool verified);
    event TransferLimitSet(address indexed account, uint256 limit);
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 _maxSupply
    ) ERC20(name, symbol) {
        maxSupply = _maxSupply;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(KYC_ROLE, msg.sender);
    }
    
    function verifyKYC(address account, bool verified) external onlyRole(KYC_ROLE) {
        kycVerified[account] = verified;
        emit KYCVerified(account, verified);
    }
    
    function setTransferLimit(address account, uint256 limit) external onlyRole(DEFAULT_ADMIN_ROLE) {
        transferLimits[account] = limit;
        emit TransferLimitSet(account, limit);
    }
    
    function allowTransfer(address account, bool allowed) external onlyRole(TRANSFER_ROLE) {
        transferAllowed[account] = allowed;
    }
    
    function pauseTransfers(bool paused) external onlyRole(DEFAULT_ADMIN_ROLE) {
        transfersPaused = paused;
    }
    
    function mint(address to, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(totalSupply() + amount <= maxSupply, "Max supply exceeded");
        require(kycVerified[to], "Recipient not KYC verified");
        _mint(to, amount);
    }
    
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        require(!transfersPaused, "Transfers are paused");
        require(kycVerified[from] && kycVerified[to], "KYC verification required");
        require(transferAllowed[from], "Transfer not allowed");
        
        if (transferLimits[from] > 0) {
            require(amount <= transferLimits[from], "Transfer limit exceeded");
        }
        
        super._beforeTokenTransfer(from, to, amount);
    }
}`

const advantages = [
  'انطباق کامل با قوانین مالی',
  'امنیت بالا برای سرمایه‌گذاران',
  'شفافیت کامل در تراکنش‌ها',
  'قابلیت کنترل و مدیریت پیشرفته',
  'پشتیبانی از انواع مختلف اوراق بهادار',
  'قابلیت ادغام با سیستم‌های سنتی',
  'کاهش هزینه‌های رگولاتوری',
  'سرعت بالا در پردازش'
]

export default function ERC3643Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/erc3643.svg"
            alt="ERC-3643 - استاندارد اوراق بهادار دیجیتال"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-purple-100">
              <Link href="/technology" className="hover:text-white transition-colors">تکنولوژی</Link>
              <span>/</span>
              <span>ERC-3643</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ERC-3643 - استاندارد اوراق بهادار دیجیتال
            </h1>
            
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              استاندارد پیشرفته برای ایجاد اوراق بهادار دیجیتال با انطباق کامل رگولاتوری و قابلیت‌های امنیتی بالا
            </p>
            
            <div className="flex flex-wrap items-center text-purple-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Shield className="w-5 h-5 mr-2" />
                <span>اوراق بهادار دیجیتال</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Lock className="w-5 h-5 mr-2" />
                <span>KYC/AML داخلی</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>مدیریت مجوزها</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">ERC-3643 چیست؟</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    ERC-3643 یک استاندارد پیشرفته برای ایجاد اوراق بهادار دیجیتال (Security Tokens) روی شبکه اتریوم است. 
                    این استاندارد به طور خاص برای انطباق با قوانین مالی و مقررات اوراق بهادار طراحی شده و شامل 
                    قابلیت‌های پیشرفته احراز هویت، کنترل انتقال، و مدیریت مجوزها است.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    برخلاف ERC-20 که برای توکن‌های عمومی طراحی شده، ERC-3643 برای اوراق بهادار رگولاتوری 
                    که نیاز به کنترل و مدیریت دقیق دارند، مناسب است. این استاندارد امکان ایجاد توکن‌های 
                    سهام، اوراق قرضه، و سایر ابزارهای مالی را با رعایت کامل قوانین فراهم می‌کند.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">ویژگی‌های کلیدی</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

                {/* Compliance Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">قابلیت‌های انطباق رگولاتوری</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {complianceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Token Types */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">انواع توکن‌های پشتیبانی شده</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tokenTypes.map((type, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                              <CheckCircle className="w-4 h-4 text-purple-500" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
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

                {/* Advantages */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">مزایای ERC-3643</h2>
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
                      <span className="font-semibold text-purple-600">اوراق بهادار</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">رگولاتوری:</span>
                      <span className="font-semibold text-purple-600">انطباق کامل</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">KYC/AML:</span>
                      <span className="font-semibold text-purple-600">داخلی</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">وضعیت:</span>
                      <span className="font-semibold text-purple-600">فعال</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">مزایای کلیدی</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">انطباق رگولاتوری</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">امنیت بالا</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">کنترل کامل</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">شفافیت</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">منابع مفید</h3>
                  <div className="space-y-3">
                    <a href="https://eips.ethereum.org/EIPS/eip-3643" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      EIP-3643 Specification
                    </a>
                    <a href="https://tokeny.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Tokeny Solutions
                    </a>
                    <a href="https://docs.tokeny.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Tokeny Documentation
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">نیاز به اوراق بهادار دیجیتال دارید؟</h3>
                  <p className="text-purple-100 mb-4">
                    تیم متخصص ما آماده توسعه اوراق بهادار دیجیتال با ERC-3643 است
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
