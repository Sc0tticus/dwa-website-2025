// components/WorkAreas.js
import React from "react";

const WorkAreas = () => {
  return (
    <section className="bg-[#FFEAA3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-8">
          We work in 140 villages of Nandyal & Kurnool districts
        </h2>

        {/* Map */}
        <div className="w-full h-[450px]">
          <iframe
            title="Nandyal Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.07914011614!2d78.47540731482077!3d15.477059589253067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4a63d0667b5e3%3A0x7e77d6b0a15e4a1c!2sNandyal%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1694684934313!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WorkAreas;
