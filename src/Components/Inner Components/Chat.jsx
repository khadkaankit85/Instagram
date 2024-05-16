import { Link } from "react-router-dom"
const Chat = () => {
    return (
        <Link to={"/home/messages/chat"} className="flex justify-between flex-row ">
            <div className="rounded-[50%] m-1  lg:w-[20%] md:w-[100%] flex justify-center">
                <img src="https://scontent-ord5-2.cdninstagram.com/v/t51.2885-19/427577770_351316991145367_2922071059885625484_n.jpg?stp=dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=tmmdi3ITjnUQ7kNvgG_vq1S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-ord5-2.cdninstagram.com&oh=00_AYBEJZcHPqBmANT0F06BGsig82gc6RZ7cmFupmZEnh5xsg&oe=664AEF84" width={"60px"} height={"60px"} className="rounded-[50%]" alt="" />
            </div>
            <div className="w-[80%] p-3 sm:hidden lg:block ">
                <h1 className="text-white">Ankit Khadka</h1>
                <h4 className="font-thin text-white">Click to send a message</h4>
            </div>

        </Link>
    )
}

export default Chat
