import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from "./App"
import TaskList from './screens/task-list'
import TaskForm from './screens/task-form'

function Routes() {
        return (
            <Router>
                <Route path="/" exact component={App}/>
                <Route path="/task-list" exact component={TaskList}/>
                <Route path="/task-form" exact component={TaskForm}/>
           </Router> 
        );
}

export default Routes;