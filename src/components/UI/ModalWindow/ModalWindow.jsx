import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newRequest } from "../../../store/requestSlice";
import {
    toggleIsActiveModal,
    toggleIsisActivePopUp,
    addModalData,
} from "../../../store/statesSlice";
import {
    EmailValidator,
    PhoneValidator,
} from "../../../core/services/validator/validator";
import cl from "./ModalWindow.module.css";

export default function ModalWindow() {
    const isActiveModal = useSelector((state) => state.states.isActiveModal);
    const modalData = useSelector((state) => state.states.modalData);
    const modalProps = useSelector((state) => state.states.modalProps);
    const mainInfo = useSelector((state) => state.information.mainInfo);
    const isActivePopUp = useSelector((state) => state.states.isActivePopUp);
    const dispatch = useDispatch();
    const [valid, setValid] = useState({
        phone: true,
        email: true,
    });

    function Active(itemData) {
        if (itemData) {
            if (CheckValid()) {
                dispatch(newRequest(itemData));
                dispatch(toggleIsActiveModal());
            } else {
                if (!isActivePopUp) {
                    dispatch(toggleIsisActivePopUp());
                    setTimeout(() => {
                        dispatch(toggleIsisActivePopUp());
                    }, 5000);
                }
            }
        } else {
            dispatch(toggleIsActiveModal());
        }
    }

    function CheckValid() {
        setValid({
            phone: PhoneValidator(modalData.phone),
            email: EmailValidator(modalData.email),
        });
        return (
            PhoneValidator(modalData.phone) || EmailValidator(modalData.email)
        );
    }

    useEffect(() => {
        if (modalProps[0]) {
            dispatch(
                addModalData({
                    comments: `Меня интересует ${modalProps[0].title}.\n`,
                })
            );
        }
    }, [modalProps]);

    return (
        <>
            {isActiveModal ? (
                <>
                    <div
                        onClick={() => Active()}
                        className={cl.__background_active}
                    ></div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={cl.__window_active}
                    >
                        <div className={cl._closeWrapper}>
                            <div
                                className={cl._closeButton}
                                onClick={() => Active()}
                            >
                                <div className={cl._icon}>
                                    <div className={cl._close_1}></div>
                                    <div className={cl._close_2}></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Вы можете позвонить нам по следующим номерам:</p>
                            {mainInfo.phone.list.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))}
                        </div>
                        <div>
                            <p>или</p>
                        </div>
                        <div className={cl.__inputWrapper}>
                            <p>
                                {" "}
                                Оставить свой номер/почту и наш менедже с Вами
                                свяжиться.{" "}
                            </p>
                            <input
                                className={cl.__input}
                                type="text"
                                placeholder="Ваше имя"
                                value={modalData.name}
                                onChange={(e) =>
                                    dispatch(
                                        addModalData({ name: e.target.value })
                                    )
                                }
                            />
                            <input
                                className={
                                    !valid.phone
                                        ? cl.__input_invalid
                                        : cl.__input
                                }
                                type="text"
                                placeholder="Ваш номер телефона"
                                value={modalData.phone}
                                onChange={(e) =>
                                    dispatch(
                                        addModalData({ phone: e.target.value })
                                    )
                                }
                            />
                            <input
                                className={
                                    !valid.email
                                        ? cl.__input_invalid
                                        : cl.__input
                                }
                                type="text"
                                placeholder="Ваш адрес электронной почты"
                                value={modalData.email}
                                onChange={(e) =>
                                    dispatch(
                                        addModalData({ email: e.target.value })
                                    )
                                }
                            />
                            <textarea
                                className={cl.__commentBox}
                                type="text"
                                placeholder="Ваши комментарии"
                                value={modalData.comments}
                                onChange={(e) =>
                                    dispatch(
                                        addModalData({
                                            comments: e.target.value,
                                        })
                                    )
                                }
                            />
                            <button onClick={() => Active(modalData)}>
                                Отправить
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
}
