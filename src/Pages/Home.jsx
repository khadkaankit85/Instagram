import LargeUncollapsedNavigationBar from "../Components/NavigationBarLG"
import MediumUncollapsedNavigationBar from "../Components/NavigationBarMd"
import ThemeToggle from "../Components/ThemeToggle"
const Home = () => {
    return (
        <div>
            <ThemeToggle />
            {/* <LargeUncollapsedNavigationBar /> */}
            <MediumUncollapsedNavigationBar />

        </div>
    )
}

export default Home
