import { CHANGE_LANG, TOTO } from './types';

export const changeLang = (event) => (dispatch) => {
  dispatch({ type: CHANGE_LANG, payload: event });
};

export const toto = () => (dispatch) => {
  dispatch({
    type: TOTO,
  });
};
