import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import { Typography } from '@material-ui/core';
import TaskFrom from '../components/Task/TaskForm';
import Task from '../components/Task/Task';
import UserForm from '../components/Task/UserForm';

const mapStateToProps = (state) => ({
  taskList: state.socket.taskList,
});

function TaskList(props) {
  const { taskList } = props;

  return (
    <div>
      <div>
        <h1>TaskList</h1>
      </div>
      <div>
        <TaskFrom />
      </div>
      <div>
        <UserForm />
      </div>
      <div>
        {
          (Object.keys(taskList).includes('task')) ? (
            taskList.task.map((task) => (
              <Task key={task.cardName} taskcontent={task.content} tasktitle={task.cardName} />
            ))
          ) : (
              <Typography>Pas de tasks pour le moment</Typography>
            )
        }
      </div>
    </div>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.oneOfType([PropTypes.object]),
};

TaskList.defaultProps = {
  taskList: null,
};

export default connect(mapStateToProps)(TaskList);
