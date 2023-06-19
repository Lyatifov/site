import cl from "./Button.module.css";

export default function Button(payload) {
    return (
        <button
            {...payload}
            className={payload.className ? payload.className : cl.button}
        >
            {payload.children}
        </button>
    );
}
