import svg404 from '../utils/svg/404.svg';
import logo from '/logo.png';

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-5 overflow-hidden bg-blue-100 lg:p-20">
      <div className="relative flex flex-col items-center w-full max-w-6xl p-6 text-center text-gray-800 transition-transform duration-300 transform bg-white shadow-xl rounded-3xl md:flex-row md:text-left md:p-10 lg:p-20 hover:scale-[0.98]">
        
        {/* Sección de texto */}
        <div className="w-full md:w-1/2">
          {/* Logo */}
          <div className="w-20 h-auto mb-6 sm:w-24 md:w-28 lg:w-32">
            <img src={logo} alt="Logo" className="w-full h-auto" />
          </div>
          
          {/* Mensaje de error */}
          <div className="mb-8 font-light text-gray-600 sm:mb-12 md:mb-16">
            <h1 className="mb-6 text-2xl font-black text-yellow-500 uppercase sm:text-3xl md:text-4xl lg:text-5xl">
              Ocurrió un error 404!
            </h1>
            <p className="mb-4 text-lg font-bold sm:text-xl md:text-2xl">Página no encontrada</p>
            <p className="mb-4 text-lg font-bold sm:text-xl md:text-2xl">Contáctate con soporte técnico.</p>
          </div>

          {/* Botón regresar */}
          <div>
            <button className="flex items-center text-base font-bold text-yellow-500 transition-all transform outline-none sm:text-lg focus:outline-none hover:scale-110 hover:text-yellow-600">
              <i className="mr-2 mdi mdi-arrow-left"></i>
              Regresar al inicio
            </button>
          </div>
        </div>

        {/* Imagen de error */}
        <div className="w-full mt-10 text-center md:w-1/2 md:mt-0">
          <img 
            src={svg404} 
            alt="Error 404" 
            className="w-3/4 max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-full" 
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
