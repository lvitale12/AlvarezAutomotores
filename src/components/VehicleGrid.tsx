import { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { vehicles } from '../data/mockData';
import type { Vehicle } from '../data/mockData';
import { ChevronRight, SlidersHorizontal, MessageCircle, Info } from 'lucide-react';
import { cn } from '../lib/utils';

// Helper: Format price display
function formatPrice(vehicle: Vehicle) {
  if (vehicle.price === 0 || vehicle.currency === 'Consultar') {
    return { label: '', value: 'Consultar' };
  }
  if (vehicle.currency === 'ARS') {
    return { label: 'ARS', value: `$${vehicle.price.toLocaleString('es-AR')}` };
  }
  return { label: vehicle.currency, value: vehicle.price.toLocaleString('es-AR') };
}

// --- Card 3D Tilt Hook ---
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return { ref, handleMouseMove, handleMouseLeave };
}

// --- Image Cycler Component ---
// Cycles through the gallery when hovering
const HoverImageCycler = ({ gallery, isHovered }: { gallery: string[]; isHovered: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isHovered || gallery.length <= 1) {
      setCurrentIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallery.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered, gallery.length]);

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={gallery[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover absolute inset-0"
          alt="Vista del vehículo"
          loading="lazy"
        />
      </AnimatePresence>
      
      {/* Gallery dots indicator */}
      {gallery.length > 1 && (
        <div className="absolute top-4 inset-x-0 flex justify-center gap-1.5 z-20">
          {gallery.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-12 h-1 rounded-full backdrop-blur-md transition-all duration-300",
                i === currentIndex ? "bg-white/90" : "bg-black/30 w-8"
              )}
            />
          ))}
        </div>
      )}
    </>
  );
};

