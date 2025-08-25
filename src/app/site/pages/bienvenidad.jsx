import { motion } from "framer-motion";

const Bienvenida = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-white">
      {/* Contenedor más ancho y alto, responsivo */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-11/12 max-w-6xl h-[85%] min-h-[500px] bg-white rounded-xl 
                      shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff] overflow-hidden">

        {/* SVG como fondo gigante y parcialmente transparente */}
        <motion.img
          src={`${import.meta.env.BASE_URL}/bienvenida.svg`}
          alt="Bienvenida"
          className="absolute w-[120%] md:w-[150%] h-[120%] md:h-[150%] object-contain -top-10 -left-10 opacity-40"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Texto centrado sobre el SVG con gradiente azul */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center px-4 text-center md:text-left md:px-10"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl font-josefin bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text">
            ¡Bienvenido a COESPRO!
          </h1>
          <p className="mt-4 text-xl font-light font-semibold text-transparent sm:text-2xl md:text-2xl lg:text-3xl bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text">
            Tu tienda de confianza para productos de calidad
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Bienvenida;
