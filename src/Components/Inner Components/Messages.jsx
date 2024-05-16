import NoMessages from "../Subcomponents/NoMessages"
import Chat from "./Chat"
const Messages = () => {

    return (
        <div className="flex border border-white justify-between items-center flex-row">

            <div className="md:w-[10%] lg:w-[40%] h-[80vh] border border-white w-[100%] overflow-auto" >
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </div>

            <div className="w-[60%] lg:w-[60%]  md:w-[80%] h-[80vh] md:flex items-center justify-center sm:hidden hidden">
                <NoMessages />
            </div>



        </div>
    )
}

export default Messages
