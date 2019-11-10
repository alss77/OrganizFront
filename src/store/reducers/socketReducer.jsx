import {
  ADD_TASK, UPDATE_TASK, DELETE_TASK, INIT_SOCKET, INIT_GROUPS, NO_GROUPS, CREATE_GROUP,
  INIT_TASK, CREATE_TASK, INIT_TASK_FAIL, LOAD_GROUP, CHANGE_LOAD,
} from '../actions/types';

const initialState = {
  socket: null,
  taskList: [],
  groupList: [],
  isLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case LOAD_GROUP:
    case INIT_GROUPS:
      return {
        ...state,
        groupList: action.payload,
        isLoaded: true,
      };
    case INIT_TASK:
      return {
        ...state,
        isLoaded: true,
        taskList: action.payload,
      };
    case INIT_TASK_FAIL:
      return {
        ...state,
        isLoaded: true,
      };
    case CHANGE_LOAD:
      return {
        ...state,
        isLoaded: false,
      };
    case CREATE_GROUP:
      return {
        ...state,
        groupList: [
          ...state.groupList,
          action.payload,
        ],
      };
    case CREATE_TASK:
      return {
        ...state,
        taskList: [
          ...state.taskList,
          action.payload,
        ],
      };
    case ADD_TASK:
    case UPDATE_TASK:
    case DELETE_TASK:
      return {
        ...state,
        taskList: {
          ...state.taskList,
          task: [
            ...state.taskList.task,
            action.payload,
          ],
        },
      };
    case NO_GROUPS:
    default:
      return state;
  }
}
