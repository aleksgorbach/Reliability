import React from "react";
import { Link } from "react-router";

import "bulma";

const routes = [
    {
        title: "Главная",
        path: "/"
    },
    {
        title: "Расчёт параметров надежности",
        path: "/reliability"
    },
    {
        title: "Электрические расчёты",
        path: "/electric"
    }
]

const Navigation = (props) => {
    const links = routes.map(route => <Link
        key={route.path}
        className={"nav-item is-tab " + (props.activePage === route.path ? "is-active" : "")}
        to={route.path}>
        {route.title}
    </Link>)
    return (
        <nav className="nav has-shadow">
            <div className="container">
                <div className="nav-left">
                    {links}
                </div>
            </div>
        </nav>
    )
}

export default Navigation;