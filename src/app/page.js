import HeroSection from "../components/HeroSection";
import ImpactStats from "../components/ImpactStats";
import PartnerOrganizations from "../components/PartnerOrganizations";
import Testimonials from "../components/Testimonials";
import ProcessSteps from "../components/ProcessSteps";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImpactStats />
      <PartnerOrganizations />
      <Testimonials />
      <ProcessSteps />
      <ContactForm />
    </main>
  );
}
