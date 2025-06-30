"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPlayerProps {
  src: string
  poster: string
  title: string
  className?: string
}

export function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        className="w-full h-full object-cover rounded-lg"
        muted={isMuted}
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Controls Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center rounded-lg">
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            onClick={togglePlay}
            className="bg-white/90 hover:bg-white text-black rounded-full w-12 h-12 p-0"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </Button>
          <Button
            size="sm"
            onClick={toggleMute}
            className="bg-white/90 hover:bg-white text-black rounded-full w-12 h-12 p-0"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
        <h3 className="text-white font-medium text-sm">{title}</h3>
      </div>
    </div>
  )
}
