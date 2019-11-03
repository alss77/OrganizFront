import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import TaskList from './screens/task-list';
import TaskForm from './screens/task-form';
import GroupForm from './screens/group-form';
import GroupList from './screens/group-list';

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/task-list" exact component={TaskList} />
      <Route path="/group-list" exact component={GroupList} />
      <Route path="/task-form" exact component={TaskForm} />
      <Route path="/group-form" exact component={GroupForm} />
    </Router>
  );
}

export default Routes;
