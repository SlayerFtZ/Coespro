import { useState } from "react";

const faqs = [
  { question: "¿Dónde están ubicados?", answer: "Estamos ubicados en varias ciudades de la República Mexicana. Puedes consultar nuestra sección de contacto para más detalles." },
  { question: "¿COESPRO es una franquicia?", answer: "No, COESPRO no es una franquicia. Operamos como una empresa centralizada que gestiona todas las instalaciones y servicios." },
  { question: "¿Instalan en toda la República Mexicana?", answer: "Sí, contamos con cobertura nacional para la instalación y mantenimiento de equipos purificadores." },
  { question: "¿Hay capacitación para manejar el equipo que me instalan?", answer: "Sí, brindamos capacitación completa para operar y mantener el equipo instalado." },
  { question: "¿Por qué es necesario brindar mis datos?", answer: "Es para poder ofrecerte un servicio personalizado y cumplir con las normativas de instalación y mantenimiento." },
  { question: "¿Son equipos certificados?", answer: "Sí, todos nuestros equipos cuentan con certificaciones nacionales e internacionales." },
  { question: "¿Cómo puedo asegurarme de que el agua purificada cumpla con los estándares de calidad?", answer: "Realizamos pruebas periódicas y entregamos certificados de calidad para garantizar la seguridad del agua." },
  { question: "¿Cuál es el proceso de purificación de agua más efectivo?", answer: "Utilizamos un proceso combinado que incluye filtración, carbón activado y ósmosis inversa para máxima pureza." },
];

export default function FaqCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center ">
        Preguntas Frecuentes (FAQ)
      </h1>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-100">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full p-6 text-left focus:outline-none hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
              <span className={`text-gray-500 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 bg-gradient-to-r from-blue-50 to-teal-50 text-gray-700 text-base rounded-b-xl transition-colors duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
