'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Trang chủ', href: '/' },
    { name: 'Về chúng tôi', href: '/about' },
    { name: 'Chính sách', href: '/policy' },
    { name: 'Điều khoản bảo mật', href: '/privacy' },
    { name: 'Liên hệ', href: '/contact' },
    { name: 'Trở thành tài xế', href: '/driver' },
  ],
  support: [
    { name: 'Trung tâm hỗ trợ', href: '/support' },
    { name: 'Câu hỏi thường gặp', href: '/faq' },
    { name: 'Hướng dẫn sử dụng', href: '/guide' },
    { name: 'Báo cáo sự cố', href: '/report' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
  ],
  contact: [
    {
      name: 'Địa chỉ',
      content: 'Đón Và Đến',
      icon: MapPin,
    },
    {
      name: 'Điện thoại',
      content: '0941118212',
      icon: Phone,
    },
    {
      name: 'Email',
      content: 'vuvanloind1210@gmail.com',
      icon: Mail,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo và mô tả */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Đón Và Đến</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Nền tảng đặt xe trực tuyến hàng đầu Việt Nam, kết nối hành khách với hơn 10.000 tài xế chuyên nghiệp trên 63 tỉnh thành.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Liên kết chính */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Điều hướng
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Hỗ trợ
            </h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name} className="flex items-start space-x-3">
                  <item.icon className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Đón Và Đến. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
} 