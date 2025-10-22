import React from "react";
import Image from "next/image";

const PresidentMessage = () => {
  return (
    <section className="bg-[#F4F4F4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl text-black mb-8">
          Message from Our President
        </h2>

        {/* Card */}
        <div className="bg-white shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
          {/* Left Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 w-full md:w-1/3 max-w-xs h-64 md:h-auto flex justify-center items-center">
            <Image
              src="/images/SplatterImages/purple splatter.png"
              alt="President message"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col flex-1 p-6 md:p-8">
            <h3 className="text-2xl sm:text-4xl font-bold text-black mb-4">
              Breaking Barriers, <br /> Restoring Dignity
            </h3>
            <p className="text-black mb-4">
              As President of DWA, I have seen how deeply caste discrimination
              and poverty affect Dalit families. Education, livelihoods, and
              women’s empowerment are powerful tools we use to confront these
              injustices.
            </p>
            <p className="text-black mb-6">
              Our efforts in rural Nandyal and Kurnool are small steps toward
              equality, but with strong partnerships, these steps become
              transformative. Together, we can dismantle barriers and create a
              society where Dalits live with dignity and opportunity.
            </p>
            <p className="font-semibold text-lg text-black">
              S. Samuel{" "}
              <span className="font-normal text-black">- President</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
