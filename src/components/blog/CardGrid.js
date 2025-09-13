"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

const Card = ({ image, title, description, date }) => (
  <div className={`flex flex-col md:flex-row bg-white shadow-md overflow-hidden w-full ${inter.className}`}>
    {/* Left image */}
    <div className="relative md:w-1/2 h-48 md:h-auto">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>

    {/* Right content */}
    <div className="flex flex-col justify-between p-4 md:w-1/2">
      <div>
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Button and date */}
      <div className="flex items-center justify-center mt-4 text-gray-500 text-sm space-x-4">
        <button className="px-4 py-2 bg-[#7F4592] text-white font-semibold hover:bg-[#693770] transition">
          View Post
        </button>
        <span className="border-l border-gray-300 pl-4">{date}</span>
      </div>
    </div>
  </div>
);

export default function CardGrid() {
  const cards = [
    {
      image: "/images/blogpage/handsingrass.jpg",
      title: "Lorem ipsum  consectetur elit",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.",
      date: "August 20, 2025",
    },
    {
      image: "/images/blogpage/handsingrass.jpg",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.",
      date: "August 20, 2025",
    },
    {
      image: "/images/blogpage/handsingrass.jpg",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.",
      date: "August 20, 2025",
    },
    {
      image: "/images/blogpage/handsingrass.jpg",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.",
      date: "August 20, 2025",
    },
  ];

  return (
    <>
      {/* Card grid constrained by margins */}
      <div className={`w-full px-8 lg:px-32 mt-10 ${inter.className}`}>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-8 justify-center">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      {/* Full-width bottom button section */}
      <div className="w-full bg-[#E8E7E7] py-12 flex justify-center mt-10">
        <button className="px-6 py-3 bg-[#7F4592] text-white font-semibold hover:bg-[#693770] transition">
          View More
        </button>
      </div>
    </>
  );
}
