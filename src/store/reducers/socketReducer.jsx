import {
  ADD_TASK, UPDATE_TASK, DELETE_TASK, INIT_SOCKET, INIT_GROUPS, NO_GROUPS, CREATE_GROUP,
  INIT_TASK, CREATE_TASK, INIT_TASK_FAIL, LOAD_GROUP, LOGOUT_SUCCESS, INIT_ID,
  RECEIVE_GROUP,
} from '../actions/types';

const initialState = {
  socket: null,
  taskList: null,
  groupList: [],
  id_task: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case RECEIVE_GROUP:
      return {
        ...state,
        groupList: [
          ...state.groupList,
          action.payload,
        ],
      };
    case LOAD_GROUP:
    case INIT_GROUPS:
      return {
        ...state,
        groupList: action.payload,
      };
    case INIT_TASK:
      return {
        ...state,
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
