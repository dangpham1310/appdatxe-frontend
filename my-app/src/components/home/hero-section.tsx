'use client'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <div
      className="relative min-h-[600px] w-full bg-[url('https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=1920&auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed bg-no-repeat"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Đặt xe tiện chuyến,xe ghép,xe đi chung giá rẻ tiện lợi và dễ dàng
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-lg text-gray-100 sm:text-xl"
          >
            Kết nối hàng nghìn lái xe trên cả nước,tận dụng chuyến đi quay đầu,đưa bạn đến mọi điểm với giá cả tiết kiệm

          </p>

        </div>
      </div>
    </div>
  )
} 