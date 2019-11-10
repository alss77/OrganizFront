import {
  ADD_TASK, UPDATE_TASK, DELETE_TASK, INIT_SOCKET, INIT_GROUPS, NO_GROUPS, CREATE_GROUP,
  INIT_TASK, CREATE_TASK, INIT_TASK_FAIL, LOAD_GROUP, CHANGE_LOAD, LOGOUT_SUCCESS, INIT_ID,
} from '../actions/types';

const initialState = {
  socket: null,
  taskList: {},
  groupList: [],
  isLoaded: false,
  id_task: null,
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
    case INIT_ID:
      return {
        ...state,
        id_task: action.payload,
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
      };
    case CREATE_TASK:
      return {
        ...state,
        taskList: {
          ...state.taskList,
          team: {
            ...state.taskList.team,
            task: [
              ...state.taskList.team.task,
              action.payload,
            ],
          },
        },
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
    case LOGOUT_SUCCESS:
      return {
        socket: null,
        taskList: [],
        groupList: [],
        isLoaded: false,
      };
    case NO_GROUPS:
    default:
      return state;
  }
}
