import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'بلاگ RWA Labs | مقالات تخصصی توکنایز دارایی‌های واقعی',
  description: 'مقالات تخصصی و راهنماهای جامع در مورد توکنایز دارایی‌های واقعی، قراردادهای هوشمند و فناوری‌های بلاکچین',
  keywords: 'بلاگ RWA,مقالات توکنایز,راهنمای توکنایز,مقالات بلاکچین,آموزش توکنایز',
  openGraph: {
    title: 'بلاگ RWA Labs | مقالات تخصصی توکنایز',
    description: 'مقالات تخصصی و راهنماهای جامع در مورد توکنایز دارایی‌های واقعی',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'RWA Labs',
  },
}

export default function BlogPage() {
  return <BlogClient />
}