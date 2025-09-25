// components/DualContentBlock.jsx
export default function DualContentBlock({ left = {}, right = {} }) {
  const defaultLeft = {
    title: "Vision",
    titleColor: "#000000",
    titleSize: "text-4xl md:text-5xl",
    bgColor: "#FEA128",
    type: "paragraph",
    content: [
      [
        {
          text: `To build an inclusive society where Dalit women thrive with dignity, equality, 
            and opportunity—breaking poverty cycles and creating sustainable, 
            empowered communities for generations to come.`,
          weight: "medium",
          color: "#000",
        },
      ],
    ],
  };

  const defaultRight = {
    title: "Mission",
    titleColor: "#000000",
    titleSize: "text-4xl md:text-5xl",
    bgColor: "#FFD446",
    type: "paragraph",
    content: [
      [
        {
          text: `To empower marginalized women through micro-credit, financial education, 
            and livelihoods—strengthening families, fostering community resilience, and 
            ensuring sustainable, grassroots-driven change rooted in dignity, justice, 
            and equality.`,
          weight: "medium",
          color: "#000",
        },
      ],
    ],
  };

  // Merge defaults with passed props
  const finalLeft = { ...defaultLeft, ...left };
  const finalRight = { ...defaultRight, ...right };

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
                    fontWeight:
                      weightMap[segment.weight] || weightMap["medium"],
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

    return (
      <p className="text-lg leading-relaxed">
        {section.content.map((itemSegments, idx) => (
          <span key={idx}>
            {itemSegments.map((segment, sidx) => (
              <span
                key={sidx}
                style={{
                  color: segment.color || "#000",
                  fontWeight:
                    weightMap[segment.weight] || weightMap["medium"],
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
      <div
        className="flex p-12 text-left"
        style={{ backgroundColor: finalLeft.bgColor }}
      >
        <div className="max-w-md mx-auto flex flex-col justify-start">
          <h2
            className={`font-bold mb-8 ${finalLeft.titleSize}`}
            style={{ color: finalLeft.titleColor }}
          >
            {finalLeft.title}
          </h2>
          {renderContent(finalLeft)}
        </div>
      </div>

      {/* Right Column */}
      <div
        className="flex p-12 text-left"
        style={{ backgroundColor: finalRight.bgColor }}
      >
        <div className="max-w-md mx-auto flex flex-col justify-start">
          <h2
            className={`font-bold mb-8 ${finalRight.titleSize}`}
            style={{ color: finalRight.titleColor }}
          >
            {finalRight.title}
          </h2>
          {renderContent(finalRight)}
        </div>
      </div>
    </section>
  );
}
