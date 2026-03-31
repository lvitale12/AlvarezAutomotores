import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import FullCatalog from '../components/FullCatalog';
import VehicleDetail from '../components/VehicleDetail';
import type { Vehicle } from '../data/mockData';

export default function CatalogPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {selectedVehicle ? (
        <VehicleDetail key="detail" vehicle={selectedVehicle} onBack={() => setSelectedVehicle(null)} />
      ) : (
        <motion.main 
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FullCatalog key={location.key} onSelectVehicle={setSelectedVehicle} />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
