import Image from "next/image"

export default function FeaturedStories() {
  const stories = [
    {
      id: 1,
      title: "Livelihoods, micro-credit and economic empowerment for Dalit and rural families",
      image: "/images/resourcespage/Feature Stories Card Component Image.png"
    },
    {
      id: 2,
      title: "Livelihoods, micro-credit and economic empowerment for Dalit and rural families",
      image: "/images/resourcespage/Feature Stories Card Component Image.png"
    },
    {
      id: 3,
      title: "Livelihoods, micro-credit and economic empowerment for Dalit and rural families",
      image: "/images/resourcespage/Feature Stories Card Component Image.png"
    }
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
            Featured Stories
          </h2>
          <p className="text-xl text-gray-700">
            Stories of Hope & Resilience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-white overflow-hidden shadow-md border border-gray-200 flex flex-row">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex items-center">
                <p className="text-sm text-gray-900 leading-relaxed">
                  {story.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
