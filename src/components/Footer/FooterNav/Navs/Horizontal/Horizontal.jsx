import cl from "./Horizontal.module.css"

function NavForm({ item }) {

    return (
        <div className={cl.nav__column}>
            {
                item.sections.map((item, index) => {
                    return <a key={item.id} className={index ? "" : cl.nav__firstLine}>{item.title}</a>
                })
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
