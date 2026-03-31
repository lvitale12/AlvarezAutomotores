import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import VehicleGrid from '../components/VehicleGrid';
import CategoriesSection from '../components/CategoriesSection';
import AboutContactSection from '../components/AboutContactSection';
import VehicleDetail from '../components/VehicleDetail';
import type { Vehicle } from '../data/mockData';

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  return (
    <AnimatePresence mode="wait">
      {selectedVehicle ? (
        <VehicleDetail key="detail" vehicle={selectedVehicle} onBack={() => setSelectedVehicle(null)} />
      ) : (
        <main key="main">
          <Hero />
          <TrustSection />
          <VehicleGrid onSelectVehicle={setSelectedVehicle} />
          <CategoriesSection />
          <AboutContactSection />
        </main>
      )}
    </AnimatePresence>
  );
}
