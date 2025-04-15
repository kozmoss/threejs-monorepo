import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello Cube",
  description: "Hello Cube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="tr">
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-slate-100 py-4 shadow-sm">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">3D Model Görüntüleyici</h1>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="bg-slate-100 py-4 mt-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-600">
            &copy; {new Date().getFullYear()} 3D Model Görüntüleyici
          </div>
        </footer>
      </body>
    </html>
  );
}
