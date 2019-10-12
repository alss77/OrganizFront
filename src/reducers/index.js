import { combineReducers } from 'redux';
import ReducerTaskList from './reducer_task'

const rootReducer = combineReducers({
    taskListReducer : ReducerTaskList
})

export default rootReducer;