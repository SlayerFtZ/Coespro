import PropTypes from "prop-types";
import WhatsAppButton from "../../site/components/generals/buttonWhatsApp";

const AnimatedCard = ({ videoSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
      {/* Logo y botón WhatsApp */}
      <div className="flex flex-col items-center justify-center w-full sm:w-[300px] md:w-[350px] h-auto md:h-[500px] gap-4">
        <img
          src={`${import.meta.env.BASE_URL}/logo.png`}
          alt="Logo de la empresa"
          className="object-contain w-48 h-48 sm:w-60 md:w-72 sm:h-60 md:h-72"
        />
        <WhatsAppButton />
      </div>

      {/* Card del video */}
      <div className="transition-all duration-300 transform cursor-pointer group hover:scale-105 hover:-rotate-1 w-full sm:w-[90%] md:w-[750px]">
        <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-blue-700/50 via-blue-500/30 to-blue-400/20 shadow-2xl relative backdrop-blur-xl overflow-hidden w-full h-auto md:h-[500px] p-4 sm:p-6">
          
          {/* Video */}
          <div className="w-full mb-4 overflow-hidden sm:mb-6 rounded-2xl">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-48 sm:h-60 md:h-auto rounded-2xl"
            />
          </div>

          {/* Contenedor de texto */}
          <div className="flex flex-col items-center px-2 text-center sm:px-4">
            {/* Título */}
            <h2 className="mb-2 text-xl font-bold text-blue-600 sm:mb-4 sm:text-2xl md:text-3xl">
              {title}
            </h2>

            {/* Descripción */}
            <div className="max-w-full space-y-1 text-xs font-semibold text-blue-600 sm:max-w-2xl sm:text-sm md:text-base">
              {description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AnimatedCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnimatedCard;
