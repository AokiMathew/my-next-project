import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata:Metadata={
  metadataBase:new URL("http:localhost:3000"),
  title:{
      template:"%s | シンプルなコーポレートサイト",
      default:"シンプルなコーポレートサイト",
  },
  description:"Next.js+ヘッドレスCMSで始める! 簡単・モダンWebサイト制作入門で作成されるサイトです。",
  openGraph:{
    title:"シンプルなコーポレートサイト",
    description:"ext.js+ヘッドレスCMSで始める! 簡単・モダンWebサイト制作入門で作成されるサイトです。",
    images:["/ogp.png"],
  },
  alternates:{
    canonical:"http://localhost:3000",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
