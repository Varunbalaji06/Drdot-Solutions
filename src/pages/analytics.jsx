
import HeroSection from "../layouts/heroSection"
import { memo } from "react"
import React from "react"
import {motion} from "motion/react"

export default function Analytics()
{
    return(
        <HeroSection>
            <div className="w-[100%] flex flex-col justify-start pt-[30px]">
                <Heder/>
                <TopDiv/>
                <BottomDiv/>
            </div>
        </HeroSection>
    )

    
}


const Heder = memo(()=>
    {
        return(
            <div className="w-[100%] flex flex-row justify-start mb-[20px] lg:hidden ">
                <img className="mx-[20px]" src="src/images/NavBarIcons/AnalyticsIcon.png"></img>
                <h1 className="text-[32px] font-bold  " >ANALYTICS</h1>

            </div>
        )

    });

const TopDiv = React.memo(()=>{
    return(
        <div className="w-[100%] max-w-[100%] mb-[100px] text-center flex  flex-col md:flex-row md:justify-between md:text-left lg:min-w-[1100px]">
            <div className="flex flex-col  md:flex-row">
                <motion.div whileHover={{scale:1.1, transition:{duration:0.15}}} className="mb-[15px] mx-auto  text-center w-[200px] text-[15px] px-[6px] md:max-w-[165px] md:max-h-[70px] font-semibold md:text-left md:text-[16px] bg-gray-300 rounded-[6px] md:px-[8px] md:py-[4px] md:mx-[15px]">
                    <p>Active devices</p>
                    <p>5</p>
                </motion.div>
                <motion.div whileHover={{scale:1.1, transition:{duration:0.15}}} className="mb-[15px] mx-auto text-center w-[200px] text-[15px] px-[6px] md:max-w-[165px] md:max-h-[70px] font-semibold md:text-left md:text-[16px] bg-gray-300 rounded-[6px] md:px-[8px] md:py-[4px] md:mx-[15px]">
                    <p>Deactivated devices</p>
                    <p>5</p>
                </motion.div>
                <motion.div whileHover={{scale:1.1, transition:{duration:0.15}}} className="mb-[15px] mx-auto text-center w-[200px] text-[15px] px-[6px] md:max-w-[165px] md:max-h-[70px] font-semibold md:text-left md:text-[16px] bg-gray-300 rounded-[6px] md:px-[8px] md:py-[4px] md:mx-[15px]">
                    <p>Some devices</p>
                    <p>5</p>
                </motion.div> 
            </div>

            <motion.div  className="min-w-[200px] flex justify-evenly md:block">
                <motion.button whileTap={{scale:0.95}} className="text-white bg-green-800/70 rounded-[6px] px-[10px] py-[4px] transition-all duration-200 hover:bg-green-800/65">Add Widget</motion.button>
            </motion.div>
            

        </div>
    )

})

const BottomDiv = React.memo(()=>{
    return(
        <div className="w-[100%] flex flex-row  lg:max-w-[910px]">
                <img className="max-w-[50%] lg:max-h-[300px] w-auto" src="src/images/DashboardImage2.png"></img>
                <img className="max-w-[50%] lg:max-h-[300px] w-auto" src="src/images/DashboardImage1.png"></img>
        </div>
    )

})



