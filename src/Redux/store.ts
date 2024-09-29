import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './Theme/counterSlice'

 const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})
export default store