import ReadMore from "./Subcomponents/Readmore"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

import whiteUnlovedIcon from "../Assets/Images/ForApp/WhiteUnlovedImage.png"
import whiteLovedIcon from "../Assets/Images/ForApp/WhiteLovedImage.png"

import darkUnlovedIcon from "../Assets/Images/ForApp/LightStore/blackUnlovedImage.png"
import darkLovedIcon from "../Assets/Images/ForApp/LightStore/BlackLovedImage.png"


import whiteCommentIcon from "../Assets/Images/ForApp/LightStore/comment_icon_ForDarkTheme.svg"
import darkCommentIcon from "../Assets/Images/ForApp/comment_icon_ForWhiteTheme.svg"

import whiteShareIcon from "../Assets/Images/ForApp/LightStore/share_icon_ForDarkTheme.svg"
import darkShareIcon from "../Assets/Images/ForApp/share_icon_ForWhiteTheme.svg"

const Post = () => {
    const theme = useSelector((state) => state.theme.value)
    return (
        <div className="w-[485px] h-[850px] border  border-white">

            <div className="w-[full] h-[40px] flex justify-between p-3">

                <div className=" w-[50px] h-[50px] rounded-[100%] border-blue-600 border-[3px]">
                    <img width={"45px"} src="https://avatars.githubusercontent.com/u/145488454?v=4" alt="" className="object-cover rounded-[100%]" />
                </div>
                <div className="w-[calc(100%-70px)] text-white ">
                    <h4 className="text-white inline">username </h4><span className="text-[#bdbcbc]"> 4w</span><span className="text-blue-700"> Follow</span>
                </div>
            </div>

            <div className="w-[485px] mt-10 text-white h-[520px] border-red-600  ">
                <img src="https://avatars.githubusercontent.com/u/145488454?v=4" className="w-[485px] h-[520px] object-cover" alt="" />
            </div>

            <div className="w-[485px] h-[40px]  border-white text-white mt-2 flex space-x-3">

                <Link to={"/home/post/comments"} className="flex space-x-3 ml-2" >
                    <img src={theme == "lightTheme" ? darkUnlovedIcon : whiteUnlovedIcon} width={"35px"} alt="" />
                </Link>

                <Link to={"/home/post/comments"} className="flex space-x-3 ml-2" >
                    <img src={theme == "lightTheme" ? darkCommentIcon : whiteCommentIcon} width={"35px"} alt="" />
                </Link>

                <Link to={"/home/post/comments"} className="flex space-x-3 ml-2" >
                    <img src={theme == "lightTheme" ? darkShareIcon : whiteShareIcon} width={"35px"} alt="" />
                </Link>
            </div>
            <div className="w-[485px] h-[30px] border border-white text-white ">
                97,117 likes
            </div>

            <div className=" h-fit border border-white text-white mt-2 p-1">
                username

                <ReadMore text={"this islorem40 fdsajkjalsf lkejsflkdjlke rlekwrjlk;jrewlkjl ekrjlkrejljerl kjelkjlkewrj lkjwrelkj lkwerklwer jljwrelk jwerlkj  the text lol"} maxLength={55} />
            </div>
            <div className="w-[485px] h-fit  border-white text-white pl-1 ">
                View all 322 comments
            </div>

            <div className="w-[485px] h-fit  border-white text-white flex justify-between ">
                <input className="w-[90%] bg-red- text-blue-600 active:outline-none active:ring-offset-0" type="text" />
                <button className="text-blue-800" >Post</button>
            </div>

        </div>
    )
}

export default Post
