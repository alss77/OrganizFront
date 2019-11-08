import {
  ADD_TASK, UPDATE_TASK, DELETE_TASK, INIT_SOCKET, INIT_GROUPS, NO_GROUPS, CREATE_GROUP, GET_USERS,
  GET_USERS_FAIL,
} from '../actions/types';

const initialState = {
  socket: null,
  taskList: [],
  groupList: [],
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case INIT_GROUPS:
      return {
        ...state,
        groupList: action.payload,
      };
    case CREATE_GROUP:
      return {
        ...state,
        groupList: [
          ...state.groupList,
          action.payload,
        ],
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_TASK:
    case UPDATE_TASK:
    case DELETE_TASK:
      return {
        taskList: action.payload,
      };
    case GET_USERS_FAIL:
    case NO_GROUPS:
    default:
      return state;
  }
}
