"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState, useRef } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: number
  return function (this: any, ...args: Parameters<T>) {
    window.clearTimeout(timeout)
    timeout = window.setTimeout(() => func.apply(this, args), wait)
  }
}

function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t
}

function autoBind(instance: any): void {
  const proto = Object.getPrototypeOf(instance)
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== "constructor" && typeof instance[key] === "function") {
      instance[key] = instance[key].bind(instance)
    }
  })
}

function getFontSize(font: string): number {
  const match = font.match(/(\d+)px/)
  return match ? parseInt(match[1], 10) : 30
}

function createTextTexture(
  gl: any,
  text: string,
  font: string = "bold 30px monospace",
  color: string = "black"
): { texture: any; width: number; height: number } {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  if (!context) throw new Error("Could not get 2d context")

  context.font = font
  const metrics = context.measureText(text)
  const textWidth = Math.ceil(metrics.width)
  const fontSize = getFontSize(font)
  const textHeight = Math.ceil(fontSize * 1.2)

  canvas.width = textWidth + 20
  canvas.height = textHeight + 20

  context.font = font
  context.fillStyle = color
  context.textBaseline = "middle"
  context.textAlign = "center"
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillText(text, canvas.width / 2, canvas.height / 2)

  // Simple texture object
  const texture = {
    image: canvas,
    needsUpdate: true
  }
  
  return { texture, width: canvas.width, height: canvas.height }
}

interface CircularGalleryProps {
  items?: { image: string; text: string }[]
  bend?: number
  textColor?: string
  borderRadius?: number
  font?: string
}

const CircularGallery = ({
  items,
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 30px DM Sans",
}: CircularGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const defaultItems = [
    {
      image: "/lovable-uploads/ed194791-0563-4d55-83ff-4803bebf756a.png",
      text: "Simetria Sagrada",
    },
    {
      image: "/lovable-uploads/d792fed9-cddd-4420-882d-dc8ebeb6ac80.png", 
      text: "Caminhos Serpenteantes",
    },
    {
      image: "/lovable-uploads/d9836227-7562-49de-8d74-47d47ec3887c.png",
      text: "Movimento Suspenso",
    },
    {
      image: "/lovable-uploads/18ebb55b-91bf-4284-9904-d82216f15796.png",
      text: "Retrato Urbano",
    },
    {
      image: "/lovable-uploads/d0263766-1eab-44a0-aea5-5aeaacaffa15.png",
      text: "Perspectiva Infinita",
    },
    {
      image: "/lovable-uploads/fcddc391-ede7-42c5-ba0b-3aae2fa77672.png",
      text: "Nostalgia Cromada",
    },
  ]

  const galleryItems = items && items.length ? items : defaultItems

  // Simple implementation without OGL for now
  return (
    <div
      className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing bg-transparent flex items-center justify-center"
      ref={containerRef}
    >
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {galleryItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-64">
            <img 
              src={item.image} 
              alt={item.text}
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="text-center mt-2 text-sm" style={{ color: textColor }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { CircularGallery }