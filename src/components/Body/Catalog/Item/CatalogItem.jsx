import Button from "../../../UI/Button/Button"
import cl from "./CatalogItem.module.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Loader from "../../../UI/Loader/Loader"


export default function CatalogItem({ item, targetToggle, isTarget }) {

    const navigate = useNavigate()

    const loading = useSelector(state => state.catalog.loading)

    return (
        <>
            {
                loading ?
                    <Loader />
                    :
                    <>
                        <section className={cl.section}>
                            <div id={item.id} className={cl.wrapper}>
                                <div onClick={() => targetToggle(item.id)} className={`${cl.item} ${isTarget ? cl.item_target : ""}`}>
                                    <div className={`${cl.imgWrapper} ${isTarget ? cl.imgWrapper_target : ""}`} >
                                        <img className={cl.img} src={item.img} />
                                    </div>
                                    <div className={cl.textWrapper}>
                                        <div className={`${cl.title} ${isTarget ? cl.title_target : ""}`}>
                                            {item.title}
                                        </div>
                                        <div className={`${cl.text} ${isTarget ? cl.text_target : ""}`}>
                                            {item.description}
                                        </div>
                                        <div className={`${cl.text} ${isTarget ? cl.text_target : ""}`}>
                                            {item.availability}
                                        </div>
                                        <div className={`${cl.price} ${isTarget ? cl.price_target : ""}`}>
                                            {item.price}
                                        </div>
                                        <Button
                                            onClick={() => navigate(`/item/${item.id}`)}
                                            className={isTarget ? cl.button_target : cl.button_hidden}
                                        >
                                            Подробнее
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section >
                    </>
            }
        </>
    );
}
