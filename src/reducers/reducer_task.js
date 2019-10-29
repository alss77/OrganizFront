import { LOAD_TASK } from '../actions'

const initialState = {
    currentList : []
}

export default function(oldTaskList = initialState, action){
    switch(action.type){
        case LOAD_TASK :
            return {
                currentList : action.payload
            };
            default:
                return oldTaskList
    }
}