import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              A global movement for community impact
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              We are on a mission to inspire, educate, and empower every
              individual to leverage their unique assets for the betterment of
              Dalit communities.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/support">Support Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
