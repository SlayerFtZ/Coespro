import PropTypes from "prop-types";
import WhatsAppButton from "../../site/components/generals/buttonWhatsApp"; 

const AnimatedCard = ({ videoSrc, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
      {/* Logo de la empresa y botón WhatsApp */}
      <div className="flex flex-col items-center justify-center w-full md:w-[350px] h-[500px] gap-4">
        <img
          src={`${import.meta.env.BASE_URL}/logo.png`}
          alt="Logo de la empresa"
          className="object-contain w-72 md:w-72 h-72 md:h-72"
        />
        <WhatsAppButton />
      </div>

      {/* Card del video */}
{/* Card del video */}
<div className="transition-all duration-100 transform cursor-pointer group hover:scale-105 hover:-rotate-1 w-full md:w-[750px]">
  <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-blue-700/50 via-blue-500/30 to-blue-400/20 shadow-2xl relative backdrop-blur-xl overflow-hidden w-full h-[500px]">

    {/* Video */}
    <div className="w-full mb-6 overflow-hidden rounded-2xl">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="object-cover w-full h-auto rounded-2xl"
      />
    </div>

    {/* Contenedor de texto centrado */}
    <div className="flex flex-col items-center text-center">
      {/* Título */}
      <h2 className="mb-4 text-3xl font-bold text-blue-600">
        {title}
      </h2>

      {/* Descripción */}
      <div className="max-w-2xl space-y-1 text-sm font-semibold text-blue-600">
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
