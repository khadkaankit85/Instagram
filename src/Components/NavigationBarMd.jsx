// import darkInstaIcon from "../Assets/Images/Instagram-logo.svg"
import darkInstaIcon2 from "../Assets/Images/ForApp/LightStore/instagram_colored_icon.svg"
import lightInstaIcon from "../Assets/Images/ForApp/LightStore/instagram_light_logo.svg"
import homeIconDark from "../Assets/Images/ForApp/home_button.svg"
import homeIconLight from "../Assets/Images/ForApp/LightStore/home_light.svg"
import messengerIconDark from "../Assets/Images/ForApp/Messenger_icon.svg"
import messengerIconLight from "../Assets/Images/ForApp/LightStore/messenger_icon_light.svg"
import searchIconDark from "../Assets/Images/ForApp/Search_button.svg"
import searchIconLight from "../Assets/Images/ForApp/LightStore/search_icon_light.svg"
import userIconDark from "../Assets/Images/ForApp/User_icon.png"
import userIconLight from "../Assets/Images/ForApp/LightStore/user_icon_light.png"
import { Link } from "react-router-dom"

//to change according to theme
import { useSelector } from 'react-redux'


const MediumUncollapsedNavigationBar = () => {
    //getting the theme from store:
    const theme = useSelector((state) => state.theme.value)

    return (
        <nav className="  w-[100px] h-[100vh]">
            <div className="justify-center flex w-full">
                <img src={theme === "darkTheme" ? lightInstaIcon : darkInstaIcon2} alt="instagram logo" width={"48px"} className=" mx-4 mb-6" />
            </div>

            <section className="w-full h-[50vh] mt-1 flex  flex-col items-center border-solid ">

                <Link to={"/home"} className="flex justify-center w-full p-4 gap-9 h-fit mb-4 rounded-xl items-center hover:bg-[#a3a1a1] hover:text-black" >
                    <img src={theme == "lightTheme" ? homeIconDark : homeIconLight} alt="home icon" width={"40px"} height={"40px"} className="  " />
                </Link>

                <Link to={"/home/search"} className="flex justify-center w-full p-4 gap-9 mb-4 rounded-xl items-center hover:bg-[#a3a1a1]" >
                    <img src={theme == "lightTheme" ? searchIconDark : searchIconLight} alt="home icon" width={"40px"} height={"40px"} className="  " />
                </Link>

                <Link to={"/home/messages"} className="flex justify-center w-full  p-4 gap-9 mb-4 rounded-xl items-center hover:bg-[#a3a1a1]" >
                    <img src={theme == "lightTheme" ? messengerIconDark : messengerIconLight} alt="home icon" width={"40px"} height={"40px"} className="  " />
                </Link>

            </section>

            <section className="mt-[120px]">
                <Link to={"/home/profile"} className="flex w-full justify-center p-4 gap-9 rounded-xl  mb-4 items-center hover:bg-[#a3a1a1]" >
                    <img src={theme == "lightTheme" ? userIconDark : userIconLight} alt="home icon" width={"40px"} height={"40px"} className="  " />
                </Link>
            </section>

        </nav>
    )
}

export default MediumUncollapsedNavigationBar
