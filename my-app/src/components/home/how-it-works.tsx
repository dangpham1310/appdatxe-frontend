'use client'

export function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Chọn điểm đón và đến',
      description: 'Nhập địa chỉ điểm đón và điểm đến của bạn',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Chọn giờ đón',
      description: 'Chọn thời gian bạn muốn được đón',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Tài xế chấp nhận',
      description: 'Tài xế phù hợp sẽ nhận chuyến của bạn',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Bắt đầu chuyến đi',
      description: 'Tận hưởng chuyến đi an toàn và thoải mái',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">
            Quy trình đơn giản
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Đặt xe chỉ với 4 bước đơn giản
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative flex flex-col items-center"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Line connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[50%] top-12 hidden h-0.5 w-full bg-gradient-to-r from-green-600/60 to-green-600/0 md:block" />
                )}
                
                {/* Icon */}
                <div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-600/10 ring-8 ring-green-600/5 transition-all duration-300 group-hover:bg-green-600/20">
                  <div className="absolute -inset-px rounded-full bg-gradient-to-br from-green-600 to-green-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 