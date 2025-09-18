import React from 'react'

const PreviousProjects = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Previous Projects Column - Teal Background */}
          <div className=" p-8 lg:p-12" style={{ backgroundColor: "#622676" }}>
            <h3 className="text-2xl font-bold text-white mb-6">Dairy Project - Govindapalle</h3>
            <ul className="space-y-2">
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed"> 
                    <span className="font-bold">Location</span>: Govindapalle Village
                  </span>
              </li>
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed"> 
                    <span className="font-bold">Beneficiaries</span>: 40 women
                  </span>
              </li>
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed"> 
                    <span className="font-bold">Budget</span>: ₹20 lakhs
                  </span>
              </li>
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed"> 
                    <span className="font-bold">Duration</span>: 12 months
                  </span>
              </li>
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed"> 
                    <span className="font-bold">Results</span>: Women gained steady income, improved nutrition for families, 
                    and collective savings groups strengthened financial independence.
                  </span>
              </li>
            </ul>
          </div>
          
          {/* Objectives Column - Blue Background */}
          <div className="p-8 lg:p-12" style={{ backgroundColor: "#ff9df085" }}>
            <h3 className="text-2xl font-bold text-black mb-6">Finance Awareness - Sirivella</h3>
            <ul className="space-y-3">
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed text-black"> 
                    <span className="font-bold">Location</span>: 8 villages, Sirivella Mandal
                  </span>
              </li>
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed text-black"> 
                    <span className="font-bold">Beneficiaries</span>: 700–800 women
                  </span>
              </li>
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed text-black"> 
                    <span className="font-bold">Budget</span>: ₹12 lakhs
                  </span>
              </li>
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed text-black"> 
                    <span className="font-bold">Duration</span>: 12 months
                  </span>
              </li>
              <li className="text-white flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1"></span>
                  <span className="leading-relaxed text-black"> 
                    <span className="font-bold">Results</span>: Women developed financial literacy, reduced debt reliance, 
                    adopted savings habits, and started small investments for household security.
                  </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviousProjects
