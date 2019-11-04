import axios from 'axios';
import { LOAD_GROUP, CREATE_GROUP, CREATE_GROUP_FAIL } from './types';

export const loadGroup = () => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    axios.get('', config)
        .then((res) => dispatch({
            type: LOAD_GROUP,
            payload: res.data,
        }));
};

export const createGroup = ({ groupName, groupDesc, groupAuthor }) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({
        groupName, groupDesc, groupAuthor,
    });
    axios.post('', body, config)
        .then((res) => dispatch({
            type: CREATE_GROUP,
            payload: res.data,
        }))
        .catch((/* err */) => {
            // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch({
                type: CREATE_GROUP_FAIL,
            });
        });
};
