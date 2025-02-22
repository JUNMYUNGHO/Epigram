"use client";  // 클라이언트 컴포넌트로 지정

import AuthButton from "@/components/AuthButton";
import { SessionProvider } from "next-auth/react"; // SessionProvider import
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 폰트 설정
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {/* <html>와 <body> 태그를 추가하여 구조를 수정 */}
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div>
            <header className="p-4 shadow-md flex justify-between items-center">
              <h1 className="text-xl font-bold">Epigram</h1>
              <AuthButton />
            </header>
            <main>{children}</main>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}

