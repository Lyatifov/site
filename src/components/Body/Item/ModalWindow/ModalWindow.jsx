import { useSelector, useDispatch } from "react-redux"
import { toggleIsActiveModal } from "../../../../store/statesSlice"
import cl from "./ModalWindow.module.css"

export default function ModalWindow() {

    const isActiveModal = useSelector(state => state.states.isActiveModal)
    const mainInfo = useSelector(state => state.information.mainInfo)

    const dispatch = useDispatch()

    function Active() {
        dispatch(toggleIsActiveModal())
    }

    return (
        <>
            <div
                onClick={() => Active()}
                className={isActiveModal ? cl.__background_active : cl.__background}></div>
            <div
                onClick={(e) => e.stopPropagation()}
                className={isActiveModal ? cl.__window_active : cl.__window}>
                <div>
                    <p>
                        Вы можете позвонить нам по следующим номерам:
                    </p>
                    {
                        mainInfo.phone.list.map((item, index) =>
                            <div key={index}>{item}</div>
                        )
                    }
                </div>
                <div>
                    <p>или</p>
                </div>
                <div className={cl.__inputWrapper}>
                    <p> Оставить свой номер/почту и наш менедже с Вами свяжиться. </p>
                    <input type="text" placeholder="Ваш номер телефона" />
                    <input type="text" placeholder="Ваш адрес электронной почты" />
                    <input type="text" placeholder="Ваши комментарии" />
                    <button onClick={() => Active()}>Отправить</button>
                </div>
            </div>
        </>
    )
}
