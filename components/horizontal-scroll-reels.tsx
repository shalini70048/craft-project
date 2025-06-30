"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Reel {
  id: number
  title: string
  thumbnail: string
  videoUrl: string
  duration: string
}

interface HorizontalScrollReelsProps {
  reels: Reel[]
}

export function HorizontalScrollReels({ reels }: HorizontalScrollReelsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 160 : window.innerWidth < 1024 ? 200 : 240
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative">
      {/* Scroll Buttons - Hidden on mobile */}
      <div className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
        <Button
          onClick={() => scroll("left")}
          size="sm"
          className="bg-white/95 hover:bg-white text-rose-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-200 border border-rose-200"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </Button>
      </div>

      <div className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
        <Button
          onClick={() => scroll("right")}
          size="sm"
          className="bg-white/95 hover:bg-white text-rose-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-200 border border-rose-200"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </Button>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide pb-4 px-2 sm:px-12 lg:px-16"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reels.map((reel) => (
          <Card
            key={reel.id}
            className="group relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex-shrink-0"
            style={{
              width: window.innerWidth < 640 ? "140px" : window.innerWidth < 1024 ? "180px" : "200px",
            }}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src={reel.thumbnail || "/placeholder.svg"}
                  alt={reel.title}
                  width={200}
                  height={356}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/95 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] lg:border-l-[10px] border-l-rose-600 border-t-[4px] sm:border-t-[5px] lg:border-t-[6px] border-t-transparent border-b-[4px] sm:border-b-[5px] lg:border-b-[6px] border-b-transparent ml-0.5 sm:ml-1"></div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {reel.duration}
                </div>

                {/* Gradient Overlay for Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 sm:p-3">
                  <h3 className="text-white font-medium text-xs sm:text-sm leading-tight line-clamp-2">{reel.title}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile scroll indicator */}
      <div className="flex justify-center mt-3 sm:hidden">
        <p className="text-xs text-gray-500 bg-white/80 px-3 py-1 rounded-full">← Swipe to see more →</p>
      </div>
    </div>
  )
}
