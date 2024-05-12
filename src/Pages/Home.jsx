import ThemeToggle from "../Components/ThemeToggle"
import SmallNavBar from "../Components/NavigationBarSm"
import MediumNavBar from "../Components/NavigationBarMd"
import LargeNavBar from "../Components/NavigationBarLG"
import { Route, Routes } from "react-router-dom"

const Home = () => {
    return (
        <div className="">

            <ThemeToggle />
            <main className={``}>

                <div className=" hidden lg:block border border-white fixed left-0 w-[300px] h-[100vh] ">
                    <LargeNavBar />
                </div>

                <div className="hidden fixed left-0 md:block lg:hidden sm:hidden border w-[200px] p-3 h-[100vh] border-red-600">
                    <MediumNavBar />
                </div>

                <div className="block md:hidden border border-white fixed bottom-0">
                    <SmallNavBar />
                </div>



                {/* Everything will be in this section:) */}
                <section className=" 


                 sm:w-full h-[min(85vh,calc(100vh-100px))] p-6  overflow-y-scroll

                md:block md:absolute md:right-0 md:p-5 md:w-[calc(100%-200px)] md:h-[max(100vh,100%)]

                lg:block border border-white lg:absolute lg:top-[48px] lg:right-0 lg:w-[calc(100%-295px)] lg:h-[calc(100vh-50px)] lg:mx-auto lg:p-8

                ">

                    <div>

                        <Routes>
                            <Route path="/" element={<>
                                <h1 className="text-white">You are in / route</h1></>} />
                            <Route path="/home/search" element={<>
                                <h1 className="text-white">You are in search route</h1></>} />

                            <Route path="/messages" element={
                                <>
                                    <h1 className="text-white">this is inbox</h1></>
                            }
                            />
                            <Route path="/profile" element={
                                <><h1 className="text-white">
                                    this is supposed be profile</h1></>
                            } />

                            <Route path="/search" element={<>
                                <h1 className="text-white"> This is supposed to be search page</h1></>} />
                            <Route path="*" element={<>
                                <h1 className="text-white"> This is supposed to be Not found page</h1></>} />

                        </Routes>
                    </div>

                </section>
            </main>

        </div>
    )
}

export default Home
