import HeroSection from "../components/HeroSection";
import GoalsObjectives from "../components/home/GoalsObjectives";
import ProgramsGrid from "../components/home/ProgramsGrid";
import ImpactStats from "../components/ImpactStats";
import FeaturedProjects from "../components/home/FeaturedProjects";
import BenevityBoardSection from "../components/home/BenevityBoardSection";
import WhyTrustUs from "../components/home/WhyTrustUs";
import TechPartners from "../components/home/TechPartners";
import GetMoreInfo from "../components/home/GetMoreInfo";
import Accreditations from "../components/home/Accreditations";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GoalsObjectives />
      <ProgramsGrid />
      <ImpactStats />
      <FeaturedProjects />
      <BenevityBoardSection />
      <WhyTrustUs />
      <TechPartners />
      <GetMoreInfo />
      <Accreditations />
    </main>
  );
}
