'use client'

import { slideData } from '@/lib/sample'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function SlideCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSlide = slideData[currentIndex]

  // NEXT
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === slideData.length - 1) {
        return 0
      }

      return prev + 1
    })
  }

  // PREVIOUS
  const previousSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return slideData.length - 1
      }

      return prev - 1
    })
  }

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="relative h-[560px] overflow-hidden rounded-2xl">
        {/* IMAGE */}
        <img
          key={currentSlide.image}
          src={currentSlide.image}
          alt={currentSlide.title}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* PREVIOUS */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Slide sebelumnya"
          className="
            cursor-pointer
            absolute left-5 top-1/2 z-20
            flex h-12 w-12
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-black/50
            text-white
            transition
            hover:bg-black/70
          "
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* NEXT */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Slide berikutnya"
          className="
          cursor-pointer
            absolute right-5 top-1/2 z-20
            flex h-12 w-12
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-black/50
            text-white
            transition
            hover:bg-black/70
          "
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* CONTENT */}
        <div
          key={currentSlide.title}
          className="
            absolute bottom-0 left-0 z-10 w-full
            animate-[fadeIn_0.7s_ease-in-out]
       p-10   md:px-20 
          "
        >
          {/* CATEGORY + TIME */}
          <div className="mb-4 flex items-center gap-4">
            <h2
              href={currentSlide.categoryLink}
              className="
                rounded-lg bg-red-600
                px-4 py-2
                text-sm font-bold text-white
               
              "
            >
              {currentSlide.category}
            </h2>

            <div className="flex items-center gap-2 text-white">
              <Clock className="h-5 w-5" />
              <span>{currentSlide.time}</span>
            </div>
          </div>

          {/* TITLE */}
          <Link href={currentSlide.articleLink}>
            <h1
              className="
                max-w-5xl
                text-3xl font-bold
                leading-tight text-white
                transition hover:text-gray-200
                md:text-5xl
                
              "
            >
              {currentSlide.title}
            </h1>
          </Link>

          {/* DESCRIPTION */}
          <p className="hidden md:block mt-5 max-w-4xl text-base leading-7 text-gray-200 md:text-xl">
            {currentSlide.description}
          </p>
        </div>

        {/* INDICATOR */}
        <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2">
          {slideData.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ke slide ${index + 1}`}
              className={`
                h-2.5 rounded-full transition-all duration-300
                ${
                  currentIndex === index
                    ? 'w-8 bg-white'
                    : 'w-2.5 bg-white/50 hover:bg-white/80'
                }
              `}
            />
          ))}
        </div>

        {/* SLIDE NUMBER */}
        <div className="absolute right-8 top-6 z-20 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white">
          {currentIndex + 1} / {slideData.length}
        </div>
      </div>
    </section>
  )
}
