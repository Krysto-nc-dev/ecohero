"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

// header
// sidebar

import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() => {}, []);

  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* header */}
          <div className="flex flex-1 ">
            {/* Sidebar */}
            <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
              {children}
            </main>
          </div>
        </div>
      </body>
      <Toaster />
    </html>
  );
}
