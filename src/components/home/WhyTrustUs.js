import React from 'react'

const WhyTrustUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Why Trust Us
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
            We ensure complete transparency and accountability in every project. From the very 
            start, our team coordinates closely with donors, providing{' '}
            <span className="font-bold text-blue-600">monthly newsletters, 
            digital reports, and real-time updates</span> through trusted tools like Salesforce. With 
            clear communication, measurable outcomes, and dedicated support, donors can be 
            confident their contributions are making a lasting impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Monthly Reports</h3>
              <p className="text-gray-600 text-sm">Detailed progress updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-gray-600 text-sm">Live project tracking</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Direct Communication</h3>
              <p className="text-gray-600 text-sm">Personal donor support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyTrustUs
