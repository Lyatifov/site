import cl from "./Catalog.module.css"
import { useSelector } from "react-redux"
import CatalogItem from "./CatalogItem/CatalogItem"

export default function Catalog() {

    const catalog = useSelector(state => state.catalog.catalog)

    return (
        <saction className={cl.catalog}>
            {
                catalog.map(item =>
                    <CatalogItem item={item} />
                )
            }
        </saction>
    )
}
