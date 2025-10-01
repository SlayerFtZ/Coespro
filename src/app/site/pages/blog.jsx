import React from "react";

export default function CoesproPresentation() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="mt-10 flex flex-col md:flex-row md:space-x-4">
        {/* Large Card */}
        <a
          className="relative w-full md:w-2/3 rounded-lg overflow-hidden mb-4 md:mb-0 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          style={{ height: "24em" }}
          href="#"
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}
          ></div>
          <img
              src={`${import.meta.env.BASE_URL}/servicios/capacitacion1.jpg`}
              className="absolute left-0 top-0 w-full h-full object-cover"
              alt="COESPRO purificación"
            />


          <div className="p-6 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-blue-800 text-white inline-flex items-center justify-center mb-2 rounded-full text-sm">
              COESPRO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Soluciones integrales en purificación de agua
            </h2>
            <div className="flex mt-3 items-center">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="autor"
              />
              <div>
                <p className="font-semibold text-white text-sm">Equipo COESPRO</p>
                <p className="text-gray-300 text-xs">2025</p>
              </div>
            </div>
          </div>
        </a>

        {/* Small Card */}
        <a
          className="relative w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          style={{ height: "24em" }}
          href="#"
        >
          <div
            className="absolute left-0 top-0 w-full h-full z-10"
            style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}
          ></div>
          <img
           src={`${import.meta.env.BASE_URL}/servicios/instalacionServicio1.jpg`}
            className="absolute left-0 top-0 w-full h-full object-cover"
            alt="instalación purificadora"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-blue-800 text-white inline-flex items-center justify-center mb-2 rounded-full text-sm">
              Instalaciones
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              Instalación en toda la República Mexicana
            </h2>
            <div className="flex mt-3 items-center">
              <img
                src="https://randomuser.me/api/portraits/women/54.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="autor"
              />
              <div>
                <p className="font-semibold text-white text-sm">Equipo COESPRO</p>
                <p className="text-gray-300 text-xs">2025</p>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Blog Cards Section */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            title: "Por qué elegir COESPRO",
            text: "Ofrecemos equipos certificados y capacitación especializada para garantizar agua purificada de alta calidad.",
            img: `${import.meta.env.BASE_URL}/servicios/intalacionServicio2.jpg`
          },
          {
            title: "Garantía y soporte",
            text: "COESPRO asegura soporte técnico y garantía extendida para todos nuestros equipos de purificación.",
            img: `${import.meta.env.BASE_URL}/servicios/certificados.jpg`
          },
          {
            title: "Proceso de purificación",
            text: "Utilizamos tecnología de punta con suavizadores y osmosis inversa para garantizar la pureza del agua.",
            img: `${import.meta.env.BASE_URL}/servicios/equipoManual.png`
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <div
              className="h-48 lg:w-48 flex-none bg-cover"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
              <div className="flex mt-4 items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="autor"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">Equipo COESPRO</p>
                  <p className="text-gray-500 text-xs">2025</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
