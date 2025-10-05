import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServicesOverview from '@/components/ServicesOverview'
import WhyTokenize from '@/components/WhyTokenize'
import TechnicalFeatures from '@/components/TechnicalFeatures'
import StatsSection from '@/components/StatsSection'
import PortfolioSection from '@/components/PortfolioSection'
import CTASection from '@/components/CTASection'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'توکنایز دارایی‌های واقعی | پلتفرم تخصصی RWA | آینده سرمایه‌گذاری دیجیتال',
  description: 'دارایی‌های واقعی خود را در 72 ساعت توکنایز کنید. املاک، طلا، محصولات کشاورزی، خودرو، دارایی‌های معدنی را به توکن دیجیتال تبدیل کنید. بازار ثانویه، کیف‌پول اختصاصی، صکوک دیجیتال.',
  keywords: 'توکنایز,دارایی واقعی,RWA,tokenize assets Iran,صکوک دیجیتال,ERC-3643,بلاکچین,توکن,توکنایز املاک,توکن طلا,توکن زعفران,توکن خودرو,صکوک دیجیتال,کیف‌پول RWA',
  openGraph: {
    title: 'توکنایز دارایی‌های واقعی | پلتفرم تخصصی RWA',
    description: 'دارایی‌های واقعی خود را در 72 ساعت توکنایز کنید. املاک، طلا، محصولات کشاورزی، خودرو، دارایی‌های معدنی را به توکن دیجیتال تبدیل کنید.',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
    images: [
      {
        url: '/images/rwa-tokenization-og.jpg',
        width: 1200,
        height: 630,
        alt: 'توکنایز دارایی‌های واقعی - RWA Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'توکنایز دارایی‌های واقعی | پلتفرم تخصصی RWA',
    description: 'دارایی‌های واقعی خود را در 72 ساعت توکنایز کنید',
    images: ['/images/rwa-tokenization-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rwa-assets.ir',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <WhyTokenize />
      <TechnicalFeatures />
      <StatsSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
    </main>
  )
}