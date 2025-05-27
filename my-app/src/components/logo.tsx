'use client'

import Link from 'next/link'
import { Car } from 'lucide-react'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10">
        <Car className="h-6 w-6 text-green-600" />
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-green-600 to-green-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
      </div>
      <span className="text-xl font-bold text-gray-900">
        Đón Và Đến
      </span>
    </Link>
  )
} 