import { Link, Outlet } from "react-router";
import { Navigation } from "~/Navigation";

export default function Page() {
    return <div>
        <header>Account Layout</header>
        <div style={{ padding: 12 }}>
            <hr />
            <Outlet />
            <hr />
        </div>
        <Navigation />
    </div>
}
