import Image from "next/image";
import projectPosts from "../../data/projectPosts";

export default function ImpactStats() {
  return (
    <section className="pb-16 bg-[#ff9df085]">

      {/* Ongoing projects Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 pt-10">
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
          {projectPosts.map((project, index) => {
            if (index % 2)
              return <ProjectCardRight key={index} {...project} />

            return <ProjectCardLeft key={index} {...project} />
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCardLeft({ project, slug, splatterImage, title, description }) {
  return (
    <div className="bg-white overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition">
      {/* Splatter Image */}
      <div className="relative w-full sm:w-55 h-full flex-shrink-0">
        <Image
          src={splatterImage}
          alt="Decorative splatter"
          fill
          className="object-cover"
        />
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-5">
            {title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
        <a href={`/projects/${slug}`} className="px-6 py-1 text-white mt-4 sm:mt-6 self-start bg-[#622676] font-semibold hover:bg-[#7F4592] transition  cursor-pointer">
          Read More
        </a>
      </div>
    </div>
  );
}

function ProjectCardRight({ project, slug, splatterImage, title, description }) {
  return (
    <div className="bg-white overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition">
      {/* Card content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-5">
            {title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
        <a href={`/projects/${slug}`} className="px-6 py-1 text-white mt-4 sm:mt-6 self-start bg-[#622676] font-semibold hover:bg-[#7F4592] transition  cursor-pointer">
          Read More
        </a>
      </div>

      {/* Splatter Image */}
      <div className="relative w-full sm:w-55 h-full flex-shrink-0">
        <Image
          src={splatterImage}
          alt="Decorative splatter"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}