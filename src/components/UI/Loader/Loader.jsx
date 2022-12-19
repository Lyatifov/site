import cl from "./Loader.module.css"

export default function Loader() {
    return (
        <div className={cl._body}>
            <div className={cl._wrapper}>
                <div className={cl.circle}></div>
                <div className={cl.circle}></div>
                <div className={cl.circle}></div>
                <div className={cl.shadow}></div>
                <div className={cl.shadow}></div>
                <div className={cl.shadow}></div>
                <span>Loading</span>
            </div>
        </div>
    )
}
