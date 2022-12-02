import Button from "../../../UI/Button/Button"
import cl from "./CatalogItem.module.css"
import { useNavigate } from "react-router-dom"



export default function CatalogItem({ item, targetToggle, isTarget }) {

    const navigate = useNavigate()

    return (
        <section >
            <div id={item.id} className={cl.catalog__itemWrapper}>
                <div onClick={() => targetToggle(item.id)} className={isTarget ? cl.catalog__item + " " + cl.catalog__item_target : cl.catalog__item}>
                    <div className={isTarget ? cl.catalog__itemImg + " " + cl.catalog__itemImg_target : cl.catalog__itemImg}>
                        <img src={item.img} />
                    </div>
                    <div className={isTarget ? cl.catalog__itemTitle + " " + cl.catalog__itemTitle_target : cl.catalog__itemTitle}>
                        {item.title}
                    </div>
                    <div>
                        {item.description}
                    </div>
                    <div>
                        {item.availability}
                    </div>
                    <div className={isTarget ? cl.catalog__itemPrice + " " + cl.catalog__itemPrice_target : cl.catalog__itemPrice}>
                        {item.price}
                    </div>
                    <div className={isTarget ? cl.catalogItem__buttonWrapper_target : cl.catalogItem__buttonWrapper}>
                        <Button
                            onClick={() => navigate(`/item/${item.id}`)}
                            className={isTarget ? cl.catalogItem__button + " " + cl.catalogItem__button_target : cl.catalogItem__button}
                        >
                            Подробнее
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    );
}
