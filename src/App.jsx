import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./app/components/generals/sidebar";
import TopBar from "./app/components/generals/topBar";
import Footer from "./app/components/generals/footer";
import HomeBody from "./app/site/pages/homeBoby";
import Bienvenida from "./app/site/pages/bienvenidad";
import PoliticaTiendaOnline from "./app/site/pages/politicaTiendaOnline";
import ProductCard from "./app/features/products/pages/tienda";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* TopBar */}
      <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="relative z-10 flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        {/* Contenido principal */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/inicio" element={<HomeBody />} />
            <Route path="/politica-tienda" element={<PoliticaTiendaOnline />} />
            <Route path="/product-card" element={<ProductCard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Botón flotante */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-4 text-white transition-all duration-300 bg-blue-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-blue-700"
          aria-label="Ir al inicio"
        >
          ↑
        </button>
      )}
    </div>
  );
}
