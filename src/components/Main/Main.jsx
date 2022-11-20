import Demo from "./Demo/Demo"
import cl from "./Main.module.css"
import Presentation from "./Presentation/Presentation"
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import Catalog from "./Catalog/Catalog"

export default function Main() {

    const [isModileVersion, setIsModileVersion] = useState(false)

    const demoPorduct = useSelector(state => state.information.demoPorduct)
    const additInform = useSelector(state => state.information.additInform)

    useEffect(() => {

        widthHandler()

        window.addEventListener('resize', widthHandler)
        return function () {
            window.removeEventListener('resize', widthHandler)
        }
    }, [])

    const widthHandler = (e) => {
        if (window.outerWidth < 799) {
            setIsModileVersion(true)
        } else {
            setIsModileVersion(false)
        }
    }


    return (
        <main className={cl.main}>
            <article>
                <Catalog />

                {/* <Presentation />
                <Demo isModileVersion={isModileVersion} data={demoPorduct} />
                <Demo isModileVersion={isModileVersion} data={additInform} title="Информация" /> */}
            </article>
        </main>
    )
}