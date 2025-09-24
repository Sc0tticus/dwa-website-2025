import GetMoreInfo from "../../components/home/GetMoreInfo";
import Accreditations from "../../components/Accreditations";
import HeroSection from "../../components/blog/HeroSection";
import CardGrid from "../../components/blog/CardGrid";

export default function BlogPage() {
  return (
        <main>
            <HeroSection />
            <CardGrid />
            <GetMoreInfo />
            <Accreditations />
        </main>
  );
}
