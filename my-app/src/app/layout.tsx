import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatPlugins } from "@/components/chat-plugins";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Đón Và Đến - Đặt xe tiện chuyến",
  description: "Nền tảng đặt xe tiện chuyến hàng đầu Việt Nam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16 min-h-screen">{children}</div>
        <Footer />
        <ChatPlugins />
      </body>
    </html>
  );
}
