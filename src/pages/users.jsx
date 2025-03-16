import HeroSection from "../layouts/heroSection";

export default function Users()
{
    return(
        <HeroSection>
            <div>
                <Heder/>
                
            </div>
        </HeroSection>
    )
}

function Heder()
{
    return(
        <div className="w-[100%] flex flex-row justify-start mt-[40px] mb-[20px] px-[25px] md:hidden ">
            <img className="mr-[20px]" src="src/images/NavBarIcons/UsersIcon.png"></img>
            <h1 className="text-[32px] font-bold " >USERS</h1>

        </div>
    )
}