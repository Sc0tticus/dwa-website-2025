import Image from "next/image"
export default function HeroSection(){
    return(
        <section className="mt-6 w-full h-[600px] relative">
            <Image 
            src='/images/supportpage/hero-img.png'  
            alt="Children from Dalit communities"
            fill
          className="object-cover object-center grayscale"
          priority

           />
        </section>
    )
}