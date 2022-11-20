import cl from "./AsideBar.module.css"

export default function AsideBar({ data }) {
    return (
        <div>
            <div className={cl.aside}>
                {
                    data.map((item, index) => {
                        return <div key={item.id} className={index ? cl.aside_border : ""}>
                            <a {...data.rout}>{item.title}</a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
