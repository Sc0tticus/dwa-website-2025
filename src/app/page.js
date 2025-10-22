import HeroSection from "../components/HeroSection";
import DualContentBlock from "../components/DualContentBlock";
import ProgramsGrid from "../components/home/ProgramsGrid";
import Testimonials from "../components/home/Testimonials";
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
      <DualContentBlock
            left={{
              title: "Goals",
              titleColor: "#FFFFFF",
              bgColor: "#004265",
              type: "list",
              content: [
                [
                  { text: "End poverty & discrimination 🚫", weight:"normal", color: "#FFFFFF" },
                ],
                [
                  { text: "Equal learning for every child 👧👦", weight:"normal", color: "#FFFFFF" },
                ],
                [
                  { text: "Economic independence for families 💰", weight:"normal", color: "#FFFFFF" },
                ],
                [
                  { text: "Strong, healthy communities 🌱", weight:"normal", color: "#FFFFFF" },
                ],
                [
                  { text: "Self-reliant rural villages 🌾", weight:"normal", color: "#FFFFFF" },
                ],
                [
                  { text: "Inclusive growth & participation 🌍", weight:"normal", color: "#FFFFFF" },
                ],
                [
                  { text: "Respect and empowerment for Dalits 🌟", weight:"normal", color: "#FFFFFF" },
                ],
                
              ],
            }}

            right={{
              title: "Objectives",
              titleColor: "#000000",
              bgColor: "#9FDFFC",
              type: "list",
              content: [
                [
                  { text: "Promote equality & justice ⚖️", weight:"normal", color: "#000000" },
                ],
                [
                  { text: "Quality education for children 📚", weight:"normal", color: "#000000" },
                ],
                [
                  { text: "Women’s empowerment & livelihoods 👩‍👩‍👧", weight:"normal", color: "#000000" },
                ],
                [
                  { text: "Better health & nutrition 🏥", weight:"normal", color: "#000000" },
                ],
                [
                  { text: "Sustainable livelihoods & skills 🛠️", weight:"normal", color: "#000000" },
                ],
                [
                  { text: "Community leadership 🤝", weight:"normal", color: "#000000" },
                ],
                [
                  { text: "Rights & dignity advocacy ✊", weight:"normal", color: "#000000" },
                ],
              ],
            }}
        />
      <ProgramsGrid />
      <ImpactStats
        bgColor="#9FDFFC"
        textColor="#004265"
      />
      <Testimonials />
      <FeaturedProjects />
      <BenevityBoardSection />
      <WhyTrustUs />
      <TechPartners />
      <GetMoreInfo />
    </main>
  );
}
