import { motion } from "framer-motion";

const puntos = [
  {
    title: "RESPONSABLE DEL TRATAMIENTO DE DATOS:  COESPRO S.A",
    description: [
      "Dirección: 1ra de Mayo Mza 55 Lt 13, Col Barranca Honda, Puebla, Puebla",
      "Correo electrónico: hola@coespro.com.mx",
      "Teléfono: 800 611 24 82",
    ]
  },
  {
    title: "FINALIDAD DEL TRATAMIENTO DE DATOS:",
    description: [
        "Los datos personales que usted nos proporciona, ya sea en forma presencial en nuestros puntos de venta, en nuestros kioscos de registro de clientes o eventos públicos así como los que proporciona a través de plataformas digitales y de telecomunicaciones, como nuestros sitios de internet página web, redes sociales, tienda en línea, aplicaciones “app” o vía telefónica, son tratados de forma estrictamente confidencial, por lo que, al proporcionarlos, COESPRO «le garantiza que serán utilizados única y exclusivamente para los siguientes fines:",
        "Identificarlo como cliente o interesado en nuestros productos y/o servicios, y con ello, generar una base de datos.",
        "Contactarlo para darle seguimiento en la compra de nuestros servicios y/o productos.",
        "Ofrecerle información y publicidad sobre nuestros productos y servicios relacionados y para comunicarle sobre cambios en los mismos.",
        "Auxiliarlo en la gestión de soporte y asesoría antes, durante y después de la instalación.",
        "Procesos administrativos internos de integración de expediente, devoluciones, procesamiento de solicitudes, cobro, aclaraciones.",
        "Atención de quejas y aclaraciones.",
        "Elaboración de documentos, contratos, convenios, facturas, recibos, y documentación relacionada con la adquisición de alguno de nuestros servicios y/o servicios.",
    ]
  },
  {
    title: "FOTOGRAFÍAS Y/O VIDEOS",
    description: [
     "Estos archivos podrán ser tratadas por COESPRO de conformidad con las siguientes finalidades",
     "Podrán ser publicados en la página web, redes sociales como YouTube, Facebook, Instagram, Tic Tok, Twitter, WhatsApp, folletos y/o anuncios publicitarios. El uso de estas fotografías y/o videos es únicamente promocional. Las personas cuyas fotografías /o videos que sean publicadas no tendrán derecho a reclamar compensación económica alguna por el uso de su imagen. Así mismo le informamos que las fotografías y/o videos podrán ser utilizadas con fines publicitarios.",
     "Sus datos personales, Fotografías y/o videos solo son tratados por el personal adscrito a esta empresa a efecto a ser utilizada en los puntos anteriormente adscritos y no se trasferirán a ningún tercero ajeno a ella, salvo para el cumplimiento de las obligaciones legales ante las autoridades competentes.",
    ]
  },
  {
    title: "VIDEO VIGILANCIA",
    description: [
      "Cuando usted visita cualquiera de nuestras unidades de negocios o áreas de venta, puede estar siendo video grabado, exclusivamente por cuestiones de seguridad de usted y las personas que nos visitan, y las imágenes y sonidos que se capturan, se conservan en una memoria por un plazo no mayor a 24 horas.",
      "Las imágenes y sonidos capturados por nuestras cámaras de videovigilancia solo podrán ser transmitidos a las autoridades correspondientes cuando estas lo soliciten de manera fundamentada y motivada."
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

const AvisoPrivacidad= () => {
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

export default AvisoPrivacidad;
