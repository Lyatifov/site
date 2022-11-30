import cl from "./Catalog.module.css"
import { useSelector } from "react-redux"
import CatalogItem from "./Item/CatalogItem"
import CatalogCategories from "./Categories/CatalogCategories"
import { useState } from "react"

export default function Catalog() {

    const catalog = useSelector(state => state.catalog.catalog)
    const categories = useSelector(state => state.catalog.categories)

    const [isTargetId, setIsTargetId] = useState(null)

    const targetToggle = (id) => {
        if (id === isTargetId) {
            setIsTargetId(null)
        } else {
            setIsTargetId(id)
        }
    }

    return (
        <div className={cl.catalog}>
            <CatalogCategories categories={categories} />
            <article className={cl.catalog__list}>
                {
                    catalog.map((item, index) =>
                        <CatalogItem targetToggle={targetToggle} isTarget={item.id === isTargetId ? true : false} key={index * 12} item={item} />
                    )
                }
            </article>
        </div>
    )
}
