"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  "/slider/Slider 01.jpg",
  "/slider/Slider 02.jpg",
  "/slider/Slider 03.jpeg",
  "/slider/Slider 04.jpg"
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Carousel Section (Left) */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-80 bg-[#e3eafc] dark:bg-[#23243a] rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
            {/* Simple carousel (manual for demo) */}
            <Image src={carouselImages[current]} alt="carousel" width={600} height={320} className="w-full h-full object-cover rounded-xl transition-all duration-700" />
          </div>
          <div className="flex gap-2 mt-4">
            {carouselImages.map((img, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)}>
                <Image src={img} alt="carousel-thumb" width={64} height={48} className={`w-16 h-12 object-cover rounded-md border ${current === idx ? 'border-indigo-500' : 'border-gray-300 dark:border-gray-700'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Two Sections Up & Down */}
        <div className="flex flex-col gap-8 h-80">
          {/* Top Section */}
          <div className="flex-1 bg-[#f5f7fa] dark:bg-[#23243a] rounded-xl shadow-lg p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Featured Products</h2>
            <p className="text-gray-700 dark:text-gray-300">Check out our top picks for this season!</p>
          </div>
          {/* Bottom Section */}
          <div className="flex-1 bg-[#e3eafc] dark:bg-[#2c2e4a] rounded-xl shadow-lg p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Special Offers</h2>
            <p className="text-gray-700 dark:text-gray-300">Don&apos;t miss our limited-time discounts and deals!</p>
          </div>
        </div>
      </div>
    </div>
  );
}