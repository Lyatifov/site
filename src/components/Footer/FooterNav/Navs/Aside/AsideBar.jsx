import { Link } from "react-router-dom"
import AutoScroll from "../../../../AutoScroll/AutoScroll"
import cl from "./AsideBar.module.css"

export default function AsideBar({ data }) {
    return (
        <div>
            <div className={cl.aside}>
                {
                    data.map((item, index) =>
                        <div key={item.id} className={cl.aside__link + ' ' + cl.aside_border}>
                            <Link to={item.to} onClick={() => AutoScroll()}>
                                {item.title}
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
