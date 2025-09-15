import Image from "next/image";

const testimonials = [
  {
    name: "Digital Literacy",
    text: "Equipping rural Dalit children and youth with digital skills, e-learning tools, and computer training to bridge the digital divide, improve academic performance, and open new employment opportunities in the modern world.",
    splatterImage: "/images/homepage/SplatterImages/green splatter.png"
  },
  {
    name: "Skill Development",
    text: "Enhancing employability of college students through training in technical and digital skills, career counseling, and workshops, preparing them for competitive job markets and future entrepreneurship opportunities.",
    splatterImage: "/images/homepage/SplatterImages/green splatter.png"
  },
  {
    name: "Women Empowerment",
    text: "Supporting women with micro-credit, training, and financial resources to start small enterprises, generate income, and strengthen household security, while promoting gender equality and leadership in their communities.",
    splatterImage: "/images/homepage/SplatterImages/green splatter.png"
  },
  {
    name: "Health Awareness",
    text: "Promoting menstrual hygiene education and access to safe products among adolescent girls and women, breaking taboos, and improving health, dignity, and school attendance across rural villages in Nandyal and Kurnool districts.",
    splatterImage: "/images/homepage/SplatterImages/green splatter.png"
  }
];

export default function ImpactStats() {
  return (
    <section className="pb-16" style={{ backgroundColor: "#ff9df085" }}>

      {/* Ongoing projects Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Ongoing Projects
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our ongoing projects include <span className="font-bold">Digital Literacy</span> and <span className="font-bold">Menstrual Health</span> Awareness, 
            directly advancing <span className="font-bold">SDG 4 (Quality Education), SDG 3 (Good Health), and SDG 5 (Gender Equality)</span> in rural Dalit communities.
          </p>
        </div>
      </div>

      {/* Ongoing project cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}



function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row ">
      {/* Splatter Image */}
      <div className="relative w-full sm:w-48 h-full flex-shrink-0">
        <Image
          src={testimonial.splatterImage}
          alt="Decorative splatter"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {testimonial.title}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {testimonial.text}
          </p>
        </div>
        <button className="bg-purple-900 px-5 py-2 text-white mt-4 sm:mt-6 self-start" style={{ backgroundColor: "#622676" }}>
          Read More
        </button>
      </div>
    </div>
  );
}

