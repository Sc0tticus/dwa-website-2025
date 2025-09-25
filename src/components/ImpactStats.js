"use client";
import { useState, useEffect } from "react";
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

export default function ImpactStats() {
  return (
    <section className="bg-white py-16">
      {/* Numbers Section */}
      <div className="bg-blue-100 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our impact in numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            <StatCard endValue={5000} label="People" suffix="+" />
            <StatCard endValue={140} label="Villages" suffix="+" />
            <StatCard endValue={30} label="Programs" suffix="+" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
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

// Individual stat card component with animation
function StatCard({ endValue, label, prefix = "", suffix = "" }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = endValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.round(increment * currentStep), endValue);
      setCurrentValue(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <div className="text-center py-8">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {prefix}
        {currentValue.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
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
