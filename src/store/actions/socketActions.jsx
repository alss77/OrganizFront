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
  LOAD_GROUP,
  LOAD_ERROR,
  CHANGE_LOAD,
  LOGOUT_SUCCESS,
  INIT_ID,
  DELETE_TASK,
} from './types';

export const initSocket = () => (dispatch) => {
  const socket = io(':4000');
  dispatch({
    type: INIT_SOCKET,
    payload: socket,
  });
};

export const loadingtoggle = () => (dispatch) => {
  dispatch({
    type: CHANGE_LOAD,
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

export const loadgroup = (token) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      authorization: `bearer ${token}`,
    },
  };
  axios.get('http://localhost:4000/user/me', config)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: LOAD_GROUP,
        payload: res.data.teams,
      });
    })
    .catch((/* err */) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOAD_ERROR,
      });
    });
};

export const initId = (groupList, name) => (dispatch) => {
  dispatch({
    type: INIT_ID,
    payload: groupList.find((elm) => elm.name === name).id,
  });
};
export const initTask = (name, groupList, socket) => (dispatch) => {
  const tab = groupList.find((elm) => elm.name === name);
  console.log('id: ', tab.id.toString());

  const config = {
    headers: {
      authorization: (tab.id).toString(),
    },
  };

  axios('http://localhost:4000/user/team', config)
    .then((res) => {
      socket.emit('joinRoom', (tab.id).toString());
      dispatch({
        type: INIT_TASK,
        payload: res.data,
      });
    })
    .catch(() => {
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
  console.log('body(adduser): ', body);
  socket.emit('addUserToTeam', body);
  dispatch({
    type: ADD_USER_TEAM,
  });
};

export const createTask = (task, socket) => (dispatch) => {
  socket.emit('createTask', task);
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

export const deleteTask = (idtask, socket) => (dispatch) => {
  socket.emit('deleteTask', { id: idtask });
  dispatch({
    type: DELETE_TASK,
    payload: idtask,
  });
};

export const deleteTeam = (idteam, socket) => (dispatch) => {
  socket.emit('deleteTeam', { id: idteam });
  dispatch({
    type: DELETE_TASK,
    payload: idteam,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
