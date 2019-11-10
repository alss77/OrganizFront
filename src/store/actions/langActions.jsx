import { CHANGE_LANG } from './types';

export const changeLang = (event) => (dispatch) => {
    console.log('called');
    dispatch({ type: CHANGE_LANG, payload: event });
};
