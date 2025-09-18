import VisionMission from "../../components/about/VisionMission";
import HeroSection from "../../components/about/HeroSection";
import Accreditations from "../../components/home/Accreditations";
import AboutAccreditations from "../../components/about/AboutAccreditations";
import GetMoreInfo from "../../components/home/GetMoreInfo";

export default function AboutPage() {
  return (
      <main>
          <HeroSection />
          <VisionMission />
          <AboutAccreditations />
          <GetMoreInfo />
          <Accreditations />
      </main>
  );
}
