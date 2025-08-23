import PropTypes from "prop-types";
import { useState } from "react";
import {
  BiHome,
  BiStore,
  BiUserCheck,
  BiPhoneCall,
  BiChat,
  BiShield,
  BiUserVoice,
  BiBell,
} from "react-icons/bi";

const Sidebar = ({ isOpen }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const menuItems = [
    { name: "Inicio", icon: BiHome },
    { name: "Tienda", icon: BiStore },
    { name: "Nosotros", icon: BiUserCheck },
    { name: "Contactos", icon: BiPhoneCall },
    { name: "Blog", icon: BiChat },
    {
      name: "Políticas",
      icon: BiShield,
      submenu: ["Política de Tienda en Línea", "Política de Promociones", "Política de devoluciones", "Política de Facturación","Política de Envíos","Política de Cobro"], // Submenú
    },
    { name: "Preguntas frecuentes", icon: BiUserVoice },
    { name: "Aviso de privacidad", icon: BiBell },
  ];

  return (
    <div
      className={`flex flex-col bg-white overflow-hidden rounded-r-3xl shadow-md transition-all duration-300 ease-in-out
        ${isOpen ? "w-56" : "w-16"}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 transition-all duration-300 ease-in-out">
        {isOpen && (
          <img
            src={`${import.meta.env.BASE_URL}/logo.png`}
            alt="Logo"
            className="object-contain h-20 mt-4 w-22"
          />
        )}
      </div>

      {/* Menú */}
      <ul className="flex flex-col py-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          const hasSubmenu = item.submenu && item.submenu.length > 0;

          return (
            <li key={index}>
              <button
                onClick={() => hasSubmenu && setOpenSubmenu(!openSubmenu)}
                className="flex items-center w-full h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
                  <Icon size={25} />
                </span>
                {isOpen && (
                  <span className="flex-1 text-sm font-medium text-left whitespace-nowrap">
                    {item.name}
                  </span>
                )}
                {hasSubmenu && isOpen && (
                  <span className="ml-auto">{openSubmenu}</span>
                )}
              </button>

              {/* Submenú */}
              {hasSubmenu && openSubmenu && isOpen && (
                <ul className="flex flex-col mt-2 ml-12 text-blue-500">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-center h-14 hover:text-blue-800">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Validación de props
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
