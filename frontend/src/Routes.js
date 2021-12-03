import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import MyStore from "./pages/MyStore";
import { useSelector } from "react-redux";
import Search from "./pages/Search";

const Routes = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <Router>            
            <Switch>
                <Route path="/register" component={Cadastro}/>
            </Switch>
            <Switch>
                <Route path="/login" component={Login}/>
            </Switch> 
            {isLoggedIn && <Switch>
                <Route path="/mystore" component={MyStore}/>
            </Switch>}
            {isLoggedIn && <Switch>
                    <Route path="/search" component={Search}/>
                </Switch>}
            <Route path='*'>
                <Redirect to='/login'/>
            </Route>
        </Router>
    )
}

export default Routes