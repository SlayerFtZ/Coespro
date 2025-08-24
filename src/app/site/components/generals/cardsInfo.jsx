import PropTypes from "prop-types";
import { BiDotsVerticalRounded } from "react-icons/bi";

const cardsData = [
  {
    color: "from-blue-200 to-green-200",
    date: "Enero 09, 2025",
    title: "Equipos Certificados",
    description:
      "Nuestros equipos están diseñados para proporcionar agua limpia y segura, eliminando contaminantes y garantizando la pureza en cada gota. Además, al invertir en nuestros productos certificados, puedes estar seguro de ofrecer a tus clientes la tranquilidad de saber que están adquiriendo un producto confiable y probado.",
    progress: 95,
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    color: "from-green-200 to-blue-200",
    date: "Febrero 05, 2021",
    title: "Capacitación Incluida",
    description:
      "Nuestra capacitación incluida no solo garantiza el éxito inicial de nuestros clientes al comenzar su negocio de purificación de agua, sino que también les proporciona las herramientas y el conocimiento necesarios para mantener y hacer crecer su empresa a largo plazo. Es una inversión en su éxito continuo y en la satisfacción de sus clientes.",
    progress: 90,
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    color: "from-blue-200 to-green-200",
    date: "Enero 2025",
    title: "Equipo Adaptable",
    description:
      "Con nuestros equipos adaptables, estarás listo para cualquier escenario. Desde pequeñas tiendas hasta grandes emprendimientos, nuestro sistema se ajusta a tus necesidades, permitiéndote expandirte sin limitaciones.",
    progress: 85,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hOlkrhSrOa12pXnpAvXAzkc-j-Ptk1tcCcgg0pyH4IKARVxSbFGHcRnXSa9uReXT0ho&usqp=CAU",
  },
  {
    color: "from-green-200 to-blue-200",
    date: "Febrero 05, 2021",
    title: "Soporte Técnico",
    description:
      "Nuestro soporte técnico continuo no solo es una ventaja, sino una necesidad absoluta para cualquier emprendedor que busque tener éxito en el lucrativo mercado de la purificación de agua. Con nuestro compromiso inquebrantable de brindarte el mejor respaldo técnico, estamos aquí para ayudarte a alcanzar tus metas comerciales y disfrutar de ganancias diarias sostenibles.",
    progress: 90,
    image: "https://icorp.com.mx/wp-content/uploads/2023/09/soporte-tecnico-de-calidad-scaled.webp",
  },
  {
    color: "from-blue-200 to-green-200",
    date: "Enero 2025",
    title: "Imagen de Marca Positiva",
    description:
      "Una imagen de marca positiva es esencial para el éxito a largo plazo de cualquier empresa de purificación de agua, ya que influye en la confianza del cliente, la diferenciación competitiva, la fidelización del cliente, la percepción de calidad y la atracción de ventas.",
    progress: 95,
    image: "https://sakkanacomunicaciones.com/wp-content/uploads/2021/12/reputacion-de-marca.jpeg",
  },
  {
    color: "from-green-200 to-blue-200",
    date: "Febrero 05, 2021",
    title: "Rentabilidad Diaria",
    description:
      "Tener ganancias diarias no solo es una excelente manera de asegurar la viabilidad financiera a largo plazo de un negocio de purificación de agua, sino que también brinda seguridad, motivación y la capacidad de adaptarse rápidamente a las condiciones del mercado.",
    progress: 100,
    image: "https://www.unir.net/wp-content/uploads/2021/02/Inversion.png",
  },
];

const Card = ({ card, reverse }) => {
  return (
    <div
      className={`bg-gradient-to-br ${card.color} rounded-xl shadow-lg p-5 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center text-black font-semibold transform transition-transform duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl`}
    >
      {/* Contenedor de imagen */}
      <div className="w-full mb-4 md:w-1/2 md:mb-0">
        <img
          src={card.image}
          alt={card.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Contenedor de información */}
      <div className="w-full md:w-1/2 md:px-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-semibold font-josefin">{card.date}</span>
          <BiDotsVerticalRounded className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold font-josefin">{card.title}</h3>
        <p className="mt-2 text-lg font-josefin">{card.description}</p>
        <div className="flex items-center justify-between mt-2 text-xl">
          <span className="font-josefin">Nivel de satisfacción</span>
          <span className="font-josefin">{card.progress}%</span>
        </div>
        <div className="w-full h-2 mt-1 rounded-full bg-white/30">
          <div
            className="h-2 transition-all duration-700 ease-out bg-blue-700 rounded-full"
            style={{ width: `${card.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// ✅ PropTypes
Card.propTypes = {
  card: PropTypes.shape({
    color: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  reverse: PropTypes.bool,
};

export default function CardSection() {
  return (
    <section className="flex flex-col gap-10 p-10 bg-slate-100">
      {cardsData.map((card, index) => (
        <Card key={index} card={card} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
}
