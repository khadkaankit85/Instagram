import LargeNavBar from "./NavigationBarLG"
import MediumNavBar from "./NavigationBarMd"
import SmallNavBar from "./NavigationBarSm"
const NavigationBar = () => {
    return (
        <nav>
            <div className="block md:hidden">
                <SmallNavBar />
            </div>

            <div className="hidden md:block lg:hidden sm:hidden">
                <MediumNavBar />
            </div>

            <div className=" hidden lg:block ">
                <LargeNavBar />
                <p>hello</p>
            </div>

        </nav>
    )
}

export default NavigationBar
