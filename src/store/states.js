import { configureStore } from "@reduxjs/toolkit"
import statesReducer from "./statesSlice"
import informationReducer from "./informationSlice"

export default configureStore({
    reducer: {
        states: statesReducer,
        information: informationReducer
    }
})