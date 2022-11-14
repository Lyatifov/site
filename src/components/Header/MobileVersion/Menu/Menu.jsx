import icon_1 from "../../../../img/icon/header/icon_1.png"
import icon_2 from "../../../../img/icon/header/icon_2.png"
import icon_3 from "../../../../img/icon/header/icon_3.png"
import cl from "./Menu.module.css"
import { useSelector } from "react-redux"


export default function Menu() {

    const isActive = useSelector(state => state.states.isActiveMiniMenu)

    return (
        <div className={isActive ? cl.menu_active + ' ' + cl.menu : cl.menu}>
            <div className={cl.menu__information}>
                <div className={cl.menu__informationItem}>
                    <div>
                        <img src={icon_1} alt="&#955;" />
                    </div>
                    <div className={cl.menu__informationText}>
                        <div>Пн-Пт с 10:00 до 20:00</div>
                        <div>Сб-Вс с 10:00 до 19:00</div>
                    </div>
                </div>

                <div className={cl.menu__informationItem}>
                    <div >
                        <div><img src={icon_2} alt="&#955;" /></div>
                    </div>
                    <div className={cl.menu__informationText}>
                        Наши салоны
                    </div>
                </div>
            </div>

            <nav className={cl.menu__nav}>
                <div className={cl.menu__navItem}>О нас</div>
                <div className={cl.menu__navItem}>3D - моделирование</div>
                <div className={cl.menu__navItem}>Покупателю</div>
                <div className={cl.menu__navItem}>Доставка и оплата</div>
            </nav>

            <div >

                <div >
                    <div className={cl.menu__contacts}>
                        <div className={cl.menu_greyText}>Отдел продаж:</div>
                        <div className={cl.menu__phone}>
                            <div className={cl.menu__phoneIcon}>
                                <img src={icon_3} alt="&#955;" />
                            </div>
                            <div>
                                8 (9**) ***-**-**
                            </div>
                        </div>
                        <div className={cl.menu__phone}>
                            <div className={cl.menu__phoneIcon}>
                                <img src={icon_3} alt="&#955;" />
                            </div>
                            <div>
                                8 (9**) ***-**-**
                            </div>
                        </div>
                    </div>
                    <div className={cl.menu__contacts}>
                        <div className={cl.menu_greyText}>Звонки по России:</div>
                        <div className={cl.menu__phone}>
                            <div className={cl.menu__phoneIcon}>
                                <img src={icon_3} alt="&#955;" />
                            </div>
                            <div>
                                8 (800) ***-**-**
                            </div>
                        </div>
                        <div className={cl.menu_redText}>Бесплатно</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
