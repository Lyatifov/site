import cl from "./NavBar.module.css"
import icon from "../../../img/icon/nav/icon.png"

export default function NavBar() {

    return (
        <nav className={cl.nav}>

            <div className={cl.nav__item + ' ' + cl.nav__item_redText}>Каталог</div>
            <div className={cl.nav__item}>О нас</div>
            <div className={cl.nav__item}>3D - моделирование</div>
            <div className={cl.nav__item}>Покупателю</div>
            <div className={cl.nav__item}>Доставка и оплата</div>

            <div className={cl.nav__inputWrapper}>
                <div className={cl.nav__inputDecoration}>
                    <input className={cl.nav__input} type="text" placeholder="Поиск по сайту..." />
                    <div>
                        <img src={icon} alt="&#955;" />
                    </div>
                </div>
            </div>

        </nav>
    )
}