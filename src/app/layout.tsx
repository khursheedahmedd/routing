import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Learning-Next.JS",
    template: "%s | Learning-Next.Js",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className=" py-2">
          <Navbar />
        </header>
        {children}
        <footer className="bg-gray-800 py-2">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
