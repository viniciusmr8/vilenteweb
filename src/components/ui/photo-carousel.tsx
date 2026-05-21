import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PhotoCarouselProps {
  images: { src: string; alt: string }[]
  className?: string
}

export const PhotoCarousel = ({ images, className }: PhotoCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 1 },
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(max-width: 767px)': { slidesToScroll: 1 }
    }
  })
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [isHovering, setIsHovering] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  const defaultImages = [
    { src: "/lovable-uploads/01a0f87d-2e08-4b71-a477-ed81ebed19b8.png", alt: "Photography 1" },
    { src: "/lovable-uploads/32fa3b12-d862-416a-9f1b-61e750327738.png", alt: "Photography 2" },
    { src: "/lovable-uploads/0e78f6f7-336f-4f28-ba20-d3713421d9f9.png", alt: "Photography 3" },
    { src: "/lovable-uploads/76731e5d-ff55-4dab-88bd-9532ac2ce043.png", alt: "Photography 4" },
    { src: "/lovable-uploads/7cd4e275-28dc-4a08-9b21-bb79e370cb90.png", alt: "Photography 5" },
    { src: "/lovable-uploads/c1cb81d0-25f8-49d0-abfe-daeaefe0de17.png", alt: "Photography 6" },
    { src: "/lovable-uploads/b470ef91-3a97-40d0-919f-9bd5204606ee.png", alt: "Photography 7" },
    { src: "/lovable-uploads/bc1535d6-c89a-4d97-a793-0e5240b50e01.png", alt: "Photography 8" },
    { src: "/lovable-uploads/b7ce6046-54ef-4231-b6b9-2ac33a8aaeca.png", alt: "Photography 9" },
    { src: "/lovable-uploads/170b987d-aad7-4a7e-9dd5-40e131efa763.png", alt: "Photography 10" },
  ]

  const carouselImages = images.length > 0 ? images : defaultImages

  const handleWheel = (e: React.WheelEvent) => {
    if (isHovering) {
      e.preventDefault();
      if (e.deltaY > 0) {
        scrollNext();
      } else {
        scrollPrev();
      }
    }
  };

  return (
    <div 
      className={cn("relative w-full", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onWheel={handleWheel}
    >
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4 
                         md:flex-[0_0_50%] 
                         lg:flex-[0_0_33.333%] 
                         xl:flex-[0_0_25%]"
            >
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-gray-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[rgba(64,224,208,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-gray-300 w-10 h-10 rounded-full shadow-lg"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft className="h-4 w-4 text-gray-700" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-gray-300 w-10 h-10 rounded-full shadow-lg"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight className="h-4 w-4 text-gray-700" />
      </Button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors duration-200",
              index === selectedIndex 
                ? "bg-primary" 
                : "bg-gray-300 hover:bg-gray-400"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}