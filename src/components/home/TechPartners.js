// Module 5: Tech Partners Component
// Your final challenge: Create a logo grid for partner organizations

import React from 'react'

const partners = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Salesforce", logo: "☁️" },
  { name: "Slack", logo: "💬" },
  { name: "Canvas", logo: "🎨" },
  { name: "GitHub", logo: "🐙" },
  { name: "Box", logo: "📦" },
  { name: "Linktree", logo: "🌳" },
  { name: "Newsello", logo: "📰" },
  { name: "ChatBot", logo: "🤖" }
]

const TechPartners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Tech Partners
        </h2>
        
        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="text-3xl mb-2">{partner.logo}</div>
              <span className="text-xs text-gray-600 text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechPartners
