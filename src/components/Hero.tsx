import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Hero slides — like Rayco's model-specific hero slider
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
    subtitle: 'Usados Seleccionados',
    title: 'Hay un auto\npara cada camino.',
    cta: { label: 'Descubrí los vehículos', href: '#usados' },
  },
  {
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80&w=2069',
    subtitle: 'Pick-Ups & Utilitarios',
    title: 'Potencia que\nno se detiene.',
    cta: { label: 'Ver pick-ups', href: '#usados' },
  },
  {
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2069',
    subtitle: 'Financiación oficial',
    title: 'Tu próximo 0KM\ncon cuotas fijas.',
    cta: { label: 'Simular plan', href: '#financiacion' },
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
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue via-brand-blue/40 to-brand-blue/60" />
      <div className="absolute inset-0 z-10 noise-overlay pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity: opacityContent }}
        className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20"
      >
        <div className="max-w-3xl">
          {/* Subtitle badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-white/30" />
              <span className="text-white/70 text-xs font-bold tracking-[0.3em] uppercase">
                {slide.subtitle}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl font-montserrat font-black tracking-tighter text-white leading-[0.95] mb-10 whitespace-pre-line"
            >
              {slide.title}
            </motion.h1>
          </AnimatePresence>

          {/* CTA */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href={slide.cta.href}
                className="group flex items-center gap-3 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
              >
                {slide.cta.label}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5492227513962?text=Hola%20Álvarez%20Automotores,%20quisiera%20hacer%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl transition-all hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
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
