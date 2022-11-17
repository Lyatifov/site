import { createSlice } from "@reduxjs/toolkit"
import img from "../img/demo.png"
import img2 from "../img/addit_inform.png"
import presentation_1 from "../img/swiper/presentation_1.png"
import presentation_2 from "../img/swiper/presentation_2.png"
import img_1 from "../img/icon/presentation/dignity_icon_1.png"
import img_2 from "../img/icon/presentation/dignity_icon_2.png"
import img_3 from "../img/icon/presentation/dignity_icon_3.png"

const informationSlice = createSlice({
    name: "information",
    initialState: {
        demoPorduct: [
            {
                id: 1,
                title: 'Гостиные',
                description: 'Мини текст описания и преимущества покупки данного направления.',
                availability: '20',
                price: '42.000',
                img: img
            },
            {
                id: 2,
                title: 'Спальни',
                description: 'Мини текст описания и преимущества покупки данного направления.',
                availability: '30',
                price: '60.000',
                img: img
            },
            {
                id: 3,
                title: 'Детские',
                description: 'Мини текст описания и преимущества покупки данного направления.',
                availability: '14',
                price: '12.000',
                img: img
            },
            {
                id: 4,
                title: 'Прихожие',
                description: 'Мини текст описания и преимущества покупки данного направления.',
                availability: '70',
                price: '52.000',
                img: img
            },
            {
                id: 5,
                title: 'Кровати',
                description: 'Мини текст описания и преимущества покупки данного направления.',
                availability: '10',
                price: '123.000',
                img: img
            }
        ],
        additInform: [
            {
                id: 11,
                title: 'Доставка по всей России',
                description: 'Мини текст описания и преимущества покупки данного направления.',
                img: img2
            },
            {
                id: 12,
                title: 'Бесплатная сборка',
                description: 'Мини текст описания и преимущества покупки данного направления.',
                img: img2
            },
        ],
        footerNavHorizontal: [
            {
                id: 20,
                sections: [
                    {
                        id: 21,
                        title: "О компании",
                    },
                    {
                        id: 22,
                        title: "Производство",
                    },
                    {
                        id: 23,
                        title: "Награды",
                    },
                    {
                        id: 24,
                        title: "Сертификаты",
                    },
                ]
            },
            {
                id: 30,
                sections: [
                    {
                        id: 31,
                        title: "Покупателю",
                    },
                    {
                        id: 32,
                        title: "Как сделать заказ",
                    },
                    {
                        id: 33,
                        title: "Рекомендации по сборке",
                    },
                    {
                        id: 34,
                        title: "Договор публичной оферты",
                    },

                ]
            },
            {
                id: 40,
                sections: [
                    {
                        id: 41,
                        title: "Полезная информация",
                    },
                    {
                        id: 42,
                        title: "Всё о фасадах",
                    },
                    {
                        id: 43,
                        title: "Всё о фурнитуре",
                    },
                    {
                        id: 44,
                        title: "Всё о ЛДСП",
                    },

                ]
            },
            {
                id: 50,
                sections: [
                    {
                        id: 51,
                        title: "3D-моделирование",
                    },
                    {
                        id: 52,
                        title: "Запустить онлайн, от 2 Мбит/с",
                    },
                    {
                        id: 53,
                        title: "Скачать на компьютер, 606 Мб",
                    }
                ]
            },
        ],
        footerNavAside: [
            {
                id: 101,
                title: "Рассрочка",
            },
            {
                id: 102,
                title: "Гарантия",
            },
            {
                id: 103,
                title: "Контакты",
            },
        ],
        presentationSlide: [
            {
                id: 101,
                version: 1,
                title: "Производим мебель с 1997 года",
                text_1: "Мы готовы принять и передать ваш  заказ на мебель региональному представительству.",
                text_2: "Для этого пришлите ваши пожелания и контактную информацию нам на почту ",
                email: "zakaz@lerom.ru",
                img: presentation_1,
                dignity: [
                    {
                        id: 1,
                        icon: img_1,
                        text1: '>100 000',
                        text1_detail: 'м²',
                        text2: 'Производственная площадь.'
                    },

                    {
                        id: 2,
                        icon: img_2,
                        text1: '>1 100',
                        text1_detail: 'чел',
                        text2: 'Рабочий коллектив.'
                    },

                    {
                        id: 3,
                        icon: img_3,
                        text1: 'Официально',
                        text1_detail: null,
                        text2: 'Мы находимся в национальном реестре промышленных предприятий.'
                    },
                ]
            },
            {
                id: 102,
                version: 2,
                title: "Производим мебель с 1997 года",
                text_1: "Мы готовы принять и передать ваш  заказ на мебель региональному представительству.",
                text_2: "Для этого пришлите ваши пожелания и контактную информацию нам на почту ",
                email: "zakaz@lerom.ru",
                img: presentation_2,
                dignity: [
                    {
                        id: 1,
                        icon: img_1,
                        text1: '>100 000',
                        text1_detail: 'м²',
                        text2: 'Производственная площадь.'
                    },

                    {
                        id: 2,
                        icon: img_2,
                        text1: '>1 100',
                        text1_detail: 'чел',
                        text2: 'Рабочий коллектив.'
                    },

                    {
                        id: 3,
                        icon: img_3,
                        text1: 'Официально',
                        text1_detail: null,
                        text2: 'Мы находимся в национальном реестре промышленных предприятий.'
                    },
                ]
            },
            {
                id: 103,
                version: 3,
                title: "Производим мебель с 1997 года",
                text_1: "Мы готовы принять и передать ваш  заказ на мебель региональному представительству.",
                text_2: "Для этого пришлите ваши пожелания и контактную информацию нам на почту ",
                email: "zakaz@lerom.ru",
                img: presentation_1,
                dignity: [
                    {
                        id: 1,
                        icon: img_1,
                        text1: '>100 000',
                        text1_detail: 'м²',
                        text2: 'Производственная площадь.'
                    },

                    {
                        id: 2,
                        icon: img_2,
                        text1: '>1 100',
                        text1_detail: 'чел',
                        text2: 'Рабочий коллектив.'
                    },

                    {
                        id: 3,
                        icon: img_3,
                        text1: 'Официально',
                        text1_detail: null,
                        text2: 'Мы находимся в национальном реестре промышленных предприятий.'
                    },
                ]
            }
        ]
    }
})

export default informationSlice.reducer