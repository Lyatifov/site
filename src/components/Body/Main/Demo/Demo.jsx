import Description from "./Description/Description";
import imgOtherInformation from "../../../../img/other.png";
import cl from "./Demo.module.css";

export default function Demo({ isModileVersion, data, title }) {
    const evenItem = {
        id: Date().getUTCMilliseconds,
        title: "Прочяя информация",
        description: "",
        availability: "",
        price: "",
        img: imgOtherInformation,
    };

    return (
        <section>
            {title ? (
                <div className={cl.demo__title}>{title}</div>
            ) : (
                <div></div>
            )}

            <div className={cl.demo}>
                {data.map((item, index) => {
                    if (isModileVersion) {
                        if ((index + 1) % 2 === 0) {
                            return (
                                <Description
                                    key={item.id}
                                    item={item}
                                    reverse={true}
                                />
                            );
                        }
                        return <Description key={item.id} item={item} />;
                    } else {
                        if ((index + 1) % 3 === 0 || (index + 1) % 4 === 0) {
                            return (
                                <Description
                                    key={item.id}
                                    item={item}
                                    reverse={true}
                                />
                            );
                        }
                        return <Description key={item.id} item={item} />;
                    }
                })}

                {data.length % 2 && !isModileVersion ? (
                    !(data.length % 3) || !(data.length % 4) ? (
                        <Description
                            key={evenItem.id}
                            item={evenItem}
                            reverse={true}
                        />
                    ) : (
                        <Description key={evenItem.id} item={evenItem} />
                    )
                ) : (
                    <div></div>
                )}
            </div>
        </section>
    );
}
