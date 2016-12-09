import React from "react";
import "./../../styles/app.scss";
import "bulma";

import Navigation from "./../../components/Navigation";
import routes from "./../../routes";

const app = (props) => {
    return (
        <div>
            <Navigation activePage={props.location.pathname}/>
            <main className="container">
                {props.children}
            </main>
        </div>
    )
}

export default app;