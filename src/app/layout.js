"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}