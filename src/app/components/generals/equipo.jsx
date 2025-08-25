import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

const equipos = [
  {
    title: "Equipos Manuales",
    date: "Lunes 25 de Mayo 2025",
    img: `${import.meta.env.BASE_URL}/servicios/equipoManual.png`,
    description:
      "Productos para intalacion y uso inmediato.",
    tags: ["Ver Manual", "Instalación en 1 Hora", "Cotiza"],
    color: "blue",
  },
  {
    title: "Equipos Automáticos",
    date: "Miercoles 20 de Mayo 2025",
    img: `${import.meta.env.BASE_URL}/servicios/equipoAutomatico.png`,
    description:
      "Productos que ofresemos para un proceso de automatización completo.",
    tags: ["Ver Manual", "Instalación en 2 Horas", "Cotiza"],
    color: "blue",
  },
];

const PostCard = ({ equipo, direction }) => {
  const colorClasses = {
    blue: "text-blue-600 border-blue-400",
    red: "text-red-600 border-red-400",
    green: "text-green-600 border-green-400",
    yellow: "text-yellow-500 border-yellow-300",
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationClass = inView
    ? direction === "left"
      ? "animate-slide-left"
      : "animate-slide-right"
    : "opacity-0";

  return (
    <article
      ref={ref}
      className={`flex flex-col bg-white shadow-lg rounded-xl overflow-hidden border-l-4 ${colorClasses[equipo.color]} mb-6 ${animationClass}`}
    >
      <a href="#" className="w-full">
        <img
          src={equipo.img}
          alt={equipo.title}
          className="object-cover w-full h-64"
        />
      </a>
      <div className="flex flex-col justify-between p-4">
        <div>
          <h1 className={`text-2xl font-bold mb-2 ${colorClasses[equipo.color]}`}>
            {equipo.title}
          </h1>
          <div className="mb-2 text-sm text-gray-500">
            <time dateTime="2020-05-25">{equipo.date}</time>
          </div>
          <div className="mb-2 border-b border-gray-200"></div>
          <p className="text-base text-gray-700">{equipo.description}</p>
        </div>
        <ul className="flex flex-wrap gap-2 mt-4">
          {equipo.tags.map((tag, idx) => (
            <li
              key={idx}
              className={`px-2 py-1 text-xs rounded-full border ${colorClasses[equipo.color]} bg-opacity-10`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

PostCard.propTypes = {
  equipo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.oneOf(["blue", "red", "green", "yellow"]).isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
};

const EquiposSection = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="px-4 py-12 bg-gradient-to-b from-white via-blue-100/40 to-white">
      <div className="mx-auto text-center max-w-7xl">
        <h1
          ref={titleRef}
          className={`className="mb-10 text-3xl font-black text-center text-transparent uppercase md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-b from-blue-700/90 to-blue-300/40${
            titleInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          Emprende con Nosotros!
        </h1>
        <p
          className={`mb-10 text-lg text-gray-600 transition-all duration-800 delay-200 ${
            titleInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {equipos.map((equipo, idx) => (
            <PostCard
              key={idx}
              equipo={equipo}
              direction={idx % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquiposSection;
