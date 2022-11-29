import cl from "./Body.module.css"
import Button from "../../../UI/Button/Button"

export default function ItemBody({ data }) {
    return (
        <div className={cl.item}>
            <div className={cl.item__img}>
                <img src={data.img} alt="" />
            </div>
            <div className={cl.item__body}>
                <div className={cl.item__textBlock}>
                    <div className={cl.item__title}>{data.title}</div>

                    <div className={cl.item__description}>
                        {data.description}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi architecto numquam vitae dolores quod, illum exercitationem quae molestiae perspiciatis deserunt, earum quibusdam ad corporis, consectetur tempora soluta reiciendis enim quia.
                        </p>
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
    );
}
