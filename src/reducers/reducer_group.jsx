import { LOAD_GROUP } from '../actions';

const initialState = {
  groupList: [],
};

export default function (oldGroupList = initialState, action) {
  switch (action.type) {
    case LOAD_GROUP:
      return {
        groupList: action.payload,
      };
    default:
      return oldGroupList;
  }
}
