import cl from "./DiginityVersion2.module.css";

function Dignity({ item, index }) {
    return (
        <div key={index} className={cl.dignity}>
            <div className={cl.dignity__icon}>
                <img src={item.icon} alt="&#955;" />
            </div>
            <div className={cl.dignity__wrappertextDignity}>
                <div className={cl.dignity__textDignity + " " + cl.dignity_600}>
                    <div className={cl.dignity__text}>{item.text1}</div>
                    <div className={cl.dignity__textDetail}>
                        {item.text1_detail}
                    </div>
                </div>
                <div className={cl.dignity__textDignity + " " + cl.dignity_200}>
                    {item.text2}
                </div>
            </div>
        </div>
    );
}

export default function DiginityVersion2({ item }) {
    return (
        <div className={cl.dignit}>
            <div className={cl.dignit__imgWrapper}>
                <img className={cl.dignit__img} src={item.img} alt="" />
            </div>

            <div className={cl.dignit__data}>
                <div className={cl.dignit__title}>{item.title}</div>

                <div className={cl.dignit__dignityWrapper}>
                    {item.dignity.map((item, index) =>
                        Dignity({ item, index })
                    )}
                </div>

                <div className={cl.dignit__button}>{item.button}</div>
            </div>
        </div>
    );
}
