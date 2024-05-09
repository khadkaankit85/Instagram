import darkInsta from "../Assets/Images/instagram-image-black.svg"
import homeIconDark from "../Assets/Images/ForApp/home_button.svg"
import homeIconLight from "../Assets/Images/ForApp/LightStore/home_light.svg"
import messengerIconDark from "../Assets/Images/ForApp/home_button.svg"
import messengerIconLight from "../Assets/Images/ForApp/LightStore/messenger_icon_light.svg"
import searchIconDark from "../Assets/Images/ForApp/Search_button.svg"
import searchIconLight from "../Assets/Images/ForApp/LightStore/search_icon_light.svg"
import userIconDark from "../Assets/Images/ForApp/User_icon.png"
import userIconLight from "../Assets/Images/ForApp/LightStore/user_icon_light.png"
import { Link } from "react-router-dom"
const LargeUncollapsedNavigationBar = () => {
    return (
        <nav className=" border-solid border-white border-2 fixed left-0 w-[270px] md:w-[300px] h-[100vh]">
            <div>
                <img src={darkInsta} alt="instagram logo" width={"60%"} height={"40px"} className="m-1 mx-0" />
            </div>
            <section className="w-full h-[40vh] mt-1  border-solid border-white border-2 ">
                <div className="flex w-[90%] border p-6 gap-9">
                    <img src={homeIconLight} alt="home icon" width={"40px"} height={"40px"} className=" border " />
                    <h1 className="text-white">Home</h1>
                </div>

            </section>


        </nav>
    )
}

export default LargeUncollapsedNavigationBar
