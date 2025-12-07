import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Contextprovider } from "@/contect/context";
import GlobalLoader from "@/component/GlobalLoader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fastfood",
  description: "fastfood for ever ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main className="flex flex-col justify-between min-h-screen">
          <header className="fixed top-0 w-full ">
            <Header />
          </header>
          <div className="mx-8">
            <Contextprovider>
              <GlobalLoader/>
              {children}
            </Contextprovider>
          </div>
          <footer className=" bottom-0">
            <Footer />
          </footer>

        </main>
      </body>
    </html>
  );
}
