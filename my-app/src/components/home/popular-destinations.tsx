'use client'

import { useRef } from 'react'
import Image from 'next/image'

export function PopularDestinations() {
  const destinations = [
    {
      name: 'Nam Định',
      image: '/images/z6611249680800_6c55d1485bbfafa82b16e883b6737943.jpg',
      description: 'Thành phố Dệt',
    },
    {
      name: 'Hà Nội',
      image: '/images/OIP.jfif',
      description: 'Thủ đô nghìn năm văn hiến',
    },
    {
      name: 'Hà Nam',
      image: '/images/z6644199048426_0a93a5c79cec17bed9b3e769aa398931.jpg',
      description: 'Thành phố không ngủ',
    },
    {
      name: 'Ninh Bình',
      image: '/images/hanam.jpg',
      description: 'Thành phố đáng sống nhất Việt Nam',
    },
  ]

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">
            Điểm đến phổ biến
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Khám phá những điểm đến được yêu thích nhất
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 transform transition-all duration-300 hover:scale-105"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-green-950/40" />
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                {destination.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {destination.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 