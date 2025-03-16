import React from "react"
import { useState, memo } from "react"
import HeroSection from "../layouts/heroSection"
import SlideBar from "../components/slideBar"
import alertss from "../stores/alerts.json"


export default function Home()
{
    const[alerts,setAlert] = useState(alertss);
    
    return( 
    <HeroSection>
        <div className="w-[100%]">
            <Heder/>
            <SlideBar/>
            <BottomDiv alerts={alerts} setAlert={setAlert} />

        </div>

    </HeroSection>)
}


const Heder = memo(()=>
    {
        return(
            <div className="w-[100%] flex flex-row justify-start mb-[20px] lg:hidden ">
                <img className="mx-[20px]" src="src/images/NavBarIcons/AnalyticsIcon.png"></img>
                <h1 className="text-[32px] font-bold  " >HOME</h1>

            </div>
        )

    });

function BottomDiv({alerts ,setAlert})
{
    function deleteEntry(alertNo)
    {
        const newAlerts = alerts.filter((alert)=>{
            return alert.alertNo!==alertNo
        })
        console.log(newAlerts)
        setAlert(newAlerts);

    }

    return(
        <div className="w-[100%] mt-[80px]">
                <table className="w-[100%]  text-center bg-gray-300 rounded-[8px] mb-[30px]">
                    <thead className="">
                        <tr>
                            <th className="border-x border-l-white rounded-[8px] border-gray-600 py-[8px]">Alert No </th>
                            <th className="border-x border-gray-600 py-[8px]">Device Name</th>
                            <th className="border-x border-gray-600 py-[8px]">Device Tag</th>
                            <th className="border-x border-gray-600 py-[8px]">Contact information</th>
                            <th className="border-x  border-l-white border-gray-600 py-[8px]">Status</th>
                            <th className="border-x  border-r-white border-gray-600 py-[8px]">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {alerts.map((alert,index)=>{
                            return(
                                <tr className="transition-colors duration-200 hover:bg-white/70">
                                    <td className="border-gray-600  border-l-white py-[4px] border" >{alert.alertNo}</td>
                                    <td className="border-gray-600 py-[4px] border" >{alert.deviceName}</td>
                                    <td className="border-gray-600 py-[4px] border" >{alert.deviceTag}</td>
                                    <td className="border-gray-600 py-[4px] border" >NIL</td>
                                    <td className="border-gray-600 py-[4px] border" >{(alert.status)? "Active":"Deactivated"}</td>
                                    <td className="border-gray-600  border-r-white py-[4px] border" ><button className="bg-red-950/70 text-white rounded-[4px] font-normal px-[5px] py-[3px] hover:bg-red-950/60" onClick={()=>{deleteEntry(alert.alertNo)}} >Delete</button></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
    )
}



