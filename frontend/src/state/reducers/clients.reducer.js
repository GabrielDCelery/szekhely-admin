import {
  GET_QUICK_CLIENT_LIST_REQUEST,
  GET_QUICK_CLIENT_LIST_SUCCCESS,
  GET_QUICK_CLIENT_LIST_FAIL
} from '../constants';

const initialState = {
  isAjaxRequestInProgress: false,
  hasAjaxRequestFailed: false,
  data: {
    columns: [],
    rows: []
  }
};

export default function clients(state = initialState, { type, payload }) {
  switch (type) {
    case GET_QUICK_CLIENT_LIST_REQUEST:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: true, hasAjaxRequestFailed: false }
      };

    case GET_QUICK_CLIENT_LIST_SUCCCESS:
      return {
        isAjaxRequestInProgress: false,
        hasAjaxRequestFailed: false,
        data: payload
      };

    case GET_QUICK_CLIENT_LIST_FAIL:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: false, hasAjaxRequestFailed: true }
      };

    default:
      return state;
  }
}