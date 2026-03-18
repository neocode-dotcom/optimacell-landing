const steps = [
  {
    number: "01",
    title: "Toma 3 cápsulas diarias",
    description: "Una porción completa con tu primera comida sustancial del día."
  },
  {
    number: "02",
    title: "Con breakfast o almuerzo",
    description: "Recomendamos tomarlas por la mañana para potenciar la absorción de nutrientes liposolubles."
  },
  {
    number: "03",
    title: "Activa tu energía",
    description: "Siente los efectos desde el primer día con energía sostenida y claridad mental."
  }
];

export default function HowToUse({ id }) {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Instrucciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cómo tomarlo para máximo efecto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sigue estos simples pasos para obtener los mejores resultados de tu suplementación.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-amber-300 to-green-200 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Importante</h4>
              <p className="text-gray-600">
                Para mejores resultados, mantén una rutina consistente. Los beneficios de las vitaminas metiladas se acumulan con el uso continuado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
