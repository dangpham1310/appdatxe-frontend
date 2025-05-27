'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { Phone } from 'lucide-react'
import Image from 'next/image'

// Định nghĩa type cho ZaloSocialSDK và các thuộc tính tùy chỉnh
declare global {
  interface Window {
    ZaloSocialSDK?: {
      reload: () => void;
    };
  }
}

interface FacebookMessengerProps extends React.HTMLAttributes<HTMLDivElement> {
  attribution?: string;
  'page_id'?: string;
}

interface ZaloChatWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-oaid'?: string;
  'data-welcome-message'?: string;
  'data-autopopup'?: string;
  'data-width'?: string;
  'data-height'?: string;
}

export function ChatPlugins() {
  useEffect(() => {
    // Khởi tạo Zalo Widget
    if (typeof window !== 'undefined' && window.ZaloSocialSDK) {
      window.ZaloSocialSDK.reload();
    }
  }, [])

  return (
    <>
      <Script id="facebook-jssdk" strategy="lazyOnload">
        {`
          window.fbAsyncInit = function() {
            FB.init({
              xfbml: true,
              version: 'v18.0'
            });
          };
        `}
      </Script>

      <Script
        id="messenger-widget"
        strategy="lazyOnload"
        src="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js"
      />

      <div id="fb-root" />
      <div 
        className="fb-customerchat" 
        data-attribution="setup_tool" 
        data-page-id="YOUR_PAGE_ID_HERE"
      />

      {/* Nút Zalo */}
      <a
        href="https://zalo.me/0941118212"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-44 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:shadow-xl p-0 overflow-hidden"
      >
        <Image 
          src="/images/zalo-icon.png"
          alt="Zalo"
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </a>

      {/* Nút gọi điện */}
      <a
        href="tel:0941118212"
        className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  )
} 