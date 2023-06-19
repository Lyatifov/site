import { Link } from "react-router-dom";
import AutoScroll from "../../../../../core/services/autoScroll/autoScroll";
import cl from "./AsideBar.module.css";

export default function AsideBar({ data }) {
    return (
        <aside>
            <ul className={cl.aside}>
                {data.map((item, index) => (
                    <li
                        key={item.id}
                        className={cl.aside__link + " " + cl.aside_border}
                    >
                        <Link to={item.to} onClick={() => AutoScroll()}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
