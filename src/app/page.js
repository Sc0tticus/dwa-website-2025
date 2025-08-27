import HeroSection from "../components/HeroSection";
import ImpactStats from "../components/ImpactStats";
import PartnerOrganizations from "../components/PartnerOrganizations";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImpactStats />
      <PartnerOrganizations />
      <Testimonials />
    </main>
  );
}
