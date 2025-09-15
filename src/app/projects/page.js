import HeroSection from "../../components/projects/HeroSection";
import PreviousProjects from "../../components/projects/PreviousProjects";
import BenificiaryTestimonials from "../../components/projects/BenificiaryTestimonials";
import OngoingProjects from "../../components/projects/OngoingProjects";
import TechPartners from "../../components/projects/TechPartners";
import GetMoreInfo from "../../components/projects/GetMoreInfo";
import Accreditations from "../../components/projects/Accreditations";

export default function ProjectsPage() {
  return (
    <main>
      <HeroSection />
      <PreviousProjects />
      <BenificiaryTestimonials />
      <OngoingProjects />
      <TechPartners />
      <GetMoreInfo />
      <Accreditations />
    </main>
  );
}
