import Link from 'next/link';
import Image from 'next/image';
import pic1 from "public/images/resources/image/pic1.jpg";
import pic2 from "public/images/resources/image/pic2.jpg";
import pic3 from "public/images/resources/image/pic3.jpg";
import pic5 from "public/images/resources/image/pic5.jpg";
import styles from "src/app/resources/styles/resourcesPage.module.css";

export default function project_gallery_component() {
return (
      <div className={styles.projects_gallery}>
        <h2>Projects Gallery</h2>
        <div className={styles.img_gallery}>
            <h4>Title 1</h4>
            <Image 
              src={pic1}  
              alt="Project Image"
            />
            <Image 
              src={pic2}  
              alt="Project Image"
            />
            <Image 
              src={pic3}  
              alt="Project Image"
            />
            <Image 
              src={pic5}  
              alt="Project Image"
            />
        </div>
        <div className={styles.img_gallery}>
            <h4>Title 2</h4>
            <Image 
              src={pic1}  
              alt="Project Image"
            />
            <Image 
              src={pic2}  
              alt="Project Image"
            />
            <Image 
              src={pic3}  
              alt="Project Image"
            />
            <Image 
              src={pic5}  
              alt="Project Image"
            />
        </div>
    </div>
);
}

  
