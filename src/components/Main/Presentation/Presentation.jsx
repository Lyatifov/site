import cl from "./Presentation.module.css"
import img_1 from "../../../img/icon/presentation/dignity_icon_1.png"
import img_2 from "../../../img/icon/presentation/dignity_icon_2.png"
import img_3 from "../../../img/icon/presentation/dignity_icon_3.png"
import Dignity from "./Dignity/Dignity"

export default function Presentation() {

    const dignityList = [
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


    return (
        <section className={cl.presentation}>
            <div className={cl.presentation__dignityTitle}>
                ПРОИЗВОДИМ МЕБЕЛЬ С 1997 ГОДА
            </div>

            <div className={cl.presentation__presentationWrapper}>
                <div className={cl.presentation__presentationText + ' ' + cl.presentation_700}>
                    Мы готовы принять и передать ваш  заказ на мебель
                    региональному представительству.
                </div>
                <div className={cl.presentation__presentationText}>
                    Для этого пришлите ваши пожелания и контактную
                    информацию нам на почту <a className={cl.presentation__email} >zakaz@lerom.ru</a>
                </div>
            </div>


            <div className={cl.presentation__dignityWrapper}>

                {
                    dignityList.map(item =>
                        <Dignity key={item.id} item={item} />
                    )
                }
            </div>
        </section>
    )
}
