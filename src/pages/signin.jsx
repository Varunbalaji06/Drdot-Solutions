import React, { useState } from "react"
import Container from "../layouts/container"
import { Link, useNavigate } from "react-router-dom";


export default function signin()
{
    const [username,setusername] = useState("");
    const [password,setPassword] = useState("");
    

    async function onclick() 
    {
        try{
            const result = await axios.post(url,{
                username:username,
                password:password,
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
        <section>

            <Container>
                <div className="md:flex flex-row justify-between">
                    <LeftDiv/>
                    <RightDiv username={username} setusername={setusername} password={password} setPassword={setPassword} />
                </div>
            </Container>

        </section>
    )
}


const RightDiv = React.memo(({username,setusername,password,setPassword})=>{
        const nav = useNavigate();
        return(
            <div className="mx-auto my-auto h-[100%] w-[350px] min-w-[350px] md:max-w-[415px] md:min-w-[350px] flex flex-col justify-item-center md:px-[30px]" >

                <h3 className="text-center text-[30px] mb-[30px] font-semibold">Sign In</h3>

                <form className="flex flex-col" onSubmit={(e)=>{ e.preventDefault}}>

                        <div className="flex flex-col justify-items-center ">
                            <div className="flex flex-col mb-[10px]">
                                <label className=" mb-[5px] font-semibold">Username</label>
                                <input className="bg-gray-300 focus:outline-gray-300  rounded-[8px] font-normal px-[5px] py-[3px]" type = "text" value={username} onChange={e=>setusername(e.target.value)} placeholder="Enter username"/>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                <label className=" mb-[5px] font-semibold">Password</label>
                                <input className="bg-gray-300 focus:outline-gray-300 rounded-[8px] font-normal px-[5px] py-[3px]" type = "password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password"/>
                            </div>
                        </div>
                    <p className="text-start text-blue-900 font-normal">
                         <Link className="font-medium" to='/changePassword'>Forgot password</Link>
                    </p>    
                        <button onClick={()=>{nav('/home')}}  className="text-center w-[100p%] my-[10px] font-normal bg-green-800/70 text-white rounded-[8px] px-[6px] py-[4px] ">
                                Submit
                        </button>
                </form>
                <p className="text-center font-normal">
                        New User? <Link className="font-medium" to='/'>Sign-up</Link>
                </p>

                    

            </div>
        )

    });

const LeftDiv= React.memo(()=>{
                                return(
                                    <div className="hidden md:flex flex-col justify-center w-auto h-auto md:max-w-[520px] ">
                                        <img className="w-[100%] h-auto" src="src/images/SignInPageImage.png" alt="signUpPage" ></img>
                                    </div>
                                )

                            });



 