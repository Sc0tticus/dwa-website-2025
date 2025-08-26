"use client";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";

export default function PartnerOrganizations() {
  const { logoDisplayMode, toggleLogoDisplay } = useTheme();

  // Sample partner data - you can replace with real organizations
  const partners = [
    { name: "UNESCO", logo: "🏛️" },
    { name: "UNICEF", logo: "🌍" },
    { name: "Oxfam", logo: "🤝" },
    { name: "Save the Children", logo: "👶" },
    { name: "Red Cross", logo: "❤️" },
    { name: "Doctors Without Borders", logo: "🏥" },
    { name: "Amnesty International", logo: "⚖️" },
    { name: "Human Rights Watch", logo: "👁️" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partner Organizations
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Working together to create lasting change in communities
          </p>

          {/* Display Mode Toggle Button */}
          <Button
            onClick={toggleLogoDisplay}
            variant="outline"
            className="mb-8"
          >
            Switch to {logoDisplayMode === "grid" ? "Carousel" : "Grid"} View
          </Button>
        </div>

        {/* Conditional rendering based on display mode */}
        {logoDisplayMode === "grid" ? (
          <GridView partners={partners} />
        ) : (
          <CarouselView partners={partners} />
        )}
      </div>
    </section>
  );
}

// Grid layout component
function GridView({ partners }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
      {partners.map((partner, index) => (
        <PartnerCard key={index} partner={partner} />
      ))}
    </div>
  );
}

// Carousel layout component (simplified version)
function CarouselView({ partners }) {
  return (
    <div className="flex overflow-x-auto space-x-8 pb-4">
      {partners.map((partner, index) => (
        <div key={index} className="flex-shrink-0">
          <PartnerCard partner={partner} />
        </div>
      ))}
    </div>
  );
}

// Individual partner card
function PartnerCard({ partner }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{partner.logo}</div>
      <h3 className="font-semibold text-gray-900">{partner.name}</h3>
    </div>
  );
}
