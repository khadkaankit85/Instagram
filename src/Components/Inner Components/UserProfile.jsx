import { Link } from "react-router-dom"
import NoPhotos from "../Subcomponents/NoPhotos"
const UserProfile = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-between  ">
                <div className="flex justify-center  border-b border-b-white space-x-20 lg:space-x-40 w-[100%] h-[43vh] p-5">
                    <div className="  object-contain" >
                        <input type="file" className="translate-y-0 rounded-full w-[110px] h-[110px] bg-red-300 cursor-pointer absolute opacity-0" />
                        <img src="https://avatars.githubusercontent.com/u/145488454?v=4" width={"110px"} className="rounded-[50%] w-[110px] " alt="pfp" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <span className="text-white md:text-xl my-1 text-base block md:inline">
                                theankitkhadka
                            </span>
                            <Link to={"/home/profile/editProfile"} className="bg-[#505050] md:text-xl text-base text-white mx-2 py-1 rounded-md px-3">Edit Profile</Link>
                        </div>

                        <div className="flex space-x-5">
                            <span className="text-white ">0 Posts </span>
                            <span className="text-white">1M followers</span>
                            <span className="text-white">0 following</span>
                        </div>
                        <h1 className="text-white">Ankit Khadka</h1>


                    </div>

                </div>
                <div className="">
                    <div className="w-[100%] h-[45vh] p-3">
                        {/* <h1 className="font-bold text-white translate-y-[-30px]">Posts</h1> */}
                        <NoPhotos />
                    </div>

                </div>
            </div>

        </>

    )
}

export default UserProfile
