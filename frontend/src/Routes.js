import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import MyStore from "./pages/MyStore";

const Routes = () => {
    return (
        <Router>            
            <Switch>
                <Route path="/register" component={Cadastro}/>
            </Switch>
            <Switch>
                <Route path="/login" component={Login}/>
            </Switch> 
            <Switch>
                <Route path="/mystore" component={MyStore}/>
            </Switch>           
        </Router>
    )
}

export default Routes