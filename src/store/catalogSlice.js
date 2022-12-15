import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const requestCatalog = createAsyncThunk(
    "catalog/requestCatalog",
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.post(`http://localhost:3002/api/catalog`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)


const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        catalog: [],
        categories: [],
        loading: true,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [requestCatalog.pending]: (state, action) => {
            console.log('pending')
            state.loading = true
        },
        [requestCatalog.fulfilled]: (state, action) => {
            console.log('fulfilled', action)
            state.loading = false
            state.catalog = action.payload.catalog
            state.categories = action.payload.categories
        },
        [requestCatalog.rejected]: (state, action) => {
            console.log('rejected')
            state.loading = false
            state.error = action.payload
        }
    }
})

// const { upload } = catalogSlice.actions

export default catalogSlice.reducer