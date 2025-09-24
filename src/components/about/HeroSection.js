import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className="w-full h-[500px] relative">
        <Image
          src="/images/aboutpage/kids.jpg"
          alt="Children from Dalit communities"
          fill
          className="object-cover object-center grayscale"
          priority
          style={{ objectPosition: 'center 30%' }}
        />
      </div>

      {/* Title and Mission Statement */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#004265] mb-8">
          About Us
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg font-medium text-black leading-relaxed">
          Dalit Welfare Association is a nonprofit organization dedicated to empowering marginalized communities
          in the rural villages of Nandyal and Kurnool districts. 
          Our work focuses on uplifting Dalit women through micro-credit, financial literacy, and sustainable livelihood opportunities.
          By strengthening women’s capacity to lead and support their families, we strive to break poverty cycles, foster equality, and
          build resilient, inclusive communities for future generations.  
          </p>
        </div>
      </div>
    </section>
  );
}
