import cl from "./Info.module.css";
import { useSelector } from "react-redux";

export default function Info() {
    const mainInfo = useSelector((state) => state.information.mainInfo);

    return (
        <article>
            <div className={cl.info__wrapper}>
                <div className={cl.info__textWrapper}>
                    <div>
                        <div className={cl.info__title}>Мы работаем</div>
                        <div>
                            {mainInfo.workingHours.list.map((text, index) => (
                                <div key={index} className={cl.info__text}>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className={cl.info__title}>Наши контакты</div>
                        <div>
                            {mainInfo.phone.list.map((text, index) => (
                                <div key={index} className={cl.info__text}>
                                    {text}
                                </div>
                            ))}
                            {mainInfo.extensionPhone.map((text, index) => (
                                <div key={index} className={cl.info__text}>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className={cl.info__title}>Наша почта</div>
                        <div>
                            <div className={cl.info__text}>
                                {mainInfo.email}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={cl.info__title}>Наш адрес</div>
                        <div>
                            <div className={cl.info__text}>
                                {mainInfo.address}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <iframe
                        className={cl.info__map}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A31208e706cc29fb7b153402c0ad32b4eef7df3b428c214db7c3a250f6601abc4&amp;source=constructor"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
        </article>
    );
}
