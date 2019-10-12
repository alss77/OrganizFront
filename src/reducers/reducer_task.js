import { SET_TASK } from '../actions'

const initialState = {
    taskList : []
}

export default function(oldTaskList = initialState, action){
    switch(action.type){
        case SET_TASK :
            return {
                ...oldTaskList,
                taskList : [action.payload,...oldTaskList.taskList]
            };
            default:
                return oldTaskList
    }
}