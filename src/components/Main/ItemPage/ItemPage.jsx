import cl from "./ItemPage.module.css"
import { useSelector } from "react-redux"
import Button from "../../UI/Button/Button"
import InformationBar from "./InformationBar/InformationBar"

export default function ItemPage() {

    const catalog = useSelector(state => state.catalog.catalog)

    const data = catalog[0]

    console.log(data)

    return (
        <article>

            <div className={cl.item}>
                <div className={cl.item__img}>
                    <img src={data.img} alt="" />
                </div>
                <div>
                    <div className={cl.item__textBlock}>
                        <div className={cl.item__title}>{data.title}</div>

                        <div className={cl.item__description}>
                            {data.description}
                        </div>
                    </div>

                    <div className={cl.item__priceWrapper}>
                        <div className={cl.item__price}>
                            <div >Цена:</div>
                            <div className={cl.item__priceSum}>{data.price}</div>
                        </div>
                        <div className={cl.item__priceButtonWrapper}>
                            <Button className={cl.item__priceButton}>Узнать цену</Button>
                        </div>
                    </div>
                </div>
            </div>

            <InformationBar />






            <div>
                <div>С ЭТИМ ТОВАРОМ МОЖНО КУПИТЬ</div>
                <div></div>
            </div>
        </article>
    )
}
