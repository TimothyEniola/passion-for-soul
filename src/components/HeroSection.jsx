import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/mockData';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const swipeStartX = useRef(0);
  const interactionTimeout = useRef(null);

  const SWIPE_THRESHOLD = 70; // Minimum distance for a swipe

  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => {
      clearInterval(timer);
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
    };
  }, [isInteracting]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (interactionTimeout.current) {
      clearTimeout(interactionTimeout.current);
    }
  };

  const handleInteractionEnd = () => {
    // Resume autoplay after a delay
    interactionTimeout.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3000); // 3-second delay before resuming
  };

  const handlePointerDown = (e) => {
    handleInteractionStart();
    swipeStartX.current = e.clientX;
    // Add a class to prevent text selection while dragging
    e.currentTarget.classList.add('swiping');
  };

  const handlePointerUp = (e) => {
    const swipeEndX = e.clientX;
    const deltaX = swipeEndX - swipeStartX.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) goToNext();
      else goToPrevious();
    }
    handleInteractionEnd();
    e.currentTarget.classList.remove('swiping');
  };

  return (
    <section id="home" className="relative h-screen cursor-grab active:cursor-grabbing" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#011F5B]/90 via-[#011F5B]/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h2 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                  {slide.title}
                </h2>
                <div className="mb-8">
                  <p className="text-white/90 text-xl md:text-2xl mb-2 italic">
                    {slide.verse}
                  </p>
                  <p className="text-[#d4af37] text-lg">
                    {slide.verseReference}
                  </p>
                </div>
                {/* <a
                  href={slide.ctaLink}
                  className="inline-block bg-[#d4af37] text-[#011F5B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c19b2f] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {slide.ctaText}
                </a> */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#d4af37] w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;