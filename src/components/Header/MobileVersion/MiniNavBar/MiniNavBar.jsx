import cl from "./MiniNavBar.module.css"
import icon from "./../../../../img/icon/nav/icon_alt.png"

export default function MiniNavBar() {
    return (
        <nav className={cl.nav}>
            <div className={cl.nav__itemWrapper}>
                <div className={cl.nav__item}>Каталог</div>
            </div>
            <div className={cl.nav__itemWrapper + ' ' + cl.nav_backBlue}>
                <div className={cl.nav__item}>
                    <input className={cl.nav__search} placeholder="Поиск по сайту..." type="text" />
                    <img src={icon} />
                </div>
            </div>

        </nav>
    )
}
