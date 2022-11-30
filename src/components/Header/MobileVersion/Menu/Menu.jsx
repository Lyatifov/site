import cl from "./Menu.module.css"
import { useSelector } from "react-redux"


export default function Menu() {

    const isActive = useSelector(state => state.states.isActiveMiniMenu)
    const mainInfo = useSelector(state => state.information.mainInfo)

    return (
        <div className={isActive ? cl.menu_active + ' ' + cl.menu : cl.menu}>
            <div className={cl.menu__information}>
                <div className={cl.menu__informationItem}>
                    <div>
                        <img src={mainInfo.workingHours.icon[0]} alt="&#955;" />
                    </div>
                    <div className={cl.menu__informationText}>
                        {
                            mainInfo.workingHours.list.map(text =>
                                <div>{text}</div>
                            )
                        }
                    </div>
                </div>

                <div className={cl.menu__informationItem}>
                    <div >
                        <div><img src={mainInfo.workingHours.icon[1]} alt="&#955;" /></div>
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
                        {
                            mainInfo.phone.list.map(text =>
                                <div className={cl.menu__phone}>
                                    <div className={cl.menu__phoneIcon}>
                                        <img src={mainInfo.phone.icon[0]} alt="&#955;" />
                                    </div>
                                    <div>
                                        {text}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={cl.menu__contacts}>
                        <div className={cl.menu_greyText}>Звонки по России:</div>
                        {
                            mainInfo.extensionPhone.map(text =>
                                <div className={cl.menu__phone}>
                                    <div className={cl.menu__phoneIcon}>
                                        <img src={mainInfo.phone.icon[0]} alt="&#955;" />
                                    </div>
                                    <div>
                                        {text}
                                    </div>
                                </div>
                            )
                        }
                        <div className={cl.menu_redText}>Бесплатно</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
