import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className="w-full h-[500px] relative">
        <Image
          src="/images/homepage/Homepage Children Image.jpg"
          alt="Children from Dalit communities"
          fill
          className="object-cover object-center grayscale"
          priority
          style={{ objectPosition: 'center 30%' }}
        />
      </div>

      {/* Title and Mission Statement */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Dalit Welfare Association
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-600">For the past 32 years</span>, our organization has been working tirelessly to uplift 
            Dalit communities and rural villages, striving to break cycles of poverty, inequality, 
            and discrimination. With a deep commitment to social justice and empowerment, 
            we have focused on education, livelihood opportunities, women&apos;s empowerment, 
            and community development. Our journey has been one of resilience and hope—
            ensuring that the most marginalized have access to dignity, equal opportunities, 
            and a <span className="font-semibold text-blue-600">better future</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
