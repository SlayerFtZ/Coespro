
const WhatsAppButton = () => {
  return (
    <div className="relative z-10 flex flex-col max-w-sm gap-6 mx-auto">
      <button
        className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-green-500/30 bg-gradient-to-br from-green-700/40 via-green-600/60 to-green-800/80 shadow-2xl 
          hover:shadow-green-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
      >
        {/* Animated overlay */}
        <div className="absolute inset-0 transition-transform duration-1000 ease-out -translate-x-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent group-hover:translate-x-full"></div>
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10 group-hover:opacity-100"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-3 text-white transition-all duration-300 rounded-lg bg-gradient-to-br to-green-600/10 backdrop-blur-sm group-hover:from-green-400/40 group-hover:to-green-500/20">
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="transition-all duration-300 fill-current text-black-700 w-7 h-7 group-hover:text-green-300 group-hover:scale-110 drop-shadow-lg"
            >
              <path d="M380.9 97.1C339-4.3 232.5-22.4 154.7 35.5 77 93.5 69.7 203.6 116.5 276.2l-39.1 126.2c-3.2 10.3 6.8 19.8 16.8 16.6l126-39c72.6 46.8 182.7 39.5 240.7-38.2 57.9-77.8 39.8-184.3-62-225.7zM224 336c-44.1 0-80-35.9-80-80s35.9-80 80-80c44.2 0 80 35.9 80 80s-35.8 80-80 80zm91.5-124.5c-5-2.5-28.9-14.3-33.4-15.9-4.5-1.5-7.8-2.5-11.1 2.5s-12.8 15.9-15.7 19.2c-2.9 3.2-5.8 3.6-10.8 1.1-28-14-46.4-24.6-65.2-55-4.8-8.4 4.8-7.8 13.7-25.9 1.5-3.2.8-6-0.4-8.4-1.1-2.5-11.1-26.8-15.2-36.7-4-9.6-8.1-8.3-11.1-8.5-2.8-.2-6-0.2-9.2-0.2s-8.4 1.1-12.8 6c-4.5 4.9-17.2 16.8-17.2 41s17.7 47.8 20.1 51.2c2.5 3.2 34.5 52.9 83.7 74.2 49.2 21.4 49.2 14.3 58.1 13.5 9.2-.8 28-11.4 32-22.4 4.1-11 4.1-20.3 2.9-22.4-1.2-2-4.5-3.2-9.4-5.7z"></path>
            </svg>
          </div>

          <div className="flex-1 text-left">
            <p className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-green-300 drop-shadow-sm">
              WhatsApp
            </p>
            <p className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-green-200/80">
              Chatea con nosotros
            </p>
          </div>

          <div className="transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:translate-x-1">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 text-white"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
