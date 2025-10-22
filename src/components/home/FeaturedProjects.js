import React from "react";

export default function FeaturedProjects() {
  const leftProjects = [
    {
      title: "Digital Education Project",
      content: [
        { text: "Bridging the digital divide for rural Dalit children by providing access to technology, e-learning resources, and training, ensuring equal education opportunities and ", weight: "normal" },
        { text: "brighter futures", weight: "bold" },
        { text: ".", weight: "normal" },
      ],
    },
    {
      title: "Women Entrepreneurship Project",
      content: [
        { text: "Empowering rural women through micro-credit, skill-building, and enterprise support in sheep rearing and small businesses, fostering financial independence and ", weight: "normal" },
        { text: "community leadership", weight: "bold" },
        { text: ".", weight: "normal" },
      ],
    },
  ];

  const rightNumbers = [
    { label: "1. Registration Number:", value: "384/1993" },
    { label: "2. FCRA Number:", value: "010270166" },
    { label: "3. Guide Star:", value: "9683" },
    { label: "4. NGO Darpan:", value: "AP/2021/0276162" },
    { label: "5. TAX Exemption: ", value: "AAKFD2353BE20214" },
  ];

  const weightMap = {
    medium: "500",
    bold: "700",
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Column */}
      <div className="flex p-12" style={{ backgroundColor: "#004265", color: "#FFFFFF" }}>
        <div className="max-w-md mx-auto flex flex-col justify-start space-y-8">
          {leftProjects.map((project, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg leading-relaxed">
                {project.content.map((seg, sidx) => (
                  <span key={sidx} style={{ fontWeight: weightMap[seg.weight] }}>
                    {seg.text}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="flex p-12" style={{ backgroundColor: "#9FDFFC", color: "#000000" }}>
        <div className="max-w-md mx-auto flex flex-col justify-start space-y-6">
          <h2 className="text-5xl font-bold flex items-center mb-16">
        <img src="/icons/homepage/arrow-left.svg" alt="Arrow Left" className="h-8 w-8 mr-4" />
        Featured Projects
      </h2>

          <h3 className="text-3xl font-bold mb-4">Verification Numbers</h3>
          <ol className="list-decimal list-inside text-lg space-y-2">
            {rightNumbers.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{item.label}</span>
                <span className="font-medium"> {item.value}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
