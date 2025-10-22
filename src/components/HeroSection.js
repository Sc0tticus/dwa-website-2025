import Image from "next/image";

export default function HeroSection({
  imageSrc = "/images/homepage/Homepage Children Image.jpg",
  imageAlt = "Children from Dalit communities",
  imageHeight = 500,
  belowSectionBackground = "#FFFFFF",
  belowText = {},
}) {
  // Map Tailwind-style weights to CSS font-weight values
  const weightMap = {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  };

  // Merge user props with defaults
  const mergedBelowText = {
    title: "Dalit Welfare Association",
    content: [], // array of { text, color, weight } segments for a single paragraph
    titleColor: "#000000",
    contentColor: "#000000",
    contentWeight: "medium", // default to Tailwind's font-medium
    ...belowText, // overrides go here
  };

  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className={`w-full h-[${imageHeight}px] relative`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center grayscale"
          priority
          style={{ objectPosition: "center 30%" }}
        />
      </div>

      {/* Full-width background wrapper */}
      <div style={{ backgroundColor: belowSectionBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: mergedBelowText.titleColor }}
          >
            {mergedBelowText.title}
          </h1>

          {/* Single Paragraph with Colored Segments */}
          {mergedBelowText.content && mergedBelowText.content.length > 0 && (
            <p className="text-lg leading-relaxed">
              {mergedBelowText.content.map((segment, index) => (
                <span
                  key={index}
                  style={{
                    color: segment.color || mergedBelowText.contentColor,
                    fontWeight:
                      weightMap[segment.weight] ||
                      weightMap[mergedBelowText.contentWeight],
                  }}
                >
                  {segment.text}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
