import HeroSection from "../../components/projects/HeroSection";
import PreviousProjects from "../../components/projects/PreviousProjects";
import BenificiaryTestimonials from "../../components/projects/BenificiaryTestimonials";
import OngoingProjects from "../../components/projects/OngoingProjects";
import OurPartners from "../../components/projects/OurPartners";
import GetMoreInfo from "../../components/home/GetMoreInfo";
import Accreditations from "../../components/home/Accreditations";

export default function ProjectsPage() {
  return (
    <main>
      <HeroSection />
      <PreviousProjects />
      <BenificiaryTestimonials />
      <OngoingProjects />
      <OurPartners />
      <GetMoreInfo />
      <Accreditations />
    </main>
  );
}
