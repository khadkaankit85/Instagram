// import LargeUncollapsedNavigationBar from "../Components/NavigationBarLG"
// import MediumUncollapsedNavigationBar from "../Components/NavigationBarMd"
import SmallUncollapsedNavigationBar from "../Components/NavigationBarSm"
import ThemeToggle from "../Components/ThemeToggle"
const Home = () => {
    return (
        <div>
            <ThemeToggle />
            {/* <LargeUncollapsedNavigationBar /> */}
            {/* <MediumUncollapsedNavigationBar /> */}
            <SmallUncollapsedNavigationBar />

        </div>
    )
}

export default Home
