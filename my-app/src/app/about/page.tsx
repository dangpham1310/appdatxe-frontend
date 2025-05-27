'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, MapPin, Shield, Star, Clock, Users, Award, Car, CheckCircle2, Headphones, Settings, Target, Zap } from 'lucide-react'
import { usePathname } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '100K+', label: 'Người dùng tin tưởng', icon: Users },
  { number: '10K+', label: 'Tài xế chuyên nghiệp', icon: Star },
  { number: '63', label: 'Tỉnh thành phủ sóng', icon: MapPin },
  { number: '4.8/5', label: 'Đánh giá trung bình', icon: Award },
]

const values = [
  {
    title: 'An toàn là ưu tiên hàng đầu',
    description: 'Chúng tôi đặt sự an toàn của khách hàng và đối tác tài xế lên hàng đầu trong mọi hoạt động.',
    icon: Shield,
  },
  {
    title: 'Chất lượng dịch vụ',
    description: 'Cam kết mang đến trải nghiệm dịch vụ tốt nhất thông qua đội ngũ tài xế chuyên nghiệp và hệ thống công nghệ hiện đại.',
    icon: Star,
  },
  {
    title: 'Đổi mới liên tục',
    description: 'Không ngừng cải tiến và phát triển để mang đến những giải pháp vận chuyển tốt nhất cho cộng đồng.',
    icon: Clock,
  },
]

const features = [
  {
    title: 'Đặt xe dễ dàng',
    description: 'Chỉ với vài thao tác đơn giản trên ứng dụng, bạn có thể đặt xe ngay lập tức.',
    icon: Car,
  },
  {
    title: 'Tài xế chuyên nghiệp',
    description: 'Đội ngũ tài xế được tuyển chọn kỹ càng và đào tạo chuyên nghiệp.',
    icon: CheckCircle2,
  },
  {
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn mọi lúc mọi nơi.',
    icon: Headphones,
  },
  {
    title: 'Công nghệ hiện đại',
    description: 'Ứng dụng công nghệ tiên tiến để tối ưu hóa trải nghiệm người dùng.',
    icon: Settings,
  },
]

const advantages = [
  {
    title: 'Giá cả cạnh tranh',
    description: 'Chúng tôi cam kết mang đến mức giá hợp lý và minh bạch cho mọi chuyến đi.',
    icon: Target,
  },
  {
    title: 'Thanh toán linh hoạt',
    description: 'Đa dạng phương thức thanh toán, từ tiền mặt đến ví điện tử.',
    icon: Zap,
  },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const statsRefs = useRef<(HTMLDivElement | null)[]>([])
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])
  const pathname = usePathname()

  useEffect(() => {
    let ctx: any
    
    const initAnimations = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      // Clear any existing ScrollTriggers
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }

      gsap.registerPlugin(ScrollTrigger)

      // Create a new context
      ctx = gsap.context(() => {
        // Hero text reveal
        const heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })

        heroTimeline
          .from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          })
          .from('.hero-description', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          }, '-=0.5')

        // Content sections reveal
        contentRefs.current.forEach((ref, index) => {
          if (ref) {
            gsap.from(ref, {
              opacity: 0,
              y: 30,
              duration: 1,
              scrollTrigger: {
                trigger: ref,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              delay: index * 0.2
            })
          }
        })

        // Policy cards stagger
        gsap.from('.policy-card', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.policy-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          ease: 'back.out(1.7)'
        })

        // Terms cards stagger
        gsap.from('.terms-card', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.terms-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          ease: 'back.out(1.7)'
        })
      })

      // Scroll to top when component mounts
      window.scrollTo(0, 0)
    }

    // Initialize animations
    initAnimations()

    // Cleanup function
    return () => {
      if (ctx) {
        ctx.revert() // This will clean up all GSAP animations
      }
    }
  }, [pathname]) // Re-run when pathname changes

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[70vh] w-full bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              Về Đón Và Đến
            </h1>
            <p className="hero-description text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Nền tảng đặt xe trực tuyến hàng đầu Việt Nam
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Giới thiệu */}
        <div 
          ref={el => contentRefs.current[0] = el}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Chúng tôi là ai?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Đón Và Đến là nền tảng công nghệ kết nối hành khách với các tài xế chuyên nghiệp trên khắp Việt Nam. Chúng tôi cam kết mang đến trải nghiệm di chuyển an toàn, tiện lợi và giá cả phải chăng cho mọi người dùng.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Được thành lập với sứ mệnh hiện đại hóa ngành vận tải hành khách, chúng tôi không ngừng đổi mới và phát triển để đáp ứng nhu cầu ngày càng cao của khách hàng.
              </p>
              <div className="pt-6">
                <a 
                  href="tel:0941118212"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0941.118.212
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=800&auto=format&fit=crop&q=80"
                alt="Đội ngũ Đón Và Đến"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tính năng nổi bật - NEW */}
        <div 
          ref={el => contentRefs.current[1] = el}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Tính năng nổi bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                ref={el => featureRefs.current[index] = el}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thành tựu */}
        <div 
          ref={el => contentRefs.current[2] = el}
          className="mb-32 py-20 bg-gray-50 rounded-3xl"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Thành tựu của chúng tôi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={el => statsRefs.current[index] = el}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-900 text-white transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="number text-5xl font-bold text-gray-900 mb-3">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sứ mệnh & Tầm nhìn */}
        <div 
          ref={el => contentRefs.current[3] = el}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Sứ mệnh & Tầm nhìn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 text-white p-12 rounded-2xl transform hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-semibold mb-6">Sứ mệnh</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Chúng tôi cam kết mang đến giải pháp vận chuyển thông minh, an toàn và tiện lợi, góp phần nâng cao chất lượng cuộc sống của cộng đồng.
              </p>
            </div>
            <div className="bg-gray-900 text-white p-12 rounded-2xl transform hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-semibold mb-6">Tầm nhìn</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Trở thành nền tảng đặt xe hàng đầu tại Việt Nam, tiên phong trong việc ứng dụng công nghệ để tối ưu hóa trải nghiệm di chuyển.
              </p>
            </div>
          </div>
        </div>

        {/* Giá trị cốt lõi */}
        <div 
          ref={el => contentRefs.current[4] = el}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-900 text-white">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ưu điểm vượt trội - NEW */}
        <div 
          ref={el => contentRefs.current[5] = el}
          className="mb-32 bg-gray-900 text-white p-16 rounded-3xl"
        >
          <h2 className="text-4xl font-bold mb-16 text-center">
            Ưu điểm vượt trội
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {advantages.map((advantage, index) => (
              <div 
                key={advantage.title}
                className="p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-900 text-white">
                  <advantage.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Liên hệ */}
        <div 
          ref={el => contentRefs.current[6] = el}
          className="bg-gray-900 text-white p-12 rounded-3xl"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Liên hệ với chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <a href="tel:0941118212" className="flex items-center space-x-4 group">
              <div className="flex-shrink-0">
                <Phone className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Điện thoại</div>
                <div className="text-lg font-semibold group-hover:text-white transition-colors">0941.118.212</div>
              </div>
            </a>
            <a href="mailto:contact@Đón Và Đến.com" className="flex items-center space-x-4 group">
              <div className="flex-shrink-0">
                <Mail className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-lg font-semibold group-hover:text-white transition-colors">contact@Đón Và Đến.com</div>
              </div>
            </a>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Địa chỉ</div>
                <div className="text-lg font-semibold">TP. Hồ Chí Minh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 