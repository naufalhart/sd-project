"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images = [] }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="bg-white relative w-full overflow-hidden aspect-[21/9]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full aspect-[21/9] relative">
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
        ))}
      </div>

      {/* Tombol navigasi */}
      <button
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ›
      </button>

      {/* Indikator */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
