"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "John Romnes",
    title: "CEO – Minnesota Elevators Inc., USA",
    text: "Supporting the sheep rearing project with Dalit Welfare Association has been truly rewarding. The impact on rural families is visible, and I'm very happy with the results achieved.",
    splatterImage: "/images/SplatterImages/orange splatter.png"
  },
  {
    name: "Gerardo Betancourt",
    title: "Executive Team uch-arqsj., USA",
    text: "I deeply appreciate the transparency and timely reports provided. Their professionalism and commitment gave us confidence that our support is making a real difference on the ground.",
    splatterImage: "/images/SplatterImages/purple splatter.png"
  },
  {
    name: "Indira Oskvarek",
    title: "Secretary - Global Compassion INC., USA",
    text: "The dairy project we supported delivered outstanding results. We were so impressed with their project management that we are now considering funding the second phase as well.",
    splatterImage: "/images/SplatterImages/red splatter.png"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial card component
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Splatter Image */}
      <div className="h-48 relative">
        <Image
          src={testimonial.splatterImage}
          alt="Decorative splatter"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {testimonial.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {testimonial.title}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {testimonial.text}
        </p>
      </div>
    </div>
  );
}
