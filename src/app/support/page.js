import Accreditations from "../../components/home/Accreditations";
import Causes from "../../components/support/causes";
import EntireWorld from "../../components/support/entireWorld";
import GetInvolved from "../../components/support/getInvolved";
import HeroSection from "../../components/support/HeroSection";
import InfoForm from "../../components/support/infoForm";
import SupportCause from "../../components/support/supportcause.js";


export default function SupportPage() {
  return (
    <main className="">
      <HeroSection />
      <SupportCause />
      <Causes/>
      <EntireWorld/>
      <InfoForm/>
      <GetInvolved/>
      <Accreditations />
     
    </main>
  );
}
