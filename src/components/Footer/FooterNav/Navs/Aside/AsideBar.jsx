import cl from "./AsideBar.module.css"

export default function AsideBar({ data }) {
    return (
        <div>
            <div className={cl.aside}>
                {
                    data.map((item, index) => {
                        return <div className={index ? cl.aside_border : ""}>
                            <a key={item.id}>{item.title}</a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
