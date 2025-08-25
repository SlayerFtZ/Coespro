import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

const demoProducts = [
  {
    id: 1,
    title: "BULTO DE ZEOLITA MINERAL 1 PIE CUBICO",
    price: 5960,
    rating: 4,
    image: `${import.meta.env.BASE_URL}/productos/producto1.png`,
    description:
      "La zeolita PURIKOR es el medio de filtración granular con el mejor desempeño, hecho a base de un mineral con propiedades únicas. Su estabilidad y micro porosidad lo hacen el medio de filtración perfecto para prácticamente cualquier aplicación.",
    benefits: [
      "+ Envio",
      "Mayor claridad.",
      "Menor costo de operación.",
      "Reduce 50% la necesidad del retrolavado.",
      "Reduce consumo de agua.",
      "Filtra partículas hasta 3 micras.",
      "Seguro al medio ambiente al ser 100% natural.",
    ],
    specifications: {
      Presentación: "Bultos de 1 pie cúbico",
      Tamaño: "1.18mm",
      Color: "Crema",
      Porosidad: "35%",
      Malla: "8-16",
      "Dureza Mosh": "3",
      Peso: "22 kg",
      Dimensiones: "52 x 30 x 60 cm",
    },
  },
  {
    id: 2,
    title:
      "MANÓMETRO ALTAMIRA CONEXIÓN BASE CON GLICERINA 0-100PSI CONEXIÓN 1/4″",
    price: 499,
    rating: 4,
    image: `${import.meta.env.BASE_URL}/productos/producto2.jpg`,
    description:
      "Los manómetros ALTAMIRA están diseñados para realizar mediciones en diversos rangos de presión, lo invitamos a conocer sus características y especificaciones.",
    benefits: [
      "+ Envio",
      "Equipos hidroneumáticos.",
      "Sistemas contra incendio.",
      "Sistemas de alta presión.",
      "Tratamientos de agua.",
      "En general aplicaciones donde se requiera la lectura de presión.",
    ],
    specifications: {
      "Rango de precisión": "1.6% - 2.5%",
      "Rango de temperatura": "-20° C a 60°C",
      "Máxima temperatura del medio": "60°C",
      "Tipo de montaje": "Conexión base",
      Ventajas:
        "Caja en acero inoxidable 304, Conexión en bronce o acero inoxidable 316  (consulte modelos), Dial y aguja en aluminio con doble escala de presión (psi y kg/cm²), Elementos internos en aleación de cobre",
      Peso: "26 kg",
      Dimensiones: "8 x 4 x 10 cm",
    },
  },
  {
    id: 3,
    title: "KIT ANALIZADOR DE CLORO y PH",
    price: 299,
    rating: 4,
    image: `${import.meta.env.BASE_URL}/productos/producto3.jpg`,
    description: "Kit portátil para medir niveles de cloro y pH en agua.",
    benefits: [
      "Incluye: 1 gotero de 20 ml para medir pH",
      "Incluye: 1 gotero de 20 ml para medir Cloro",
      "Rango de medición Cloro: 0.3 a 3.0",
      "Rango de medición PH: 6.8 a 8.2",
      "Ideal para uso residencial, purificadoras, acuarios y albercas",
    ],
    specifications: {
      Peso: "0.6 kg",
      Dimensiones: "24 x 20 x 10 cm",
    },
  },
  {
    id: 4,
    title: "KIT DE PRESIÓN PRES 10",
    price: 649,
    rating: 5,
    image: `${import.meta.env.BASE_URL}/productos/producto4.jpg`,
    description:
      "Este Kit de control es ideal para el ensamble de sistemas de presión compactos y de operación automática. Ya que no necesita de un tanque precargado, switch de presión, etc.",
    benefits: [
        "+ Envio",
      "Aplicaciones: Residenciales, Comerciales",
      "Automático",
      "Compacto",
      "Silencioso",
      "Fácil de instalar",
      "Incluye: manómetro de diseño desmontable, leds indicadores y pulsador de rearme manual",
      "Válvula check integrada",
      "No requiere mantenimiento",
      "Protección contra trabajo en seco",
      "Rearme automático",
    ],
    specifications: {
      "Temperatura ambiente máxima": "60° C",
      "Presión máxima de trabajo": "145 psi",
      "Grado de protección": "IP65",
      "Rango presión de arranque": "PRES 10 22.5 ± 2.5 psi (No ajustable)",
      Peso: "1.55 kg",
      Dimensiones: "16 × 11 × 24 cm",
    },
  },
];

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl overflow-y-auto max-h-[90vh]">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          {product.title}
        </h2>

        {/* Descripción */}
        <section className="mb-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Descripción
          </h3>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {product.description}
          </p>
        </section>

        {/* Beneficios */}
        {product.benefits && (
          <section className="mb-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
              Beneficios
            </h3>
            <ul className="leading-relaxed text-gray-700 list-disc list-inside dark:text-gray-300">
              {product.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Especificaciones */}
        {product.specifications && (
          <section className="mb-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
              Especificaciones
            </h3>
            <ul className="leading-relaxed text-gray-700 list-disc list-inside dark:text-gray-300">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </section>
        )}

        <button
          onClick={onClose}
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string),
    specifications: PropTypes.objectOf(PropTypes.string),
  }),
  onClose: PropTypes.func.isRequired,
};

const ProductCard = ({ product, onViewSpecs, index }) => {
  const safeRating = Math.max(0, Math.min(5, Number(product.rating) || 0));
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: index * 0.1 },
          });
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={controls}
      className="flex flex-col w-full h-full max-w-sm rounded-lg shadow-md bg-gradient-to-r from-blue-200 via-blue-200 to-blue-200"
    >
      <img
        className="object-contain h-48 p-8 mx-auto rounded-t-lg sm:h-56 md:h-64"
        src={product.image}
        alt={product.title}
      />
      <div className="flex flex-col justify-between flex-grow px-5 pb-5">
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-slate-500 line-clamp-2">
          {product.title}
        </h3>
        <div className="flex items-center mt-2.5 mb-4">
          {[...Array(safeRating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-blue-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {safeRating}.0
          </span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-slate-500 ">
            ${product.price}
          </span>
          <button
            onClick={() => onViewSpecs(product)}
            className="text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 sm:px-5 py-2.5 font-semibold"
          >
            Ver Especificaciones
          </button>
        </div>
      </div>
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    benefits: PropTypes.arrayOf(PropTypes.string),
    specifications: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  onViewSpecs: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const ProductsGrid = ({ items }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            onViewSpecs={setSelectedProduct}
          />
        ))}
      </div>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

ProductsGrid.propTypes = {
  items: PropTypes.arrayOf(ProductCard.propTypes.product),
};

ProductsGrid.defaultProps = {
  items: demoProducts,
};

export default ProductsGrid;
