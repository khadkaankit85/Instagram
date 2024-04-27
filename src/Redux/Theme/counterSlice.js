import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'theme',
    initialState: {
        value: localStorage.getItem("theme") || "lightTheme",

    },
    reducers: {
        changeCurrentThemeWithRedux: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            if (state.value == "lightTheme") {
                console.log("changing the theme with redux to dark")
                state.value = "darkTheme"
                localStorage.setItem("theme", state.value)
                return;
            }
            if (state.value == "darkTheme") {
                console.log("changing the theme with redux to light")

                state.value = "lightTheme"
                localStorage.setItem("theme", state.value)

                return
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeCurrentThemeWithRedux } = counterSlice.actions

export default counterSlice.reducer