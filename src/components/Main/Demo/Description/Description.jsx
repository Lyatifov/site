import icon from "../../../../img/icon/demo_description/icon.png"
import cl from './Description.module.css'

export default function Description({ item, reverse, even }) {

    return (
        <div className={reverse ? cl.description + ' ' + cl.description_reverse : cl.description}>
            <div className={cl.description__item}>
                <img className={cl.description__img} src={item.img} alt="" />
                <div className={reverse ? cl.description__pointer_reverse : cl.description__pointer}></div>
            </div>
            {
                even ?
                    <div className={cl.description__item + ' ' + cl.description__text}>
                        <div className={cl.description_700}>{item.title}</div>
                        <div className={reverse ? cl.description__button + ' ' + cl.description__button_reverse : cl.description__button}>
                            <img src={icon} alt="" />
                        </div>
                    </div>
                    :
                    <div className={cl.description__item + ' ' + cl.description__text}>
                        <div className={cl.description_700}>{item.title}</div>
                        <div className={cl.description_400}>{item.description}</div>
                        <div className={cl.description_400 + ' ' + cl.description_blue}>Товары под заказ в наличии: {item.availability} шт.</div>
                        <div className={cl.description_400}>Цены от: {item.price} руб.</div>
                        <div className={reverse ? cl.description__button + ' ' + cl.description__button_reverse : cl.description__button}>
                            <img src={icon} alt="" />
                        </div>
                    </div>
            }
        </div>
    );
}
