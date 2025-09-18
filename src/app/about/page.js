import VisionMission from "../../components/about/VisionMission";
import HeroSection from "../../components/about/HeroSection";
import Accreditations from "../../components/home/Accreditations";
import AboutAccreditations from "../../components/about/AboutAccreditations";
import ImpactStats from "../../components/about/ImpactStats";
import GetMoreInfo from "../../components/home/GetMoreInfo";

export default function AboutPage() {
  return (
      <main>
          <HeroSection />
          <VisionMission />
          <AboutAccreditations />
          <ImpactStats
            bgColor="bg-gray-50"
            numbersBg="bg-[#FFD446]"
          />

          <GetMoreInfo />
          <Accreditations />
      </main>
  );
}
