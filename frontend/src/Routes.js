import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/cadastro" component={Cadastro}/>
            </Switch>
            <Switch>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    )
}

export default Routes