import { CHANGE_LANG } from '../actions/types';

const initialState = {
    lang: 'fr',
};

export default function (defaultLang = initialState, action) {
    switch (action.type) {
        case CHANGE_LANG:
            return {
                lang: action.payload,
            };
        default:
            return defaultLang;
    }
}
