import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { newRequest } from "../../../store/requestSlice"
import { toggleIsActiveModal, toggleIsisActivePopUp } from "../../../store/statesSlice"
import { EmailValidator, PhoneValidator } from "../../Validator/Validator"
import PopUp from "../PopUp/PopUp"
import cl from "./ModalWindow.module.css"

export default function ModalWindow({ item }) {

    const isActiveModal = useSelector(state => state.states.isActiveModal)
    const mainInfo = useSelector(state => state.information.mainInfo)
    const isActivePopUp = useSelector(state => state.states.isActivePopUp)

    const dispatch = useDispatch()

    function Active(itemData) {
        if (itemData) {
            if (CheckValid()) {
                dispatch(newRequest(itemData))
                dispatch(toggleIsActiveModal())
            } else {
                if (!isActivePopUp) {
                    dispatch(toggleIsisActivePopUp())
                    setTimeout(() => {
                        dispatch(toggleIsisActivePopUp())
                    }, 5000)
                }
            }
        } else {
            dispatch(toggleIsActiveModal())
        }
    }


    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: ''
    })

    const [valid, setValid] = useState({
        phone: true,
        email: true
    })

    function CheckValid() {
        setValid({
            phone: PhoneValidator(data.phone),
            email: EmailValidator(data.email)
        })

        return PhoneValidator(data.phone) || EmailValidator(data.email)
    }

    useEffect(() => {
        if (item) {
            setData({
                ...data,
                comments: `Меня интересует ${item[0].title}.\n`
            })
        }
    }, [])

    return (
        <>
            {
                isActiveModal ?
                    <>
                        <div
                            onClick={() => Active()}
                            className={cl.__background_active}>
                        </div>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={cl.__window_active}>
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
                                <input className={cl.__input} type="text" placeholder="Ваше имя" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
                                <input className={!valid.phone ? cl.__input_invalid : cl.__input} type="text" placeholder="Ваш номер телефона" value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} />
                                <input className={!valid.email ? cl.__input_invalid : cl.__input} type="text" placeholder="Ваш адрес электронной почты" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
                                <textarea className={cl.__commentBox} type="text" placeholder="Ваши комментарии" value={data.comments} onChange={e => setData({ ...data, comments: e.target.value })} />
                                <button onClick={() => Active(data)}>Отправить</button>
                            </div>
                        </div>
                        <PopUp text="Чтобы с Вами связаться нам необходимы Ваши контактнные данных. Нам подойдет Ваш номер телефона или адрес электронной почты."/>
                    </> :
                    <>
                    </>
            }
        </>
    )
}
