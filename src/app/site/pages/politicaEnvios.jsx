import { motion } from "framer-motion";

const puntos = [
  {
    title: "Ámbito de entrega",
    description: [
      "Realizamos envíos dentro de la Republica Mexicana.",
      ]
  },
  {
    title: "Plazos de entrega",
    description: [
     "Nos esforzamos por procesar y enviar los pedidos en el menor tiempo posible. Los plazos de entrega pueden variar dependiendo de la ubicación y la disponibilidad del producto. Por lo general, el tiempo estimado de entrega es de 3 a 5 días hábiles a partir de la confirmación del pago.",
    ]
  },
  {
    title: "Costos de envío",
    description: [
       "Los costos de envío se calcularán automáticamente durante el proceso de compra, y variarán según la ubicación de entrega y el peso/volumen de los productos. Es posible que ofrezcamos promociones de envío gratuito en determinadas circunstancias, como compras superiores a un monto específico. Estas promociones se indicarán claramente en nuestro sitio web.",
    ]
  },
  {
    title: "Proceso de envío",
    description: [
        "Una vez que hayamos procesado y embalado tu pedido, lo entregaremos al servicio de envío seleccionado. Proporcionaremos un número de seguimiento para que puedas rastrear el estado de tu envío a través de nuestro sitio web. También recibirás notificaciones por correo electrónico sobre el progreso de la entrega.",
    ]
  },
  {
    title: "Empaque seguro",
    description: [
        "Nos preocupamos por garantizar que tus productos lleguen en perfectas condiciones. Utilizamos empaques seguros y resistentes para proteger los artículos durante el transporte. Si recibes un paquete dañado, te pedimos que nos contactes de inmediato para resolver la situación.",
    ]
  },
  {
    title: "Dirección de entrega",
    description: [
       "Asegúrate de proporcionar una dirección de entrega precisa y completa al realizar tu pedido. No nos hacemos responsables de los retrasos o problemas de entrega causados por información de dirección incorrecta o incompleta.",
    ]
  },
  {
    title: "Ausencia en el momento de la entrega",
    description: [
     "Si no estás disponible en el momento de la entrega, el servicio de envío puede dejar una notificación para que puedas coordinar una segunda entrega o recoger el paquete en una ubicación designada. Te recomendamos estar atento del servicio de envío.",
    ]
  },
  {
    title: "Devoluciones y cambios",
    description: [
      "Si por alguna razón necesitas devolver o cambiar un producto, te pedimos que revises nuestra política de devoluciones específica para obtener información detallada sobre el proceso y los requisitos.",
      "Ten en cuenta que esta política de envíos puede estar sujeta a cambios, por lo que te recomendamos revisarla periódicamente o contactarnos directamente si tienes alguna pregunta o inquietud.",
      "Agradecemos tu confianza en COESPRO TIENDA EN LÍNEA y nos esforzamos por brindarte un servicio de entrega de alta calidad para que disfrutes de tus compras en línea de manera conveniente y segura.",
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

const PoliticaEnvios= () => {
  return (
    <div className="max-w-4xl p-6 mx-auto my-8 bg-white rounded-xl shadow-[inset_4px_4px_8px_#D4E1F4FF,4px_4px_8px_#D4E1F4FF] border border-gray-200">
 
      <motion.h1
        className="mb-6 text-3xl font-bold text-center text-gray-800 font-josefin"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        POLÍTICA DE ENVÍOS
      </motion.h1>

      <motion.p
        className="mb-4 text-gray-700 font-josefin"
        initial="hidden"
        animate="visible"
        variants={fadeInFrom("left")}
      >
        En COESPRO, nos comprometemos a brindarte una experiencia de compra en línea satisfactoria, incluyendo una entrega confiable y oportuna de tus productos. A continuación, te presentamos nuestra política de envíos para que conozcas todos los detalles:
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

export default PoliticaEnvios;
