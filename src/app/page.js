import HeroSection from "../components/HeroSection";
import GoalsObjectives from "../components/home/GoalsObjectives";
import ProgramsGrid from "../components/home/ProgramsGrid";
import ImpactStats from "../components/ImpactStats";
import FeaturedProjects from "../components/home/FeaturedProjects";
import BenevityBoardSection from "../components/home/BenevityBoardSection";
import WhyTrustUs from "../components/home/WhyTrustUs";
import TechPartners from "../components/home/TechPartners";
import GetMoreInfo from "../components/home/GetMoreInfo";
import { Weight } from "lucide-react";


export default function Home() {
  return (
    <main>
      <HeroSection 
        belowText={{

                content: [
                  {
                    text: `For the past 32 years`,
                    weight: "bold",
                    color: "#004265"
                  },
                  {
                    text: `, our organization has been working tirelessly to uplift Dalit
                     communities and rural villages, striving to break cycles of poverty, inequality, and discrimination. 
                     With a deep commitment to social justice and empowerment, we have focused on education, livelihood 
                     opportunities, women's empowerment, and community development. Our journey has been one of resilience 
                     and hope— ensuring that the most marginalized have access to dignity, equal opportunities, and a`,
                    
                  },
                  {
                    text: ` better future`,
                    weight: "bold",
                    color: "#004265"
                  },
                   {
                    text: `.`,     
                  },
                ],
              }}
      />
      <GoalsObjectives />
      <ProgramsGrid />
      <ImpactStats />
      <FeaturedProjects />
      <BenevityBoardSection />
      <WhyTrustUs />
      <TechPartners />
      <GetMoreInfo />
    </main>
  );
}
