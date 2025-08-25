import PropTypes from "prop-types";
import WhatsAppButton from "../../site/components/generals/buttonWhatsApp";

const AnimatedCard = ({ videoSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 px-4 py-8 lg:flex-row sm:px-6 lg:px-10">
      
      {/* Logo y botón WhatsApp */}
      <div className="flex flex-col items-center justify-center w-full gap-4 lg:w-1/3">
        <img
          src={`${import.meta.env.BASE_URL}/logo.png`}
          alt="Logo de la empresa"
          className="object-contain w-32 h-auto sm:w-40 md:w-48 lg:w-56"
        />
        <WhatsAppButton />
      </div>

      {/* Card del video */}
      <div className="w-full transition-transform duration-300 transform cursor-pointer lg:w-2/3 group hover:scale-105 hover:-rotate-1">
        <div className="relative w-full h-full p-4 overflow-hidden border shadow-2xl sm:p-6 md:p-8 rounded-3xl border-white/10 bg-gradient-to-br from-blue-700/50 via-blue-500/30 to-blue-400/20 backdrop-blur-xl">
          
          {/* Video */}
          <div className="w-full overflow-hidden rounded-2xl">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-auto aspect-video rounded-2xl"
            />
          </div>

          {/* Contenedor de texto */}
          <div className="flex flex-col items-center px-2 mt-4 text-center sm:mt-6 sm:px-4">
            <h2 className="mb-2 text-lg font-bold text-blue-600 sm:text-2xl md:text-3xl lg:text-4xl sm:mb-4">
              {title}
            </h2>

            <div className="w-full space-y-2 text-xs font-semibold text-blue-600 sm:text-sm md:text-base lg:text-lg">
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
