import Link from 'next/link';
import Image from 'next/image';
import pic1 from "/public/images/resources/image/pic1.jpg";
import pic2 from "/public/images/resources/image/pic2.jpg";
import pic3 from "/public/images/resources/image/pic3.jpg";
import pic5 from "/public/images/resources/image/pic5.jpg";
import styles from "/src/app/resources/styles/resourcesPage.module.css";

export default function featured_stories_component() {
return (
    <div className={styles.orphanage_old_age_home}>
        <h2>Orphanage and Old Age Home</h2>
        <div className={styles.img_gallery}>
            <h4>Budaga Jangal Hostel(Orphanage)</h4>
            <Image 
              src={pic1.jpg}  
              alt="Project Image"
            />
            <Image 
              src={pic2.jpg}  
              alt="Project Image"
            />
            <Image 
              src={pic3.jpg}  
              alt="Project Image"
            />
            <Image 
              src={pic5.jpg}  
              alt="Project Image"
            />
        </div>
        <div className={styles.img_gallery}>
            <h4>Old Age Home</h4>
            <Image 
              src={pic1.jpg}  
              alt="Project Image"
            />
            <Image 
              src={pic2.jpg}  
              alt="Project Image"
            />
            <Image 
              src={pic3.jpg}  
              alt="Project Image"
            />
            <Image 
              src={pic5.jpg}  
              alt="Project Image"
            />
        </div>
    </div>
);
}

