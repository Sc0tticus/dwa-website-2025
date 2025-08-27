import Image from "next/image";

export default function Testimonials() {
  // Sample testimonial data - you can replace with real testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Community Leader",
      organization: "Mumbai Dalit Rights Coalition",
      quote:
        "DWA's educational programs have transformed our community. My daughter is now the first in our family to attend university, breaking generations of barriers.",
      image: "👩‍🎓", // Using emoji as placeholder - you can replace with real images
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Education Director",
      organization: "National Education Foundation",
      quote:
        "Working with DWA has shown me the power of grassroots change. Their approach to community empowerment is both practical and transformative.",
      image: "👨‍⚕️",
    },
    {
      id: 3,
      name: "Anita Devi",
      role: "Program Beneficiary",
      organization: "Delhi Community Center",
      quote:
        "The skills training program gave me the confidence and tools to start my own business. Today, I employ five other women from my community.",
      image: "👩‍💼",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voices from Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the leaders, beneficiaries, and partners who are part of
            our mission to create lasting change in Dalit communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual testimonial card component
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Quote */}
      <div className="mb-6">
        <svg
          className="w-8 h-8 text-blue-600 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed italic">
          &quot;{testimonial.quote}&quot;
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
            {testimonial.image}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-sm text-blue-600">{testimonial.organization}</p>
        </div>
      </div>
    </div>
  );
}
