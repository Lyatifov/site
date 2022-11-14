import icon_1 from "../../../img/icon/header/icon_1.png"
import BurgerButtonMenu from "../../UI/BurgerButtonMenu/BurgerButtonMenu"
import Logo from "../../UI/Logo/Logo"
import cl from "./Hat.module.css"
import Menu from "./Menu/Menu"
import MiniNavBar from "./MiniNavBar/MiniNavBar"

export default function Hat() {
    return (
        <div className={cl.hat}>

            <div className={cl.hat__text}>
                <div>
                    <img src={icon_1} alt="&#955;" />
                </div>
                <div>
                    Наши салоны
                </div>
            </div>

            <Logo className={cl.hat__logo} />
            <BurgerButtonMenu className={cl.hat__burgerButton} />
            <Menu />
        </div>
    );
}
