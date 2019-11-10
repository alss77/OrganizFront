import { CHANGE_LANG } from '../actions';

const initialState = {
  lang: 'fr',
};

export default function (defaultLang = initialState, action) {
    console.log(`changement de langue ${action.payload}`);
  switch (action.type) {
    case CHANGE_LANG:
      return {
        lang: action.payload,
      };
    default:
      return defaultLang;
  }
}
