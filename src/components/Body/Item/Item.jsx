import cl from "./Item.module.css"
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import Information from "./Information/Information"
import ItemBody from "./Body/Body"
import ModalWindow from "./ModalWindow/ModalWindow"

export default function Item() {

    const catalog = useSelector(state => state.catalog.catalog)

    const params = useParams()

    const item = catalog.filter(item => item.id == params.id)

    return (
        <article className={cl.item}>
            <ModalWindow />
            <ItemBody item={item} />
            <Information />
        </article>
    )
}
