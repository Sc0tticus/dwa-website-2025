import HeroSection from "../components/HeroSection";
import GoalsObjectives from "../components/home/GoalsObjectives";
import ProgramsGrid from "../components/home/ProgramsGrid";
import ImpactStats from "../components/ImpactStats";
import TechPartners from "../components/home/TechPartners";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GoalsObjectives />
      <ProgramsGrid />
      <ImpactStats />
      <TechPartners />
      <ContactForm />
    </main>
  );
}
