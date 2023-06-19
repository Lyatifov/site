import cl from "./ConstPopUp.module.css";
import { useDispatch } from "react-redux";
import { toggleIsActiveModal } from "../../../store/statesSlice";

export default function ConstPopUp() {
    const dispatch = useDispatch();

    function Active() {
        dispatch(toggleIsActiveModal());
    }

    return (
        <div className={cl._body}>
            <div onClick={() => Active()} className={cl._button}>
                <div className={cl._text}>
                    <span>
                        Заказать
                        <br />
                        звонок
                    </span>
                </div>
            </div>
        </div>
    );
}
