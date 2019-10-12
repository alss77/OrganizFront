export const SET_TASK = "SET_TASK";

export default function addTask(){
    return function(dispatch){
        dispatch({type : SET_TASK, payload : getRandomId()})
    }
}

function getRandomId() {
    const min = 1
    const max = 1000
    return (min + Math.floor(Math.random() * (max - min)))
}