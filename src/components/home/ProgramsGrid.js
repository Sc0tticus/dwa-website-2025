import React from 'react'
import Image from 'next/image'

const programs = [
  {
    id: 1,
    title: "NO POVERTY",
    description: "Livelihoods, micro-credit, and economic empowerment for Dalit and rural families",
    image: "/images/homepage/OurPrograms/No Poverty.jpg",
    bgColor: "bg-red-500"
  },
  {
    id: 2,
    title: "ZERO HUNGER",
    description: "Nutrition support, food security, and sustainable farming practices",
    image: "/images/homepage/OurPrograms/Zero Hunger.jpg",
    bgColor: "bg-yellow-500"
  },
  {
    id: 3,
    title: "GOOD HEALTH AND WELL-BEING",
    description: "Healthcare, sanitation, elderly care, and child well-being",
    image: "/images/homepage/OurPrograms/Good Health And Well Being.jpg",
    bgColor: "bg-green-500"
  },
  {
    id: 4,
    title: "QUALITY EDUCATION",
    description: "Access to education for rural children & marginalized groups",
    image: "/images/homepage/OurPrograms/Quality Education.jpg",
    bgColor: "bg-red-600"
  },
  {
    id: 5,
    title: "GENDER EQUALITY",
    description: "Women's empowerment, self-help groups, and financial inclusion",
    image: "/images/homepage/OurPrograms/Gender Equality.jpg",
    bgColor: "bg-red-500"
  },
  {
    id: 6,
    title: "CLEAN WATER AND SANITATION",
    description: "Promoting hygiene, sanitation, and access to safe drinking water",
    image: "/images/homepage/OurPrograms/Clean Water And Sanitation.jpg",
    bgColor: "bg-cyan-500"
  }
]

const ProgramsGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex">
              {/* Left image section */}
              <div className="w-32 relative">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Right white section */}
              <div className="flex-1 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                  {program.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsGrid
