import axios from 'axios';
import io from 'socket.io-client';
import {
  ADD_TASK,
  ADD_USER_TEAM,
  ADD_USER_TASK,
  CREATE_GROUP,
  GET_USERS,
  GET_USERS_FAIL,
  CREATE_GROUP_FAIL,
  INIT_SOCKET,
  RECEIVE_TASK,
  INIT_GROUPS,
  INIT_TASK,
  // NO_GROUPS,
} from './types';

export const initSocket = () => (dispatch) => {
  const socket = io(':4000');
  dispatch({
    type: INIT_SOCKET,
    payload: socket,
  });
};

export const initGroup = (/* user */) => (dispatch) => {
  /* console.log(user);
  if (Object.keys(user).includes('teams')) {
    dispatch({
      type: NO_GROUPS,
    });
  } else { */
  console.log('init group !!!!');
  dispatch({
    type: INIT_GROUPS,
    payload: [{ name: 'toto' }, { name: 'test' }],
  });
  /* } */
};

export const initTask = (user, name) => (dispatch) => {
  dispatch({
    type: INIT_TASK,
    payload: user.teams.find((elm) => elm.name === name),
  });
};

export const createGroup = (group, socket) => (dispatch) => {
  // console.log(group);
  if (group.name !== '') {
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

export const getUsers = () => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  axios.get('http://localhost:4000/user/all', config)
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((/* err */) => {
      // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: GET_USERS_FAIL,
      });
    });
};

export const RetrieveTask = (group, socket) => (dispatch) => {
  socket.on(group, (task) => {
    dispatch({
      payload: task,
      type: RECEIVE_TASK,
    });
  });
};

export const AddUserTeam = (team, socket) => (dispatch) => {
  socket.emit('addUserToTeam', team);
  dispatch({
    type: ADD_USER_TEAM,
  });
};

export const AddTaskTeam = (team, socket) => (dispatch) => {
  socket.emit('addTaskToTeam', team);
  dispatch({
    type: ADD_TASK,
  });
};

export const AddUserTask = (team, socket) => (dispatch) => {
  socket.emit('addUserToTask', team);
  dispatch({
    type: ADD_USER_TASK,
  });
};
