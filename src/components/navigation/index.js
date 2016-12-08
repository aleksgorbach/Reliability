import React from "react";

import "bulma";

const nav = props => {
    return (
        <nav className="nav has-shadow">
            <div className="container">
                <div className="nav-left">
                    <a className="nav-item is-tab is-active">Главная</a>
                    <a className="nav-item is-tab">Расчёт параметров надежности</a>
                    <a className="nav-item is-tab">Электрические расчёты</a>
                </div>
            </div>
        </nav>
    )
}

export default nav;