import PropTypes from "prop-types";
import { BiShoppingBag, BiMenu, BiX } from "react-icons/bi";

const TopBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-blue-100 shadow-md">
      <div className="flex items-center space-x-4">
        <button
          className="p-2 text-black bg-white rounded-md shadow hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>
        <h1 className="text-2xl font-extrabold text-blue-600">
           Transformamos Tu visión En Ganancias
        </h1>
      </div>

      <button className="relative p-2 transition rounded-full hover:bg-blue-300">
        <BiShoppingBag size={28} color="black" />
        <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold bg-red-500 rounded-full -top-1 -right-1">
          3
        </span>
      </button>
    </div>
  );
};

// Validación de props
TopBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default TopBar;
