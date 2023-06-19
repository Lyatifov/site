import cl from "./NavBar.module.css";
import icon from "../../../img/icon/nav/icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchInput } from "../../../store/statesSlice";

export default function NavBar() {
    const data = [
        {
            title: "Каталог",
            to: "/catalog",
            className: cl.nav__item,
            extraClass: cl.nav__item_redText,
        },
        {
            title: "О нас",
            to: "/info",
            className: cl.nav__item,
            extraClass: "",
        },
        {
            title: "3D - моделирование",
            to: "/about",
            className: cl.nav__item,
            extraClass: "",
        },
        {
            title: "Покупателю",
            to: "/about",
            className: cl.nav__item,
            extraClass: "",
        },
        {
            title: "Доставка и оплата",
            to: "/about",
            className: cl.nav__item,
            extraClass: "",
        },
    ];
    const input = useSelector((state) => state.states.searchInput);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function enterPressed(e) {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            navigate(`/catalog/${input}`);
        }
    }
    return (
        <nav className={cl.nav}>
            <ul className={cl.wrapper}>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className={`${item.className} ${item.extraClass}`}
                    >
                        <Link to={item.to}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className={cl.nav__inputWrapper}>
                <div className={cl.nav__inputDecoration}>
                    <input
                        className={cl.nav__input}
                        type="text"
                        placeholder="Поиск по сайту..."
                        value={input}
                        onChange={(e) =>
                            dispatch(updateSearchInput(e.target.value))
                        }
                        onKeyUp={enterPressed.bind(this)}
                    />
                    <div onClick={() => navigate(`/catalog/${input}`)}>
                        <img src={icon} alt="&#955;" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
