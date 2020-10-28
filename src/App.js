import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./assets/css/main.css";
import "./assets/css/layout.css";


import Layout from "./components/Layout";
import Ventas from "./page/Ventas";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Ventas} />
                    <Route exact path="/ventas" component={Ventas} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
