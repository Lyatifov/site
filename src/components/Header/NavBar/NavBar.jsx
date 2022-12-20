import cl from "./NavBar.module.css"
import icon from "../../../img/icon/nav/icon.png"
import { Link } from 'react-router-dom'

export default function NavBar() {

    const data = [
        {
            title: "Каталог",
            to: '/catalog',
            className: cl.nav__item,
            extraClass: cl.nav__item_redText
        },
        {
            title: "О нас",
            to: '/info',
            className: cl.nav__item,
            extraClass: ""
        },
        {
            title: "3D - моделирование",
            to: '/about',
            className: cl.nav__item,
            extraClass: ""
        },
        {
            title: "Покупателю",
            to: '/about',
            className: cl.nav__item,
            extraClass: ""
        },
        {
            title: "Доставка и оплата",
            to: '/about',
            className: cl.nav__item,
            extraClass: ""
        },
    ]

    return (
        <nav className={cl.nav}>

            <ul className={cl.wrapper}>
                {
                    data.map(item =>
                        <li className={`${item.className} ${item.extraClass}`}>
                            <Link to={item.to}>{item.title}</Link>
                        </li>
                    )
                }
            </ul>



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