// components/VisionMission.jsx
export default function VisionMission() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Vision Column */}
      <div className="bg-[#FEA128] flex p-8 text-center">
        <div className="max-w-md mx-auto flex flex-col justify-start">
          <h2 className="font-inter font-bold text-4xl md:text-5xl mb-6 text-black">
            Vision
          </h2>
          <p className="font-inter text-lg font-medium text-black leading-relaxed">
            To build an inclusive society where Dalit women thrive with dignity,
            equality, and opportunity—breaking poverty cycles and creating
            sustainable, empowered communities for generations to come.
          </p>
        </div>
      </div>

      {/* Mission Column */}
      <div className="bg-[#FFD446] flex p-8 text-center">
        <div className="max-w-md mx-auto flex flex-col justify-start">
          <h2 className="font-inter font-bold text-4xl md:text-5xl mb-6 text-black">
            Mission
          </h2>
          <p className="font-inter text-lg font-medium text-black leading-relaxed">
            To empower marginalized women through micro-credit, financial
            education, and livelihoods—strengthening families, fostering
            community resilience, and ensuring sustainable, grassroots-driven
            change rooted in dignity, justice, and equality.
          </p>
        </div>
      </div>
    </section>
  );
}
