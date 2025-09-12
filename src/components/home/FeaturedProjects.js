import React from 'react'

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-lg">
          {/* Left side - Featured Projects */}
          <div className="bg-slate-800 text-white p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Digital Education Project</h3>
              <p className="text-sm leading-relaxed">
                Bridging the digital divide for rural Dalit children by providing access to technology, e-learning resources, and training, ensuring equal education opportunities and <span className="font-semibold">brighter futures</span>.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Women Entrepreneurship Project</h3>
              <p className="text-sm leading-relaxed">
                Empowering rural women through micro-credit, skill-building, and enterprise support in sheep rearing and small businesses, fostering financial independence and community leadership.
              </p>
            </div>
          </div>

          {/* Right side - Verification Numbers */}
          <div className="bg-blue-100 p-8">
            <div className="flex items-center mb-6">
              <div className="mr-3">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Verification Numbers</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">1. Registration Number</span>
                  <span className="text-sm font-medium text-gray-900">: 384/1993</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">2. FCRA Number</span>
                  <span className="text-sm font-medium text-gray-900">: 010270166</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">3. Guide Star</span>
                  <span className="text-sm font-medium text-gray-900">: 9683</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">4. NGO Darpan</span>
                  <span className="text-sm font-medium text-gray-900">: AP/2021/0276162</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">5. TAX Exemption</span>
                  <span className="text-sm font-medium text-gray-900">: AAKFD2353BF20214</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
