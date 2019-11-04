import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Task from '../components/task';
import { loadTask } from '../actions/index';
import Header from '../components/header';


function TaskList(props) {
  useEffect(() => {
    props.loadTask();
  });

  { /* const getRandomId = () => {
    const min = 1;
    const max = 1000;
    return (min + Math.floor(Math.random() * (max - min)));
  }; */ }

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
            props.currentList.map((r) => (
              <Task key={r} id={r} title={r.cardName} content={r.content} author={r.author} />
            ))
          }
      </div>
      {console.log('-----------')}
    </div>
  );
}

TaskList.propTypes = {
  currentList: PropTypes.node,
  loadTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  currentList: [],
};

const mapStateToProps = (store) => ({
  currentList: store.taskListReducer.currentList,
});

export default connect(mapStateToProps, { loadTask })(TaskList);
