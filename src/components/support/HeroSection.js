import Image from "next/image"
export default function HeroSection(){
    return(
        <section className="mt-6">
            <Image 
            src='/images/supportpage/hero-img.png'  
            alt="Children from Dalit communities"
            width={1440}
            height={600}
           />
        </section>
    )
}