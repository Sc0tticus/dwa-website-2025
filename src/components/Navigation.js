import Link from "next/link";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              DWA
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Resources
              </Link>
              <Link
                href="/support"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Support
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
