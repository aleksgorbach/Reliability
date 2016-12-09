import React from "react";
import ReactDom from "react-dom";

import { createRoutes } from "./routes/";

const routes = createRoutes();

ReactDom.render(
    routes,
    document.getElementById('app')
)

