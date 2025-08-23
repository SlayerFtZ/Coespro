import { useState } from "react";

const teamMembers = [
  { name: "Instalación", role: "Servicio", img: "../../../../../public/servicios/servicio1.jpg" },
  { name: "Capacitacion de intalación", role: "Capacitacion", img: "../../../../../public/servicios/capacitacion1.jpg" },
  { name: "Instalación en el pais", role: "Servicio", img: "../../../../../public/servicios/instalacionServicio1.jpg" },
  { name: "Asesoria", role: "Servicio", img: "../../../../../public/servicios/asesoria1.jpg" },
  { name: "Soporte tecnico", role: "Servicio", img: "../../../../../public/servicios/soporteTecnico1.jpg" },
  { name: "Material incluido", role: "Servicio", img: "../../../../../public/servicios/marterial1.jpg" },
  { name: "Instalacion certificada", role: "Servicio", img: "../../../../../public/servicios/intalacionServicio2.jpg" },
  { name: "Certificados de intalación", role: "Certificados", img: "../../../../../public/servicios/certificados.jpg" },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const index = (newIndex + teamMembers.length) % teamMembers.length;
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleSwipe = (startX, endX) => {
    const swipeThreshold = 50;
    const diff = startX - endX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) updateCarousel(currentIndex + 1);
      else updateCarousel(currentIndex - 1);
    }
  };

  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center w-full py-10 bg-gray-50">
      <h1 className="mb-10 text-3xl font-black text-center text-transparent uppercase md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-b from-blue-700/90 to-blue-300/40">
        ¡Descubre las 8 poderosas razones para elegir Coespro y adquiere tu equipo ahora mismo!
      </h1>

      <div
        className="relative flex items-center justify-center w-full max-w-6xl"
        onTouchStart={(e) => setTouchStartX(e.changedTouches[0].screenX)}
        onTouchEnd={(e) => handleSwipe(touchStartX, e.changedTouches[0].screenX)}
      >
        {/* Left Arrow */}
        <button
          className="absolute z-20 flex items-center justify-center w-10 h-10 text-white transition-transform duration-300 rounded-full left-2 md:left-6 bg-blue-700/60 hover:bg-blue-900 md:w-12 md:h-12"
          onClick={() => updateCarousel(currentIndex - 1)}
        >
          ‹
        </button>

        {/* Carousel Track */}
<div className="relative w-full h-[500px] flex items-center justify-center perspective-1000 space-x-4">
  {teamMembers.map((member, i) => {
    let positionClass = "hidden";
    if (i === currentIndex) positionClass = "center z-10 scale-105";
    else if (i === (currentIndex + 1) % teamMembers.length)
      positionClass = "right-1 z-5 scale-90 opacity-90";
    else if (i === (currentIndex + 2) % teamMembers.length)
      positionClass = "right-2 z-1 scale-80 opacity-70";
    else if (i === (currentIndex - 1 + teamMembers.length) % teamMembers.length)
      positionClass = "left-1 z-5 scale-90 opacity-90";
    else if (i === (currentIndex - 2 + teamMembers.length) % teamMembers.length)
      positionClass = "left-2 z-1 scale-80 opacity-70";

    return (
      <div
        key={i}
        className={`absolute w-64 md:w-72 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform ${positionClass} cursor-pointer`}
        onClick={() => openModal(i)}
      >
        <div className="w-full h-[400px]">
          <img
            src={member.img}
            alt={member.name}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
    );
  })}
</div>


        {/* Right Arrow */}
        <button
          className="absolute z-20 flex items-center justify-center w-10 h-10 text-white transition-transform duration-300 rounded-full right-2 md:right-6 bg-blue-700/60 hover:bg-blue-900 md:w-12 md:h-12"
          onClick={() => updateCarousel(currentIndex + 1)}
        >
          ›
        </button>
      </div>

      {/* Member Info */}
      <div className="mt-10 text-center transition-opacity duration-500">
        <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
          {teamMembers[currentIndex].name}
        </h2>
        <p className="mt-2 tracking-wider text-gray-500 uppercase">
          {teamMembers[currentIndex].role}
        </p>
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-8">
        {teamMembers.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition-transform duration-300 ${
              i === currentIndex ? "bg-blue-900 scale-125" : "bg-blue-200"
            }`}
            onClick={() => updateCarousel(i)}
          />
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
          >
            {/* Botón cerrar */}
            <button
              className="absolute text-2xl font-bold text-black top-2 right-2 hover:text-red-500"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Imagen modal */}
            <img
              src={teamMembers[modalIndex].img}
              alt={teamMembers[modalIndex].name}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Info */}
            <h2 className="mt-4 text-xl font-bold text-blue-900">
              {teamMembers[modalIndex].name}
            </h2>
            <p className="mt-1 text-gray-500">{teamMembers[modalIndex].role}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCarousel;
