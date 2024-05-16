import NoMessages from "../Subcomponents/NoMessages"
const Messages = () => {

    return (
        <div className="flex border border-white justify-between items-center flex-row">

            <div className="md:w-[40%] h-[80vh] border border-white w-[100%]" >
                <h1 className="text-white">this is supposed to be the inbox</h1>
            </div>

            <div className="w-[60%] h-[80vh] md:flex items-center justify-center sm:hidden hidden">
                <NoMessages />
            </div>



        </div>
    )
}

export default Messages
