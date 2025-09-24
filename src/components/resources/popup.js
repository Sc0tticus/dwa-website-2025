import Link from 'next/link';
import Image from 'next/image';
import close_icon from "public/images/resources/image/close.png";
import styles from "src/app/resources/styles/resourcesPage.module.css";


export default function popup_component() {
return (
    <div className={popup_page}>
         <div className={get_more_info}>
             <Link href="src/app/resources/page.js">
              <Image  
             className={close_popup}        
             src={close_icon} 
             alt="close popup"
           />  
         </Link>
        <h2 className={popup}>Want more resources like this?</h2>
        <div className={get_more_info_array}>
            
            <p className={popup}>
                <b>Sign up for newsletter</b><br><br>
            We regularly share new resources stories, and ways you can make an impact.<br>Sign up to stay connected with our work.
        </p>
        <form className={popup}>
                <input type="text" placeholder="First name" id="fname">
            <input type="text" placeholder="Last name" id="lname">
            <input type="email" placeholder="Email" id="email">
            <button className={popup}>Submit</button>                        
        </form>                   
      </div>       
    </div>
  </div>
);
}
