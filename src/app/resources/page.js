import HeroSection from "../../components/HeroSection"
import FeaturedStories from "../../components/resources/FeaturedStories"
import ProjectsGallery from "../../components/resources/ProjectsGallery"
import OrphanageOldageHome from "../../components/resources/OrphanageOldageHome"
import AnnualReports from "../../components/resources/AnnualReports"
import GetMoreInfo from "../../components/home/GetMoreInfo"
import GetInvolved from "../../components/support/getInvolved"


export default function ResourcesPage() {
  return (
    <main className="">
    <HeroSection
                imageSrc="/images/resourcespage/resources page header image.png"
                imageAlt="school kids from Dalit community"
                belowSectionBackground="#FD7E14"
                belowText={{
                  title: "DWA Resources",
                  content: [
                    {
                      text: `The resources we share bring together knowledge, insights, and practical guidance from our network.
                        Whether you’re a supporter, partner, or community member, you’ll find tools here to help you learn, grow,
                        and make a difference.`,
                      color: "black",
                    },
                    
                  ],
                }}
              />
      <FeaturedStories />
      <ProjectsGallery />
      <OrphanageOldageHome />
      <AnnualReports />
      <GetMoreInfo />
      <GetInvolved />
    </main>
  )
}
