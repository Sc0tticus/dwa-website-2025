import React from 'react'
import Image from 'next/image'

const BenevityBoardSection = () => {
  const splatterImages = [
    "/images/homepage/SplatterImages/red splatter.png",
    "/images/homepage/SplatterImages/purple splatter.png", 
    "/images/homepage/SplatterImages/orange splatter.png",
    "/images/homepage/SplatterImages/green splatter.png"
  ]

  const boardMembers = [
    {
      name: "S. Samuel",
      role: "President",
      image: "/images/homepage/SplatterImages/red splatter.png"
    },
    {
      name: "J. Nirmala",
      role: "V.President",
      image: "/images/homepage/SplatterImages/purple splatter.png"
    },
    {
      name: "B. Lakshmi",
      role: "Secretary",
      image: "/images/homepage/SplatterImages/orange splatter.png"
    },
    {
      name: "S. Sarojamma",
      role: "Treasurer",
      image: "/images/homepage/SplatterImages/green splatter.png"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benevity & Goodstack Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Benevity & Goodstack
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Donate today through Benevity or Goodstack—your contribution directly transforms lives of children in our orphanage and elders in our old age home, creating care, security, and a brighter tomorrow.&rdquo;
          </p>
          
          {/* Splatter Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {splatterImages.map((image, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Splatter design ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Board Members Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Board Members
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our board comprises passionate leaders with diverse expertise in social development, finance, and community service. They guide our vision with integrity, accountability, and a deep commitment to Dalit empowerment.
          </p>
          
          {/* Board Members Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenevityBoardSection
