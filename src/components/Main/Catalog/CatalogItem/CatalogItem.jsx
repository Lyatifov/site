import Button from "../../../UI/Button/Button"
import cl from "./CatalogItem.module.css"

export default function CatalogItem({ item }) {
    return (
        <div className={cl.catalog__item}>
            <div>
                <img src={item.img} alt="" />
            </div>
            <div>
                {item.title}
            </div>
            <div>
                {item.description}
            </div>
            <div>
                {item.availability}
            </div>
            <div>
                {item.price}
            </div>
            <div>
                <Button className={cl.catalogItem__button}>Подробнее</Button>
            </div>
        </div>
    );
}
