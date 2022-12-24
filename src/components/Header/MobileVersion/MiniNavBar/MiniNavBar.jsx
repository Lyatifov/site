import cl from "./MiniNavBar.module.css"
import icon from "./../../../../img/icon/nav/icon_alt.png"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateSearchInput } from "../../../../store/statesSlice"

export default function MiniNavBar() {
    const input = useSelector(state => state.states.searchInput)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function enterPressed(e) {
        if (e.key === "Enter") {
            navigate(`/catalog/${input}`)
        }
    }
    return (
        <nav className={cl.nav}>
            <div className={cl.nav__itemWrapper}>
                <div className={cl.nav__item}>
                    <Link to='/catalog'>Каталог</Link>
                </div>
            </div>
            <div className={cl.nav__itemWrapper + ' ' + cl.nav_backBlue}>
                <div className={cl.nav__item}>
                    <input
                        className={cl.nav__search}
                        placeholder="Поиск по сайту..."
                        type="text"
                        value={input}
                        onChange={e => dispatch(updateSearchInput(e.target.value))}
                        onKeyUp={enterPressed.bind(this)} />
                    <img className={cl.nav__icon} src={icon} onClick={() => navigate(`/catalog/${input}`)} />
                </div>
            </div>
        </nav>
    )
}
