import Link from 'next/link';
import Image from 'next/image';
import arrow_icon from "/public/images/resources/image/arrow_icon.png";
import styles from "/src/app/resources/styles/resourcesPage.module.css";

export default function GetMoreInfo_donate_component() {
return (
    <div>
      <div className={styles.get_more_info}>
        <h2>Get More Info</h2>
        <div className={styles.get_more_info_array}>
            <p>
            Tell us a little bit about yourself and we'll send you information on how to get involved.
        </p>
        <form>
            <div>
                <input type="text" placeholder="First name" id="fname">
                <input type="text" placeholder="Last name" id="lname">
                <input type="email" placeholder="Email" id="email">
            </div>
            <div>
                <input type="tel" placeholder="Phone" id="phone">
                <input type="text" placeholder="Address" id="address">
                <span className={styles.arrow_icon}>Get involved 
                <Image 
                  src={arrow_icon}  
                  alt="Pointer icon"
                />
              </span>
                <button>Submit</button>
            </div>            
        </form>                   
      </div>       
    </div>
    <div className={styles.donate_now}>
        <button>Donate Now</button>
        <span> Ready to get involved?</span>        
    </div>
  </div>
);
}
