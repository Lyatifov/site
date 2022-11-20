import { configureStore } from "@reduxjs/toolkit"
import statesReducer from "./statesSlice"
import informationReducer from "./informationSlice"
import catalogReducer from "./catalogSlice"

export default configureStore({
    reducer: {
        states: statesReducer,
        information: informationReducer,
        catalog: catalogReducer,
    }
})