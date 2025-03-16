import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../layouts/container";
import {motion} from "motion/react"
import axios from "axios";
import React from "react";


const RightDiv= React.memo(({name,setName,email,setEmail,username,setUserName,password,setPassword,confirmpass,setConfirmpass,error,setError})=>
    {
        return(
            <div className="mx-auto h-[100%] w-[350px] md:max-w-[380px] md:min-w-[350px] md:w-[100%] flex flex-col justify-item-center md:px-[30px]" >
                    <h3 className="text-center text-[30px] mb-[30px]">Sign Up</h3>

                    <form className="flex flex-col" onSubmit={async(e)=>{ e.preventDefault; }}>
                        <GetSigned name={name} setName={setName} email={email} setEmail={setEmail} username={username} setUserName={setUserName} password={password} setPassword={setPassword} confirmpass={confirmpass} setConfirmpass={setConfirmpass} />
                        <div className="font-medium mb-[10px]">
                            <input type="checkbox" required/><span className="px-1">Agree to <Link className="hover:text-blue-500">Terms and Policy</Link></span>
                        </div>
                        <motion.button  whileTap={{scale:0.95}}  className="text-center w-[100p%] my-[10px] font-normal text-white bg-green-800/70 transition-colors duration-200 rounded-[8px] px-[6px] py-[4px] hover:bg-green-800/55 ">
                                Join now
                        </motion.button>
                    </form>

                    {error.length!=0 && <div className="mx-auto font-normal text-black my-[10px] text-[18px]"> {error} </div>}

                    <p className="text-center font-normal">
                        Already a member? <Link className="font-medium text-[18px]" to='/signin'>Log in</Link>
                    </p>    

            </div>
        )
    }
)

function GetSigned({name,setName,email,setEmail,username,setUserName,password,setPassword,confirmpass,setConfirmpass})
    {
        return(
            <div className="flex flex-col justify-items-center ">
                <GetDiv label="Enter Full name" type="text" field = {{val:name,setValue:setName}} placeholder="First Last Name"></GetDiv>
                <GetDiv label="Email" type="email" field = {{val:email,setValue:setEmail}} placeholder="Enter your email adddress"></GetDiv>
                <GetDiv label="Username" type="text" field = {{val:username,setValue:setUserName}} placeholder="Choose username"></GetDiv>
                <GetDiv label="Set your password" type="password" field = {{val:password,setValue:setPassword}} placeholder="Password"></GetDiv>
                <GetDiv label="Confirm password" type="password" field = {{val:confirmpass,setValue:setConfirmpass}} placeholder="Conmfirm your password"></GetDiv>
            </div>
        )
    }

function GetDiv({label,type,field,placeholder})
    {
        const {val,setValue} = field;
        return(
            <div className="flex flex-col mb-[20px]">
                <label className=" mb-[10px] font-semibold">{label}</label>
                <input className="bg-gray-300 focus:outline-gray-300 rounded-[8px] font-normal px-[5px] py-[3px]" type = {type} value={val} onChange={e=>setValue(e.target.value)} placeholder={placeholder}/>
            </div>
        )
    }


    const LeftDiv = React.memo(()=>{
        return(
            <motion.div  className="hidden md:flex flex-col justify-center w-auto h-auto md:min-w-[400px] md:max-w-[450px] ">
                <motion.img whileHover={{scale: 1.1, transition:{duration:.2}}} className="" src="src/images/SignUpPageImage.png" alt="signUpPage" ></motion.img>
            </motion.div>
        )
    })

export default function SignUp()
{
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [username,setUserName]= useState("");
    const [password,setPassword]= useState("");
    const [ confirmpass,setConfirmpass] = useState("")
    const [agree,setAgree] = useState("false");
    const [error,setError] = useState("");
    const nav = useNavigate();

    // function that hits backend after the login button is clicked
    async function onclick() 
    {
        try{
            const result = await axios.post(url,{
                name:name,
                email:email,
                username:username,
                password:password,
                confirmPassword:confirmpass,
            });
    
            if(result.data.success)
            {
                nav('/signin');
            }
            else{
                setError(result.data.message);
            }
        }catch(e)
        {
            const errorMessage = e.response?.data?.message || e.message || "An unexpected error occurred.";
            setError(errorMessage); 
        }
    }

    return(
        <section className="font-bold w-[100%] b-[100%] py-auto">
            <Container>
                <div className="md:flex flex-row justify-between">
                <LeftDiv/>
                <RightDiv name={name} setName={setName} email={email} setEmail={setEmail} username={username} setUserName={setUserName} password={password} setPassword={setPassword} confirmpass={confirmpass} setConfirmpass={setConfirmpass} error={error} setError={setError}/>
                </div>
            </Container>
        </section>
    )
}