import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ShieldCheck, CarFront, BadgeDollarSign, Headphones } from 'lucide-react';

const features = [
  {
    icon: CarFront,
    title: '0KM y Usados Premium',
    description: 'Unidades rigurosamente seleccionadas, peritadas y garantizadas para tu tranquilidad.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Financiación Oficial',
    description: 'Accedé a las mejores tasas del mercado con planes a tu medida.',
  },
  {
    icon: ShieldCheck,
    title: 'Operación Segura',
    description: 'Transparencia total y respaldo institucional en cada compra, venta o permuta.',
  },
  {
    icon: Headphones,
    title: 'Atención Personalizada',
    description: 'Te acompañamos desde la primera consulta hasta la entrega de la llave.',
  },
];

// Stagger container + children pattern from framer-motion skill
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TrustSection() {
  return (
    <section className="py-24 pt-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-steel/50 mb-4 block">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-5xl font-montserrat font-black text-brand-blue tracking-tight">
            Confianza que se<br className="hidden md:block" /> <span className="text-brand-steel/40">maneja.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-slate-50/80 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1 transition-all duration-500 cursor-default group overflow-hidden"
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent" />

              <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-montserrat font-bold text-brand-blue mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
