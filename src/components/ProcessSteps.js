import Link from "next/link";
import { Button } from "./ui/button";
import { BookOpen, Heart, Users } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Learn",
      description:
        "Discover the challenges facing Dalit communities and understand how education and advocacy create lasting change.",
      icon: BookOpen,
      action: "Explore Our Mission",
      link: "/about",
    },
    {
      number: "02",
      title: "Support",
      description:
        "Join our community of supporters through donations, volunteering, or spreading awareness about our cause.",
      icon: Heart,
      action: "Get Involved",
      link: "/support",
    },
    {
      number: "03",
      title: "Impact",
      description:
        "See the real-world results of your support as communities gain access to education, resources, and opportunities.",
      icon: Users,
      action: "View Our Impact",
      link: "/projects",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of supporters in creating meaningful change for Dalit
            communities through our simple three-step process.
          </p>
        </div>

        {/* Desktop Layout - Horizontal Steps */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gray-200"></div>

            <div className="grid grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <ProcessStepCard key={index} step={step} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical Steps */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <ProcessStepCard key={index} step={step} isMobile={true} />
          ))}
        </div>

        {/* Final Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to make a difference?
          </h3>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/support">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Individual step card component
function ProcessStepCard({ step, isMobile = false }) {
  const IconComponent = step.icon;

  return (
    <div
      className={`text-center ${
        isMobile ? "flex items-start space-x-4 text-left" : ""
      }`}
    >
      {/* Step Number & Icon */}
      <div
        className={`${isMobile ? "flex-shrink-0" : "mx-auto mb-6"} relative`}
      >
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
          {step.number}
        </div>
        <div className="w-12 h-12 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mx-auto -mt-2">
          <IconComponent className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Content */}
      <div className={isMobile ? "flex-1" : ""}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
        <Button
          asChild
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          <Link href={step.link}>{step.action}</Link>
        </Button>
      </div>
    </div>
  );
}
