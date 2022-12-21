import cl from "./Item.module.css"
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import Information from "./Information/Information"
import ItemBody from "./Body/Body"
import Loader from "../../UI/Loader/Loader"

export default function Item() {

    const catalog = useSelector(state => state.catalog.catalog)
    const loading = useSelector(state => state.catalog.loading)

    const params = useParams()

    const item = catalog.filter(item => item.id == params.id)

    return (
        <article className={cl.item}>
            {
                loading ?
                    <Loader /> :
                    <>
                        <ItemBody item={item} />
                        <Information />
                    </>
            }
        </article>
    )
}
