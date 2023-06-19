import cl from "./InfoItem.module.css";

export default function InfoItem({ id, text, isSelect }) {
    return (
        <div className={cl.info}>
            <div
                className={
                    isSelect === id
                        ? cl.info__textArea_selected
                        : cl.info__textArea
                }
            >
                {text}
            </div>
        </div>
    );
}
