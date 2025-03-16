import React from "react"

export default function HeroSection({children})
{
    return(
        <div className=" w-[100%] px-[20px] flex justify-center lg:justify-items-start lg:px-[30px]">
        {children}
        </div>
    )
}