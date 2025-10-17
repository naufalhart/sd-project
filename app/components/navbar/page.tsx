"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/image/logo.jpg"
                alt="MyStore Logo"
                width={879}
                height={259}
                className="h-16 w-auto rounded"
              />
              <span className="text-xl font-semibold text-gray-800 hover:text-gray-900">
                {/* Nama brand bisa ditaruh di sini */}
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-10">
            <Link href="/" className="text-black-700 hover:text-gray-900 font-serif font-semibold">
              Home
            </Link>
            <Link href="#products" className="text-black-700 hover:text-gray-900 font-serif font-semibold">
              Products
            </Link>
            <Link href="#testimoni" className="text-black-700 hover:text-gray-900 font-serif font-semibold">
              Testimoni
            </Link>
            <Link href="#footer" className="text-black-700 hover:text-gray-900 font-serif font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
