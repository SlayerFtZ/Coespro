import PropTypes from "prop-types";
import { BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
import { motion } from "framer-motion";

const TopBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="relative w-full">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${
            import.meta.env.BASE_URL
          }/fondoPresentacion.jpg)`,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Barra superior */}
      <div className="relative z-10 flex items-center justify-between w-full shadow-md p-9 bg-blue-100/20">
        <div className="flex items-center space-x-4">
          {/* Botón de menú */}
          <button
            className="flex p-2 text-black bg-white rounded-md shadow hover:bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
          </button>

          {/* Título animado */}
          <motion.h1
            className="px-2 py-1 text-lg font-bold text-blue-500 rounded sm:text-xl md:text-2xl lg:text-3xl font-josefin bg-white/90"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Transformamos Tu Visión En Ganancias
          </motion.h1>
        </div>

        {/* Icono de carrito */}
        <button className="relative p-2 transition rounded-full hover:bg-blue-300">
          <BiShoppingBag size={40} color="black" />
          <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1 sm:w-5 sm:h-5">
            3
          </span>
        </button>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default TopBar;
