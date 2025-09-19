import Link from 'next/link';
import Image from 'next/image';
import dwa_logo from "/public/images/resources/image/dwa_logo.jpg";
import close_icon from "/public/images/resources/image/close.png";
import menu_icon from "/public/images/resources/image/menu.png";
import main_picture from "/public/images/resources/image/header_pic.jpg";
import styles from "/src/app/resources/styles/resourcesPage.module.css";

export default function section_header_component() {
return (
  <div>
      <header>
        <div className={logo}>
          <Image          
            src={dwa_logo} 
            alt="Dalit Welfare Logo"
           />
           <span> DALIT <br>
           <span style={{color:'#004265'}}>WELFARE</span>
           </span>
         </div>
         <nav id="nav">
           <Link href="#">
             <a className={close_dropdown_menu}>
               <Image 
                 src={close_icon} 
                 alt="close dropdown menu"
                />   
             </a>   
           </Link>
           <Link href="/src/app/about/page.js"> 
             <a className={styles.nav_link_top}>About Us</a>  
           </Link>
           <Link href="/src/app/projects/page.js"> 
             <a className={styles.nav_link}>Projects</a>  
           </Link>
           <Link href="/src/app/resources/page.js"> 
             <a className={styles.nav_link}>Resources</a> 
           </Link>
           <Link href="src/app/support/page.js"> 
             <a className={styles.nav_link}>Support</a>
           </Link>
           <Link href="src/app/blog/page.js"> 
             <a className={styles.nav_link}>Blog </a>
           </Link>
           <Link href="src/app/donate/page.js" 
             <a className={styles.button_link}>Donate Now</a>
           </Link>    
         </nav>
         <Link href="#nav"> 
           <a>
             <Image
               src={menu_icon} 
               className={styles.show_dropdown_menu} 
               alt="show dropdown menu"
             />
          </a>       
        </Link> 
      </header>
      <Image
        src={main_picture} 
        className={styles.main_picture} 
        alt="Header Picture"
      /> 
  </div>
);
}
