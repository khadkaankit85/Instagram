import NoMessages from "../Subcomponents/NoMessages"
import Chat from "./Chat"
import { Route, Routes } from "react-router-dom"
import GetChat from "../Subcomponents/GetChat"
const Messages = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <div className="w-full flex h-[calc(100vh-125px)] border border-white ">
                        {/* this is chats section alright */}
                        <div className="lg:w-[40%] md:w-[10%] overflow-auto w-full sm:w-[15%] border-r-2">
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
                        <div className="justify-center items-center lg:w-[60%] sm:w-[90%] hidden sm:flex ">
                            <NoMessages />
                        </div>

                    </div>
                } />
                <Route path="/chat" element={
                    <div>
                        <div className="w-full flex h-[calc(100vh-125px)] border border-white ">
                            {/* this is chats section alright */}
                            <div className="lg:w-[40%] md:w-[10%] overflow-auto w-full sm:w-[15%] border-r-2 hidden md:block p-3">
                                <Chat />
                            </div>
                            <div className="justify-center items-center lg:w-[60%] sm:w-[90%] p-3 ">
                                <GetChat />
                            </div>

                        </div>
                    </div>
                } />

            </Routes>

        </div>

        // <div className="flex border border-white justify-between items-center ">

        //     <div className="lg:w-[40%] w-[10%]">
        //         <Routes>
        //             <Route path="/" element={
        //                 <div className="md:w-[90%] lg:w-[90%] h-[80vh] border border-white w-[100%] overflow-auto" >
        //                     <Chat />
        //                     <Chat />
        //                     <Chat />
        //                     <Chat />
        //                     <Chat />
        //                 </div>

        //             } />
        //             <Route path="/chat" element={
        //                 <div className=" lg:w-[100%] h-[80vh] border border-white w-[100%] overflow-auto hidden sm:hidden md:block" >
        //                     <Chat />
        //                     <Chat />
        //                     <Chat />
        //                     <Chat />
        //                     <Chat />
        //                 </div>
        //             } />
        //         </Routes>
        //     </div>


        //     <div className=" md:flex items-center justify-center  lg:w-[60%]">
        //         <Routes>

        //             <Route path="/" element={<div className=" sm:hidden md:block hidden   "><NoMessages /></div>} />
        //             <Route path="/chat" element={<div className="block w-full h-full"><GetChat /></div>} />
        //         </Routes>
        //     </div>



        // </div>
    )
}

export default Messages
