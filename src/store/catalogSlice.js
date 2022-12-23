import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const img_1 = "https://static.tildacdn.com/tild6539-6538-4937-b134-633732316539/35.jpg",
    img_2 = "https://static.tildacdn.com/tild6539-6538-4937-b134-633732316539/35.jpg",
    img_3 = "https://static.tildacdn.com/tild6539-6538-4937-b134-633732316539/35.jpg"

const data = {
    catalog: [
        {
            id: 401,
            title: 'Спальни Мелисса композиция 1',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '60 658 ₽',
            img: img_1,
        },
        {
            id: 402,
            title: 'Спальни Мелисса композиция 2',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '70 658 ₽',
            img: img_2,
        },
        {
            id: 403,
            title: 'Спальни Мелисса композиция 3',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '80 658 ₽',
            img: img_3,
        },
        {
            id: 404,
            title: 'Гостинные Мелисса композиция 4',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '40 658 ₽',
            img: img_1,
        },
        {
            id: 405,
            title: 'Детские Мелисса композиция 5',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '30 658 ₽',
            img: img_2,
        },
        {
            id: 406,
            title: 'Детские Гостинные Мелисса композиция 6',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '20 658 ₽',
            img: img_3,
        },
        {
            id: 407,
            title: 'Детские Гостинные Мелисса композиция 7',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '10 658 ₽',
            img: img_1,
        },
        {
            id: 408,
            title: 'Прихожие Мелисса композиция 8',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '14 658 ₽',
            img: img_2,
        },
        {
            id: 409,
            title: 'Кровати Мелисса композиция 9',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '100 658 ₽',
            img: img_3,
        },
        {
            id: 410,
            title: 'Новинка Мелисса композиция 10',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '110 658 ₽',
            img: img_1,
        },
        {
            id: 411,
            title: 'Прихожие Мелисса композиция 11',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '120 658 ₽',
            img: img_2,
        },
        {
            id: 412,
            title: 'Кровати Мелисса композиция 12',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '130 658 ₽',
            img: img_3,
        },
        {
            id: 413,
            title: 'Новинка Кровати Мелисса композиция 13',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '140 658 ₽',
            img: img_1,
        },
        {
            id: 414,
            title: 'Кровати Мелисса композиция 14',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '150 658 ₽',
            img: img_2,
        },
        {
            id: 415,
            title: 'Новинка Мелисса композиция 15',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '160 658 ₽',
            img: img_3,
        },
    ],
    categories: [
        {
            id: 501,
            title: "Новинки",
            subcategories: [
                {
                    title: "Новинка1",
                    to: `/catalog/Новинка`
                },
                {
                    title: "Новинка2",
                    to: `/catalog/Новинка`
                },
                {
                    title: "Новинка3",
                    to: `/catalog/Новинка`
                },
            ]
        },
        {
            id: 502,
            title: "Гостинные",
            subcategories: [
                {
                    title: "Гостинные1",
                    to: `/catalog/Гостинные`
                },
                {
                    title: "Гостинные2",
                    to: `/catalog/Гостинные`
                },
                {
                    title: "Гостинные3",
                    to: `/catalog/Гостинные`
                },
            ]
        },
        {
            id: 503,
            title: "Прихожие",
            subcategories: [
                {
                    title: "Прихожие1",
                    to: `/catalog/Прихожие`
                },
                {
                    title: "Прихожие2",
                    to: `/catalog/Прихожие`
                },
                {
                    title: "Прихожие3",
                    to: `/catalog/Прихожие`
                },
            ]
        },
        {
            id: 504,
            title: "Спальни",
            subcategories: [
                {
                    title: "Спальни",
                    to: `/catalog/Спальни`
                },
                {
                    title: "Спальни",
                    to: `/catalog/Спальни`
                },
                {
                    title: "Спальни",
                    to: `/catalog/Спальни`
                },
            ]
        },
        {
            id: 505,
            title: "Детские",
            subcategories: [
                {
                    title: "Детские1",
                    to: `/catalog/Детские`
                },
                {
                    title: "Детские2",
                    to: `/catalog/Детские`
                },
                {
                    title: "Детские3",
                    to: `/catalog/Детские`
                },
            ]
        },
        {
            id: 506,
            title: "Кровати",
            subcategories: [
                {
                    title: "Кровати",
                    to: `/catalog/Кровати`
                },
                {
                    title: "Кровати",
                    to: `/catalog/Кровати`
                },
                {
                    title: "Кровати",
                    to: `/catalog/Кровати`
                },
            ]
        }
    ],
}

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
        catalog: data.catalog,
        tempСatalog: [],
        categories: data.categories,
        loading: true,
        error: null
    },
    reducers: {
        setTempСatalog(state, action) {
            state.tempСatalog = [...action.payload]
        }
    },
    extraReducers: {
        [requestCatalog.pending]: (state, action) => {
            state.loading = true
        },
        [requestCatalog.fulfilled]: (state, action) => {
            state.loading = false
            state.catalog = action.payload.catalog || data.catalog
            state.categories = action.payload.categories || data.categories
        },
        [requestCatalog.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { setTempСatalog } = catalogSlice.actions

export default catalogSlice.reducer


