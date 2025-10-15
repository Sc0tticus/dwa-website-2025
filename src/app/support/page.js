
import Causes from "../../components/support/causes";
import EntireWorld from "../../components/support/entireWorld";
import GetInvolved from "../../components/support/getInvolved";
import HeroSection from "../../components/HeroSection";
import InfoForm from "../../components/support/infoForm";



export default function SupportPage() {
  return (
    <main className="">
       <HeroSection
                  imageSrc="/images/supportpage/hero-img.png"
                  imageAlt="farmers from Dalit community"
                  belowText={{
                    title: "Support Our Cause!",
                    titleColor: "#004265",
                    content: [
                      {
                        text: `DALIT WELFARE is a grassroot NGO working directly with Dalit communities in tribal and rural
                         regions of Nandyal & Kurnnol districts. `,
                        color: "black",
                      },
                    ],
                  }}
                />
      <Causes/>
      <EntireWorld/>
      <InfoForm/>
      <GetInvolved/>  
    </main>
  );
}
