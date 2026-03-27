import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Calendar, Gauge, Fuel, Settings2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Vehicle } from '../data/mockData';

interface Props {
  vehicle: Vehicle;
  onBack: () => void;
}

export default function VehicleDetail({ vehicle, onBack }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const allImages = vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappMessage = `Hola Álvarez Automotores, estoy interesado en el ${vehicle.make} ${vehicle.model} (${vehicle.year}). ¿Podrían brindarme más información?`;
  const whatsappUrl = `https://wa.me/5492227513962?text=${encodeURIComponent(whatsappMessage)}`;

  const specs = [
    { icon: Calendar, label: 'Año', value: vehicle.year.toString() },
    { icon: Gauge, label: 'Kilometraje', value: `${vehicle.km.toLocaleString()} km` },
    { icon: Settings2, label: 'Transmisión', value: vehicle.transmission },
    { icon: Fuel, label: 'Motor', value: `${vehicle.engine} • ${vehicle.fuel}` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white relative"
    >
      {/* Porsche-style immersive header */}
      <div className="relative h-[50vh] md:h-[70vh] bg-brand-blue overflow-hidden">
        {/* Background model name — giant watermark */}
        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
          <span className="text-[15vw] font-montserrat font-black text-white/[0.03] tracking-tighter whitespace-nowrap select-none">
            {vehicle.model}
          </span>
        </div>

        {/* Active Image */}
        <motion.img
          key={activeImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={allImages[activeImage]}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="absolute inset-0 w-full h-full object-cover z-10"
          referrerPolicy="no-referrer"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-white via-transparent to-brand-blue/60" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-brand-blue/30 to-transparent" />

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={onBack}
          className="absolute top-24 md:top-28 left-6 z-30 flex items-center gap-2 text-white/70 hover:text-white font-bold text-sm transition-colors bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Volver
        </motion.button>

        {/* Image navigation dots */}
        {allImages.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
            <button onClick={() => setActiveImage(i => (i - 1 + allImages.length) % allImages.length)} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeImage ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
            <button onClick={() => setActiveImage(i => (i + 1) % allImages.length)} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content — overlapping the hero image */}
      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-brand-blue/5 border border-gray-100 p-8 md:p-12">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-blue/40 mb-2">
                {vehicle.km === 0 ? '0KM' : 'Usado seleccionado'} • {vehicle.make}
              </span>
                  <h1 className="text-3xl md:text-4xl font-montserrat font-black text-brand-blue tracking-tight leading-tight">
                    {vehicle.model}
                  </h1>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-slate-400 block">{vehicle.currency}</span>
                  <span className="text-3xl font-montserrat font-black text-brand-blue">
                    {vehicle.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {specs.map(spec => (
                  <div key={spec.label} className="bg-slate-50 rounded-xl p-4 text-center">
                    <spec.icon className="w-5 h-5 text-brand-blue/30 mx-auto mb-2" />
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">{spec.label}</p>
                    <p className="text-sm text-brand-blue font-bold">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-brand-blue/40 uppercase tracking-wider mb-3">Descripción</h3>
                <p className="text-slate-600 font-light leading-relaxed">{vehicle.description}</p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {['Peritada', 'Documentación al día', 'Lista para transferir'].map(badge => (
                  <div key={badge} className="flex items-center gap-2 text-sm text-brand-blue/70 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Sticky CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28 space-y-4">
              {/* WhatsApp CTA */}
              <div className="bg-white rounded-3xl shadow-xl shadow-brand-blue/5 border border-gray-100 p-8">
                <h3 className="font-montserrat font-bold text-brand-blue mb-2">¿Te interesa esta unidad?</h3>
                <p className="text-sm text-slate-400 font-light mb-6">
                  Consultá disponibilidad, agendá un test drive o solicitá opciones de financiación.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 text-lg"
                >
                  <MessageCircle className="w-6 h-6" /> Consultar disponibilidad
                </a>
              </div>

              {/* Permuta CTA */}
              <div className="bg-brand-blue rounded-3xl p-8 text-white">
                <h3 className="font-montserrat font-bold mb-2">¿Tenés un usado?</h3>
                <p className="text-sm text-white/50 font-light mb-4">
                  Tomamos tu vehículo actual como parte de pago con tasación justa.
                </p>
                <a
                  href="https://wa.me/5492227513962?text=Hola,%20quiero%20cotizar%20mi%20vehículo%20para%20una%20permuta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/30"
                >
                  Cotizar mi vehículo →
                </a>
              </div>

              {/* Thumbnail strip */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                        i === activeImage ? 'border-brand-blue shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Vista ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-24" />
    </motion.div>
  );
}
