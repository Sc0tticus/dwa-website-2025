// components/DualContentBlock.jsx
export default function DualContentBlock({
  left = {
    title: "Vision",
    titleColor: "#000000",
    bgColor: "#FEA128",
    type: "paragraph", // "paragraph" or "list"
    content: [
      [
        { text: `To build an inclusive society where Dalit women thrive with dignity, equality, 
            and opportunity—breaking poverty cycles and creating sustainable, 
            empowered communities for generations to come.`, weight: "medium", color: "#000" },
      ],
    ],
  },
  right = {
    title: "Mission",
    titleColor: "#000000",
    bgColor: "#FFD446",
    type: "paragraph",
    content: [
      [
        { text: `To empower marginalized women through micro-credit, financial education, 
            and livelihoods—strengthening families, fostering community resilience, and 
            ensuring sustainable, grassroots-driven change rooted in dignity, justice, 
            and equality.`, weight: "medium", color: "#000" },
    
      ],
    ],
  },
}) {
  const weightMap = {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  };

  const renderContent = (section) => {
    if (section.type === "list") {
      return (
        <ul className="list-none text-left space-y-2 text-lg leading-relaxed">
          {section.content.map((itemSegments, idx) => (
            <li key={idx}>
              {itemSegments.map((segment, sidx) => (
                <span
                  key={sidx}
                  style={{
                    color: segment.color || "#000",
                    fontWeight: weightMap[segment.weight] || weightMap["medium"],
                  }}
                >
                  {segment.text}
                </span>
              ))}
            </li>
          ))}
        </ul>
      );
    }

    // Paragraph
    return (
      <p className="text-lg leading-relaxed">
        {section.content.map((itemSegments, idx) => (
          <span key={idx}>
            {itemSegments.map((segment, sidx) => (
              <span
                key={sidx}
                style={{
                  color: segment.color || "#000",
                  fontWeight: weightMap[segment.weight] || weightMap["medium"],
                }}
              >
                {segment.text}
              </span>
            ))}
          </span>
        ))}
      </p>
    );
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Column */}
      <div className="flex p-12 text-center" style={{ backgroundColor: left.bgColor }}>
        <div className="max-w-md mx-auto flex flex-col justify-start">
          <h2 className="font-bold text-4xl md:text-5xl mb-8" style={{ color: left.titleColor }}>
            {left.title}
          </h2>
          {renderContent(left)}
        </div>
      </div>

      {/* Right Column */}
      <div className="flex p-12 text-center" style={{ backgroundColor: right.bgColor }}>
        <div className="max-w-md mx-auto flex flex-col justify-start">
          <h2 className="font-bold text-4xl md:text-5xl mb-8" style={{ color: right.titleColor }}>
            {right.title}
          </h2>
          {renderContent(right)}
        </div>
      </div>
    </section>
  );
}
