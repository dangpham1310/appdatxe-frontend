'use client'

import { useEffect, useRef } from 'react'
import { Shield, Clock, CreditCard, Car } from 'lucide-react'
import { usePathname } from 'next/navigation'

const features = [
  {
    icon: Shield,
    name: 'An toàn là ưu tiên hàng đầu',
    description: 'Tất cả tài xế đều được xác minh kỹ lưỡng và có hồ sơ lái xe tốt',
  },
  {
    icon: Clock,
    name: 'Đặt xe nhanh chóng',
    description: 'Chỉ mất vài phút để tìm và đặt chuyến xe phù hợp',
  },
  {
    icon: CreditCard,
    name: 'Giá cả hợp lý',
    description: 'Giá được niêm yết rõ ràng, không phụ phí ẩn',
  },
  {
    icon: Car,
    name: 'Phủ sóng toàn quốc',
    description: 'Hoạt động tại hầu hết các tỉnh thành trên cả nước',
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tại sao chọn Đón Và Đến?
          </h2>
          <p className="text-lg text-gray-600">
            Chúng tôi cam kết mang đến trải nghiệm đặt xe tốt nhất cho bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* An toàn */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">An toàn tuyệt đối</h3>
            <p className="text-gray-600">
              Tất cả tài xế đều được xác minh kỹ lưỡng và cam kết tuân thủ quy tắc an toàn
            </p>
          </div>

          {/* Đặt xe nhanh chóng */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Đặt xe nhanh chóng</h3>
            <p className="text-gray-600">
              Chỉ vài thao tác đơn giản để đặt xe, tiết kiệm thời gian của bạn
            </p>
          </div>

          {/* Giá cả minh bạch */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Giá cả minh bạch</h3>
            <p className="text-gray-600">
              Không phụ phí ẩn, giá được hiển thị rõ ràng trước khi đặt xe
            </p>
          </div>

          {/* Phủ sóng toàn quốc */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Phủ sóng toàn quốc</h3>
            <p className="text-gray-600">
              Dịch vụ có mặt tại hầu hết các tỉnh thành trên cả nước
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 