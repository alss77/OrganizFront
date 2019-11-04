import { LOAD_GROUP, CREATE_GROUP, CREATE_GROUP_FAIL } from '../actions/types';

const initialState = {
    groupList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_GROUP:
        case LOAD_GROUP:
            return {
                groupList: action.payload,
            };
        case CREATE_GROUP_FAIL:
            return {
                groupList: [],
            };
        default:
            return state;
    }
}
