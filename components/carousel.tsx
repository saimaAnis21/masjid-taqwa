"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  imageUrl: string;
  text: string;
}

export default function Carousel() {
  const slides: CarouselSlide[] = [
    {
      imageUrl: "https://i.postimg.cc/QChSh1n9/47fa4537-aff7-44c4-ab7e-a4ad6c8df59d.png",
      text: "New Muslim Classes",
    },
    {
      imageUrl: "https://i.postimg.cc/c40VT8hb/03257de5-221a-48f5-b854-7f768349561f.png",
      text: "Madrassah for kids",
    },
    {
      imageUrl: "https://i.postimg.cc/7ZK3jbz9/bf44cafb-e57a-48f2-9cc4-24c47d3a9074.png",
      text: "Intro to Islam",
    },
    {
      imageUrl: "https://i.postimg.cc/vBj7mmty/bbdc44ad-2e40-4349-9a57-522247a392b6.png",
      text: "Tafseer Classes",
    },
    {
      imageUrl: "https://i.postimg.cc/90sph9WR/ae9ac9ef-a09e-446b-8448-883d1a8b7709.png",
      text: "Friday Youth Nights",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* Carousel container */}
      <div className="relative h-[300px] md:h-[200px] overflow-hidden rounded-lg">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}>
            <Image
              src={slide.imageUrl || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
          aria-label="Previous slide">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
          aria-label="Next slide">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
