import React from 'react';
import MyProfile from './ProfilePage';
import Contact from './ContactPage';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/my-profile" component={MyProfile} />
        <Route path="/contact-me" component={Contact} />
        <Route path="/" component={MyProfile} />
    </Switch>
)

export default Main;