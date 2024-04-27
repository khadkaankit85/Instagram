import { changeTheme } from "../Utilities/utilitis"
import sun from "../Assets/Images/dark-theme.svg"
import moon from "../Assets/Images/lightTheme.svg"
import { useSelector, useDispatch } from "react-redux"
import { changeCurrentThemeWithRedux } from "../Redux/Theme/counterSlice"

const ThemeToggle = () => {

    //taking the theme's value from redux store

    const theme = useSelector((state) => state.theme.value)

    console.log("the value of theme in themetoggle is ", theme)

    //dispatcher helps to dispatch functions/ reducers from the store
    const dispatch = useDispatch()



    return (
        <div className="w-full h-12 flex items-end justify-end">
            <div onClick={() => {
                changeTheme()

                //dispatching the changeTheme reducer
                dispatch(changeCurrentThemeWithRedux())
            }} className="mr-10">


                {
                    (theme == "lightTheme" && <img src={sun} alt="lighttheme" width={"35px"} height={"35px"} />)
                }
                {
                    (theme == "darkTheme" && <img src={moon} alt="darktheme" width={"35px"} height={"35px"} />)

                }

            </div>
        </div>
    )
}

export default ThemeToggle


