import { useEffect, useState } from "react"
import cl from "./Information.module.css"
import InfoItem from "./Item/InfoItem"
import InfoLabel from "./label/InfoLabel"


export default function InformationBar() {

    const [isSelect, setIsSelect] = useState()


    const selectHandler = (item) => {
        setIsSelect(item)
    }

    useEffect(() => {
        selectHandler(arr[0].id)
    }, [])

    const arr = [
        {
            id: 601,
            inset: {
                title: "Описание",
                for: "1"
            },
            text: "Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.",
        },
        {
            id: 602,
            inset: {
                title: "Характеристики",
                for: "2"
            },
            text: "Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Pork belly prosciutto brisket meatloaf short ribs.",
        },
        {
            id: 603,
            inset: {
                title: "Схема сборки",
                for: "3"
            },
            text: "Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Frankfurter rump porchetta ham. ",
        },
        {
            id: 604,
            inset: {
                title: "Прочее",
                for: "4"
            },
            text: "Bacon ipsum dolor sit amet beef venison beef ",
        }
    ]

    return (
        <saction>
            <div className={cl.info}>
                {
                    arr.map(item =>
                        <InfoLabel key={item.id} id={item.id} inset={item.inset} selectHandler={selectHandler} isSelect={isSelect} />
                    )

                }
                <div className={cl.info__wrapper}>
                    {
                        arr.map(item =>
                            <InfoItem key={item.id} id={item.id} text={item.text} isSelect={isSelect} />
                        )
                    }
                </div>
            </div>
        </saction>
    )
}
