import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const img_1 = "https://moscow.okmebell.ru/image/cache/catalog/Stenki/1544370488_67-kopiya-1500x1000.jpg",
    img_2 = "https://moscow.okmebell.ru/image/cache/catalog/Stenki/1544370488_67-kopiya-1500x1000.jpg",
    img_3 = "https://moscow.okmebell.ru/image/cache/catalog/Stenki/1544370488_67-kopiya-1500x1000.jpg"


const data = {
    catalog: [
        {
            id: 401,
            title: 'Мелисса композиция 1',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_1,
        },
        {
            id: 402,
            title: 'Мелисса композиция 2',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_2,
        },
        {
            id: 403,
            title: 'Мелисса композиция 3',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_3,
        },
        {
            id: 404,
            title: 'Мелисса композиция 4',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_1,
        },
        {
            id: 405,
            title: 'Мелисса композиция 5',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_2,
        },
        {
            id: 406,
            title: 'Мелисса композиция 6',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_3,
        },
        {
            id: 407,
            title: 'Мелисса композиция 7',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_1,
        },
        {
            id: 408,
            title: 'Мелисса композиция 8',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_2,
        },
        {
            id: 409,
            title: 'Мелисса композиция 9',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_3,
        },
        {
            id: 410,
            title: 'Мелисса композиция 10',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_1,
        },
        {
            id: 411,
            title: 'Мелисса композиция 11',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_2,
        },
        {
            id: 412,
            title: 'Мелисса композиция 12',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_3,
        },
        {
            id: 413,
            title: 'Мелисса композиция 13',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_1,
        },
        {
            id: 414,
            title: 'Мелисса композиция 14',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
            img: img_2,
        },
        {
            id: 415,
            title: 'Мелисса композиция 15',
            description: 'в 1462    ш 360     г 352',
            availability: 'Объем: 12м3',
            price: '59 658 ₽',
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
                },
                {
                    title: "Новинка2",
                },
                {
                    title: "Новинка3",
                },
            ]
        },
        {
            id: 502,
            title: "Гостинные",
            subcategories: [
                {
                    title: "Гостинные1",
                },
                {
                    title: "Гостинные2",
                },
                {
                    title: "Гостинные3",
                },
            ]
        },
        {
            id: 503,
            title: "Прихожие",
            subcategories: [
                {
                    title: "Прихожие1",
                },
                {
                    title: "Прихожие2",
                },
                {
                    title: "Прихожие3",
                },
            ]
        },
        {
            id: 504,
            title: "Спальни",
            subcategories: [
                {
                    title: "Спальни1",
                },
                {
                    title: "Спальни2",
                },
                {
                    title: "Спальни3",
                },
            ]
        },
        {
            id: 505,
            title: "Детские",
            subcategories: [
                {
                    title: "Детские1",
                },
                {
                    title: "Детские2",
                },
                {
                    title: "Детские3",
                },
            ]
        },
        {
            id: 506,
            title: "Кровати",
            subcategories: [
                {
                    title: "Кровати1",
                },
                {
                    title: "Кровати2",
                },
                {
                    title: "Кровати3",
                },
            ]
        },
        {
            id: 507,
            title: "Матрасы",
            subcategories: [
                {
                    title: "Матрасы1",
                },
                {
                    title: "Матрасы2",
                },
                {
                    title: "Матрасы3",
                },
            ]
        },
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
        categories: data.categories,
        loading: true,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [requestCatalog.pending]: (state, action) => {
            state.loading = true
        },
        [requestCatalog.fulfilled]: (state, action) => {
            state.loading = false
            state.catalog = action.payload.catalog
            state.categories = action.payload.categories
        },
        [requestCatalog.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

// const { upload } = catalogSlice.actions

export default catalogSlice.reducer


