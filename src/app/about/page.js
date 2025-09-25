import DualContentBlock from "../../components/DualContentBlock";
import HeroSection from "../../components/HeroSection";
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
          <HeroSection
            imageSrc="/images/aboutpage/kids.jpg"
            imageAlt="Children from Dalit community"
            belowText={{
              title: "About Us",
              titleColor: "#004265",
              content: [
                {
                  text: `Dalit Welfare Association is a nonprofit organization
                    dedicated to empowering marginalized communities in the rural villages of Nandyal and Kurnool districts.
                    Our work focuses on uplifting Dalit women through micro-credit, financial literacy,
                    and sustainable livelihood opportunities. By strengthening women’s
                    capacity to lead and support their families, we strive to break poverty cycles,
                    foster equality, and build resilient, inclusive communities for future generations.`,
                  color: "black",
                },
              ],
            }}
          />
          <DualContentBlock />
          <AboutAccreditations />
          <ImpactStats
            numbersBg="bg-[#FFD446]"
          />
          <AboutTeam />
          <Volunteers />
          <WorkAreas />
          <PresidentMessage />
          <GetMoreInfo />
  
      </main>
  );
}
