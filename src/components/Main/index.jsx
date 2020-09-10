import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Jogs from "../../pages/Jogs/";
import Info from "../../pages/Info/";
import Contact from "../../pages/Contact/";
import Login from "../../pages/Login/";
import MobileNavigation from "../../pages/MobileNavigation/";
import './styles.css';

const Main = () => {

    return (
        <main>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route path='/jogs' component={Jogs}/>
            <Route path='/info' component={Info}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/navigation' component={MobileNavigation}/>
        </Switch>
        </main>
    );
};

export default Main;