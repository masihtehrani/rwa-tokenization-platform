import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rwa-labs.ir'),
  title: "RWA Labs - توکنایز دارایی‌های فیزیکی",
  description: "توکنایز دارایی‌های فیزیکی: املاک، طلا، زعفران، پسته، صکوک دیجیتال. مشاوره رایگان، قراردادهای هوشمند امن، بازار ثانویه، کیف‌پول اختصاصی",
  keywords: "توکنایز,دارایی واقعی,RWA,بلاکچین,قرارداد هوشمند,توکن املاک,توکن طلا,توکن زعفران,صکوک دیجیتال,توکن پسته,توکن برنج,ERC-20,ERC-3643,DeFi,Solidity,توکنایز املاک,توکنایز طلا,توکنایز زعفران,توکنایز پسته,صکوک دیجیتال,کیف‌پول RWA,مشاوره رایگان توکنایز",
  openGraph: {
    title: "RWA Labs - توکنایز دارایی‌های فیزیکی",
    description: "توکنایز دارایی‌های فیزیکی: املاک، طلا، زعفران، پسته، صکوک دیجیتال. مشاوره رایگان، قراردادهای هوشمند امن",
    type: "website",
    locale: "fa_IR",
    siteName: "RWA Labs",
    url: "https://rwa-labs.ir",
    images: [
      {
        url: "/images/rwa-tokenization-og.jpg",
        width: 1200,
        height: 630,
        alt: "RWA Labs - توکنایز دارایی‌های واقعی",
        type: "image/jpeg",
      },
      {
        url: "/images/rwa-tokenization-og-square.jpg",
        width: 1200,
        height: 1200,
        alt: "RWA Labs Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rwatoken",
    creator: "@rwatoken",
    title: "RWA Labs - پلتفرم تخصصی توکنایز دارایی‌های واقعی",
    description: "پلتفرم پیشرفته توکنایز دارایی‌های واقعی: املاک، طلا، زعفران، پسته، صکوک دیجیتال",
    images: {
      url: "/images/rwa-tokenization-twitter.jpg",
      alt: "RWA Labs - توکنایز دارایی‌های واقعی",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rwa-labs.ir",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RWA Labs",
    "description": "پلتفرم تخصصی توکنایز دارایی‌های فیزیکی با استفاده از فناوری بلاکچین",
    "url": "https://rwa-labs.ir",
    "logo": "https://rwa-labs.ir/images/rwa-labs-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-21-1234-5678",
      "contactType": "customer service",
      "availableLanguage": ["Persian", "English"]
    },
    "sameAs": [
      "https://t.me/rwatoken_support",
      "https://wa.me/989123456789"
    ],
    "service": {
      "@type": "Service",
      "name": "توکنایز دارایی‌های فیزیکی",
      "description": "تبدیل دارایی‌های فیزیکی به توکن‌های دیجیتال قابل‌معامله",
      "provider": {
        "@type": "Organization",
        "name": "RWA Labs"
      }
    }
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RWA Labs" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icons/icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        {/* Calendly Widget */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}