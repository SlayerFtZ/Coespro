import { motion } from "framer-motion";

const puntos = [
  {
    title: "Condiciones generales de devolución:",
    description: [
        " a) Las devoluciones solo se aceptarán dentro de los 3 días siguientes a la fecha de entrega.",
        " b) El producto debe estar en su estado original, sin usar y en el mismo embalaje en el que se recibió.",
        "c) Se debe presentar el recibo de compra original o el comprobante de pago correspondiente.",
        "d) Los artículos de venta final, como productos en oferta o liquidación, no son elegibles para devolución, a menos que estén defectuosos.",
     ]
  },
  {
    title: "Proceso de devolución:",
    description: [
        "a) Para solicitar una devolución, el cliente debe comunicarse con nuestro servicio de atención al cliente por correo electrónico hola@coespro.com.mx dentro del plazo establecido.",
        "b) En la solicitud de devolución, los clientes deben proporcionar la siguiente información: comprobante de pago, número de pedido, detalles del producto, motivo de la devolución y evidencia fotográfica.",
        "c)  El servicio de atención al cliente proporcionará al cliente las instrucciones y la dirección de devolución correspondiente.",
        "D) El cliente es responsable de los costos de envío asociados con la devolución, a menos que el producto sea defectuoso o haya ocurrido un error por nuestra parte.",
      ]
  },
  {
    title: "Inspección y aprobación de la devolución:",
    description: [
        "a) Una vez que recibamos el producto devuelto, lo inspeccionaremos en un plazo no mayor de 15 días hábiles para verificar su estado y cumplimiento de las condiciones de devolución.",
        "b) Si el producto cumple con los requisitos, se procederá al reembolso o cambio según la preferencia del cliente.",
        "c) En caso de que el producto no cumpla con las condiciones de devolución, nos reservamos el derecho de rechazar la devolución y enviar el producto de vuelta al cliente a su costo.",
     ]
  },
  {
    title: "Opciones de reembolso:",
    description: [
        "a) Si el cliente solicita un reembolso, se realizará utilizando el mismo método de pago utilizado durante la compra original, a menos que se acuerde lo contrario.",
        "b) Los reembolsos se procesarán dentro de 15 días hábiles a partir de la aprobación de la devolución.",
    ]
  },
  {
    title: "Cambios:",
    description: [
        "a) Si el cliente prefiere realizar un cambio por otro producto, se proporcionarán opciones disponibles en el inventario.",
        "b) En caso de que el nuevo producto tenga un precio superior, se cobrará la diferencia correspondiente.",
        "c) Si el nuevo producto tiene un precio inferior, se reembolsará la diferencia utilizando el mismo método de pago utilizado durante la compra original.",
    ]
  },
  {
    title: "Productos defectuosos o errores en el envío:",
    description: [
        "a) Si el producto recibido está defectuoso o hay un error en el envío, nos haremos responsables de los costos de envío asociados con la devolución.",
        "b) En tales casos, se ofrecerá al cliente la opción de reembolso completo, cambio por el mismo producto o un producto similar, sujeto a disponibilidad.",
    ]
  },
  {
    title: "Comunicación y notificación:",
    description: [
        "Nos comprometemos a mantener a nuestros clientes informados mediante vía escrita o por voz; durante todo el proceso de devolución, incluyendo la confirmación de la solicitud, actualizaciones sobre el estado de la devolución y la notificación final del reembolso o crédito en la tienda.",
        "Esta política de devoluciones tiene como objetivo garantizar la satisfacción del cliente y proporcionar una experiencia de compra confiable y sin complicaciones. Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en comunicarte con nuestro servicio de atención al cliente.",
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

const PoliticaDevoluciones = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto my-8 bg-white rounded-xl shadow-[inset_4px_4px_8px_#D4E1F4FF,4px_4px_8px_#D4E1F4FF] border border-gray-200">
 
      <motion.h1
        className="mb-6 text-3xl font-bold text-center text-gray-800 font-josefin"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Política de devoluciones de TIENDA EN LINEA COESPRO SA
      </motion.h1>

      <motion.p
        className="mb-4 text-gray-700 font-josefin"
        initial="hidden"
        animate="visible"
        variants={fadeInFrom("left")}
      >
       En COESPRO SA, nos esforzamos por brindar productos y servicios de alta calidad a nuestros clientes. Sin embargo, entendemos que a veces puede ser necesario realizar una devolución. Por lo tanto, hemos desarrollado la siguiente política de devoluciones para garantizar una experiencia de compra satisfactoria:
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

export default PoliticaDevoluciones;
