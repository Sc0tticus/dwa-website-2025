import VisionMission from "../../components/about/VisionMission";
import HeroSection from "../../components/about/HeroSection";
import Accreditations from "../../components/home/Accreditations";
import AboutAccreditations from "../../components/about/AboutAccreditations";
import ImpactStats from "../../components/about/ImpactStats";
import GetMoreInfo from "../../components/home/GetMoreInfo";
import AboutTeam from "../../components/about/AboutTeam"; 
import Volunteers from "../../components/about/Volunteers";
import WorkAreas from "../../components/about/WorkAreas"; 
import PresidentMessage from "../../components/about/PresidentMessage";


export default function AboutPage() {
  return (
      <main>
          <HeroSection />
          <VisionMission />
          <AboutAccreditations />
          <ImpactStats
            numbersBg="bg-[#FFD446]"
          />
          <AboutTeam />
          <Volunteers />
          <WorkAreas />
          <PresidentMessage />
          <GetMoreInfo />
          <Accreditations />
      </main>
  );
}
