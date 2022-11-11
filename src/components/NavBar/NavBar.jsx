import cl from "./NavBar.module.css"

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
                        &#128269;
                    </div>
                </div>
            </div>

        </nav>
    )
}