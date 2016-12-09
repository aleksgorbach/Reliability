import { Router, Route, IndexRoute, hashHistory } from "react-router";
import React from "react";

import App from "./../containers/app";
import Home from "./../containers/home";
import Reliability from "./../containers/reliability";
import Electricity from "./../containers/electric";

export const createRoutes = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="reliability" component={Reliability} />
                <Route path="electricity" component={Electricity} />
            </Route>
        </Router>
    )
} 
