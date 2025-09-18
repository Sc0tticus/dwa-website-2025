"use client";

import { useState, useEffect } from "react";

export default function ImpactStats({
  bgColor = "bg-white",
  numbersBg = "bg-white",
  numberTextColor = "text-black", // default black
  labelTextColor = "text-black"   // default black
}) {
  return (
    <section className={`${bgColor} py-16`}>
      {/* Numbers Section */}
      <div className={`${numbersBg} py-16 mb-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold ${labelTextColor} mb-4`}>
              Our impact in numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-black">
            <StatCard endValue={5000} label="People" suffix="+" numberTextColor={numberTextColor} labelTextColor={labelTextColor}/>
            <StatCard endValue={140} label="Villages" suffix="+" numberTextColor={numberTextColor} labelTextColor={labelTextColor}/>
            <StatCard endValue={30} label="Programs" suffix="+" numberTextColor={numberTextColor} labelTextColor={labelTextColor}/>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual stat card component with animation
function StatCard({ endValue, label, prefix = "", suffix = "", numberTextColor = "text-black", labelTextColor = "text-black" }) {
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
      <div className={`text-4xl md:text-5xl font-bold mb-2 ${numberTextColor}`}>
        {prefix}
        {currentValue.toLocaleString()}
        {suffix}
      </div>
      <div className={`text-xl font-bold ${labelTextColor}`}>{label}</div> {/* slightly bigger */}
    </div>
  );
}
