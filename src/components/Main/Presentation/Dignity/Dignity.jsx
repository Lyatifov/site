import cl from "../Presentation.module.css"

export default function Dignity({ item }) {
    return (
        <div className={cl.presentation__dignity}>
            <div className={cl.presentation__icon}>
                <img src={item.icon} alt="&#955;" />
            </div>
            <div className={cl.presentation__wrappertextDignity}>
                <div className={cl.presentation__textDignity + ' ' + cl.presentation_600}>
                    <div>
                        {item.text1}
                    </div>
                    <div className={cl.presentation__textDetail}>
                        {item.text1_detail}
                    </div>
                </div>
                <div className={cl.presentation__textDignity + ' ' + cl.presentation_200}>
                    {item.text2}
                </div>
            </div>
        </div>
    )
}