"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Y. Saramma",
    title: "Govindapalle",
    text: "With the support of Dalit Welfare Association, I started an income-generating activity that helps feed my family. This opportunity has given me confidence, stability, and hope for a better future.",
    splatterImage: "/images/homepage/SplatterImages/green splatter.png"
  },
  {
    name: "Y. Saramma",
    title: "Govindapalle",
    text: "With the support of Dalit Welfare Association, I started an income-generating activity that helps feed my family. This opportunity has given me confidence, stability, and hope for a better future.",
    splatterImage: "/images/homepage/SplatterImages/red splatter.png"
  },
  {
    name: "Y. Saramma",
    title: "Govindapalle",
    text: "With the support of Dalit Welfare Association, I started an income-generating activity that helps feed my family. This opportunity has given me confidence, stability, and hope for a better future.",
    splatterImage: "/images/homepage/SplatterImages/purple splatter.png"
  }
];

export default function ImpactStats() {
  return (
    <section className="bg-white pt-16">

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* middle Image */}
      <div className="w-full h-[500px] relative mt-10">
        <Image
          src="/images/projectspage/childern-in-class.png"
          alt="childern in class"
          fill
          className="object-cover object-center grayscale"
          priority
          style={{ objectPosition: 'center 30%' }}
        />
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
