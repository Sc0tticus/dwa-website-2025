import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/homepage/DWA Logo.jpg"
                alt="Dalit Welfare Association"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">DALIT</span>
                <span className="text-lg font-bold text-gray-900">WELFARE</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium underline"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium underline"
              >
                Projects
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium underline"
              >
                Resources
              </Link>
              <Link
                href="/support"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium underline"
              >
                Support
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium underline"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
