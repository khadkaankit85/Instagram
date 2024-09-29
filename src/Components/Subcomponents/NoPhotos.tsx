import cameraForLightTheme from "../../Assets/Images/ForApp/LightStore/camera_for_lightTheme.gif"
import cameraForDarkTheme from "../../Assets/Images/ForApp/camera_for_darkTheme.png"

const NoPhotos = () => {
    return (
        <div className="flex space-y-3 flex-col items-center text-center">
            <input type="file" className="translate-y-0 rounded-full w-[110px] h-[110px] bg-red-300 cursor-pointer absolute opacity-0" />

            <img src={cameraForDarkTheme} width={"110px"} alt="camera" />
            <h1 className="text-4xl font-extrabold  text-white">Share Photos</h1>
            <h1 className="text-white">When you share photos, they will appear on your profile.</h1>
            <h1 className="text-blue-700">Share your first photo</h1>
        </div>
    )
}

export default NoPhotos
