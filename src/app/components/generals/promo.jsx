import PropTypes from "prop-types";
import WhatsAppButton from "../../site/components/generals/buttonWhatsApp";

const AnimatedCard = ({ videoSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center w-full gap-6 px-4 lg:flex-row lg:items-center sm:px-6 lg:px-10">
      {/* Logo y botón WhatsApp */}
      <div className="flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[350px] h-auto gap-4">
        <img
          src={`${import.meta.env.BASE_URL}/logo.png`}
          alt="Logo de la empresa"
          className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60"
        />
        <WhatsAppButton />
      </div>

      {/* Card del video */}
      <div className="transition-all duration-300 transform cursor-pointer group hover:scale-105 hover:-rotate-1 w-full max-w-lg sm:max-w-2xl lg:max-w-[750px]">
        <div className="relative w-full h-auto p-4 overflow-hidden border shadow-2xl sm:p-6 md:p-8 rounded-3xl border-white/10 bg-gradient-to-br from-blue-700/50 via-blue-500/30 to-blue-400/20 backdrop-blur-xl">
          
          {/* Video */}
          <div className="w-full mb-4 overflow-hidden rounded-2xl sm:mb-6">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-40 sm:h-56 md:h-72 lg:h-96 rounded-2xl"
            />
          </div>

          {/* Contenedor de texto */}
          <div className="flex flex-col items-center px-2 text-center sm:px-4">
            {/* Título */}
            <h2 className="mb-2 text-lg font-bold text-blue-600 sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl">
              {title}
            </h2>

            {/* Descripción */}
            <div className="max-w-full space-y-2 text-xs font-semibold text-blue-600 sm:max-w-xl sm:text-sm md:text-base lg:text-lg">
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
