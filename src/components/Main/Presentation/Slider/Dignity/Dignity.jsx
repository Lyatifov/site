import cl from "./Dignity.module.css"
import DiginityVersion1 from "./version/DiginityVersion1/DiginityVersion1";

export default function Dignity({ item }) {

    {
        switch (item.version) {
            case 1:
                return (
                    <DiginityVersion1 item={item} />
                )
                break;
            case 2:
                return (
                    <DiginityVersion1 item={item} />
                )
                break;
            case 3:
                return (
                    <DiginityVersion1 item={item} />
                )
                break;

            default:
                return
                break;
        }
    }

}