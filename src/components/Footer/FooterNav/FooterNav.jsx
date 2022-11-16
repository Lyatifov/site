import cl from "./FooterNav.module.css"
import { useSelector } from "react-redux"
import Horizontal from "./Navs/Horizontal/Horizontal";
import AsideBar from "./Navs/Aside/AsideBar";

export default function FooterNav() {

    const footerNavHorizontal = useSelector(state => state.information.footerNavHorizontal)
    const footerNavAside = useSelector(state => state.information.footerNavAside)

    return (
        <nav className={cl.footer}>
            <Horizontal data={footerNavHorizontal} />
            <AsideBar data={footerNavAside} />
        </nav>
    );
}
