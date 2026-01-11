import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Lee Jungeun Dev Portfolio",
  description: "이정은 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/woff2/SUIT.css"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <div id="wrap" className="w-full h-full min-w-80">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
