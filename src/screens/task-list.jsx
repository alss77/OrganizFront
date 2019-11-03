import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Task from '../components/task';
import { loadTask } from '../actions/index';
import Header from '../components/header';

class TaskList extends Component {
  UNSAFE_componentWillMount() {
    this.props.loadTask();
  }

  getRandomId() {
    const min = 1;
    const max = 1000;
    return (min + Math.floor(Math.random() * (max - min)));
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #F7F5FF; }'}</style>
        </Helmet>
        <Header />
        <div className="Add-Button">
          <Link to="/task-form">
            <Button variant="contained" color="primary">Ajouter une tâche</Button>
          </Link>
        </div>
        <div>
          {
            this.props.currentList.map((r) => (
              <Task key={r} id={r} title={r.cardName} content={r.content} author={r.author} />
            ))
          }
        </div>
        {console.log('-----------')}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currentList: store.taskListReducer.currentList,
});

const mapDispatchToProps = {
  loadTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
