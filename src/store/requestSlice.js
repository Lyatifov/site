import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const newRequest = createAsyncThunk(
    "request/newRequest",
    async function (data, { rejectWithValue, dispatch }) {

        axios({
            method: "POST",
            url: `http://localhost:3002/api/callme`,
            headers: {
                "Content-Type": "application/json",
                "charset": "utf-8"
            },
            data: data
        })

            .then(function (response) {
                if (response.status === 202) {
                    console.log("ОК")
                }
            })
            .catch(function (error) {
                return rejectWithValue(error.message)
            })
    }

)

const requestSlice = createSlice({
    name: "request",
    initialState: {

    },

    reducers: {
        toggler(state, action) {
            state.isActiveMiniMenu = !state.isActiveMiniMenu
        },

    },

    // extraReducers: {
    //     [fetchRequest.pending]: (state, action) => {
    //     },
    //     [fetchRequest.fulfilled]: (state, action) => {
    //         state.todos = action.payload
    //     },
    //     [fetchRequest.rejected]: (state, action) => {
    //         state.error = action.payload
    //     }
    // }
})

// const { toggler } = requestSlice.actions

export default requestSlice.reducer


