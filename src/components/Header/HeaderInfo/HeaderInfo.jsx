import logo from "../../../img/logo.png"
// import icon_1 from "../../../img/icon/header/icon_1.png"
// import icon_2 from "../../../img/icon/header/icon_2.png"
// import icon_3 from "../../../img/icon/header/icon_3.png"
import cl from "./HeaderInfo.module.css"
import { useSelector } from "react-redux"

export default function HeaderInfo() {

    const mainInfo = useSelector(state => state.information.mainInfo)

    return (
        <section className={cl.header}>
            <div className={cl.header__information}>
                <div className={cl.header__informationItem + ' ' + cl.header__informationItem_spaceAround}>
                    {
                        mainInfo.workingHours.icon.map(icon =>
                            <div> <img src={icon} /> </div>
                        )
                    }
                </div>
                <div className={cl.header__informationItem + ' ' + cl.header__informationItem_textLeft}>
                    <div>
                        {
                            mainInfo.workingHours.list.map(text =>
                                <div>{text}</div>
                            )
                        }
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
                    {
                        mainInfo.phone.title.map(text =>
                            <div>{text}</div>
                        )
                    }
                </div>
                <div className={cl.header__informationItem}>
                    {
                        mainInfo.phone.icon.map(icon =>
                            <div> <img src={icon} /> </div>
                        )
                    }
                </div>
                <div className={cl.header__informationItem + ' ' + cl.header__informationItem_textLeft}>
                    <div>
                        {
                            mainInfo.phone.list.map(text =>
                                <div>{text}</div>
                            )
                        }
                    </div>
                    <div>
                        {
                            mainInfo.extensionPhone.map(text =>
                                <div>{text}</div>
                            )
                        }
                        <div className={cl.header__textRed}>Бесплатно</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
