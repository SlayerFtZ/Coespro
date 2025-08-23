import svg404 from '../utils/svg/404.svg';
import logo from '/logo.png';

const NotFound = () => {
  return (
    <div className="relative flex items-center min-h-screen p-5 overflow-hidden bg-blue-100 min-w-screen lg:p-20">
      <div className="relative items-center flex-1 min-w-full min-h-full p-10 text-center text-gray-800 transition-transform duration-300 transform bg-white shadow-xl rounded-3xl lg:p-20 md:flex md:text-left hover:scale-95">
        <div className="w-full md:w-1/2">
          <div className="w-20 h-auto mb-10 md:w-24 lg:w-32">
            <img src={logo} alt="Logo" />
          </div>
          <div className="mb-10 font-light text-gray-600 md:mb-20">
            <h1 className="mb-10 text-3xl font-black text-yellow-500 uppercase lg:text-5xl">
              Ocurrió un error 404!
            </h1>
            <p className="text-2xl font-bold mb-7">Página no encontrada</p>
            <p className="text-2xl font-bold mb-7">Contáctate con soporte técnico.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <button className="flex items-center text-lg font-bold text-yellow-500 transition-all transform outline-none focus:outline-none hover:scale-110 hover:text-yellow-600">
              <i className="mr-2 mdi mdi-arrow-left"></i>
              Regresar al inicio
            </button>
          </div>
        </div>
        <div className="w-full text-center md:w-1/2">
          <img 
            src={svg404} 
            alt="Error 404" 
            className="w-full max-w-lg mx-auto lg:max-w-full" 
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
