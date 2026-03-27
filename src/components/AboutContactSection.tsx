import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';

export default function AboutContactSection() {
  return (
    <section id="nosotros" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-steel/40 mb-4 block">
            Quiénes somos
          </span>
          <h2 className="text-3xl md:text-5xl font-montserrat font-black text-brand-blue tracking-tight">
            Tradición <span className="text-brand-steel/30">y excelencia</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5 text-slate-600 font-light leading-relaxed text-lg">
              <p>
                En <strong className="text-brand-blue font-semibold">Álvarez Automotores</strong> entendemos que comprar un vehículo es más que una transacción — es alcanzar una meta, cumplir un sueño familiar.
              </p>
              <p>
                Nacimos con la convicción de elevar el estándar del mercado automotor en Navarro y toda la región. Nos especializamos en unidades 0KM y usados premium con cada unidad rigurosamente peritada.
              </p>
            </div>

            {/* Image with overlay */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/10 group">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200"
                alt="Showroom Álvarez Automotores"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 text-white/80 font-montserrat font-bold tracking-wider uppercase text-xs">
                  <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  Nuestro Showroom
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <div className="bg-slate-50/80 border border-gray-100 p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/[0.02] rounded-full blur-[60px]" />

              <h3 className="text-2xl font-montserrat font-black text-brand-blue mb-10 relative z-10">
                Visitanos
              </h3>

              <div className="space-y-7 mb-10 relative z-10">
                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-brand-blue font-bold mb-1 text-sm">Dirección</p>
                    <p className="text-slate-500 text-sm">Av. 16 entre 127 y 129<br />Navarro, Buenos Aires</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-brand-blue font-bold mb-1 text-sm">WhatsApp</p>
                    <a href="https://wa.me/5492227513962" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-blue transition-colors text-sm">
                      +54 9 2227 513962
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-brand-blue font-bold mb-1 text-sm">Horarios</p>
                    <p className="text-slate-500 text-sm">Lun-Vie: 08:30 – 12:30 / 16:00 – 20:00<br />Sáb: 09:00 – 13:00</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <p className="text-brand-blue font-bold mb-1 text-sm">Instagram</p>
                    <a href="https://instagram.com/automotores.ealvarez" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-blue transition-colors text-sm">
                      @automotores.ealvarez
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                <a
                  href="https://maps.google.com/?q=Av.+16+entre+127+y+129,+Navarro,+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-4 bg-white border border-gray-200 hover:border-brand-blue text-brand-blue text-center rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <MapPin className="w-4 h-4" /> Cómo llegar
                </a>
                <a
                  href="https://wa.me/5492227513962?text=Hola%20Álvarez%20Automotores,%20quisiera%20coordinar%20una%20visita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-4 bg-brand-blue hover:bg-brand-navy text-white text-center rounded-xl font-bold transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 group text-sm"
                >
                  Agendar visita <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
