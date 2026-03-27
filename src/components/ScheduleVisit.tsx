import { useState } from 'react';
import { Calendar, Clock, User, MessageSquare, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScheduleVisit() {
  const [formData, setFormData] = useState({
    name: '',
    reason: 'Ver vehículos en stock',
    date: '',
    time: 'Por la mañana (08:30 - 12:30)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Álvarez Automotores, quisiera agendar una visita en la sucursal.\n\n👤 *Nombre:* ${formData.name}\n🎯 *Motivo:* ${formData.reason}\n📅 *Día preferido:* ${formData.date || 'Lo antes posible'}\n⏰ *Horario:* ${formData.time}\n\nQuedo a la espera de su respuesta. ¡Gracias!`;
    const url = `https://wa.me/5492227513962?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="agendar" className="py-24 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-brand-yellow/80 uppercase mb-4 block">
            Coordiná tu cita
          </span>
          <h2 className="text-3xl md:text-5xl font-montserrat font-black tracking-tight mb-4">
            Agendá tu visita al salón.
          </h2>
          <p className="text-white/60">Te esperamos para brindarte la mejor atención personalizada.</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="bg-brand-blue/30 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-white/70 uppercase flex items-center gap-2">
                <User className="w-3 h-3" /> Nombre completo
              </label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ej. Juan Pérez"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow transition-colors"
              />
            </div>

            {/* Motivo */}
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-white/70 uppercase flex items-center gap-2">
                <MessageSquare className="w-3 h-3" /> Motivo de la visita
              </label>
              <select 
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-yellow transition-colors"
                style={{ colorScheme: 'dark' }}
              >
                <option value="Ver vehículos en stock">Ver vehículos en stock</option>
                <option value="Tasar mi vehículo usado">Tasar mi vehículo usado</option>
                <option value="Venir a buscar / retirar una compra">Venir a buscar / retirar una compra</option>
                <option value="Consulta sobre financiación">Consulta sobre financiación</option>
                <option value="Otra consulta">Otra consulta</option>
              </select>
            </div>

            {/* Fecha */}
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-white/70 uppercase flex items-center gap-2">
                <Calendar className="w-3 h-3" /> Día preferido
              </label>
              <input 
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-yellow transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>

            {/* Turno */}
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-white/70 uppercase flex items-center gap-2">
                <Clock className="w-3 h-3" /> Horario preferido
              </label>
              <select 
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-yellow transition-colors"
                style={{ colorScheme: 'dark' }}
              >
                <option value="Por la mañana (08:30 - 12:30)">Por la mañana (08:30 - 12:30)</option>
                <option value="Por la tarde (16:00 - 20:00)">Por la tarde (16:00 - 20:00)</option>
                <option value="Día Sábado (09:00 - 13:00)">Día Sábado (09:00 - 13:00)</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-4 bg-brand-yellow text-brand-black font-black uppercase tracking-widest text-sm py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] flex justify-center items-center gap-2 group"
          >
            Enviar por WhatsApp <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}
