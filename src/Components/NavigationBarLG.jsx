import darkInsta from "../Assets/Images/instagram-image-black.svg"
import lightInsta from "../Assets/Images/instagram-image-white.svg"
import homeIconDark from "../Assets/Images/ForApp/home_button.svg"
import homeIconLight from "../Assets/Images/ForApp/LightStore/home_light.svg"
import messengerIconDark from "../Assets/Images/ForApp/home_button.svg"
import messengerIconLight from "../Assets/Images/ForApp/LightStore/messenger_icon_light.svg"
import searchIconDark from "../Assets/Images/ForApp/Search_button.svg"
import searchIconLight from "../Assets/Images/ForApp/LightStore/search_icon_light.svg"
import userIconDark from "../Assets/Images/ForApp/User_icon.png"
import userIconLight from "../Assets/Images/ForApp/LightStore/user_icon_light.png"
import { Link } from "react-router-dom"

//to change according to theme
import { useSelector } from 'react-redux'


const LargeUncollapsedNavigationBar = () => {
    //getting the theme from store:
    const theme = useSelector((state) => state.theme.value)

    return (
        <nav className=" border-white fixed left-0 w-[270px] md:w-[300px] h-[100vh]">
            <div>
                <img src={theme === "darkTheme" ? darkInsta : lightInsta} alt="instagram logo" width={"60%"} height={"40px"} className="m-1 mx-0" />
            </div>

            <section className="w-full h-[50vh] mt-1 flex flex-col items-center border-solid ">
                <Link to={"/home"} className="flex w-full p-6 gap-9 h-fit mb-4 rounded-xl items-center hover:bg-[#a3a1a1] hover:text-black" >
                    <img src={theme == "lightTheme" ? homeIconDark : homeIconLight} alt="home icon" width={"40px"} height={"40px"} className="  " />
                    <h1 className={theme == "darkTheme" ? "text-white" : "text-black"}>Home</h1>
                </Link>

                <Link to={"/home/search"} className="flex w-full p-6 gap-9 mb-4 rounded-xl items-center hover:bg-[#a3a1a1]"     >
                    <img src={theme == "lightTheme" ? searchIconDark : searchIconLight} alt="home icon" width={"40px"} height={"40px"} className="  " />
                    <h1 className={theme == "darkTheme" ? "text-white" : "text-black"}>Search</h1>
                </Link>

                <Link to={"/home/messages"} className="flex w-full  p-6 gap-9 mb-4 rounded-xl items-center hover:bg-[#a3a1a1]" >
                    <img src={theme == "lightTheme" ? messengerIconDark : messengerIconLight} alt="home icon" width={"40px"} height={"40px"} className="  " />
                    <h1 className={theme == "darkTheme" ? "text-white" : "text-black"}>Messages</h1>
                </Link>

            </section>

            <section className="mt-[120px]">
                <Link to={"/home/profile"} preventScrollReset={true} className="flex w-full  p-6 gap-9 rounded-xl  mb-4 items-center hover:bg-[#a3a1a1]" >
                    <img src={theme == "lightTheme" ? userIconDark : userIconLight} alt="home icon" width={"40px"} height={"40px"} className="  " />
                    <h1 className={theme == "darkTheme" ? "text-white" : "text-black"}>Profile</h1>
                </Link >
            </section>

        </nav>
    )
}

export default LargeUncollapsedNavigationBar
