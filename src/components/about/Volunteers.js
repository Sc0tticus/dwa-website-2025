// components/Volunteers.js
import Image from "next/image";

const volunteers = [
  {
    name: "Scott Singer",
    role: "Senior Software Developer., USA",
    description: "Volunteering as a website developer at DWA was truly rewarding. I felt proud to support their mission of empowering Dalit communities through education, women's entrepreneurship, and sustainable livelihoods.",
    src: "/images/homepage/SplatterImages/orange splatter.png",
    linkedin: "#",
    bgColor: "bg-[#FED6F8]",
  },
  {
    name: "Prince Sithole",
    role: "Junior Software Developer., S.A.",
    description: "Volunteering as a website developer at DWA was truly rewarding. I felt proud to support their mission of empowering Dalit communities through education, women's entrepreneurship, and sustainable livelihoods.",
    src: "/images/homepage/SplatterImages/orange splatter 2.png",
    linkedin: "#",
    bgColor: "bg-[#FFEEB5]",
  },
  {
    name: "Michael M",
    role: "Junior Software Developer., S.A.",
    description: "Volunteering as a website developer at DWA was truly rewarding. I felt proud to support their mission of empowering Dalit communities through education, women's entrepreneurship, and sustainable livelihoods.",
    src: "/images/homepage/SplatterImages/orange splatter 2.png",
    linkedin: "#",
    bgColor: "bg-[#FFEEB5]",
  },
  {
    name: "Fatimoh B",
    role: "Software Developer., Nigeria.",
    description: "Volunteering as a website developer at DWA was truly rewarding. I felt proud to support their mission of empowering Dalit communities through education, women's entrepreneurship, and sustainable livelihoods.",
    src: "/images/homepage/SplatterImages/orange splatter 2.png",
    linkedin: "#",
    bgColor: "bg-[#FFEEB5]",
  },
  {
    name: "Dayo Abdul",
    role: "Senior Software Developer., Nigeria.",
    description: "Volunteering as a website developer at DWA was truly rewarding. I felt proud to support their mission of empowering Dalit communities through education, women's entrepreneurship, and sustainable livelihoods.",
    src: "/images/homepage/SplatterImages/orange splatter.png",
    linkedin: "#",
    bgColor: "bg-[#FED6F8]",
  },
  {
    name: "Megan Ward",
    role: "Salesforce Admin Ireland.",
    description: "Volunteering as a website developer at DWA was truly rewarding. I felt proud to support their mission of empowering Dalit communities through education, women's entrepreneurship, and sustainable livelihoods.",
    src: "/images/homepage/SplatterImages/orange splatter.png",
    linkedin: "#",
    bgColor: "bg-[#FED6F8]",
  },
];
const Volunteers = () => {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-black text-left max-w-4xl mx-auto">
        Volunteers
      </h2>

      {/* Volunteers Grid */}
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {volunteers.map((volunteer, index) => (
          <div
            key={index}
            className={`p-2 ${volunteer.bgColor} flex flex-col sm:flex-row items-start max-w-xl w-full`}
          >
            {/* Image */}
           <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 w-full sm:w-60 max-w-xs h-40 sm:h-auto">
            <Image
              src={volunteer.src}
              alt={volunteer.name}
              width={350}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>

            {/* Text */}
            <div className="flex flex-col flex-1">
              <a
                href={volunteer.linkedin}
                className="text-[#3EBFF9] font-black text-lg mb-2 self-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <h3 className="text-2xl font-bold text-black">{volunteer.name}</h3>
              <p className="text-xl font-medium text-gray-700 mb-2">{volunteer.role}</p>
              <p className="text-base text-black">{volunteer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteers;
