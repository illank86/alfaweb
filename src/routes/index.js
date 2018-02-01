import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';

import AllStores from '../components/allstores';
import AddSchedule from '../components/addschedule';


export default () => (
    <BrowserRouter>
        <Switch>            
            <Route path='/' exact render={props => <AllStores {...props} />} />
            <Route path='/add-schedule/:_id/:_name/:_topic+' render={props => <AddSchedule {...props} />} />
        </Switch>
    </BrowserRouter>
);