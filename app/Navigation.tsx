import { Link } from "react-router";

export function Navigation() {
    return <ul>
        <li>
            <Link to="/account">Account</Link>
        </li>
        <li>
            <Link to="/account/demo">Account / Demo</Link>
        </li>
        <li>
            <Link to="/admin">Admin</Link>
        </li>
        <li>
            <Link to="/admin/demo">Admin / Demo</Link>
        </li>
        <li>
            <Link to="/">Home</Link>
        </li>
    </ul>
}
