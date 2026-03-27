import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

// Hero slides with local image routing, responsive fits and tailored object-positions
const slides = [
  {
    image: '/images/hero-1.png',
    subtitle: 'Nuestra Casa',
    title: 'Bienvenidos a\nÁlvarez Automotores.',
    cta: { label: 'Conocer más', href: '#empresa' },
    fitDesktop: 'sm:object-cover',
    posDesktop: 'sm:object-[center_60%]',
    fitMobile: 'object-cover',
    posMobile: 'object-center'
  },
  {
    image: '/images/hero-2.png',
    subtitle: 'Calidad Premium',
    title: 'Usados con\ngarantía real.',
    cta: { label: 'Ver vehículos', href: '#usados' },
    fitDesktop: 'sm:object-cover',
    posDesktop: 'sm:object-[center_80%]',
    fitMobile: 'object-cover',
    posMobile: 'object-[center_70%]'
  },
  {
    image: '/images/hero-3.jpg',
    imageLeft: '/images/hero-3-left.jpg',
    imageRight: '/images/hero-3-right.jpg',
    subtitle: 'Oportunidades únicas',
    title: 'Tu próxima\ncamioneta.',
    cta: { label: 'Solicitar cotización', href: '#contacto' },
    // A classic centered placement works best since it's flanked by two other trucks
    fitDesktop: 'sm:object-cover',
    posDesktop: 'sm:object-center',
    fitMobile: 'object-cover',
    posMobile: 'object-[center_25%]'
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-blue"
    >
      {/* Background image slider with parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ y: yBg, scale: scaleBg }}
          className="absolute inset-0 z-0 bg-brand-black flex overflow-hidden"
        >
          {slide.imageLeft && slide.imageRight ? (
            // 3-Image Desktop Grid Layout
            <>
              {/* Left Image Flank */}
              <div className="hidden sm:block w-1/3 h-full relative shadow-[inset_-20px_0_50px_rgba(0,0,0,0.5)] z-0">
                <img
                  src={slide.imageLeft}
                  alt=""
                  className="w-full h-full object-cover grayscale-[30%] contrast-[1.1] saturate-[1.2] brightness-[0.6]"
                />
              </div>

              {/* Center Main Image */}
              <div className="w-full sm:w-1/3 h-full relative z-10 shadow-[0_0_80px_rgba(0,0,0,0.9)] scale-[1.02]">
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className={`w-full h-full ${slide.fitMobile} ${slide.fitDesktop} ${slide.posMobile} ${slide.posDesktop} contrast-[1.15] saturate-[1.20] brightness-[0.85] rounded-none sm:rounded-sm shadow-2xl`}
                  loading="eager"
                />
              </div>

              {/* Right Image Flank */}
              <div className="hidden sm:block w-1/3 h-full relative shadow-[inset_20px_0_50px_rgba(0,0,0,0.5)] z-0">
                <img
                  src={slide.imageRight}
                  alt=""
                  className="w-full h-full object-cover grayscale-[30%] contrast-[1.1] saturate-[1.2] brightness-[0.6]"
                />
              </div>
            </>
          ) : (
            // Standard Single Image Layout with Blur Backbone
            <>
              <img
                src={slide.image}
                alt=""
                className="hidden sm:block w-full h-full object-cover blur-3xl opacity-30 scale-110"
                aria-hidden="true"
              />
              <img
                src={slide.image}
                alt={slide.subtitle}
                className={`absolute inset-0 w-full h-full ${slide.fitMobile} ${slide.fitDesktop} ${slide.posMobile} ${slide.posDesktop} contrast-[1.15] saturate-[1.20] brightness-[0.85]`}
                loading="eager"
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlays - Increased opacity and vignette to hide low resolution edges */}
      <div className="absolute inset-0 z-10 bg-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue/90 via-brand-blue/50 to-brand-blue/20" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-10 noise-overlay pointer-events-none opacity-40" />

      {/* Content */}
      <motion.div
        style={{ opacity: opacityContent }}
        className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20"
      >
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center sm:justify-start gap-4 mb-6 sm:mb-8"
            >
              <div className="hidden sm:block h-px w-12 bg-white/30" />
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow/80" />
              <span className="text-white/80 text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase">
                {slide.subtitle}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow/80" />
            </motion.div>
          </AnimatePresence>

          {/* Headline - Added text-balance and mobile safe sizing */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-8xl font-montserrat font-black tracking-tighter text-white text-balance text-center sm:text-left leading-[1.05] sm:leading-[0.95] mb-10 whitespace-pre-line"
            >
              {slide.title}
            </motion.h1>
          </AnimatePresence>

          {/* CTA - Enlarged min-height for touch targets */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto"
            >
              <a
                href={slide.cta.href}
                className="group w-full sm:w-auto min-h-[56px] flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
              >
                {slide.cta.label}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5492227513962?text=Hola%20Álvarez%20Automotores,%20quisiera%20hacer%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[56px] flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl transition-all hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
              >
                Solicitar asesoramiento
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Slide navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
          className="p-2 text-white/40 hover:text-white transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentSlide ? 'w-10 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
          className="p-2 text-white/40 hover:text-white transition-colors"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
