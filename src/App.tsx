import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

// Pages
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen bg-white font-inter text-brand-blue overflow-x-hidden selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
