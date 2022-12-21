import cl from "./Catalog.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import CatalogItem from "./Item/CatalogItem"
import CatalogCategories from "./Categories/CatalogCategories"
import { useState } from "react"
import EmptyPage from "../../UI/EmptyPage/EmptyPage"
import Loader from "../../UI/Loader/Loader"
import { SearchItem } from "../../../core/services/search/search"
import { useEffect } from "react"
import { setTempСatalog } from "../../../store/catalogSlice"

export default function Catalog() {

    const dispatch = useDispatch()
    const catalog = useSelector(state => state.catalog.catalog)
    const tempСatalog = useSelector(state => state.catalog.tempСatalog)
    const categories = useSelector(state => state.catalog.categories)
    const loading = useSelector(state => state.catalog.loading)
    const params = useParams()
    const [isTargetId, setIsTargetId] = useState(null)
    const targetToggle = (id) => {
        if (id === isTargetId) {
            setIsTargetId(null)
        } else {
            setIsTargetId(id)
        }
    }

    useEffect(() => {
        if (params.params) {
            dispatch(setTempСatalog(SearchItem(catalog, params.params)))
            console.log(tempСatalog.length)
        }
    }, [params.params])

    return (
        <>
            {
                loading ?
                    <Loader />
                    : catalog.length ?
                        <>
                            <div className={cl.catalog} >
                                <CatalogCategories categories={categories} />
                                <article className={params.params && !tempСatalog.length ? `${cl.catalog__list} ${cl.catalog__list_empty}` : cl.catalog__list}>
                                    {
                                        params.params ?
                                            tempСatalog.length ?
                                                tempСatalog.map((item, index) =>
                                                    <CatalogItem
                                                        targetToggle={targetToggle}
                                                        isTarget={item.id === isTargetId ? true : false}
                                                        key={index}
                                                        item={item} />
                                                ) :
                                                <EmptyPage>По вашему запосу ничего не найдено =(</EmptyPage>
                                            :
                                            catalog.map((item, index) =>
                                                <CatalogItem
                                                    targetToggle={targetToggle}
                                                    isTarget={item.id === isTargetId ? true : false}
                                                    key={index}
                                                    item={item} />
                                            )
                                    }
                                </article>
                            </div>
                        </> :
                        <EmptyPage />
            }
        </>
    )
}
