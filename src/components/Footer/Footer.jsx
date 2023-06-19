import FooterNav from "./FooterNav/FooterNav";
import cl from "./Footer.module.css";
import logo from "./../../img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__hat}>
                <Link to="/">
                    <div className={cl.footer__logo}>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>

                <div className={cl.footer__nameCo}>
                    © ООО "Мебельная компания "Лером" 2021
                </div>
            </div>

            <FooterNav />
        </footer>
    );
}
