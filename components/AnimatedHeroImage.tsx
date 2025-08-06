"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function AnimatedHeroImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    {
      src: "/Education.jpeg",
      alt: "Education programs and initiatives"
    },
    {
      src: "/Welfare 40.jpeg", 
      alt: "Welfare and community support programs"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentImageIndex 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-110"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 