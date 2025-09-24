import Link from 'next/link';
import Image from 'next/image';
import dwa_logo from "public/images/resources/image/dwa_logo.jpg";
import give.do_logo from "public/images/resources/image/logo1.jpg";
import guidestarindia_logo from "public/images/resources/image/logo2.jpg";
import benevity_logo from "public/images/resources/image/logo3.jpg";
import goodstack_logo from "public/images/resources/image/logo4.jpg";
import linkedin from "public/images/resources/image/linkedin.jpg";
import instagram from "public/images/resources/image/instagram.jpg";
import mail from "public/images/resources/image/mail.jpg";
import styles from "src/app/resources/styles/resourcesPage.module.css";


export default function footer_component() {
return (
    <footer>
         <div className={styles.dwa}>            
            <p>
                <Image          
                  src={dwa_logo} 
                  alt="Dalit Welfare Logo"
                /><br>
                DALIT <span className={mobile}>WELFARE</span><br>                
            <span className={large_screen}>WELFARE</span>
            </p>
        </div>
        <div className={styles.footer_outer_div}>
            <div className={styles.footer_inner_div}>
                <div className={styles.address}>
            <p>#4-84, Parnapalie, <br>
            Nandyal, A.P, 518501, INDIA.</p>
            <p>
                E-mail<br> info@dwaindia.org<br>
                Phone <br>+91 83097 44864 </p>           
        </div>
        <div className={styles.accreditation}>
            <h3>Accreditations</h3>
            <span>                
             <a href="https://give.do/discover/18G1/dalit-welfare-association/">
                <Image          
                  src={give.do_logo} 
                  alt="give.do logo"
                />
             </a>
             <a href="https://guidestarindia.org/GSN-9683/DWA">
               <Image          
                 src={guidestarindia_logo} 
                 alt="guidestarINDIA logo"
                /> 
             </a>
           </span><br>
           <span>
             <a href="https://causes.benevity.org/causes/356-5640831431326_7b83">
                <Image          
                 src={benevity_logo} 
                 alt="benevity logo"
                />
             </a>
             <a href="https://causes.goodstack.io/claim">
               <Image          
                 src={goodstack_logo} 
                 alt="goodstack logo"
                />
             </a>
           </span>                      
          </div>                      
        </div>
        <div className={styles.social_media}>
            <p>                
             <a href="https://www.linkedin.com/company/dwaindia/">
                <Image          
                 src={linkedin} 
                 alt="linkedin logo"
                /> 
             </a>
             <a href="https://www.instagram.com/dwaindia/">
               <Image          
                 src={instagram} 
                 alt="instagram logo"
                /> 
             </a>
             <a href="mailto:info@dwaindia.org">
               <Image          
                 src={mail} 
                 alt="email icon"
               />  
             </a>
           </p>
        </div>
        <div className={styles.policies}>
           <a href=""> 
               <Link href="/src/app/refundPolicy/page.js">Refund Policy</Link>
           </a>
           <a href="">
            <Link href="/src/app/privacyPolicy/page.js">Privacy Policy</Link>
           </a>
           <span>©DWAINDIA 2025</span>
        </div>
      </div>                   
    </footer>
);
}
