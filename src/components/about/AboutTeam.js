// components/AboutTeam.js
import Image from "next/image";

const teamMembers = [
  { name: "S. Moses", role: "Program Manager", src: "/images/homepage/SplatterImages/green splatter.png" },
  { name: "K. Saroja", role: "Field Work", src: "/images/homepage/SplatterImages/green splatter.png" },
  { name: "G. Bhaskar", role: "Office Staff", src: "/images/homepage/SplatterImages/green splatter.png" },
  { name: "P. Danielu", role: "Field Work", src: "/images/homepage/SplatterImages/green splatter.png" },
  { name: "N. Sudha Rani", role: "Field Work", src: "/images/homepage/SplatterImages/green splatter.png" },
  { name: "K. Bujji", role: "Office Work", src: "/images/homepage/SplatterImages/green splatter.png" },
];

const AboutTeam = () => {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-black text-left max-w-4xl mx-auto">
        DWA Team
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-black leading-relaxed max-w-4xl mx-auto mb-12 text-left">
        Our dedicated team works tirelessly in the field and office, bringing
        passion, skills, and commitment to empower Dalit communities and drive
        lasting change in rural Nandyal and Kurnool.
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.src}
              alt={member.name}
              width={200}
              height={200}
              className="mx-auto object-cover rounded-md"
            />
            <h3 className="text-2xl mt-4 font-bold text-black">{member.name}</h3>
            <p className="text-xl font-medium text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>

        <div className="mt-12 h-[2px] bg-black w-full"></div>
    </section>
  );
};

export default AboutTeam;
