import { motion } from "framer-motion";

const puntos = [
  {
    title: "Uso de la Tienda en Línea",
    description: [
      
      "a) Nuestra tienda en línea está destinada únicamente para uso personal y no comercial. No puedes revender o distribuir nuestros productos con fines comerciales sin autorización previa." ,
      "b) Te comprometes a utilizar nuestro sitio web de manera legal y ética, respetando las leyes y regulaciones aplicables en tu jurisdicción.",
      "c) No puedes utilizar nuestra tienda en línea para enviar contenido dañino, difamatorio, obsceno, ilegal o que viole los derechos de terceros."
    ]
  },
  {
    title: "Información del Usuario",
    description: [
      "a) Al realizar una compra en nuestra tienda en línea, te solicitaremos cierta información personal, incluyendo, pero no limitado a, tu nombre, dirección de correo electrónico, dirección de envío y datos de pago. Toda la información proporcionada debe ser precisa, completa y actualizada.",
      "b) Nos comprometemos a proteger tu privacidad y utilizar tus datos personales de acuerdo con nuestra Política de Privacidad. No compartiremos tu información con terceros sin tu consentimiento, excepto en los casos que sean necesarios para procesar tu pedido, como la entrega de productos por parte de una empresa de transporte."
    ]
  },
  {
    title: "Precios y Pagos",
    description: [
      "a) Los precios de los productos se mostrarán en nuestra tienda en línea y estarán en la moneda local especificada.",
      "b) Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso. Sin embargo, una vez que hayas realizado una compra, el precio no se modificará para ese pedido en particular.",
      "c) Los pagos se realizarán a través de los métodos de pago especificados en nuestra tienda en línea. Nos aseguraremos de proporcionar un entorno seguro para tus transacciones. No almacenamos ni tenemos acceso a tu información de pago una vez que se haya completado la transacción."
    ]
  },
  {
    title: "Envíos y Entregas",
    description: [
      "a) Realizaremos nuestros mejores esfuerzos para procesar y enviar tus pedidos dentro de los plazos especificados. Sin embargo, no nos responsabilizamos por retrasos causados por circunstancias fuera de nuestro control.",
      "b) El costo y tiempo de envío se calculará según la dirección de entrega proporcionada por ti y se mostrará antes de finalizar la compra.",
      "c) Una vez que los productos sean entregados al transportista, no nos hacemos responsables de cualquier daño, pérdida o robo durante el proceso de entrega. Te recomendamos que revises los productos al recibirlos y notifiques cualquier problema de inmediato."
    ]
  },
  {
    title: "Devoluciones y Reembolsos",
    description: [
      "a) Aceptaremos devoluciones y realizaremos reembolsos de acuerdo con nuestra Política de Devoluciones, la cual puedes encontrar en nuestra tienda en línea.",
      "b) Los productos deben ser devueltos en su estado original y empaques completos. Nos reservamos el derecho de rechazar una devolución si los productos han sido dañados o utilizados de manera inadecuada."
    ]
  },
  {
    title: "Propiedad Intelectual",
    description: [
      "a) Todos los derechos de propiedad intelectual relacionados con nuestra tienda en línea, incluyendo, pero no limitado a, logotipos, diseños, imágenes y textos, son propiedad exclusiva nuestra o de nuestros proveedores y están protegidos por las leyes de propiedad intelectual aplicables.",
      "b) No se te otorga ningún derecho o licencia para utilizar nuestra propiedad intelectual sin nuestro consentimiento expreso por escrito."
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
    title: "Modificaciones a los Términos y Condiciones",
    description: [
      "Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Cualquier cambio será efectivo inmediatamente después de su publicación en nuestra tienda en línea. Se te recomienda revisar regularmente esta sección para estar al tanto de cualquier cambio.",
      "Estos términos y condiciones constituyen el acuerdo completo entre tú y nosotros con respecto al uso de nuestra tienda en línea. Si tienes alguna pregunta o inquietud, no dudes en ponerse en contacto con nuestro servicio de atención al cliente. ¡Gracias por utilizar nuestra tienda en línea!"
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

const PoliticaTiendaLinea = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto my-8 bg-white rounded-xl shadow-[inset_4px_4px_8px_#D4E1F4FF,4px_4px_8px_#D4E1F4FF] border border-gray-200">
 
      <motion.h1
        className="mb-6 text-3xl font-bold text-center text-gray-800 font-josefin"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        TÉRMINOS Y CONDICIONES DE LA TIENDA EN LÍNEA
      </motion.h1>

      <motion.p
        className="mb-4 text-gray-700 font-josefin"
        initial="hidden"
        animate="visible"
        variants={fadeInFrom("left")}
      >
        Bienvenido/a a COESPRO tienda en línea. Antes de realizar cualquier compra, te invitamos a leer detenidamente los siguientes términos y condiciones que rigen el uso de nuestra plataforma. Al acceder y utilizar nuestro sitio web, aceptas cumplir con estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de los términos establecidos, te recomendamos que no utilices nuestra tienda en línea.
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
        Esta política de cobro está diseñada para garantizar la satisfacción y confianza de nuestros clientes al comprar en nuestra tienda en línea. Nos comprometemos a brindar un proceso de pago seguro, transparente y sin complicaciones.
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

export default PoliticaTiendaLinea;
