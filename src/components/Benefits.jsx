export default function Benefits({ id }) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ¿Por qué OptimacellT?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              La Diferencia Metilada
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A diferencia de las vitaminas sintéticas comunes, nuestra tecnología "Action Nutrition" entrega nutrientes en su forma activa, listos para que tu cuerpo los aproveche al máximo.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Tecnología Metilada</h4>
                  <p className="text-gray-600 text-sm">Nutrientes pre-activados, sin desgaste metabólico</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Energía Mitocondrial</h4>
                  <p className="text-gray-600 text-sm">Poder sostenido todo el día, sin picos ni caídas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Biodisponibilidad Máxima</h4>
                  <p className="text-gray-600 text-sm">Llega a la célula, no se desecha rápidamente</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/assets/product/optimacellt-hombre-productividad.png" 
              alt="OptimacellT - Suplemento premium para tu estilo de vida" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3">
              <img 
                src="/assets/product/optimacellt-producto-packshot.png" 
                alt="OptimacellT" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tecnología Metilada</h3>
            <p className="text-gray-600">Nutrientes pre-activados listos para uso celular inmediato, sin desgaste metabólico.</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Energía Mitocondrial</h3>
            <p className="text-gray-600">Potencia tus mitocondrias para una energía sostenida todo el día, sin picos ni caídas.</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Alta Biodisponibilidad</h3>
            <p className="text-gray-600">Diseñado para llegar al torrente sanguíneo y nutrir la célula, no para ser eliminado rápidamente.</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Soporte Celular Avanzado</h3>
            <p className="text-gray-600">Potencia tu sistema inmune y optimiza la función cognitiva con ingredientes de pureza clínica.</p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-green-200">Metilado</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">3x</p>
              <p className="text-green-200">Más absorción</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">0%</p>
              <p className="text-green-200">Aditivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
