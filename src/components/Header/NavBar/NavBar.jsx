import cl from "./NavBar.module.css"
import icon from "../../../img/icon/nav/icon.png"
import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <nav className={cl.nav}>

            <div className={cl.nav__item + ' ' + cl.nav__item_redText}>
                <Link to='/catalog'>Каталог</Link>
            </div>
            <div className={cl.nav__item}>
                <Link to='/info'>О нас</Link>
            </div>
            <div className={cl.nav__item}>
                <Link to='/about'>3D - моделирование</Link>
            </div>
            <div className={cl.nav__item}>
                <Link to='/about'>Покупателю</Link>
            </div>
            <div className={cl.nav__item}>
                <Link to='/about'>Доставка и оплата</Link>
            </div>

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