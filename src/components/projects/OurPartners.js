import React from 'react'

const partners = [
  "1% Fund", "Presbityerian Church", "Global Compassion", "Jiv Daya Fund", "Basaid", "UCH", "Grace Fund"
]

const OurPartners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group"
            >
              <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPartners
