import { setLanguage as setLanguageI18n } from 'redux-i18n';

export function setLanguage(_language) {
  return async dispatch => {
    dispatch(setLanguageI18n(_language));
  };
}