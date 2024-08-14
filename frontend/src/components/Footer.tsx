import { Facebook, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    // Will have 2 footers for the different screen sizes

    <>
    {/* 1. Mobile Footer
    <div className="flex lg:hidden bg-blue-gray justify-center items-center gap-10 text-white font-museo-moderno absolute bottom-0 w-full h-[81px]">
        <div className="text-[17px]"> ThomasHaene.com</div>

        <div className="flex gap-6"> 
            <Github />
            <Linkedin />
        </div>
    </div> */}

    <div className="hidden lg:flex flex-col bg-blue-gray justify-center items-center gap-10 pb-6 text-white font-museo-moderno w-full h-[300px] bg-factory-blue">
            <div className="flex gap-32 items-center">
                <img src="/mcgill-logo.png" alt="" className="w-48 h-max"/>
                <img src="/Ecsess-Logo.png" alt="" className="w-48 h-max"  />
            </div>

            <div className="flex gap-72 items-end mt-3">
                <img src="/logo/factory_logo_inline_white.png" alt="" className="w-48"/>

                <p className="font-medium">Copyright © ECSESS Factory 2024</p>

                <div className="flex gap-8">
                <Facebook strokeWidth={1.5} size={28} className="cursor-pointer"/>
                <Linkedin strokeWidth={1.5} size={28} className="cursor-pointer"/>
                <Mail strokeWidth={1.5} size={28} className="cursor-pointer"/>
                
                </div>
            </div>
    </div>



    </>

    
  )
}