import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { newRequest } from "../../../../store/requestSlice"
import { toggleIsActiveModal } from "../../../../store/statesSlice"
import cl from "./ModalWindow.module.css"

export default function ModalWindow() {

    const isActiveModal = useSelector(state => state.states.isActiveModal)
    const mainInfo = useSelector(state => state.information.mainInfo)

    const dispatch = useDispatch()

    function Active(data) {
        dispatch(newRequest(data))
        dispatch(toggleIsActiveModal())
    }

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: ''
    })

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
                    <input type="text" placeholder="Ваше имя" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
                    <input type="text" placeholder="Ваш номер телефона" value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} />
                    <input type="text" placeholder="Ваш адрес электронной почты" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
                    <input type="text" placeholder="Ваши комментарии" value={data.comments} onChange={e => setData({ ...data, comments: e.target.value })} />
                    <button onClick={() => Active(data)}>Отправить</button>
                </div>
            </div>
        </>
    )
}
