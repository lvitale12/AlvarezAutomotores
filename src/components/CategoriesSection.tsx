import { motion } from 'framer-motion';
import { ArrowUpRight, Handshake, Percent } from 'lucide-react';

export default function CategoriesSection() {
  return (
    <section id="financiacion" className="py-16 bg-brand-blue relative overflow-hidden noise-overlay">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-2 block text-center md:text-left">
              Financiación y Permutas
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-black text-white tracking-tight text-center md:text-left">
              Manejá hoy, <span className="text-white/30">pagá mañana.</span>
            </h2>
          </div>
          <p className="text-white/40 font-light text-base max-w-md text-center md:text-right">
            Conocé nuestros planes a medida y opciones de toma de vehículos usados al mejor valor de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.a
            href="https://wa.me/5492227513962?text=Hola,%20quiero%20consultar%20por%20opciones%20de%20financiación."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 backdrop-blur-sm text-center sm:text-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Percent className="w-6 h-6 text-white text-opacity-80 group-hover:text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-montserrat font-bold text-white mb-1">Financiación Oficial</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4 sm:mb-0">Tasas preferenciales y cuotas fijas en pesos, adaptadas a tu bolsillo.</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all hidden sm:block" />
          </motion.a>

          <motion.a
            href="https://wa.me/5492227513962?text=Hola,%20quiero%20cotizar%20mi%20vehículo%20para%20una%20permuta."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 backdrop-blur-sm text-center sm:text-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Handshake className="w-6 h-6 text-white text-opacity-80 group-hover:text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-montserrat font-bold text-white mb-1">Permutas al mejor valor</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4 sm:mb-0">Cotización en el acto. Tasación justa y transparente para tu usado.</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all hidden sm:block" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
