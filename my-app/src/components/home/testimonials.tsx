'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    role: 'Doanh nhân',
    content: 'Dịch vụ rất tốt, tài xế chuyên nghiệp và đúng giờ. Tôi sẽ tiếp tục sử dụng trong tương lai.',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
  },
  {
    name: 'Trần Thị B',
    role: 'Giáo viên',
    content: 'Đặt xe rất dễ dàng, giá cả hợp lý. Tài xế rất thân thiện và nhiệt tình.',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
  },
  {
    name: 'Lê Văn C',
    role: 'Kỹ sư',
    content: 'An toàn và đáng tin cậy. Tôi đã giới thiệu cho nhiều bạn bè của mình.',
    avatar: '/images/avatar-3.jpg',
    rating: 5,
  },
]

export function Testimonials() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Những đánh giá từ khách hàng đã sử dụng dịch vụ của chúng tôi
          </p>
        </div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 