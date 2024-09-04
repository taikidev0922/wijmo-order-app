import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { Users, Package, FileText, LayoutDashboard } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "管理システム",
  description: "得意先管理、商品管理、受注作成システム",
};

const navigation = [
  { name: "得意先管理", href: "/customers", icon: Users },
  { name: "商品管理", href: "/products", icon: Package },
  { name: "受注作成", href: "/orders", icon: FileText },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
            {/* ヘッダー */}
            <header className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <Link
                    href="/"
                    className="flex items-center space-x-3 text-xl font-semibold hover:text-blue-100 transition-colors"
                  >
                    <LayoutDashboard className="h-6 w-6" />
                    <span>管理システム</span>
                  </Link>
                  <nav className="hidden md:flex space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-2 text-sm font-medium hover:text-blue-100 transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                  <div className="flex items-center space-x-4">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </header>

            {/* メインコンテンツエリア */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900">
              <div className="container mx-auto px-4 py-8">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
