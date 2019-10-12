export const SET_TASK = "SET_TASK";

export default function addTask(){
    return function(dispatch){
        dispatch({type : SET_TASK, payload : getRandomId()})
    }
}

function getRandomId() {
    return (Math.floor(Math.random() * 1000))
}