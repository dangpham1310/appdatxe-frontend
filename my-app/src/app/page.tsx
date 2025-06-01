import { HeroSection } from '@/components/home/hero-section'
import { Features } from '@/components/home/features'
import { PopularDestinations } from '@/components/home/popular-destinations'
import { HowItWorks } from '@/components/home/how-it-works'
import { Stats } from '@/components/home/stats'
import { Testimonials } from '@/components/home/testimonials'
import { QRCodeSVG } from 'qrcode.react'
import { Phone, QrCode } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <HowItWorks />
      <PopularDestinations />
      <Stats />
      <Testimonials />

      {/* Hướng dẫn CTV Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trở Thành Cộng Tác Viên
            </h2>
            <p className="text-xl text-gray-600">
              Kiếm 10% mỗi chuyến – Không cần vốn – Làm mọi lúc mọi nơi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bước 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đăng Ký Ứng Dụng</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Tải ứng dụng Đón và Đến từ App Store/CH Play
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Đăng ký tài khoản với số điện thoại của bạn
                </li>
              </ul>
            </div>

            {/* Bước 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Xác Nhận CTV</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Chụp màn hình tài khoản (phần có số điện thoại)
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Gửi cho Quản trị viên qua Zalo/Facebook
                </li>
              </ul>
            </div>

            {/* Bước 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đặt Hộ Người Khác</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Đặt xe hộ người thân, bạn bè
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Nhận ngay 10% giá trị chuyến đi
                </li>
                <li className="flex items-start text-sm text-gray-500">
                  <span className="mr-2">*</span>
                  Số điện thoại người đi phải khác số CTV
                </li>
              </ul>
            </div>

            {/* Bước 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Giới Thiệu Người Dùng</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Đặt hộ lần đầu hoặc chia sẻ mã giới thiệu
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Nhận 10% hoa hồng từ mọi chuyến đi
                </li>
              </ul>
            </div>
          </div>

          {/* Bonus Info */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-green-50 px-6 py-4 rounded-xl">
              <p className="text-green-800 font-medium">
                🎁 Không giới hạn số người giới thiệu – Thu nhập không giới hạn!
              </p>
            </div>
            

          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tải Ứng Dụng Ngay
            </h2>
            <p className="text-xl text-gray-600">
              Quét mã QR hoặc tải trực tiếp từ App Store/CH Play
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* App Store */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                  <div className="relative bg-white p-4 rounded-2xl shadow-md">
                    <QRCodeSVG
                      value="https://apps.apple.com/vn/app/đón-và-đến/id6739636064?l=vi"
                      size={200}
                      level="H"
                      imageSettings={{
                        src: "/images/app-icon.png",
                        height: 40,
                        width: 40,
                        excavate: true,
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <QrCode className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">App Store</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Dành cho người dùng iPhone và iPad
                  </p>
                  <a 
                    href="https://apps.apple.com/vn/app/đón-và-đến/id6739636064?l=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    Tải từ App Store
                  </a>
                </div>
              </div>
            </div>

            {/* Google Play */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                  <div className="relative bg-white p-4 rounded-2xl shadow-md">
                    <QRCodeSVG
                      value="https://play.google.com/store/apps/details?id=net.donvaden.taxi"
                      size={200}
                      level="H"
                      imageSettings={{
                        src: "/images/app-icon.png",
                        height: 40,
                        width: 40,
                        excavate: true,
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <QrCode className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">CH Play</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Dành cho người dùng Android
                  </p>
                  <a 
                    href="https://play.google.com/store/apps/details?id=net.donvaden.taxi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.799-3.8l-2.878 1.675-2.988-2.988 2.988-2.988 2.878 1.675a1 1 0 0 1 0 1.726zM13.793 12l-8.635-8.635 10.937 6.333L13.793 12z"/>
                    </svg>
                    Tải từ CH Play
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-4 bg-white rounded-full shadow-md">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-gray-900 font-medium">Hotline: 094.111.8212</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
