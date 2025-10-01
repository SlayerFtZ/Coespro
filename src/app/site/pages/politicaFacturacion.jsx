import { motion } from "framer-motion";

const puntos = [
  {
    title: "Informacion para facturacion",
    description: [
      "La factura electrónica se deberá solicitar al recibir su compra",
      "La factura será enviada al correo proporcionado por el usuario, quien contará con un lapso de 24 horas a partir de la fecha de envío para cualquier duda o aclaración de la misma.",
      "La factura se realizará con los datos proporcionados por el usuario, en caso de existir alguna información errónea, se podrá cambiar la factura siempre y cuando aún este dentro del mes de pago.",
      "No se podrá solicitar facturas por compras de meses anteriores o cambios en la factura pagada fuera del mes.",
      "No se podrá solicitar facturas por compras de meses anteriores o cambios en la factura pagada fuera del mes.",
      "La recepción de solicitudes para factura se encuentra en horario de 9:00 am a 6:00 pm de lunes a viernes.",
      "No se aceptarán correcciones, ni cancelaciones de facturas después del mes en que se realizó el pago.",
     ]
  }
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

const PoliticaFacturacion = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto my-8 bg-white rounded-xl shadow-[inset_4px_4px_8px_#D4E1F4FF,4px_4px_8px_#D4E1F4FF] border border-gray-200">
 
      <motion.h1
        className="mb-6 text-3xl font-bold text-center text-gray-800 font-josefin"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        POLÍTICA DE FACTURACIÓN
      </motion.h1>

      <motion.p
        className="mb-4 text-gray-700 font-josefin"
        initial="hidden"
        animate="visible"
        variants={fadeInFrom("left")}
      >
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

export default PoliticaFacturacion;
