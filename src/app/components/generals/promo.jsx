import PropTypes from "prop-types";

const AnimatedCard = ({ videoSrc, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
      {/* Logo de la empresa */}
      <div className="flex items-center justify-center w-full md:w-[350px] h-[500px]">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Logo de la empresa"
          className="object-contain w-72 md:w-72 h-72 md:h-72"
        />
      </div>

      {/* Card del video */}
      <div className="transition-all duration-100 transform cursor-pointer group hover:scale-105 hover:-rotate-1 w-full md:w-[750px]">
        <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-400 shadow-2xl relative backdrop-blur-xl overflow-hidden w-full h-[500px]">
          {/* Background effects */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60"></div>
            <div className="absolute w-48 h-48 transition-all duration-700 transform rounded-full -bottom-20 -left-20 bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 group-hover:scale-110 animate-bounce"></div>
            <div className="absolute w-16 h-16 rounded-full top-10 left-10 bg-white/5 blur-xl animate-ping"></div>
            <div className="absolute w-12 h-12 rounded-full bottom-16 right-16 bg-white/5 blur-lg animate-ping"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
          </div>

          {/* Card content */}
          <div className="relative z-10 flex flex-col items-center p-6 text-center">
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

            {/* Title */}
            <h2 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text animate-pulse">
              {title}
            </h2>

            {/* Description */}
            <div className="max-w-2xl space-y-1 text-sm text-gray-300">
              {description.map((line, index) => (
                <p
                  key={index}
                  className="leading-relaxed transition-colors duration-300 group-hover:text-gray-200"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Animated bottom line */}
            <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

            {/* Bouncing dots */}
            <div className="flex mt-4 space-x-2 transition-opacity duration-300 opacity-60 group-hover:opacity-100">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div
                style={{ animationDelay: "0.1s" }}
                className="w-2 h-2 bg-white rounded-full animate-bounce"
              ></div>
              <div
                style={{ animationDelay: "0.2s" }}
                className="w-2 h-2 bg-white rounded-full animate-bounce"
              ></div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 h-20 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl group-hover:opacity-100"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 transition-opacity duration-500 opacity-0 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

// Validación de props
AnimatedCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnimatedCard;
