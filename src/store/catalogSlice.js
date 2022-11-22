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
            {
                id: 413,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_1,
            },
            {
                id: 414,
                title: 'Мелисса композиция 1',
                description: 'в 1462    ш 360     г 352',
                availability: 'Объем: 12м3',
                price: '59 658 ₽',
                img: img_2,
            },
            {
                id: 415,
                title: 'Мелисса композиция 1',
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
})

export default catalogSlice.reducer