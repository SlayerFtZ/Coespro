import PropTypes from "prop-types";
import { BiShoppingBag, BiMenu, BiX } from "react-icons/bi";

const TopBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-blue-100 shadow-md">
      {/* Contenedor izquierdo */}
      <div className="flex items-center space-x-4">
        {/* Botón de menú siempre visible */}
        <button
          className="flex p-2 text-black bg-white rounded-md shadow hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>

        {/* Título adaptativo */}
        <h1 className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl lg:text-3xl">
          Transformamos Tu Visión En Ganancias
        </h1>
      </div>

      {/* Icono de carrito */}
      <button className="relative p-2 transition rounded-full hover:bg-blue-300">
        <BiShoppingBag size={25} color="black" />
        <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1 sm:w-5 sm:h-5">
          3
        </span>
      </button>
    </div>
  );
};

TopBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default TopBar;
