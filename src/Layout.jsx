import {Link, Outlet } from "react-router-dom";




function layout(){

    return <>
        <nav >
            <ul className="layout-container">
                <li>
                    <Link to="/">Home</Link>
                </li>

            </ul>
        </nav>
        <Outlet/>
    </>;
}
export default layout;