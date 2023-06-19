import logo from "../../../img/logo.png";
import cl from "./HeaderInfo.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HeaderInfo() {
    const mainInfo = useSelector((state) => state.information.mainInfo);

    return (
        <section className={cl.header}>
            <div className={cl.header__information}>
                <div
                    className={
                        cl.header__informationItem +
                        " " +
                        cl.header__informationItem_spaceAround
                    }
                >
                    {mainInfo.workingHours.icon.map((icon, index) => (
                        <div key={index}>
                            {" "}
                            <img src={icon} />{" "}
                        </div>
                    ))}
                </div>
                <div
                    className={
                        cl.header__informationItem +
                        " " +
                        cl.header__informationItem_textLeft
                    }
                >
                    <div>
                        {mainInfo.workingHours.list.map((text, index) => (
                            <div key={index}>{text}</div>
                        ))}
                    </div>
                    <div className={cl.header__link}>
                        <Link to="/info">Наши салоны</Link>
                    </div>
                </div>
            </div>
            <div className={cl.header__logo}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div
                className={
                    cl.header__information +
                    " " +
                    cl.header__information_marginRight
                }
            >
                <div
                    className={
                        cl.header__informationItem +
                        " " +
                        cl.header__informationItem_textRight
                    }
                >
                    {mainInfo.phone.title.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                </div>
                <div className={cl.header__informationItem}>
                    {mainInfo.phone.icon.map((icon, index) => (
                        <div key={index}>
                            {" "}
                            <img src={icon} />{" "}
                        </div>
                    ))}
                </div>
                <div
                    className={
                        cl.header__informationItem +
                        " " +
                        cl.header__informationItem_textLeft
                    }
                >
                    <div>
                        {mainInfo.phone.list.map((text, index) => (
                            <div key={index}>{text}</div>
                        ))}
                    </div>
                    <div>
                        {mainInfo.extensionPhone.map((text, index) => (
                            <div key={index}>{text}</div>
                        ))}
                        <div className={cl.header__textRed}>Бесплатно</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
