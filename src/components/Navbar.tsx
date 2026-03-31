import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, CarFront, Zap, Truck } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed z-50 transition-all duration-500',
          isScrolled
            ? 'top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm'
            : 'top-4 left-4 right-4 bg-brand-blue/80 backdrop-blur-xl rounded-2xl py-4 border border-white/10'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo — Navy primary */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 font-montserrat font-black text-lg",
              isScrolled
                ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                : "bg-white/10 text-white border border-white/20"
            )}>
              A
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg font-montserrat font-black tracking-tight transition-colors leading-none",
                isScrolled ? "text-brand-blue" : "text-white"
              )}>
                ÁLVAREZ
              </span>
              <span className={cn(
                "text-[9px] tracking-[0.25em] uppercase font-semibold leading-none mt-0.5 transition-colors",
                isScrolled ? "text-brand-steel" : "text-white/60"
              )}>
                Automotores
              </span>
            </div>
          </Link>

          {/* Desktop Links — Concesionaria terminology */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className={cn(
              "px-4 py-2 text-sm font-medium transition-all rounded-lg hover:bg-white/10",
              isScrolled ? "text-brand-steel hover:text-brand-blue hover:bg-slate-50" : "text-white/80 hover:text-white"
            )}>
              Inicio
            </Link>

            {/* Vehículos Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all rounded-lg hover:bg-white/10",
                isScrolled ? "text-brand-steel hover:text-brand-blue hover:bg-slate-50" : "text-white/80 hover:text-white"
              )}>
                Catálogo
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isMegaMenuOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-2xl shadow-2xl shadow-brand-blue/10 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      <Link to="/catalogo" state={{ filter: 'usado' }} onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                          <CarFront className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-bold text-brand-blue text-sm">Usados Seleccionados</h4>
                          <span className="text-xs text-slate-400">Unidades peritadas y garantizadas</span>
                        </div>
                      </Link>
                      <Link to="/catalogo" state={{ filter: '0km' }} onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-bold text-brand-blue text-sm">0KM</h4>
                          <span className="text-xs text-slate-400">Todas las marcas y planes vigentes</span>
                        </div>
                      </Link>
                      <Link to="/catalogo" state={{ searchQuery: 'pickup' }} onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                          <Truck className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-bold text-brand-blue text-sm">Pick-Ups & Utilitarios</h4>
                          <span className="text-xs text-slate-400">Trabajo y aventura</span>
                        </div>
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 p-4 bg-slate-50/50">
                      <Link to="/catalogo" onClick={() => setIsMegaMenuOpen(false)} className="text-sm font-bold text-brand-blue hover:text-brand-red transition-colors flex items-center gap-2">
                        Descubrí todos los vehículos <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contacto" className={cn(
              "px-4 py-2 text-sm font-medium transition-all rounded-lg hover:bg-white/10",
              isScrolled ? "text-brand-steel hover:text-brand-blue hover:bg-slate-50" : "text-white/80 hover:text-white"
            )}>
              Contacto
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contacto"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all",
                isScrolled
                  ? "bg-brand-blue text-white hover:bg-brand-navy shadow-md shadow-brand-blue/20"
                  : "bg-white text-brand-blue hover:bg-white/90"
              )}
            >
              <Phone className="w-4 h-4" />
              Agendar Visita
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn("md:hidden p-3 -mr-2 rounded-xl transition-colors", isScrolled ? "text-brand-blue" : "text-white")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú de navegación"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-brand-blue flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-montserrat font-black text-lg text-white">
                  A
                </div>
                <div>
                  <span className="text-lg font-montserrat font-black text-white leading-none block">ÁLVAREZ</span>
                  <span className="text-[9px] tracking-[0.25em] text-white/50 uppercase font-semibold">Automotores</span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 -mr-2 text-white/70 hover:text-white rounded-xl transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Catálogo', href: '/catalogo' },
                { name: 'Contacto', href: '/contacto' },
              ].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-montserrat font-black text-white/90 hover:text-white py-3 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="px-8 pb-10">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                href="https://wa.me/5492227513962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-white text-brand-blue text-lg font-bold rounded-2xl shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Contactar por WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
