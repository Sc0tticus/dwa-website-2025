import React from 'react'

const partners = [
  "Google", "Microsoft", "Salesforce", "Slack", "Canva", "Github", "BOX", "Linktree", "NewRelic", "ChatBot"
]

const TechPartners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tech Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading technology companies who support our mission
          </p>
        </div>
        
        {/* Partner names in elegant grid */}
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
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Want to become a tech partner?{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechPartners
