import Image from "next/image"

export default function ProjectsGallery() {
  const galleryImages = [
    "/images/resourcespage/1st image middle section.jpg",
    "/images/resourcespage/2nd image middle section.jpg",
    "/images/resourcespage/3rd image middle section.jpg",
    "/images/resourcespage/4th image middle section.jpg"
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFE66D' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Projects Gallery
        </h2>

        {/* Title 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black mb-6">
            Title 1
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={`title1-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Title 2 */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-6">
            Title 2
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={`title2-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
