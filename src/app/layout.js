"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextAuthSessionProvider from "./providers/NextAuthSessionProvider";


export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}