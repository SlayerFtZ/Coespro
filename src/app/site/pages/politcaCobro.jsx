import { motion } from "framer-motion";

const puntos = [
  {
    title: "Métodos de pago aceptados",
    description: [
      "Aceptamos una variedad de métodos de pago para brindar flexibilidad a nuestros clientes. Esto incluye pagos con tarjeta de crédito o débito, transferencia bancaria, PayPal, Mercado Pago, Kuesky Pay y otros proveedores de servicios de pago confiables.",
      ]
  },
  {
    title: "Seguridad de los datos de pago",
    description: [
    "Nos comprometemos a proteger la seguridad de los datos de pago de nuestros clientes. Utilizamos tecnologías de encriptación y cumplimos con los estándares de seguridad de la industria para asegurar que la información confidencial se transmita de forma segura y se almacene de manera adecuada.",
    ]
  },
  {
    title: "Proceso de pago",
    description: [
     "Nuestro proceso de pago es fácil y transparente. Una vez que los clientes hayan seleccionado los productos que desean comprar, se les mostrará un resumen detallado de su pedido, incluido el total a pagar. Durante el proceso de pago, los clientes deberán proporcionar la información necesaria, como la dirección de facturación y los datos de pago.",
    ]
  },
  {
    title: "Confirmación del pago",
    description: [
        "Una vez que hayamos procesado y embalado tu pedido, lo entregaremos al servicio de envío seleccionado. Proporcionaremos un número de seguimiento para que puedas rastrear el estado de tu envío a través de nuestro sitio web. También recibirás notificaciones por correo electrónico sobre el progreso de la entrega.",
    ]
  },
  {
    title: "Precios y cargos adicionales",
    description: [
     "Todos los precios en nuestra tienda en línea se mostrarán claramente junto con los impuestos aplicables y los cargos de envío, si corresponde. Nos esforzamos por ser transparentes en cuanto a los costos adicionales para evitar sorpresas desagradables durante el proceso de pago.",
    ]
  },
  {
    title: "Política de devolución y reembolso",
    description: [
      "Si un cliente necesita devolver un producto o solicitar un reembolso, nuestra política de devolución y reembolso establecerá los procedimientos y condiciones correspondientes. Esta política estará claramente comunicada en nuestro sitio web y se seguirá de manera justa y consistente.",
    ]
  },
  {
    title: "Atención al cliente",
    description: [
     "Nuestro equipo de atención al cliente estará disponible para ayudar a los clientes en caso de cualquier problema o duda relacionada con el proceso de pago. Se proporcionarán canales de contacto claros, como correo electrónico o número de teléfono, para facilitar la comunicación.",
     "Esta política de cobro está diseñada para garantizar la satisfacción y confianza de nuestros clientes al comprar en nuestra tienda en línea. Nos comprometemos a brindar un proceso de pago seguro, transparente y sin complicaciones, y a resolver cualquier problema que pueda surgir de manera justa y eficiente.",
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

const PoliticaCobro= () => {
  return (
    <div className="max-w-4xl p-6 mx-auto my-8 bg-white rounded-xl shadow-[inset_4px_4px_8px_#D4E1F4FF,4px_4px_8px_#D4E1F4FF] border border-gray-200">
 
      <motion.h1
        className="mb-6 text-3xl font-bold text-center text-gray-800 font-josefin"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Política de Cobro de COESPRO TIENDA EN LÍNEA
      </motion.h1>

      <motion.p
        className="mb-4 text-gray-700 font-josefin"
        initial="hidden"
        animate="visible"
        variants={fadeInFrom("left")}
      >
        En nuestra tienda en línea, hemos establecido una política de cobro clara y transparente para garantizar una experiencia de compra satisfactoria para nuestros clientes. A continuación, se detallan los aspectos clave de nuestra política de cobro:
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

export default PoliticaCobro;