// --- Featured Vehicle (Immersive Hero Split) ---
const FeaturedVehicle = ({ vehicle, onClick }: { vehicle: Vehicle; onClick: () => void }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex mb-6 items-center gap-4"
      >
        <div className="w-12 h-px bg-brand-red hidden md:block" />
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-red">
          Nave insignia
        </span>
      </motion.div>

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          handleMouseLeave();
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onClick={onClick}
        className="group relative cursor-pointer flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)] transition-all duration-500 will-change-transform border border-gray-100"
        style={{ transition: 'transform 0.2s ease-out, box-shadow 0.5s ease' }}
      >
        {/* Left: Interactive Image Area */}
        <div className="lg:w-3/5 aspect-[4/3] lg:aspect-auto lg:min-h-[600px] relative overflow-hidden bg-slate-100">
          <HoverImageCycler gallery={vehicle.gallery.length ? vehicle.gallery : [vehicle.image]} isHovered={isHovered} />
          
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-10" />
          
          {/* Subtle spec overlay in the image bottom left */}
          <div className="absolute bottom-6 left-6 z-20 flex gap-3 text-white">
            <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2">
              <span className="text-[9px] uppercase tracking-widest text-white/60">Motor</span>
              <span className="font-bold text-sm tracking-wide">{vehicle.engine}</span>
            </div>
            <div className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2">
              <span className="text-[9px] uppercase tracking-widest text-white/60">Transmisión</span>
              <span className="font-bold text-sm tracking-wide">{vehicle.transmission}</span>
            </div>
          </div>

          {/* Condition badge */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-brand-blue text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
              {vehicle.condition === '0km' ? '0KM' : 'Usado Destacado'}
            </span>
          </div>
        </div>

        {/* Right: Info Area */}
        <div className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center relative bg-slate-50 relative overflow-hidden">
          {/* Watermark in background */}
          <div className="absolute -right-20 -bottom-10 text-[180px] font-black text-slate-200/50 -rotate-12 pointer-events-none tracking-tighter mix-blend-multiply select-none">
            {vehicle.make}
          </div>

          <div className="relative z-10">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 block">
              {vehicle.make}
            </span>
            <h3 className="text-4xl md:text-5xl font-montserrat font-black text-brand-blue leading-[1.1] mb-6">
              {vehicle.model}
            </h3>
            
            <p className="text-slate-500 font-light text-lg mb-8 line-clamp-3">
              {vehicle.description}
            </p>

            <div className="flex items-end justify-between border-t border-gray-200 pt-8 mb-8">
              <div>
                <span className="text-sm text-slate-400 font-medium block mb-1">{formatPrice(vehicle).label}</span>
                <span className="text-5xl font-montserrat font-black text-brand-blue tracking-tighter">
                  {formatPrice(vehicle).value}
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm text-slate-400 block mb-1">Año</span>
                <span className="text-2xl font-bold text-brand-navy">{vehicle.year}</span>
              </div>
            </div>

            <button className="w-full py-5 bg-brand-blue hover:bg-brand-navy text-white text-lg rounded-2xl font-bold transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 group">
              <Info className="w-5 h-5" /> Ver detalles completos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Standard Grid Card ---
const VehicleCard = ({ vehicle, onClick, isWide }: { vehicle: Vehicle; onClick: () => void; isWide?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group cursor-pointer flex flex-col bg-white border border-gray-100 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/10",
        isWide ? "md:flex-row md:col-span-2 lg:col-span-2" : "flex-col"
      )}
    >
      <div className={cn(
        "relative overflow-hidden bg-slate-100",
        isWide ? "md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[400px]" : "aspect-[4/3] min-h-[300px]"
      )}>
        <HoverImageCycler gallery={vehicle.gallery.length ? vehicle.gallery : [vehicle.image]} isHovered={isHovered} />
        <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-500 z-10" />
        
        {/* Condition label */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block bg-white/90 backdrop-blur-md text-brand-navy px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
            {vehicle.condition === '0km' ? '0KM' : 'Usado'}
          </span>
        </div>

        {/* Hover overlay specs */}
        <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
           <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-3 py-2 text-white flex-1 text-center">
             <span className="block text-[8px] uppercase tracking-widest">Motor</span>
             <span className="block text-xs font-bold truncate">{vehicle.engine}</span>
           </div>
           <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-3 py-2 text-white flex-1 text-center">
             <span className="block text-[8px] uppercase tracking-widest">KM</span>
             <span className="block text-xs font-bold">{vehicle.km === 0 ? '0' : vehicle.km.toLocaleString()}</span>
           </div>
        </div>
      </div>

      <div className={cn("p-8 flex flex-col justify-between flex-1", isWide && "md:w-1/2")}>
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-steel/50 mb-1 block">
            {vehicle.make}
          </span>
          <h4 className="text-2xl font-montserrat font-black text-brand-blue mb-4 tracking-tight leading-tight">
            {vehicle.model}
          </h4>
          
          <div className="flex items-center gap-3 text-sm text-slate-500 font-medium mb-6">
            <span className="bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">{vehicle.year}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{vehicle.transmission}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{vehicle.fuel}</span>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-0.5">{formatPrice(vehicle).label}</span>
            <span className="text-2xl font-montserrat font-black text-brand-blue tracking-tighter">
              {formatPrice(vehicle).value}
            </span>
          </div>
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300">
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function VehicleGrid({ onSelectVehicle }: { onSelectVehicle: (v: Vehicle) => void }) {
  const [filter, setFilter] = useState<'Todos'|'0km'|'usado'>('Todos');
  const [sort, setSort] = useState<'recientes'|'menor_precio'|'mayor_precio'>('recientes');

  // Logic: 
  // 1. Separate featured from rest
  // 2. Apply filters to all
  
  let gridVehicles = [...vehicles];

  if (filter !== 'Todos') {
    gridVehicles = gridVehicles.filter(v => v.condition === filter);
  }

  // Sorting
  if (sort === 'menor_precio') gridVehicles.sort((a,b) => a.price - b.price);
  if (sort === 'mayor_precio') gridVehicles.sort((a,b) => b.price - a.price);

  // We find the first featured vehicle that matches the filter
  const featuredVehicle = gridVehicles.find(v => v.featured);
  
  // The rest go to the grid
  const regularVehicles = gridVehicles.filter(v => v.id !== featuredVehicle?.id);

  return (
    <section id="usados" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Filters and Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-steel/40 mb-3 block">
              Explorá el showroom
            </span>
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-brand-navy tracking-tight">
              Nuestros <span className="text-brand-steel/40">vehículos</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-gray-100">
              {(['Todos', '0km', 'usado'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg transition-all",
                    filter === f 
                      ? "bg-white text-brand-blue shadow-sm" 
                      : "text-slate-400 hover:text-brand-blue"
                  )}
                >
                  {f === '0km' ? '0KM' : f}
                </button>
              ))}
            </div>

            <div className="relative group">
              <select 
                value={sort}
                onChange={(e) => setSort(e.target.value as any)}
                className="appearance-none bg-white border border-gray-200 text-brand-blue text-sm font-bold rounded-xl px-5 py-3 pr-10 hover:border-brand-blue transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/20 cursor-pointer"
              >
                <option value="recientes">Más relevantes</option>
                <option value="menor_precio">Menor precio</option>
                <option value="mayor_precio">Mayor precio</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none rotate-90" />
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="mb-10 text-sm font-medium text-slate-400">
          Mostrando <strong className="text-brand-blue">{gridVehicles.length}</strong> {gridVehicles.length === 1 ? 'vehículo' : 'vehículos'}
        </div>

        {/* Featured Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + sort}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {featuredVehicle && (
              <FeaturedVehicle vehicle={featuredVehicle} onClick={() => onSelectVehicle(featuredVehicle)} />
            )}

            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {regularVehicles.map((vehicle, index) => {
                // Determine if wide: Let's make every 5th item wide for an editorial look
                // if we are in lg/xl. 
                // E.g. index 2 is wide
                const isWide = index === 2 || index === 7;
                return (
                  <motion.div
                    key={vehicle.id}
                    layout // Animate layout changes smoothly
                    className={cn(isWide ? "md:col-span-2" : "col-span-1")}
                  >
                    <VehicleCard vehicle={vehicle} onClick={() => onSelectVehicle(vehicle)} isWide={isWide} />
                  </motion.div>
                );
              })}
            </div>

            {gridVehicles.length === 0 && (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border border-gray-100 border-dashed">
                <MessageCircle className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-brand-navy mb-2">No hay vehículos que coincidan</h3>
                <p className="text-slate-500">Prueba ajustando los filtros de búsqueda.</p>
                <button 
                  onClick={() => setFilter('Todos')}
                  className="mt-6 px-6 py-2 bg-brand-blue text-white rounded-xl font-semibold hover:bg-brand-navy transition-colors"
                >
                  Ver todos
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
