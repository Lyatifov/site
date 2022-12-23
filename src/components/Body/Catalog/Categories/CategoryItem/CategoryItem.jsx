import { useState } from "react"
import { Link } from "react-router-dom"
import cl from "./CategoryItem.module.css"

export default function CategoryItem({ item }) {

    const [isAction, setIsAction] = useState(false)
    const actionToggle = () => {
        setIsAction(!isAction)
    }

    return (
        <details>
            <summary
                className={cl.category__title}
                onClick={() => actionToggle()}>
                {item.title}
                <div className={`${cl.category__pointer} ${isAction ? cl.category__pointer_action : ""}`}></div>
            </summary>
            <ul className={`${isAction ? cl.subcategories_action : cl.subcategories}`}>
                {
                    item.subcategories.map((el, index) =>
                        <li key={index}>
                            <Link className={cl.link} to={el.to}>{el.title}</Link>
                        </li>
                    )
                }
            </ul>
        </details>
    )
}


//${cl.subcategories}