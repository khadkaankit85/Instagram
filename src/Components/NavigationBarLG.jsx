import darkInsta from "../Assets/Images/instagram-image-black.svg"
import { Link } from "react-router-dom"
import Home from "../Pages/Home"
const LargeUncollapsedNavigationBar = () => {
    return (
        <nav className=" border-solid border-white border-2 fixed left-0 w-[270px] md:w-[300px] h-[100vh]">
            <div>
                <img src={darkInsta} alt="instagram logo" width={"60%"} height={"40px"} className="m-1 mx-0" />
            </div>
            <section className="w-full h-[40vh] mt-1  border-solid border-white border-2 ">
                <div>
                    <Link to={"/home"}>
                        {/* <img src={} alt="" /> */}
                    </Link>
                </div>

            </section>


        </nav>
    )
}

export default LargeUncollapsedNavigationBar
