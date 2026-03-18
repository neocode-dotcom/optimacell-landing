import { useState } from 'react';

const faqs = [
  {
    question: "¿Cuál es la diferencia entre Optimacell y otras vitaminas?",
    answer: "La principal diferencia es nuestra tecnología metilada. Mientras que las vitaminas tradicionales necesitan ser procesadas por tu cuerpo para ser absorbidas, Optimacell contiene nutrientes ya 'pre-activados' en su forma activa, lo que significa que tu cuerpo puede usarlos inmediatamente sin esfuerzo adicional."
  },
  {
    question: "¿Cuánto tiempo tardaré en ver resultados?",
    answer: " muchos clientes reportan sentir más energía desde los primeros días. Sin embargo, los beneficios completos del soporte celular buildup acumulan durante 2-4 semanas de uso consistente."
  },
  {
    question: "¿Optimacell tiene efectos secundarios?",
    answer: "Optimacell está formulado con ingredientes naturales de alta pureza. No contiene gluten, lácteos, ni artificials. Como con cualquier suplemento, recomendamos consultar con tu médico si estás embarazada, amamantando, o tienes condiciones médicas específicas."
  },
  {
    question: "¿Puedo tomar Optimacell con otros suplementos?",
    answer: "Sí, Optimacell está diseñado para complementar tu rutina de suplementación actual. Sin embargo, si estás tomando medicamentos específicos, te recomendamos consultar con un profesional de la salud."
  },
  {
    question: "¿Cuál es la política de devolución?",
    answer: "Ofrecemos una garantía de 30 días. Si no estás satisfecho con los resultados, puedes devolver el producto para un reembolso completo, sin preguntas."
  },
  {
    question: "¿Cómo debo almacenar Optimacell?",
    answer: "Guarda el producto en un lugar fresco y seco,远离 de la luz solar directa. No necesitas refrigeración. Mantén el frasco cerrado fuera del alcance de niños."
  }
];

export default function FAQ({ id }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas saber
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
              >
                <p className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
