import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './Theme/counterSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})