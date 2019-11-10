import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import { Typography } from '@material-ui/core';
import TaskFrom from '../components/Task/TaskForm';
import Task from '../components/Task/Task';
import UserForm from '../components/Task/UserForm';

const mapStateToProps = (state) => ({
  tlist: state.socket.taskList,
});

function TaskList(props) {
  const { tlist } = props;

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
        {console.log('list: ', tlist)}
        {
          (tlist.team.task.length > 0) ? (
            tlist.team.task.map((task) => (
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
  tlist: PropTypes.oneOfType([PropTypes.object]),
};

TaskList.defaultProps = {
  tlist: null,
};

export default connect(mapStateToProps)(TaskList);
