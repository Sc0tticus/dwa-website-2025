// Module 4: Programs Grid Component
// Your challenge: Create a 6-card responsive grid

import React from 'react'

const programs = [
  {
    id: 1,
    title: "Health Services",
    description: "Healthcare access for rural communities",
    icon: "👥",
    bgColor: "bg-red-500"
  },
  {
    id: 2,
    title: "Nutrition Support",
    description: "Food security and nutrition programs",
    icon: "🍎",
    bgColor: "bg-orange-500"
  },
  {
    id: 3,
    title: "Healthcare Access",
    description: "Medical facilities and health awareness",
    icon: "🏥",
    bgColor: "bg-green-500"
  },
  {
    id: 4,
    title: "Quality Education",
    description: "Access to education for all children",
    icon: "📚",
    bgColor: "bg-blue-500"
  },
  {
    id: 5,
    title: "Clean Water",
    description: "Safe drinking water initiatives",
    icon: "💧",
    bgColor: "bg-purple-500"
  },
  {
    id: 6,
    title: "Sanitation",
    description: "Promoting hygiene and sanitation",
    icon: "🚿",
    bgColor: "bg-teal-500"
  }
]

const ProgramsGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Programs
        </h2>
        
        {/* YOUR CHALLENGE: Build the responsive grid here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.id} className={`${program.bgColor} rounded-lg p-6 text-white`}>
              {/* Program Number */}
              <div className="text-4xl font-bold mb-2">{program.id}</div>
              
              {/* Program Icon */}
              <div className="text-3xl mb-4">{program.icon}</div>
              
              {/* Program Title */}
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              
              {/* Program Description */}
              <p className="text-sm opacity-90">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsGrid
