import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import TaskFrom from '../components/Task/TaskForm';
import Task from '../components/Task/Task';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  socket: state.socket.socket,
  taskList: state.socket.taskList,
  users: state.socket.users,
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
        {
          taskList.map((task) => (
            <Task key={task} content={task.content} />
          ))
        }
      </div>
    </div>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.oneOfType([PropTypes.array]),
  user: PropTypes.oneOfType([PropTypes.object]),
};

TaskList.defaultProps = {
  taskList: [],
  user: null,
};

export default connect(mapStateToProps, {})(TaskList);
