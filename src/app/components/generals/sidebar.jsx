import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  BiHome,
  BiStore,
  BiUserCheck,
  BiPhoneCall,
  BiChat,
  BiShield,
  BiUserVoice,
  BiBell,
  BiX,
} from "react-icons/bi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Inicio", icon: BiHome },
    { name: "Tienda", icon: BiStore },
    { name: "Nosotros", icon: BiUserCheck },
    { name: "Contactos", icon: BiPhoneCall },
    { name: "Blog", icon: BiChat },
    {
      name: "Políticas",
      icon: BiShield,
      submenu: [
        "Política de Tienda en Línea",
        "Política de Promociones",
        "Política de Devoluciones",
        "Política de Facturación",
        "Política de Envíos",
        "Política de Cobro",
      ],
    },
    { name: "Preguntas frecuentes", icon: BiUserVoice },
    { name: "Aviso de privacidad", icon: BiBell },
  ];

  const handleMenuClick = (hasSubmenu, index) => {
    if (hasSubmenu) {
      setOpenSubmenu(openSubmenu === index ? null : index);
    } else if (isMobile) {
      toggleSidebar();
    }
  };

  const handleOverlayClick = () => {
    if (isMobile && isOpen) toggleSidebar();
  };

  return (
    <>
      {/* Overlay en móvil/tablet */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={handleOverlayClick}
        />
      )}

      <div
        className={`fixed md:relative top-0 left-0 h-full z-40
          flex flex-col bg-white overflow-y-auto rounded-r-3xl shadow-md transition-transform duration-300 ease-in-out
          ${isMobile ? `w-full max-w-xs ${isOpen ? "translate-x-0" : "-translate-x-full"}` : ""}
          ${!isMobile ? (isOpen ? "w-56" : "w-16") : ""}
        `}
      >
        {/* Botón X solo en móvil */}
        {isMobile && (
          <button
            className="absolute text-gray-700 top-4 right-4 hover:text-gray-900"
            onClick={toggleSidebar}
          >
            <BiX size={28} />
          </button>
        )}

        {/* Logo */}
        <div className="flex items-center justify-center h-20 mt-8 transition-all duration-300 ease-in-out">
          {isOpen && (
            <img
              src={`${import.meta.env.BASE_URL}/logo.png`}
              alt="Logo"
              className="object-contain w-20 h-16 sm:h-20 sm:w-24"
            />
          )}
        </div>

        {/* Menú */}
        <ul className="flex flex-col py-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const hasSubmenu = item.submenu?.length > 0;

            return (
              <li key={index}>
                <button
                  onClick={() => handleMenuClick(hasSubmenu, index)}
                  className="flex items-center w-full h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400">
                    <Icon size={25} />
                  </span>
                  {isOpen && (
                    <span className="flex-1 text-sm font-medium text-left truncate whitespace-nowrap">
                      {item.name}
                    </span>
                  )}
                </button>

                {/* Submenú */}
                {hasSubmenu && openSubmenu === index && isOpen && (
                  <ul className="flex flex-col mt-2 ml-6 text-blue-500 transition-all duration-300 ease-in-out sm:ml-8">
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex items-center h-10 text-xs truncate sm:text-sm hover:text-blue-800"
                        onClick={() => isMobile && toggleSidebar()}
                      >
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
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
