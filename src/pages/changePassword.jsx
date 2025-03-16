import React, { useState } from "react"
import { motion } from "motion/react";

import { Link } from "react-router-dom";

const RightDiv = React.memo(({email,setEmail,otp,setOtp,password,setPassword,confirmpass,setConfirmpass})=>{
    return(
        <div className="mx-auto h-[100%] w-[350px] md:max-w-[400px] md:min-w-[400px] md:w-[100%] flex flex-col justify-item-center md:px-[30px]" >
                <h3 className="text-center  text-[35px] mb-[50px]">Reset Password</h3>

                <form className="flex flex-col" onSubmit={(e)=>{ e.preventDefault}}>
                    <div className="flex flex-row flex-wrap mb-[28px]">
                        <label className="w-[100%] mb-[20px] font-semibold">Email</label>
                        <input className="inline-flex w-[55%] focus:outline-gray-300  font-normal mr-[10px] rounded-[6px] px-[10px] bg-gray-300" type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email"></input>
                        <motion.button whileTap={{scale:.95}} className="inline-flex w-[30%] rounded-[6px] bg-purple-900 text-white px-[15px] py-[8px] ml-[8px]">Send OTP</motion.button>
                    </div>

                    <div className="flex flex-row flex-wrap mb-[28px]">
                        <input className="inline-flex w-[55%] focus:outline-gray-300  font-normal mr-[10px] rounded-[6px] px-[10px] bg-gray-300" type="text" value={otp} onChange={e=>setOtp(e.target.value)} placeholder="Enter OTP"></input>
                        <motion.button whileTap={{scale:.95}} className="inline-flex w-[30%] rounded-[6px] bg-purple-900 text-white px-[30px] py-[8px] ml-[8px]">Verify</motion.button>
                    </div>

                    <div className="flex flex-col mb-[28px]">
                        <label className="w-[100%]  font-semibold mb-[20px]">Password</label>
                        <input className=" w-[100%] font-normal mr-[10px] rounded-[6px] focus:outline-gray-300  px-[10px] py-[8px] bg-gray-300" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your new password"></input>
                    </div>

                    <div className="flex flex-col mb-[28px]">
                        <label className="w-[100%]  font-semibold mb-[20px]">Confirm password</label>
                        <input className=" w-[100%] font-normal mr-[10px] rounded-[6px] focus:outline-gray-300  px-[10px] py-[8px] bg-gray-300" type="password" value={confirmpass} onChange={e=>setConfirmpass(e.target.value)} placeholder="Enter your new password"></input>
                    </div>


                    <div> 

                    </div>
                    <motion.button whileTap={{scale:.95}} className="text-center w-[100p%] my-[10px] font-normal text-white bg-green-800/78 rounded-[8px] px-[6px] py-[8px] transition-all duration-200 hover:bg-green-800/68 ">
                            Reset password
                    </motion.button>
                </form>

                    

        </div>);

})

const LeftDiv = React.memo(()=>{
    return(
        <div className="hidden md:flex flex-col justify-center w-auto h-auto md:min-w-[400px] md:max-w-[450px] ">
            <img className="" src="src/images/changePasswordPageImage.png" alt="signUpPage" ></img>
        </div>
    )
})

export default function ChangePassword()
{
    const[email,setEmail] = useState("");
    const [otp,setOtp] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpass,setConfirmpass] = useState("");


    return( 
    <section>
        <div className="flex flex-row justify-between mt-[36px]">
            <LeftDiv/>
            <RightDiv email={email} setEmail={setEmail} opt={otp} setOtp={setOtp} password={password} setPassword={setPassword} confirmpass={confirmpass} setConfirmpass={setConfirmpass}  />
        </div>

    </section>)
}