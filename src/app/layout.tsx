import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/Components/common/Header";
import Footer from "@/Components/common/Footer";
import ClientLayout from "@/Components/common/ClientLayout"; // Import ClientLayout
import "./globals.css";
import Providers from "./Redux/provider"; // Make sure you have your Providers component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Wrap the entire layout with Providers to make the Redux store available */}
        <Providers>
          <Header />
          <ClientLayout>{children}</ClientLayout> {/* Wrap with ClientLayout */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
