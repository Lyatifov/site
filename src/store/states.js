import { configureStore } from "@reduxjs/toolkit"
import statesReducer from "./statesSlice"

export default configureStore({
    reducer: {
        states: statesReducer
    }
})