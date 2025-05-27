'use client'

import { useEffect, useRef } from 'react'
import { Shield, Lock, UserCheck, FileCheck, AlertCircle, CheckCircle2 } from 'lucide-react'

const privacyPolicies = [
  {
    title: 'Thu thập thông tin',
    description: 'Chúng tôi chỉ thu thập những thông tin cần thiết để cung cấp dịch vụ như tên, số điện thoại, email và địa chỉ. Thông tin của bạn sẽ được bảo vệ nghiêm ngặt.',
    icon: Shield
  },
  {
    title: 'Bảo mật dữ liệu',
    description: 'Mọi dữ liệu được mã hóa và lưu trữ an toàn. Chúng tôi không chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào mà không có sự đồng ý.',
    icon: Lock
  },
  {
    title: 'Xác thực người dùng',
    description: 'Hệ thống xác thực đa lớp được áp dụng để đảm bảo chỉ có bạn mới có thể truy cập vào tài khoản của mình.',
    icon: UserCheck
  }
]

const terms = [
  {
    title: 'Điều khoản sử dụng',
    description: 'Bằng việc sử dụng dịch vụ của Đón Và Đến, bạn đồng ý tuân thủ các điều khoản và điều kiện của chúng tôi.',
    icon: FileCheck
  },
  {
    title: 'Quy định và hạn chế',
    description: 'Người dùng không được sử dụng dịch vụ cho các mục đích bất hợp pháp hoặc gây hại cho người khác.',
    icon: AlertCircle
  },
  {
    title: 'Cam kết dịch vụ',
    description: 'Chúng tôi cam kết cung cấp dịch vụ chất lượng cao và hỗ trợ khách hàng 24/7.',
    icon: CheckCircle2
  }
]

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chính sách & Điều khoản
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cam kết bảo vệ quyền lợi và mang đến trải nghiệm tốt nhất cho người dùng
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Chính sách bảo mật */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Chính sách bảo mật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privacyPolicies.map((policy) => (
              <div
                key={policy.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-6">
                  <policy.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {policy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Điều khoản sử dụng */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Điều khoản sử dụng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {terms.map((term) => (
              <div
                key={term.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-6">
                  <term.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {term.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chi tiết chính sách */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Chi tiết chính sách
          </h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Quyền và trách nhiệm của người dùng</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  - Người dùng có quyền sử dụng các dịch vụ được cung cấp trên nền tảng Đón Và Đến theo đúng điều khoản.
                </p>
                <p>
                  - Bảo mật thông tin tài khoản và chịu trách nhiệm về mọi hoạt động dưới tài khoản của mình.
                </p>
                <p>
                  - Không được sử dụng dịch vụ cho các mục đích bất hợp pháp hoặc gây hại.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Quy định về thanh toán</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  - Giá cả được niêm yết rõ ràng trước khi sử dụng dịch vụ.
                </p>
                <p>
                  - Hỗ trợ nhiều phương thức thanh toán: tiền mặt, chuyển khoản, ví điện tử.
                </p>
                <p>
                  - Hóa đơn điện tử sẽ được cung cấp sau mỗi chuyến đi.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Chính sách bảo vệ thông tin</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  - Thông tin cá nhân của người dùng được mã hóa và bảo vệ nghiêm ngặt.
                </p>
                <p>
                  - Không chia sẻ thông tin với bên thứ ba khi chưa được sự đồng ý.
                </p>
                <p>
                  - Người dùng có quyền yêu cầu xóa thông tin cá nhân khỏi hệ thống.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Quy trình giải quyết khiếu nại</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  - Tiếp nhận và xử lý khiếu nại trong vòng 24h.
                </p>
                <p>
                  - Có các kênh hỗ trợ 24/7: hotline, email, chat trực tuyến.
                </p>
                <p>
                  - Cam kết giải quyết thỏa đáng mọi khiếu nại của khách hàng.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Chính sách xóa tài khoản</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  - Người dùng có quyền yêu cầu xóa tài khoản và dữ liệu cá nhân khỏi hệ thống Đón Và Đến.
                </p>
                <p>
                  - Sau khi yêu cầu xóa tài khoản, hệ thống sẽ tạm khóa tài khoản trong 7 ngày trước khi xóa hoàn toàn.
                </p>
                <p>
                  - Trong thời gian 7 ngày, bạn có thể hủy yêu cầu xóa tài khoản bằng cách đăng nhập lại.
                </p>
                <div className="mt-6">
                  <a 
                    href="/delete-account" 
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300"
                  >
                    Yêu cầu xóa tài khoản
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 