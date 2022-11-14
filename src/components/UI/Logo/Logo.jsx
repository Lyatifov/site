import logo from "../../../img/logo.png"

export default function Logo({ className }) {
    return (
        <div className={className}>
            <img src={logo} alt="logo" />
        </div>
    )
}
