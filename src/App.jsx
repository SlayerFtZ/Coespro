// App.jsx
import { useState } from "react";
import Sidebar from "./app/components/generals/sidebar";
import TopBar from "./app/components/generals/topBar";
import Footer from "./app/components/generals/footer";
import AnimatedCard from "./app/components/generals/promo";
import ServicesCarousel from "./app/site/components/generals/servicios"; 

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* TopBar */}
      <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />

        {/* Contenido principal */}
        <div className="flex-1 p-8">
          {/* Promo */}
          <h1 className="mb-6 text-4xl font-bold text-gray-800">Promo del mes</h1>
          <AnimatedCard
            videoSrc="/video/promo.mp4"
            title="Promo del mes"
            description={["Precios sujetos a cambios"]}
          />

          {/* Carrusel */}
          <h2 className="mt-12 mb-6 text-3xl font-bold text-gray-800"></h2>
          <ServicesCarousel />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
