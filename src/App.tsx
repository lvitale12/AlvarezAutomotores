import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import TrustSection from './components/TrustSection';
import VehicleGrid from './components/VehicleGrid';
import CategoriesSection from './components/CategoriesSection';
import AboutContactSection from './components/AboutContactSection';
import VehicleDetail from './components/VehicleDetail';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import Footer from './components/Footer';
import type { Vehicle } from './data/mockData';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  return (
    <div className="w-full min-h-screen bg-white font-inter text-brand-blue overflow-x-hidden selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />

      <AnimatePresence mode="wait">
        {selectedVehicle ? (
          <VehicleDetail key="detail" vehicle={selectedVehicle} onBack={() => setSelectedVehicle(null)} />
        ) : (
          <main key="main">
            <Hero />
            <StatsCounter />
            <TrustSection />
            <VehicleGrid onSelectVehicle={setSelectedVehicle} />
            <CategoriesSection />
            <AboutContactSection />
          </main>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
