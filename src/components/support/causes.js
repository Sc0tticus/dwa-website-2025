import Image from "next/image"
export default function Causes(){
    const causesDetails =[
        {id:1, title:"1. Corporate Foundations", details:"Partner with us through CSR initiatives to create sustainable impact in rural Dalit communities. Your support can empower women entrepreneurs, digital education, and healthcare projects, aligning with SDGs and long-term social change."},
        {id:2, title:"2. Philanthropies", details:"Your investment fuels transformative programs tackling poverty, caste discrimination, and gender inequality. By backing our initiatives, you help scale solutions that create dignity, opportunity, and resilience in marginalized communities." },
        {id:3, title:"3. Generous Donors", details:"Every contribution, big or small, creates ripples of change. Your donation supports education, healthcare, and livelihoods for Dalit families, ensuring a brighter, more equal future for generations to come."},
        {id:4, title:"4. Volunteers", details:"Share your skills, time, and passion to uplift communities. From digital support to field activities, volunteers are the heart of our mission, bringing energy and expertise where it matters most."},
        {id:5, title:"5. Fundraisers", details:"Champion our cause by mobilizing networks and resources. As a fundraiser, you amplify our reach and ensure more people can join hands in building inclusive, thriving rural communities." },
        {id:6, title:"6. Field Visit Teams", details:"Experience the impact firsthand by visiting our projects in Nandyal and Kurnool. Field visits build deeper understanding, accountability, and connection between supporters and the communities they help transform."},
        
    ]

    return(
        <section>
            {causesDetails.map((cause)=>(
                <div key={cause.id} className={`flex ${cause.id % 2 ===1? "flex-row":"flex-row-reverse" } ${cause.id===1? "bg-[#004265]":cause.id===2?"bg-[#3EBFF980]":cause.id===3? "bg-[#622676]":cause.id===4? "bg-[#FF9DF080]": cause.id===5? "bg-[#FCCE37]": cause.id===6?"bg-[#FFD44699]":""} max-md:flex-col`}  >
                   <div className="p-18  max-lg:p-8 max-sm:p-3 ">
                        <h1 className={`font-[700]  text-[50px] max-lg:text-[40px] max-sm:text-2xl mb-4 ${cause.id===1 || cause.id===3? 'text-white':cause.id===2 || cause.id===5?'text-[#004265]': cause.id===4? 'text-[#622676D1]':'text-black' } `}>{cause.title}</h1>
                        <p className={`font-[500] text-[30px] max-lg:text-[20px] max-sm:text-[16px]  pl-15 max-lg:pl-8 max-sm:pl-4 ${cause.id===1 || cause.id===3? "text-white" : "text-black"} `}>{cause.details}</p>
                   </div>

                   
                      <Image className="max-md:w-full"src="/images/supportpage/children-img.png" alt="children from Dalit communities"  width={500} height={497} />
                  
                    </div> 
           
                ))}

        </section>
    )
}