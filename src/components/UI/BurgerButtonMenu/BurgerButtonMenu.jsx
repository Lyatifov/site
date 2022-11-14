import cl from "./BurgerButtonMenu.module.css"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { toggleIsActiveMiniMenu } from "../../../store/statesSlice"


export default function BurgerButtonMenu({ className }) {

    const dispatch = useDispatch()
    const isActive = useSelector(state => state.states.isActiveMiniMenu)
    console.log(isActive);


    function Active() {
        dispatch(toggleIsActiveMiniMenu())
    }

    return (
        <div className={isActive ?
            cl.BurgerButtonMenu + ' ' + cl.BurgerButtonMenu_active + ' ' + className
            : cl.BurgerButtonMenu + ' ' + className
        }
            onClick={() => Active()}>
            <div className={cl.BurgerButtonMenu__item1}></div>
            <div className={cl.BurgerButtonMenu__item2}></div>
            <div className={cl.BurgerButtonMenu__item3}></div>
        </div >
    )
}
