import sendAMessageDark from "../../Assets/Images/ForApp/Messenger_icon.svg"
import sendAMessageLight from "../../Assets/Images/ForApp/LightStore/messenger_icon_light.svg"
import { useSelector } from "react-redux"
const NoMessages = () => {
    const theme = useSelector((state) => state.theme.value)
    return (
        <div className="flex justify-center items-center flex-col"  >

            <div className="rounded-[50%] w-[130px] h-[130px] border-white border-4  flex justify-center items-center">
                <img src={theme == "lightTheme" ? sendAMessageDark : sendAMessageLight} width={"75px"} height={"75px"} alt="" />
            </div>
            <h1 className="text-white font-extrabold">Your Messages</h1>
            <h1 className=" text-white mt-3">
                Send private photos and messages to a friend or group.
            </h1>

        </div>
    )
}

export default NoMessages
