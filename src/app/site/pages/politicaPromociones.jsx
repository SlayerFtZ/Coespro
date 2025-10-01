import { motion } from "framer-motion";

const puntos = [
  {
    title: "Descuentos por tiempo limitado",
    description: [
      
      "Ofrecemos descuentos exclusivos en productos seleccionados durante períodos de tiempo específicos. Estas promociones se comunicarán a través de nuestros canales de marketing y en la página principal de nuestro sitio web. Los clientes pueden aprovechar estos descuentos durante el período designado." ,
      ]
  },
  {
    title: "Cupones y códigos promocionales",
    description: [
      "Proporcionamos cupones y códigos promocionales a nuestros clientes, los cuales pueden canjear durante el proceso de compra. Estos cupones y códigos pueden ofrecer descuentos en el total de la compra, envío gratuito u otras ofertas especiales. Los clientes pueden encontrar estos cupones en nuestros boletines informativos, redes sociales y otras campañas de marketing.",
     ]
  },
  {
    title: "Programa de lealtad",
    description: [
       "Implementamos un programa de lealtad para recompensar a nuestros clientes frecuentes. A través de este programa, los clientes acumulan puntos cada vez que realizan una compra. Estos puntos se pueden canjear por descuentos o beneficios adicionales en futuras compras. También ofrecemos promociones exclusivas y acceso anticipado a nuevos productos para los miembros del programa de lealtad."
    ]
  },
  {
    title: "Ofertas especiales por categoría",
    description: [
        "Regularmente, destacamos una categoría específica de productos y ofrecemos descuentos especiales en esa categoría durante un período de tiempo determinado. Esto permite a nuestros clientes encontrar productos de su interés a precios reducidos y promueve la exploración de diferentes secciones de nuestra tienda en línea."
     ]
  },
  {
    title: "Ventas estacionales",
    description: [
        "Durante períodos festivos y temporadas especiales, organizamos ventas temáticas y promociones especiales. Estas promociones pueden incluir descuentos, regalos gratuitos o envío exprés. También podemos lanzar bundles o paquetes especiales que combinen varios productos a un precio reducido."
      ]
  },
  {
    title: "Promociones exclusivas para suscriptores",
    description: [
        "Animamos a los clientes a suscribirse a nuestro boletín informativo y seguirnos en nuestras redes sociales para recibir promociones exclusivas. Estas ofertas estarán disponibles solo para clientes, suscriptores y seguidores, y pueden incluir descuentos adicionales, eventos de venta anticipada o regalos exclusivos."
     ]
  },
  {
    title: "Limitación de Responsabilidad",
    description: [
      "a) No nos hacemos responsables por cualquier daño directo, indirecto, incidental, especial o consecuente que surja del uso de nuestra tienda en línea o la compra de nuestros productos.",
      "b) Nos esforzamos por brindar información precisa y actualizada en nuestra tienda en línea, pero no garantizamos la exactitud o integridad de dicha información. Es responsabilidad del usuario verificar cualquier información antes de realizar una compra."
    ]
  },
  {
    title: "Modificaciones a los Términos y Condiciones Programas de referidos",
    description: [
      "Fomentamos a nuestros clientes a recomendar nuestra tienda en línea a amigos y familiares mediante programas de referidos. Cuando un cliente refiere a alguien y esa persona realiza una compra, tanto el cliente existente como el nuevo cliente pueden recibir beneficios especiales, como descuentos adicionales o crédito de tienda.",
      "Es importante tener en cuenta que todas nuestras promociones estarán sujetas a términos y condiciones específicos, los cuales se detallarán en cada oferta. Nos reservamos el derecho de realizar cambios en nuestra política de promociones en cualquier momento, para mejorar y adaptar nuestras ofertas a las necesidades y preferencias de nuestros clientes."
    ]
  },
];

const fadeInFrom = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const PoliticaPromociones = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto my-8 bg-white rounded-xl shadow-[inset_4px_4px_8px_#D4E1F4FF,4px_4px_8px_#D4E1F4FF] border border-gray-200">
 
      <motion.h1
        className="mb-6 text-3xl font-bold text-center text-gray-800 font-josefin"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Política de Promociones de COESPRO TIENDA EN LÍNEA
      </motion.h1>

      <motion.p
        className="mb-4 text-gray-700 font-josefin"
        initial="hidden"
        animate="visible"
        variants={fadeInFrom("left")}
      >
        En nuestra tienda en línea, nos esforzamos por ofrecer promociones atractivas para nuestros clientes, brindándoles oportunidades especiales para ahorrar y disfrutar de una experiencia de compra satisfactoria. A continuación, se presenta nuestra política de promociones:
      </motion.p>

      <div className="space-y-6">
        {puntos.map((p, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInFrom(i % 2 === 0 ? "left" : "right")}
            className="mb-4"
          >
            <h2 className="text-xl font-semibold text-gray-800 font-josefin">
              {i + 1}. {p.title}
            </h2>
            <div className="mt-1 ml-4 text-gray-700 font-josefin">
              {(Array.isArray(p.description) ? p.description : [p.description]).map((linea, j) => (
                <p key={j} className="mb-2">{linea}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-6 text-gray-700 font-josefin"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInFrom("right")}
      >
        Esta política está diseñada para garantizar la satisfacción y confianza de nuestros clientes al comprar en nuestra tienda en línea. Nos comprometemos a brindar un proceso de pago seguro, transparente y sin complicaciones.
      </motion.p>

      <motion.div
        className="mt-8 space-y-1 text-gray-700 font-josefin"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInFrom("left")}
      >
        <p><strong>Coespro S.A</strong></p>
        <p>Dirección: 1ro de Mayo Mz 55 Lt 13, Col. Barranca Honda, Puebla, México</p>
        <p>Correo: <a href="mailto:hola@coespro.com.mx" className="text-blue-500">hola@coespro.com.mx</a></p>
        <p>Teléfono: (52) 800 611 24 82</p>
        <p>Web: <a href="https://www.coespro.com.mx" className="text-blue-500">www.coespro.com.mx</a></p>
      </motion.div>
    </div>
  );
};

export default PoliticaPromociones;
