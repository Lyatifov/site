import logo from "../../../img/logo.png"
import { Link } from 'react-router-dom'


export default function Logo({ className }) {
    return (
        <Link to='/'>
            <div className={className}>
                <img src={logo} alt="logo" />
            </div>
        </Link>
    )
}
