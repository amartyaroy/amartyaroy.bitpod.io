import React from 'react';
import LandingPage from './landingPage';
import { Switch,Route } from 'react-router-dom';
import AboutMe from './aboutMe';
import Projects from './projects';
import Contacts from './contact';


const Main=()=>{
    return (
        <Switch>
            <Route exact  path="/"  component={ LandingPage } />
            <Route path="/aboutme" component={ AboutMe}/>
            <Route path="/projects" component={ Projects}/>
            <Route path="/contacts" component={ Contacts}/>


        </Switch>
    )
}

export default Main;