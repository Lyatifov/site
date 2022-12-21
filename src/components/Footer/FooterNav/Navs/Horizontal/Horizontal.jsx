import cl from "./Horizontal.module.css"
import { Link } from "react-router-dom"
import AutoScroll from "../../../../../core/services/autoScroll/autoScroll"

function NavForm({ item }) {
    return (
        <ul className={cl.nav__column}>
            {
                item.sections.map((item, index) =>
                    <li key={item.id} className={`${cl.nav__item} ${index ? "" : cl.nav__firstLine}`}>
                        <Link  to={item.to} onClick={() => AutoScroll()}>
                            {item.title}
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default function Horizontal({ data }) {
    return (
        <section className={cl.nav}>
            {
                data.map((item) => {
                    return <NavForm key={item.id} item={item} />
                })
            }
        </section>
    )
}
