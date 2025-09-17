'use client';
import { useEffect, useState } from 'react';

const Banner = () => {
  const images = [
    '/assets/images/banner/1.jpg',
    '/assets/images/banner/2.jpg',
    '/assets/images/banner/3.jpg',
    '/assets/images/banner/4.jpg',
    '/assets/images/banner/5.jpg',
    '/assets/images/banner/6.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      {/* Images with smooth transition */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Affordable <br /> Price For Car Servicing
        </h1>
        <p className="mt-4 text-gray-200 max-w-lg">
          There Are Many Variations Of Passages Of Available, But The Majority
          Have Suffered Alteration In Some Form
        </p>

        <div className="mt-6 flex space-x-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition">
            Discover More
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
            Latest Project
          </button>
        </div>
      </div>

      {/* Slider Arrows */}
      <div className="absolute bottom-6 right-6 flex space-x-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <span className="text-white text-lg">←</span>
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition"
        >
          <span className="text-white text-lg">→</span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
