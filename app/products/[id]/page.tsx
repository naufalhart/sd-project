"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/page";
import products from "../../../public/data/products.json";
import { notFound } from "next/navigation";
import ProductComponent from "../page";
import Footer from "@/app/components/footer/page";
import Link from "next/link";

// ✅ Tambahkan interface untuk tipe params
interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: ProductPageProps) {
  // ✅ Gunakan React.use() untuk unwrap promise params (Next.js 15+)
  const { id } = React.use(params) as { id: string };

  const [currentIndex, setCurrentIndex] = useState(0);
  const product = products.find((p) => p.id.toString() === id);
  if (!product) notFound();

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % product.image.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + product.image.length) % product.image.length
    );

  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-white font-serif">
        <div className="pt-6">
          {/* breadcrumb tetap */}
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="mr-2 text-sm font-medium text-gray-900"
                  />
                    Clothing
                  <svg
                    viewBox="0 0 16 20"
                    width="16"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <Link
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                />
                  {product.name}
              </li>
            </ol>
          </nav>

          {/* Grid baru: kiri = carousel, kanan = detail */}
          <div className="mx-auto mt-10 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 mb-10">
            {/* Carousel kiri */}
            <div className="relative w-full aspect-square overflow-hidden shadow-md">
              {/* Wrapper semua gambar */}
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {product.image && product.image.length > 0 ? (
                  product.image.map((img, index) => (
                    <div key={index} className="relative w-full aspect-square flex-shrink-0">
                      <Image
                        src={`/image/${img}`}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-sm">
                    No image available
                  </div>
                )}
              </div>

              {/* tombol kiri/kanan */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                ›
              </button>

              {/* indikator */}
              {product.image && product.image.length > 0 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                  {product.image.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentIndex
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>


            {/* Detail kanan (ambil dari layout lama) */}
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>
              <p className="mt-4 text-2xl font-semibold text-gray-800 font-sans">
                {product.price}
              </p>


              {/* Colors */}
                <div>
                  <h3 className="text-sm font-semibold text-black-900 mt-6">Color</h3>
                  <fieldset aria-label="Choose a color" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                      {product.color && product.color.length > 0 ? (
                        product.color.map((size: string, index: number) => (
                          <label
                            key={index}
                            aria-label={size}
                            className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 p-3 
                                      text-black-500 select-none"
                          >
                            {/* Radio dinonaktifkan */}
                            <input
                              type="radio"
                              name="size"
                              value={size}
                              disabled
                              readOnly
                              className="absolute inset-0 appearance-none focus:outline-none"
                            />
                            <span className="text-sm font-medium">{size}</span>
                          </label>
                        ))
                      ) : (
                        <p className="col-span-4 text-sm text-gray-500 italic text-center">
                          This item is out of stock.
                        </p>
                      )}
                    </div>
                  </fieldset>
                </div>

                <div className="mt-6">
                  <div>
                  {/* Baris utama */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">Size</h3>
                    <button
                      onClick={() => setShowGuide(true)}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </button>
                  </div>

                  {/* Modal (muncul jika showGuide = true) */}
                  {showGuide && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4 relative">
                        {/* Tombol close */}
                        <button
                          onClick={() => setShowGuide(false)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
                        >
                          &times;
                        </button>

                        {/* Judul modal */}
                        <h2 className="text-lg font-semibold mb-3 text-center">
                          Size Guide
                        </h2>

                        {/* Gambar panduan ukuran */}
                        <div className="relative w-full h-64">
                          <Image
                            src="/image/size-guide.webp"
                            alt="Size guide chart"
                            fill
                            className="object-contain rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                      {product.size && product.size.length > 0 ? (
                        product.size.map((size: string, index: number) => (
                          <label
                            key={index}
                            aria-label={size}
                            className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 p-3 
                                      text-black-500 select-none"
                          >
                            {/* Radio dinonaktifkan */}
                            <input
                              type="radio"
                              name="size"
                              value={size}
                              disabled
                              readOnly
                              className="absolute inset-0 appearance-none focus:outline-none"
                            />
                            <span className="text-sm font-medium uppercase">{size}</span>
                          </label>
                        ))
                      ) : (
                        <p className="col-span-4 text-sm text-gray-500 italic text-center">
                          This item is out of stock.
                        </p>
                      )}
                    </div>
                  </fieldset>
                </div>

              {product.description ? (
                <p className="mt-6 text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              ) : (
                <p className="mt-6 text-gray-700 leading-relaxed italic">
                  No description
                </p>
              )}
              


              <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                {product.highlight && product.highlight.length > 0 ? (
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlight.map((item: string, index: number) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm italic">No highlights available.</p>
                )}
              </div>
            </div>


              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Details
                </h2>{" "}
                <div className="mt-4 space-y-6">
                  {product.details ? (
                      <p className="text-sm text-gray-600">
                        {product.details}
                      </p>
                  ) : (
                    <p className="text-sm text-gray-600 italic">
                        No product details
                    </p>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif
                     mx-auto max-w-2xl px-4 mt-12 sm:px-6 lg:max-w-7xl lg:px-8">Explore more</h2>
          <ProductComponent />
          <Footer />
        </div>
      </div>
    </>
  );
}
