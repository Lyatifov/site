import cl from "./Horizontal.module.css"
import { Link } from "react-router-dom"

function NavForm({ item }) {

    return (
        <div className={cl.nav__column}>
            {
                item.sections.map((item, index) =>
                    <Link key={item.id} className={index ? "" : cl.nav__firstLine} to={item.to}>
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
