import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const newRequest = createAsyncThunk(
    "request/newRequest",
    async function (data, { rejectWithValue, dispatch }) {

        // if (!data.phone.trim()) return rejectWithValue("Input has empty!")

        try {
            const response = await axios({
                method: "POST",
                url: `https://jsonplaceholder.typicode.com/todos`,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })


            if (response.status !== 201) {
                throw new Error("Server Error")
            }

        } catch (error) {
            return rejectWithValue(error.message)
        }
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

const { toggler } = requestSlice.actions

export default requestSlice.reducer


