import HeroSection from "../layouts/heroSection";
import {memo} from "react"

export default function Reports()
{
    return(
        <HeroSection>
            <div >
                <Heder/>
                
            </div>
        </HeroSection>
    )
}

const Heder = memo(()=>
    {
        return(
            <div className="w-[100%] flex flex-row justify-start mb-[20px] lg:hidden ">
                <img className="mx-[20px]" src="src/images/NavBarIcons/ReportsIcon.png"></img>
                <h1 className="text-[32px] font-bold  " >REPORTS</h1>

            </div>
        )

    });