import Image from "next/image"

export default function OrphanageOldageHome() {
  const galleryImages = [
    "/images/resourcespage/1st image middle section.jpg",
    "/images/resourcespage/2nd image middle section.jpg",
    "/images/resourcespage/3rd image middle section.jpg",
    "/images/resourcespage/4th image middle section.jpg"
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Orphanage & Oldage Home
        </h2>

        {/* Budaga Jangal Hostel (Orphanage) */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black mb-6">
            Budaga Jangal Hostel (Orphanage)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={`orphanage-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Orphanage image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Old Age Home */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-6">
            Old Age Home
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={`oldage-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Old age home image ${index + 1}`}
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
