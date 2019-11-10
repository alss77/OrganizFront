import { combineReducers } from 'redux';
import ReducerTaskList from './reducer_task';
import ReducerGroupList from './reducer_group';
import ReducerLang from './reducer_lang';

const rootReducer = combineReducers({
  taskListReducer: ReducerTaskList,
  groupListReducer: ReducerGroupList,
  langReducer: ReducerLang,
});

export default rootReducer;
