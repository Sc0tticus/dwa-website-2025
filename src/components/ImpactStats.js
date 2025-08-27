"use client";
import { useState, useEffect } from "react";

export default function ImpactStats() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our impact in numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard endValue={5000} label="Families Supported" suffix="+" />
          <StatCard endValue={25} label="Communities Reached" suffix="+" />
          <StatCard
            endValue={100000}
            label="Lives Impacted"
            prefix="₹"
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
}

// Individual stat card component with animation
function StatCard({ endValue, label, prefix = "", suffix = "" }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    // Animation logic will go here
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
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

    // Cleanup function
    return () => clearInterval(timer);
  }, [endValue]); // Include endValue in dependency array

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {prefix}
        {currentValue.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
}
