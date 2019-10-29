import { combineReducers } from 'redux';
import ReducerTaskList from './reducer_task'
import ReducerGroupList from './reducer_group'

const rootReducer = combineReducers({
    taskListReducer : ReducerTaskList,
    groupListReducer : ReducerGroupList
})

export default rootReducer;