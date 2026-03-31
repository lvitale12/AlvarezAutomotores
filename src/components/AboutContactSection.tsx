import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutContactSection({ hideAbout = false }: { hideAbout?: boolean }) {
  return (
    <section id="nosotros" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* TOP SECTION: ABOUT & VIDEO */}
        {!hideAbout && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-steel/40 mb-4 block">
                Quiénes somos
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-brand-blue tracking-tight mb-8 text-balance">
                Tradición <span className="text-brand-steel/30">y excelencia</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                <p>
                  En <strong className="text-brand-blue font-semibold">Álvarez Automotores</strong> entendemos que comprar un vehículo es más que una transacción — es alcanzar una meta, cumplir un sueño familiar o potenciar tu empresa.
                </p>
                <p>
                  Nacimos con la convicción de elevar el estándar del mercado automotor en Navarro y toda la región. Nos especializamos en unidades 0KM y usados premium con cada vehículo rigurosamente peritado.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Local Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-blue/10 bg-brand-black w-full max-w-[360px] lg:max-w-[400px] aspect-[9/16] border-[8px] border-slate-50">
              <video
                src="/videos/about-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <div className="flex items-center gap-3 text-white font-montserrat font-bold tracking-wider uppercase text-xs">
                  <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  Conocé nuestro local
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        )}

        {/* BOTTOM SECTION: MAP AND CONTACT */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 0.6 }}
           className="bg-slate-50/80 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative shadow-sm"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-montserrat font-black text-brand-blue">
              Visitá nuestro salón
            </h3>
            <p className="text-slate-500 mt-3 text-lg font-light">Estamos listos para asesorarte personalmente</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info (Left) */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-brand-blue shadow-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-brand-blue font-bold text-sm uppercase tracking-wider mb-1">Ubicación</p>
                  <p className="text-slate-600">Av. 16 entre 127 y 129<br/>Navarro, Buenos Aires</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-brand-blue shadow-sm shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-brand-blue font-bold text-sm uppercase tracking-wider mb-1">Contacto Directo</p>
                  <a href="https://wa.me/5492227513962" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-blue transition-colors">
                    +54 9 2227 513962
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-brand-blue shadow-sm shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-brand-blue font-bold text-sm uppercase tracking-wider mb-1">Horarios</p>
                  <p className="text-slate-600">Lunes a Viernes: 08:30 – 12:30 / 16:00 – 20:00<br />Sábados: 09:00 – 13:00</p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/contacto"
                  className="inline-flex w-full sm:w-auto px-8 py-5 min-h-[56px] bg-brand-blue hover:bg-brand-navy text-white text-center rounded-2xl font-bold transition-all shadow-lg flex justify-center items-center gap-3 group uppercase tracking-wide text-sm"
                >
                  Agendar visita ahora <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Google Map (Right) */}
            <div className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-[2rem] overflow-hidden shadow-inner group bg-gray-200">
              <iframe 
                src="https://maps.google.com/maps?q=Av.+16+entre+127+y+129,+Navarro,+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 absolute inset-0 grayscale-[20%] opacity-95 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Transparent Overlay to capture clicks and open Maps App seamlessly */}
              <a 
                href="https://maps.google.com/?q=Av.+16+entre+127+y+129,+Navarro,+Buenos+Aires" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 bg-brand-blue/0 hover:bg-brand-blue/10 transition-colors flex items-center justify-center"
              >
                <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-full shadow-2xl font-bold text-brand-blue flex items-center gap-3 text-sm transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-brand-red" /> Abrir Ubicación en Google Maps
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
