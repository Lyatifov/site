import logo from "../../img/logo.png"
import cl from "./Header.module.css"

export default function Header() {

    return (
        <header className={cl.header}>
            <div className={cl.header__information}>
                <div className={cl.header__informationItem + ' ' + cl.header__informationItem_spaceAround}>
                    <div>&#8987;</div>
                    <div>&#129517;</div>
                </div>
                <div className={cl.header__informationItem + ' ' + cl.header__informationItem_textLeft}>
                    <div>
                        <div>Пн-Пт с 10:00 до 20:00</div>
                        <div>Сб-Вс с 10:00 до 19:00</div>
                    </div>
                    <div>
                        Наши салоны
                    </div>
                </div>
            </div>
            <div className={cl.header__logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={cl.header__information + ' ' + cl.header__information_marginRight}>
                <div className={cl.header__informationItem + ' ' + cl.header__informationItem_textRight}>
                    <div>Отдел продаж:</div>
                    <div>Звонки по России:</div>
                </div>
                <div className={cl.header__informationItem}>
                    <div>&#9990;</div>
                    <div>&#9990;</div>
                </div>
                <div className={cl.header__informationItem + ' ' + cl.header__informationItem_textLeft}>
                    <div>
                        <div>8 (9**) ***-**-**</div>
                        <div>8 (9**) ***-**-**</div>
                    </div>
                    <div>
                        <div>8 (800) ***-**-**</div>
                        <div className={cl.header__textRed}>Бесплатно</div>
                    </div>
                </div>
            </div>
        </header>
    )
}