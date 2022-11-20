import { createSlice } from "@reduxjs/toolkit"
import img_1 from "../img/catalog/img_1.png"
import img_2 from "../img/catalog/img_2.png"
import img_3 from "../img/catalog/img_3.png"

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
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
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_2,
            },
            {
                id: 403,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_3,
            },
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
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_2,
            },
            {
                id: 403,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_3,
            },
            {
                id: 404,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_1,
            },
            {
                id: 405,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_2,
            },
            {
                id: 406,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_3,
            },
            {
                id: 407,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_1,
            },
            {
                id: 408,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_2,
            },
            {
                id: 409,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_3,
            },
            {
                id: 410,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_1,
            },
            {
                id: 411,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_2,
            },
            {
                id: 412,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_3,
            },
        ],
    }
})

export default catalogSlice.reducer