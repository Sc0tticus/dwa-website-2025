import Link from 'next/link';
import Image from 'next/image';
import pic4 from "/public/images/resources/image/pic4.jpg";
import styles from "/src/app/resources/styles/resourcesPage.module.css";

export default function featured_stories_component() {
return (
    <div className={styles.featured_stories}>
        <h2> Featured Stories</h2>
        <h4> Stories of Hope & Resilience</h4>
        <div className={styles.featured_stories_gallery}>
            <div className={styles.card}> 
                <div className={styles.picture_holder}>
                    <Image 
                      src={pic4.jpg} 
                      alt="Dalit welfare beneficiaries"
                    />                     
                </div>   
                <div className={styles.stories}>
                    <p>
                Livelihoods, micro-credit, and economic empowerment for Dalit and rural families.
            </p>                   
                </div>                                                                                      
          </div>
          <div className={styles.card}> 
                <div className={styles.picture_holder}>
                    <Image 
                      src={pic4.jpg} 
                      alt="Dalit welfare beneficiaries"
                    />                   
                </div>   
                <div className={styles.stories}>
                    <p>
                Livelihoods, micro-credit, and economic empowerment for Dalit and rural families.
            </p>                   
                </div>                                                                                      
          </div>
          <div className={styles.card}> 
                <div className={styles.picture_holder}>
                    <Image 
                      src={pic4.jpg} 
                      alt="Dalit welfare beneficiaries"
                    />                
                </div>   
                <div className={styles.stories}>
                    <p>
                Livelihoods, micro-credit, and economic empowerment for Dalit and rural families.
            </p>                   
                </div>                                                                                      
          </div>
        </div>                     
    </div>
);
}



