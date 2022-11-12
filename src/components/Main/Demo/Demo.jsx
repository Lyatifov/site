import Description from './Description/Description'
import img from "../../../img/demo.png"
import imgOtherInformation from "../../../img/other.png"
import cl from './Demo.module.css'

export default function Demo() {

    const arr = [
        {
            title: 'Гостиные',
            description: 'Мини текст описания и преимущества покупки данного направления.',
            availability: '20',
            price: '42.000',
            img: img
        },
        {
            title: 'Спальни',
            description: 'Мини текст описания и преимущества покупки данного направления.',
            availability: '30',
            price: '60.000',
            img: img
        },
        {
            title: 'Детские',
            description: 'Мини текст описания и преимущества покупки данного направления.',
            availability: '14',
            price: '12.000',
            img: img
        },
        // {
        //     title: 'Прихожие',
        //     description: 'Мини текст описания и преимущества покупки данного направления.',
        //     availability: '70',
        //     price: '52.000',
        //     img: img
        // },
        // {
        //     title: 'Кровати',
        //     description: 'Мини текст описания и преимущества покупки данного направления.',
        //     availability: '10',
        //     price: '123.000',
        //     img: img
        // }
    ]

    const evenItem = {
        title: 'Прочяя информация',
        description: '',
        availability: '',
        price: '',
        img: imgOtherInformation,
    }


    return (
        <section className={cl.demo}>

            {arr.map((item, index) => {
                if ((index + 1) % 3 === 0 || (index + 1) % 4 === 0) {
                    return <Description item={item} reverse={true} />
                }
                return <Description item={item} />
            }
            )}

            {
                arr.length % 2 ?
                    !(arr.length % 3) || !(arr.length % 4) ?
                        <Description item={evenItem} even={true} reverse={true} />
                        :
                        <Description item={evenItem} even={true} />
                    : <div></div>
            }


        </section>
    )
}
