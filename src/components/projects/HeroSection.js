import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className="w-full h-[500px] relative">
        <Image
          src="/images/projectspage/project-hero-img.png"
          alt="project-hero-img"
          fill
          className="object-cover object-center grayscale"
          priority
          style={{ objectPosition: 'center 30%' }}
        />
      </div>

      {/* Title and Mission Statement */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Previous Projects
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            This year, we successfully conducted impactful women empowerment, advocacy, and health awareness programs reaching over 5,000 women across 28 villages. 
            These initiatives have strengthened women’s voices, improved health practices, and created pathways for self-reliance and dignity within their communities. 
            Our work has been made possible through the generous support of our major funding partners, including MEI USA, BASAID, and UCH, 
            whose commitment has enabled us to expand our reach.
          </p>
        </div>
      </div>
    </section>
  );
}
