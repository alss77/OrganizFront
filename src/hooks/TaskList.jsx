import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types/prop-types';
import { Typography } from '@material-ui/core';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import TaskFrom from '../components/Task/TaskForm';
import Task from '../components/Task/Task';
import UserForm from '../components/Task/UserForm';
import fr from '../lang/fr';
import en from '../lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);
const mapStateToProps = (state) => ({
  tlist: state.socket.taskList,
});

function TaskList(props) {
  const { tlist } = props;

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #F7F5FF; }'}</style>
      </Helmet>
      <div>
        <Translate content="taskList.title" component="h1" />
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
              <Task key={task.cardName} taskid={task.id} taskcontent={task.content} tasktitle={task.cardName} />
            ))
          ) : (
              <Typography>
                <Translate content="taskList.emptyList" />
              </Typography>
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
