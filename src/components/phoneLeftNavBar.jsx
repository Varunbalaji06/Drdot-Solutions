import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function PhoneLeftNavBar()
{
  const nav = useNavigate();
  const location = useLocation();
  if(location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/changePassword')
    return null
  else if(location.pathname==='/analytics' || location.pathname==='/dashboard' || location.pathname==='/reports' ||location.pathname==='/alerts' ||location.pathname==='/home' ||location.pathname==='/users')
    return(
      <div className='max-w-[100px] min-w-[65px]  min-h-[100vh]  lg:hidden'>
        <div className='h-[100%] w-[100%] flex flex-col justify-center'>
  
          
  
          <div className='py-[20px] bg-gray-300 w-[100%] h-[100%] rounded-r-[6px] '>
            <NavDiv tonav='/users' source='src/images/NavBarIcons/usersIcon.png' />
            <NavDiv tonav='/dashboard' source='src/images/NavBarIcons/DashboardIcon.png' />
            <NavDiv tonav='/analytics' source='src/images/NavBarIcons/AnalyticsIcon.png' />
            <NavDiv tonav='/reports' source='src/images/NavBarIcons/ReportsIcon.png' />
            <NavDiv tonav='/alerts' source='src/images/NavBarIcons/AlertsIcon.png' />
            <NavDiv tonav='/home' source='src/images/NavBarIcons/HomeIcon.png' />
          </div>
  
        </div>
  
      </div>
    )
  else
  return null;


  function NavDiv({tonav,source})
  {
    return(
      <motion.button whileTap={{scale:.95}} className={`  flex flex-row w-[100%] justify-start px-[15px] mx-[2px] font-semibold py-[10px]  rounded-[6px] mr-[10px] transition-colors duration-200  hover:bg-white/40 ${location.pathname === tonav ? "bg-white/70" : "bg-white/0"}`}  onClick={()=>{nav(tonav)}}>
              <img className='w-[30px] py-[8px] h-auto' src = {source}></img>
    </motion.button>
    )
    

  }

  
}
