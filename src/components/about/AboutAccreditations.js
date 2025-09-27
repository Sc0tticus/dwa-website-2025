// components/AboutAccreditations.js
import Image from "next/image";

const AboutAccreditations = () => {
  const logos = [
    "/images/aboutpage/givedo.png",
    "/images/aboutpage/guidestarindia.png",
    "/images/aboutpage/benevity.png",
    "/images/aboutpage/goodstack.png"
  ];

  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-black text-left max-w-4xl mx-auto">
        Accreditations
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-black leading-relaxed max-w-4xl mx-auto mb-12 text-left">
        Dalit Welfare Association is a legally registered nonprofit organization,
        governed by all statutory requirements under Indian law. We hold valid{" "}
        <span className="font-bold">Registration Certificates</span>,{" "}
        <span className="font-bold">12A & 80G tax exemption approvals</span>, and
        maintain compliance with the{" "}
        <span className="font-bold">
          FCRA (Foreign Contribution Regulation Act)
        </span>{" "}
        to receive international donations. Our financial records are audited
        annually, ensuring transparency, accountability, and trust with donors,
        partners, and the communities we serve.
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Accreditation Logo ${index + 1}`}
            width={306}
            height={306}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default AboutAccreditations;
