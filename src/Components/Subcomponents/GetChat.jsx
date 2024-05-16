import { Link } from "react-router-dom"
import TextMessageReceived from "./TextMessage"
import TextMessageSent from "./TextMessageSent"
const GetChat = () => {
    return (
        <div className="flex flex-col border border-red-600 p-3 h-[calc(100vh-130px)] w-full ">
            <div className=" w-full">
                <Link to={"/home/profile"} className="flex justify-between flex-row ">
                    <div className="rounded-[50%] m-1 w-[%] object-fcover lg:w-[10%] md:w-[100%] flex justify-center">
                        <img src="https://scontent-ord5-2.cdninstagram.com/v/t51.2885-19/427577770_351316991145367_2922071059885625484_n.jpg?stp=dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=tmmdi3ITjnUQ7kNvgG_vq1S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-ord5-2.cdninstagram.com&oh=00_AYBEJZcHPqBmANT0F06BGsig82gc6RZ7cmFupmZEnh5xsg&oe=664AEF84" width={"60px"} height={"60px"} className="rounded-[50%]" alt="" />
                    </div>
                    <div className="w-[100%] p-5  ">
                        <h1 className="text-white">Ankit Khadka</h1>
                    </div>

                </Link>

            </div>
            <div className="h-[calc(100%-125px)] border p-2 border-blue-800 text-white overflow-auto">
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />
                <TextMessageSent />


            </div>
            <div className="flex space-x-5 justify-center">
                <input className="bg-white w-[90%] rounded-full h-[35px] p-3   placeholder:text-black" type="text" placeholder="Enter your message here....." />
                <h1 className="text-white">Send</h1>
            </div>
        </div>
    )
}

export default GetChat
