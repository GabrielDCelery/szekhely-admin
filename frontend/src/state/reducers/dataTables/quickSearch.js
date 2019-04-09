import {
  GET_QUICK_CLIENT_LIST_REQUEST,
  GET_QUICK_CLIENT_LIST_SUCCCESS,
  GET_QUICK_CLIENT_LIST_FAIL
} from '../../constants';

const initialState = {
  isAjaxRequestInProgress: false,
  hasAjaxRequestFailed: false,
  columnConfigs: [{
    field: 'clientName',
    visible: true,
    type: 'string'
  }, {
    field: 'status',
    visible: true,
    type: 'string'
  }, {
    field: 'contractExpiryTill',
    visible: true,
    type: 'date'
  }, {
    field: 'clientDetails',
    visible: true,
    type: 'url',
    value: _rowData => {
    }
  }],
  dataRows: []
};

export default function quickSearch(state = initialState, { type, payload }) {
  switch (type) {
    case GET_QUICK_CLIENT_LIST_REQUEST:
      return {
        ...state,
        ...{ isAjaxRequestInProgress: true, hasAjaxRequestFailed: false }
      };

    case GET_QUICK_CLIENT_LIST_SUCCCESS:
      return {
        ...state,
        ...{
          isAjaxRequestInProgress: false,
          hasAjaxRequestFailed: false,
          dataRows: payload
        }
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