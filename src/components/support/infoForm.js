import { Button } from "../ui/button";
export default function InfoForm(){
    return(
        <section className="px-12 py-10 " >
            <div className="flex justify-center items-center gap-7 max-md:flex-col ">
                <div className="w-[50%] max-md:w-full max-md:text-center ">
                    <h1 className="font-[700] text-[60px] max-lg:text-3xl mb-3 "> Get More Info </h1>
                    <p  className="font-[500] text-[30px] max-lg:text-lg w-[70%] max-md:w-full ">Let’s get acquainted! Tell us a little bit about yourself and we’ll send you information on how to get involved.</p>
                </div>

                <form className="w-[100%] box-border mt-30 max-md:mt-10 ">
                   <div className="flex gap-18 items-center max-md:flex-col max-md:gap-4  max-sm:gap-8">
                   <div className="flex flex-col w-full gap-4 max-sm:gap-8">
                        <input className="w-full outline-0 h-[59px] border-black border-b-2 placeholder:text-[30px] max-lg:placeholder:text-lg font-[500] text-black placeholder:text-black "    type="text" placeholder="First Name" />
                        <input className="w-full outline-0 h-[59px] border-black border-b-2 placeholder:text-[30px] max-lg:placeholder:text-lg font-[500] text-black  placeholder:text-black"  type="text" placeholder="Last Name" />
                        <input className="w-full outline-0 h-[59px] border-black border-b-2 placeholder:text-[30px] max-lg:placeholder:text-lg font-[500] text-black  placeholder:text-black"  type="text" placeholder="Email" />
                    </div>

                    <div className="flex flex-col gap-4 w-full max-sm:gap-8 ">
                        <input className="w-full outline-0 h-[59px] border-black border-b-2 placeholder:text-[30px] max-lg:placeholder:text-lg font-[500] text-black "  type="text" placeholder="Phone" />
                        <input className="w-full outline-0 h-[59px] border-black border-b-2 placeholder:text-[30px] max-lg:placeholder:text-lg font-[500] text-black " type="text" placeholder="Address" />
                        <input className="w-full outline-0 h-[59px] border-black border-b-2 placeholder:text-[30px] max-lg:placeholder:text-lg font-[500] text-black " type="text" placeholder="Get Involved →" />
                    </div>
                   </div>

                  <div className="mt-10 flex justify-end  pb-10 ">
                     <button type="submit" 
                     className="w-[45%] max-md:w-full cursor-pointer font-[700]l text-[30px]  max-md:text-2xl py-[10px] px-[8px] max-md:py-[8px] text-white bg-[#004265] hover:bg-[#004290] disabled:opacity-50 "> 
                     Submit
                     </button> 
                  </div>

                </form>
            </div>
        </section>
    )
}