import { motion } from 'framer-motion';
import ScheduleVisit from '../components/ScheduleVisit';
import AboutContactSection from '../components/AboutContactSection';

export default function ContactPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 overflow-hidden"
    >
      <div className="pt-32 pb-12 bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-steel/50 mb-4 block">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-montserrat font-black text-brand-navy mb-6">
              Comunicate con <span className="text-brand-steel/40">nosotros</span>
            </h1>
            <p className="text-slate-500 font-light text-lg">
              Estamos para ayudarte. Agendá una consulta para conocer el vehículo que buscás, o visitá nuestro concesionario.
            </p>
          </motion.div>
        </div>
      </div>
      
      <ScheduleVisit />
      <div className="-mt-16">
        <AboutContactSection hideAbout={true} />
      </div>
    </motion.main>
  );
}
