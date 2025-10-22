import HeroSection from "../../components/HeroSection";
import BenificiaryTestimonials from "../../components/projects/BenificiaryTestimonials";
import OngoingProjects from "../../components/projects/OngoingProjects";
import OurPartners from "../../components/projects/OurPartners";
import GetMoreInfo from "../../components/home/GetMoreInfo";
import DualContentBlock from "../../components/DualContentBlock";


export default function ProjectsPage() {
  return (
    <main>
       <HeroSection
                  imageSrc="/images/projectspage/project-hero-img.png"
                  imageAlt="Women from Dalit community"
                  belowText={{
                    title: "Previous Projects",
                    content: [
                      {
                        text: `This year, we successfully conducted impactful women empowerment, advocacy, and health awareness programs
                         reaching over 5,000 women across 28 villages. These initiatives have strengthened women’s voices, improved health
                          practices, and created pathways for self-reliance and dignity within their communities. Our work has been made
                           possible through the generous support of our major funding partners, including MEI USA, BASAID, and UCH, whose
                            commitment has enabled us to expand our reach.`,
                        color: "black",
                      },
                    ],
                  }}
                />

      <DualContentBlock
          left={{
            title: "Dairy Project – Govindapalle",
            titleSize: "text-2xl md:text-3xl",
            type: "list",
            bgColor: "#622676",
            titleColor: "#FFFFFF",
            content: [
              [
                { text: "Location", weight: "bold", color: "#FFFFFF" },
                { text: ": Govindapalle Village", weight: "normal", color: "#FFFFFF" },
              ],
              [
                { text: "Beneficiaries", weight: "bold", color: "#FFFFFF" },
                { text: ": 40 women", weight: "normal", color: "#FFFFFF" },
              ],
              [
                { text: "Budget", weight: "bold", color: "#FFFFFF" },
                { text: ": ₹20 lakhs", weight: "normal", color: "#FFFFFF" },
              ],
              [
                { text: "Duration", weight: "bold", color: "#FFFFFF" },
                { text: ": 12 months", weight: "normal", color: "#FFFFFF" },
              ],
              [
                { text: "Results: ", weight: "bold", color: "#FFFFFF" },
                { text: `: Women gained steady income, improved nutrition for families,
                   and collective savings groups strengthened financial
                    independence.`, weight: "normal", color: "#FFFFFF" },
              ],
            ],
          }}
          right={{
            title: "Finance Awareness – Sirivella ",
            titleSize: "text-2xl md:text-3xl",
            type: "list",
            bgColor: "#FFCEF8",
            content: [
              [
                { text: "Location", weight: "bold", color: "#000000" },
                { text: ": 8 villages, Sirivella Mandal", weight: "normal", color: "#000000" },
              ],
              [
                { text: "Beneficiaries", weight: "bold", color: "#000000" },
                { text: ": 700–800 women", weight: "normal", color: "#000000" },
              ],
              [
                { text: "Budget", weight: "bold", color: "#000000" },
                { text: ": ₹12 lakhs", weight: "normal", color: "#000000" },
              ],
              [
                { text: "Duration", weight: "bold", color: "#000000" },
                { text: ": 12 months", weight: "normal", color: "#000000" },
              ],
              [
                { text: "Results: ", weight: "bold", color: "#000000" },
                { text: `: Women developed financial literacy, reduced debt reliance,
                   adopted savings habits, and started small investments
                    for household security.`, weight: "normal", color: "#000000" },
              ],
            ],
          }}
        />

      <BenificiaryTestimonials />
      <OngoingProjects />
      <OurPartners />
      <GetMoreInfo />
    </main>
  );
}
