import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Handshake, Percent } from 'lucide-react';
import { useRef } from 'react';

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-driven card entrances per scroll-experience skill
  const yLeft = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const yRight = useTransform(scrollYProgress, [0.1, 0.6], [80, 0]);
  const opacityCards = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} id="financiacion" className="py-28 bg-brand-blue relative overflow-hidden noise-overlay">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-4 block"
          >
            Financiación
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-montserrat font-black text-white mb-6 tracking-tight"
          >
            Manejá hoy, <span className="text-white/30">pagá mañana.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 font-light text-lg"
          >
            Planes de financiación y permutas diseñados para que accedas a tu próximo vehículo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Financing Card — scroll-driven */}
          <motion.div
            style={{ y: yLeft, opacity: opacityCards }}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.06] p-10 md:p-14 flex flex-col justify-between min-h-[380px] backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
              <Percent className="w-80 h-80 text-white" />
            </div>
            <div className="relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-xl bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-white/10">
                Créditos Prendarios
              </span>
              <h3 className="text-2xl md:text-3xl font-montserrat font-black text-white mb-4 tracking-tight">
                Financiación Oficial
              </h3>
              <p className="text-white/40 font-light max-w-md leading-relaxed">
                Tasas preferenciales y cuotas fijas en pesos, adaptadas a tu bolsillo. Trabajamos con las principales entidades bancarias.
              </p>
            </div>
            <a
              href="https://wa.me/5492227513962?text=Hola,%20quiero%20consultar%20por%20opciones%20de%20financiación."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 text-white font-bold hover:text-brand-red transition-colors w-fit mt-8"
            >
              Simular plan <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Permutas Card — scroll-driven with offset */}
          <motion.div
            style={{ y: yRight, opacity: opacityCards }}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.06] p-10 md:p-14 flex flex-col justify-between min-h-[380px] backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
              <Handshake className="w-80 h-80 text-white" />
            </div>
            <div className="relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-xl bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-white/10">
                Tomamos tu usado
              </span>
              <h3 className="text-2xl md:text-3xl font-montserrat font-black text-white mb-4 tracking-tight">
                Permutas al mejor valor
              </h3>
              <p className="text-white/40 font-light max-w-md leading-relaxed">
                Cotización en el acto. Tasación justa y transparente para que des el salto a tu próximo auto hoy.
              </p>
            </div>
            <a
              href="https://wa.me/5492227513962?text=Hola,%20quiero%20cotizar%20mi%20vehículo%20para%20una%20permuta."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 text-white font-bold hover:text-brand-red transition-colors w-fit mt-8"
            >
              Cotizar mi vehículo <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
