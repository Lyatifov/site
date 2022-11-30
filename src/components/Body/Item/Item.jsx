import cl from "./Item.module.css"
import { useSelector } from "react-redux"
import Information from "./Information/Information"
import Body from "./Body/Body"

export default function ItemPage() {

    const catalog = useSelector(state => state.catalog.catalog)

    const data = catalog[0]

    console.log(data)

    return (
        <article className={cl.item}>

            <Body data={data} />

            <Information />

        </article>
    )
}
