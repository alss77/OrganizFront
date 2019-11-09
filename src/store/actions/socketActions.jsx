import io from 'socket.io-client';
import axios from 'axios';
import {
  ADD_TASK,
  ADD_USER_TEAM,
  ADD_USER_TASK,
  CREATE_GROUP,
  CREATE_GROUP_FAIL,
  INIT_SOCKET,
  RECEIVE_TASK,
  INIT_GROUPS,
  INIT_TASK,
  NO_GROUPS,
  CREATE_TASK,
  INIT_TASK_FAIL,
} from './types';

export const initSocket = () => (dispatch) => {
  const socket = io(':4000');
  dispatch({
    type: INIT_SOCKET,
    payload: socket,
  });
};

export const initGroup = (user) => (dispatch) => {
  if (Object.keys(user).includes('teams')) {
    dispatch({
      type: INIT_GROUPS,
      payload: user.teams,
    });
  } else {
    dispatch({
      type: NO_GROUPS,
    });
  }
};

export const initTask = (name, token) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      authorization: `bearer ${token}`,
    },
  };
  console.log('config: ', config);
  axios.get('http://localhost:4000/user/me', config)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: INIT_TASK,
        payload: res.data.teams.find((elm) => elm.name === name),
      });
    })
    .catch((/* err */) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: INIT_TASK_FAIL,
      });
    });
};

export const createGroup = (group, socket) => (dispatch) => {
  if (group.name.length > 3) {
    socket.emit('createTeam', group);
    dispatch({
      type: CREATE_GROUP,
      payload: group,
    });
  } else {
    dispatch({
      type: CREATE_GROUP_FAIL,
    });
  }
};

export const retrieveTask = (group, socket) => (dispatch) => {
  socket.on(group, (task) => {
    dispatch({
      payload: task,
      type: RECEIVE_TASK,
    });
  });
};

export const addUserTeam = (teamID, user, socket) => (dispatch) => {
  const body = { teamId: teamID, userId: user };
  socket.emit('addUserToTeam', body);
  dispatch({
    type: ADD_USER_TEAM,
  });
};

export const createTask = (task, socket) => (dispatch) => {
  socket.on('joinRoom', task.team.id);
  socket.to(task.team.id).emit('createTask', task);
  dispatch({
    type: CREATE_TASK,
    payload: task,
  });
};

export const addTaskTeam = (task, socket) => (dispatch) => {
  socket.on(task.team.id, () => {
    socket.emit('addTaskToTeam', task);
  });
  dispatch({
    type: ADD_TASK,
    payload: task,
  });
};

export const addUserTask = (team, socket) => (dispatch) => {
  socket.emit('addUserToTask', team);
  dispatch({
    type: ADD_USER_TASK,
  });
};
