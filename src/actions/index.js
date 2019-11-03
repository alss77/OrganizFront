import io from 'socket.io-client';

export const LOAD_TASK = 'LOAD_TASK';
export const LOAD_GROUP = 'LOAD_GROUP';

const socket = io('http://localhost:4000');
const id = 'alassane.fall@epitech.eu';

export function loadTask() {
  return function (dispatch) {
    socket.emit('taskList', id);
    socket.on('loadTask', (list) => {
      console.log(list);
      dispatch({ type: LOAD_TASK, payload: list });
    });
  };
}

export function loadGroup() {
  return function (dispatch) {
    socket.emit('groupList', id);
    socket.on('loadGroup', (list) => {
      console.log(list);
      dispatch({ type: LOAD_GROUP, payload: list });
    });
  };
}
