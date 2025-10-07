# RWA Tokenization Platform

<div align="center">

![RWA Labs](https://img.shields.io/badge/RWA%20Labs-Platform-0066cc?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15.5.4-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06b6d4?style=flat-square&logo=tailwind-css)

**پلتفرم تخصصی توکنایز دارایی‌های واقعی (RWA)**

🌐 **وب‌سایت**: [https://rwa-labs.ir](https://rwa-labs.ir)

[![Deploy Status](https://github.com/masihtehrani/rwa-tokenization-platform/actions/workflows/deploy.yml/badge.svg)](https://github.com/masihtehrani/rwa-tokenization-platform/actions/workflows/deploy.yml)

</div>

## درباره پروژه

RWA Labs یک پلتفرم پیشرفته برای توکنایز دارایی‌های واقعی است که امکان تبدیل دارایی‌های فیزیکی به توکن‌های دیجیتال قابل‌معامله را فراهم می‌کند.

### خدمات اصلی

- **توکنایز املاک و مستغلات**: ساختمان‌های مسکونی، تجاری و پروژه‌های عمرانی
- **توکنایز دارایی‌های معدنی**: طلا، نقره، مس، آهن و سنگ‌های قیمتی  
- **توکنایز محصولات کشاورزی**: زعفران، پسته، برنج و دامداری
- **توکنایز خودرو و ماشین‌آلات**: خودروهای لوکس و ماشین‌آلات سنگین
- **صکوک دیجیتال**: اوراق اسلامی و اوراق بهادار درآمدزا
- **کیف‌پول تخصصی**: مدیریت توکن‌های دارایی واقعی

### ویژگی‌های فنی

- **قراردادهای هوشمند امن**: استفاده از استانداردهای ERC-20 و ERC-3643
- **کیف‌پول چند امضایی**: امنیت بالا برای مدیریت دارایی‌ها
- **قیمت‌گذاری زنده**: اتصال به اوراکل‌های معتبر
- **ذخیره‌سازی غیرمتمرکز**: استفاده از IPFS
- **قابلیت ارتقا**: الگوی Proxy Pattern برای به‌روزرسانی قراردادها

## تکنولوژی‌ها

### Frontend
- Next.js 15 با App Router
- TypeScript برای type safety
- Tailwind CSS برای استایل‌دهی
- Framer Motion برای انیمیشن‌ها

### Blockchain
- Solidity برای قراردادهای هوشمند
- استانداردهای ERC-20 و ERC-3643
- Multi-Signature Wallet
- Proxy Pattern

### Infrastructure
- GitHub Pages برای hosting
- IPFS برای ذخیره‌سازی
- GitHub Actions برای CI/CD

## نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18.x یا بالاتر
- npm یا yarn

### مراحل نصب

1. **Clone کردن پروژه**
```bash
git clone https://github.com/masihtehrani/rwa-tokenization-platform.git
cd rwa-tokenization-platform
```

2. **نصب وابستگی‌ها**
```bash
npm install
```

3. **اجرای پروژه**
```bash
npm run dev
```

4. **باز کردن مرورگر**
```
http://localhost:3000
```

### Scripts

```bash
npm run dev          # اجرای development server
npm run build        # ساخت production build
npm run start        # اجرای production server
npm run lint         # اجرای ESLint
```

## ساختار پروژه

```
src/
├── app/                    # Next.js App Router
│   ├── services/          # صفحات خدمات
│   ├── portfolio/         # صفحه پورتفولیو
│   ├── about/             # صفحه درباره ما
│   ├── contact/           # صفحه تماس
│   ├── blog/              # صفحه بلاگ
│   ├── technology/        # صفحه تکنولوژی
│   └── layout.tsx         # Layout اصلی
└── components/            # کامپوننت‌های React
    ├── Header.tsx         # هدر سایت
    ├── Footer.tsx         # فوتر سایت
    ├── HeroSection.tsx    # بخش Hero
    └── ...
```

## صفحات

### صفحات اصلی
- **صفحه اصلی** (`/`) - معرفی پلتفرم
- **خدمات** (`/services`) - لیست خدمات
- **پورتفولیو** (`/portfolio`) - نمونه‌کارها
- **درباره ما** (`/about`) - معرفی تیم
- **تماس** (`/contact`) - اطلاعات تماس
- **تکنولوژی** (`/technology`) - معرفی تکنولوژی‌ها
- **بلاگ** (`/blog`) - مقالات

### صفحات خدمات
- **توکنایز املاک** (`/services/real-estate`)
- **توکنایز دارایی‌های معدنی** (`/services/mining-metals`)
- **توکنایز محصولات کشاورزی** (`/services/agriculture`)
- **توکنایز خودرو** (`/services/vehicles`)
- **صکوک دیجیتال** (`/services/digital-sukuk`)
- **کیف‌پول RWA** (`/services/rwa-wallet`)

## مشارکت

برای مشارکت در پروژه:

1. Fork کنید
2. Branch جدید ایجاد کنید (`git checkout -b feature/new-feature`)
3. تغییرات خود را commit کنید (`git commit -m 'Add new feature'`)
4. Push کنید (`git push origin feature/new-feature`)
5. Pull Request ایجاد کنید

## مجوز

این پروژه تحت مجوز [MIT](LICENSE) منتشر شده است.

## تماس

- **وب‌سایت**: [rwa-labs.ir](https://rwa-labs.ir)
- **ایمیل**: info@rwa-labs.ir
- **تلگرام**: [@rwa_labs](https://t.me/rwa_labs)

---

<div align="center">

**طراحی و توسعه توسط [MiroTeam](https://miroteam.ir/)**

</div>