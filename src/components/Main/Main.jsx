import Demo from "./Demo/Demo"
import cl from "./Main.module.css"
import Presentation from "./Presentation/Presentation"

export default function Main() {

    return (
        <main className={cl.main}>
            <article>
                <Presentation />
                <Demo />



            </article>
        </main>
    )
}