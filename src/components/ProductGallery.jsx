export default function ProductGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Calidad Premium
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            OptimacellT en detalle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada frasco contiene 90 cápsulas de formulación avanzada para 30 días de suplementación premium.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/src/assets/product/optimacellt-producto-packshot.png" 
              alt="OptimacellT - Producto premium" 
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-bold">Packshot Profesional</h3>
              <p className="text-white/80 text-sm">Diseño farmacéutico de grado premium</p>
            </div>
          </div>
          
          <div className="grid grid-rows-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/src/assets/product/optimacellt-hero-lifestyle-principal.png" 
                alt="OptimacellT - Estilo de vida saludable" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-bold">Integración en tu rutina</h3>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/src/assets/product/optimacellt-hero-flat-lay-ingredientes.png" 
                alt="OptimacellT - Ingredientes naturales" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-bold">Ingredientes de alta biodisponibilidad</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">90 Cápsulas</h4>
              <p className="text-gray-600 text-sm">Frasco resistente con cierre de seguridad</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Calidad Certificada</h4>
              <p className="text-gray-600 text-sm">Fabricado bajo estándares GMP</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">30 Días</h4>
              <p className="text-gray-600 text-sm">Suministro para un mes completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
