// App.jsx
import { useState } from "react";
import Sidebar from "./app/components/generals/sidebar";
import TopBar from "./app/components/generals/topBar";
import Footer from "./app/components/generals/footer";
import AnimatedCard from "./app/components/generals/promo";
import ServicesCarousel from "./app/site/components/generals/servicios";
import CardSection from "./app/site/components/generals/cardsInfo";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* TopBar */}
      <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        {/* Contenido principal */}
        <div className="flex-1 p-8">
          {/* Promo */}
          <h1 className="mb-6 text-4xl font-bold text-gray-800"></h1>
          <AnimatedCard
            videoSrc={`${import.meta.env.BASE_URL}/video/promo.mp4`}
            title="Promo del mes"
            description={["Precios sujetos a cambios"]}
          />

          {/* Carrusel */}
          <h2 className="mt-12 mb-6 text-3xl font-bold text-gray-800"></h2>
          <ServicesCarousel />

          <h2 className="mt-12 mb-6 text-3xl font-bold text-gray-800"></h2>
          <CardSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
