'use client'

import { useState } from 'react'
import { AlertCircle } from 'lucide-react'

export default function DeleteAccountPage() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate phone number
    if (!phone.match(/^[0-9]{10}$/)) {
      setError('Vui lòng nhập số điện thoại hợp lệ (10 số)')
      return
    }

    // Validate password
    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự')
      return
    }

    // Reset error if any
    setError('')
    
    // Show success message
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Xóa tài khoản
              </h1>
              <p className="text-gray-600">
                Vui lòng xác nhận thông tin tài khoản của bạn
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              {error && (
                <div className="mb-6 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Nhập số điện thoại của bạn"
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mật khẩu
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Nhập mật khẩu của bạn"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300"
                  >
                    Xác nhận xóa tài khoản
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Yêu cầu xóa tài khoản đã được ghi nhận
              </h2>
              <p className="text-gray-600">
                Tài khoản của bạn sẽ bị xóa sau 7 ngày. Trong thời gian này, bạn có thể hủy yêu cầu xóa bằng cách đăng nhập lại vào tài khoản.
              </p>
            </div>
            <a 
              href="/"
              className="inline-block px-6 py-3 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors duration-300"
            >
              Trở về trang chủ
            </a>
          </div>
        )}
      </div>
    </main>
  )
} 