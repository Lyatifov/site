import { useState } from "react"
import cl from "./CategoryItem.module.css"

export default function CategoryItem({ item, br }) {

    const [isAction, setIsAction] = useState(false)

    const actionToggle = () => {
        setIsAction(!isAction)
    }

    return (
        <div className={br ? cl.category + ' ' + cl.category_br : cl.category}>
            <div
                className={cl.category__title}
                onClick={() => actionToggle()}
            >
                {item.title}
            </div>
            <div className={isAction ? cl.category__pointer + " " + cl.category__pointer_action : cl.category__pointer}></div>
            <div className={isAction ? cl.subcategories + " " + cl.subcategories_action : cl.subcategories}>
                <ul>
                    {
                        item.subcategories.map((el, index) =>
                            <li key={index}>{el.title}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
