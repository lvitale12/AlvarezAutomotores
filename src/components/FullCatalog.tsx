import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, MessageCircle, X } from 'lucide-react';
import { vehicles } from '../data/mockData';
import type { Vehicle } from '../data/mockData';
import { VehicleCard } from './VehicleGrid';
import { cn } from '../lib/utils';
import { useLocation } from 'react-router-dom';

export default function FullCatalog({ onSelectVehicle }: { onSelectVehicle: (v: Vehicle) => void }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(location.state?.searchQuery || '');
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');
  const [selectedCondition, setSelectedCondition] = useState<'Todas'|'0km'|'usado'>(location.state?.filter || 'Todas');
  const [sort, setSort] = useState<'recientes'|'menor_precio'|'mayor_precio'>('recientes');

  // Extract unique brands dynamically
  const brands = ['Todas', ...Array.from(new Set(vehicles.map(v => v.make)))].sort();

  const filteredVehicles = useMemo(() => {
    let result = [...vehicles];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(v => 
        v.make.toLowerCase().includes(q) || 
        v.model.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.year.toString().includes(q)
      );
    }

    if (selectedBrand !== 'Todas') {
      result = result.filter(v => v.make === selectedBrand);
    }

    if (selectedCondition !== 'Todas') {
      result = result.filter(v => v.condition === selectedCondition);
    }

    if (sort === 'menor_precio') result.sort((a,b) => a.price - b.price);
    if (sort === 'mayor_precio') result.sort((a,b) => b.price - a.price);

    return result;
  }, [searchQuery, selectedBrand, selectedCondition, sort]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header / Search Section */}
      <section className="bg-brand-blue pt-32 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-4 block"
          >
            Showroom virtual
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-white mb-10 tracking-tight"
          >
            Encontrá tu <span className="text-white/40 block md:inline mt-2 md:mt-0">próximo vehículo</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto relative"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-6 w-6 h-6 text-slate-400" />
              <input 
                type="text"
                placeholder="Buscá por marca, modelo o palabra clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white rounded-2xl py-5 pl-16 pr-20 text-lg font-medium text-brand-navy shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-blue/30 transition-all border border-transparent hover:border-brand-blue/10"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 p-2 text-slate-400 hover:text-brand-red hover:bg-brand-red/5 rounded-xl transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-brand-blue/5 border border-gray-100 sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-montserrat font-bold text-lg text-brand-navy flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-brand-blue" /> Filtros
                </h3>
                <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md">
                  {filteredVehicles.length} result.
                </span>
              </div>

              <div className="space-y-6">
                {/* Brand Filter */}
                <div>
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 block mb-3">Marca</label>
                  <div className="space-y-1.5 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
                    {brands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={cn(
                          "w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all",
                          selectedBrand === brand 
                            ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20" 
                            : "text-slate-500 hover:bg-slate-50 hover:text-brand-blue"
                        )}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100" />

                {/* Condition Filter */}
                <div>
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 block mb-3">Condición</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Todas', '0km', 'usado'] as const).map(c => (
                      <button
                        key={c}
                        onClick={() => setSelectedCondition(c)}
                        className={cn(
                          "px-3 py-2.5 rounded-xl text-sm font-bold transition-all capitalize text-center",
                          selectedCondition === c 
                            ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20" 
                            : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-brand-blue border border-slate-100"
                        )}
                      >
                        {c === '0km' ? '0KM' : c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100" />

                {/* Sort */}
                <div>
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 block mb-3">Ordenar por</label>
                  <select 
                    value={sort}
                    onChange={(e) => setSort(e.target.value as 'recientes'|'menor_precio'|'mayor_precio')}
                    className="w-full bg-slate-50 border border-slate-100 text-brand-blue text-sm font-bold rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230b2e59' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="recientes">Más relevantes</option>
                    <option value="menor_precio">Menor precio</option>
                    <option value="mayor_precio">Mayor precio</option>
                  </select>
                </div>

                {(selectedBrand !== 'Todas' || selectedCondition !== 'Todas' || searchQuery !== '') && (
                  <button
                    onClick={() => {
                      setSelectedBrand('Todas');
                      setSelectedCondition('Todas');
                      setSearchQuery('');
                      setSort('recientes');
                    }}
                    className="w-full py-3 mt-2 text-brand-red text-sm font-bold hover:bg-brand-red/5 rounded-xl transition-colors"
                  >
                    Limpiar todos los filtros
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Grid Area */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              {filteredVehicles.length > 0 ? (
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredVehicles.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <VehicleCard vehicle={vehicle} onClick={() => onSelectVehicle(vehicle)} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-xl shadow-brand-blue/5 h-[400px] flex flex-col items-center justify-center"
                >
                  <MessageCircle className="w-16 h-16 text-slate-200 mb-6" />
                  <h3 className="text-2xl font-montserrat font-black text-brand-navy mb-3">No hay coincidencias</h3>
                  <p className="text-slate-500 max-w-sm mx-auto mb-8">
                    No encontramos vehículos que coincidan con tu búsqueda. Intentá ampliando los filtros.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedBrand('Todas');
                      setSelectedCondition('Todas');
                    }}
                    className="px-8 py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-navy transition-colors"
                  >
                    Limpiar búsqueda
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
