import LargeNavBar from "./NavigationBarLG"
import MediumNavBar from "./NavigationBarMd"
import SmallNavBar from "./NavigationBarSm"
const NavigationBar = () => {
    return (
        <nav>
            <div className="block md:hidden border border-white fixed left-0">
                <SmallNavBar />
            </div>

            <div className="hidden md:block lg:hidden sm:hidden border border-white">
                <MediumNavBar />
            </div>

            <div className=" hidden lg:block border border-white fixed left-0 w-fit">
                <LargeNavBar />
            </div>

        </nav>
    )
}

export default NavigationBar
