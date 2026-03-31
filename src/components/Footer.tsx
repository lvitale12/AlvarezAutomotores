import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center font-montserrat font-black text-xl text-white">
                A
              </div>
              <div>
                <span className="text-xl font-montserrat font-black tracking-tight leading-none block">ÁLVAREZ</span>
                <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-semibold">Automotores</span>
              </div>
            </div>
            <p className="text-white/50 font-light leading-relaxed max-w-sm text-sm">
              Compra, venta y permuta de vehículos 0KM y usados seleccionados. Más de 15 años
              elevando el estándar del mercado automotor en Navarro.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">Navegación</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Inicio</Link>
              <Link to="/catalogo" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Catálogo</Link>
              <Link to="/#financiacion" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Financiación</Link>
              <Link to="/contacto" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Contacto</Link>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">Servicios</h4>
            <div className="flex flex-col gap-3">
              {['Usados Premium', '0KM en Stock', 'Créditos Prendarios', 'Permutas'].map(service => (
                <span key={service} className="text-white/60 text-sm font-medium">{service}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">Contacto</h4>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/5492227513962" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 shrink-0" />
                +54 9 2227 513962
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Av. 16 entre 127 y 129<br />Navarro, Buenos Aires</span>
              </div>
              <a
                href="https://instagram.com/automotores.ealvarez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                @automotores.ealvarez
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Álvarez Automotores. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Sitio desarrollado por Antigravity
          </p>
        </div>
      </div>
    </footer>
  );
}
