import HeroSection from "../../components/resources/HeroSection"
import DWAResourcesSection from "../../components/resources/DWAResourcesSection"
import FeaturedStories from "../../components/resources/FeaturedStories"
import ProjectsGallery from "../../components/resources/ProjectsGallery"
import OrphanageOldageHome from "../../components/resources/OrphanageOldageHome"

export default function ResourcesPage() {
  return (
    <main className="">
      <HeroSection />
      <DWAResourcesSection />
      <FeaturedStories />
      <ProjectsGallery />
      <OrphanageOldageHome />
    </main>
  )
}
