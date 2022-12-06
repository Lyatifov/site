import cl from "./Horizontal.module.css"
import { Link } from "react-router-dom"
import AutoScroll from "../../../../AutoScroll/AutoScroll"

function NavForm({ item }) {

    return (
        <div className={cl.nav__column}>
            {
                item.sections.map((item, index) =>
                    <Link key={item.id} className={index ? "" : cl.nav__firstLine} to={item.to} onClick={() => AutoScroll()}>
                        {item.title}
                    </Link>
                )
            }
        </div>
    )
}




export default function Horizontal({ data }) {
    return (
        <div className={cl.nav}>
            {
                data.map((item) => {
                    return <NavForm key={item.id} item={item} />
                })
            }
        </div>
    )
}
