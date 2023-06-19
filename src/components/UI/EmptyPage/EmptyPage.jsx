import cl from "./EmptyPage.module.css";

export default function EmptyPage(payload) {
    return (
        <div className={cl._body}>
            <h1>{payload ? payload.children : ""}</h1>
        </div>
    );
}
